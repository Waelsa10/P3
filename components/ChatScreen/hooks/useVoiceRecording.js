// components/ChatScreen/hooks/useVoiceRecording.js
import { useState, useRef, useEffect } from "react";
import { addDoc, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { uploadToCloudinary } from "../../../lib/cloudinary";
import { checkIfBlocked, buildReplyData } from "../utils";
import { MESSAGE_STATUS } from "../constants";

export const useVoiceRecording = (chatId, user, recipientEmail) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Recording timer
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const startRecording = async (setSendingError) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Check for supported MIME types
      let mimeType = 'audio/webm';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'audio/webm;codecs=opus';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'audio/ogg;codecs=opus';
          if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = 'audio/mp4';
            if (!MediaRecorder.isTypeSupported(mimeType)) {
              mimeType = ''; // Let browser choose
            }
          }
        }
      }
      
      console.log('Using MIME type:', mimeType || 'default');
      
      const options = mimeType ? { mimeType } : {};
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        console.log('Data available:', event.data.size, 'bytes');
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        console.log('Recording stopped, chunks:', audioChunksRef.current.length);
        const audioBlob = new Blob(audioChunksRef.current, { 
          type: mimeType || 'audio/webm' 
        });
        
        console.log('Blob size:', audioBlob.size);
        
        // Check if blob has data
        if (audioBlob.size > 0) {
          setAudioBlob(audioBlob);
        } else {
          console.error('No audio data captured');
          setSendingError("Recording failed: No audio data captured. Please try again.");
        }
        
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.onerror = (event) => {
        console.error('MediaRecorder error:', event.error);
        setSendingError(`Recording error: ${event.error.name}`);
      };

      // Start with timeslice to ensure data is collected periodically
      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
      setSendingError("Failed to access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    setAudioBlob(null);
    setRecordingTime(0);
  };

  const sendVoiceMessage = async (replyingTo, setSendingError, setReplyingTo, scrollToBottom, isSelfChat = false) => {
    if (!audioBlob || !chatId || !user || !recipientEmail) return;

    setIsUploading(true);
    setSendingError(null);

    try {
      // Skip blocking check for self-chat
      if (!isSelfChat) {
        const isBlocked = await checkIfBlocked(user.email, recipientEmail);
        if (isBlocked) {
          setSendingError("You cannot send messages to this user. You have been blocked.");
          setIsUploading(false);
          return;
        }
      }

      // Upload to Cloudinary with progress tracking
      const voiceURL = await uploadToCloudinary(audioBlob, (progress) => {
        setUploadProgress(progress);
      });

      // Update user's last seen
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
        },
        { merge: true }
      );

      // Build message data
      const messageData = {
        timestamp: serverTimestamp(),
        message: "", // Empty message for voice
        user: user.email,
        photoURL: user.photoURL,
        voiceURL: voiceURL,
        voiceDuration: recordingTime,
        status: MESSAGE_STATUS.SENT, // Initial status is SENT (1 gray check)
      };

      // Add reply data if replying
      const replyData = buildReplyData(replyingTo);
      if (replyData) {
        messageData.replyTo = replyData;
      }

      // Send the message
      await addDoc(collection(db, "chats", chatId, "messages"), messageData);

      // Reset states
      setAudioBlob(null);
      setUploadProgress(0);
      setReplyingTo(null);
      scrollToBottom();
    } catch (error) {
      console.error("Error sending voice message:", error);
      setSendingError(`Failed to send voice message: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isRecording,
    recordingTime,
    audioBlob,
    uploadProgress,
    isUploading,
    startRecording,
    stopRecording,
    cancelRecording,
    sendVoiceMessage,
  };
};