// components/ChatScreen/hooks/useCamera.js
import { useState, useRef } from "react";
import { addDoc, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { uploadToCloudinary } from "../../../lib/cloudinary";
import { checkIfBlocked, buildReplyData } from "../utils";
import { MESSAGE_STATUS } from "../constants";

export const useCamera = (chatId, user, recipientEmail) => {
  const [showCamera, setShowCamera] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedImageBlob, setCapturedImageBlob] = useState(null);
  const [stream, setStream] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false,
      });
      setStream(mediaStream);
      setShowCamera(true);
      
      // Wait for video element to be available
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      }, 100);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Unable to access camera. Please check permissions.");
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      const video = videoRef.current;
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to blob with high quality
      canvas.toBlob((blob) => {
        if (blob) {
          console.log("📸 Photo captured:", {
            size: blob.size,
            type: blob.type,
            width: canvas.width,
            height: canvas.height
          });
          
          // Create preview URL
          const previewUrl = URL.createObjectURL(blob);
          setCapturedImage(previewUrl);
          setCapturedImageBlob(blob);
          stopCamera();
        } else {
          console.error("Failed to create blob from canvas");
          alert("Failed to capture photo. Please try again.");
        }
      }, "image/jpeg", 0.95);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setShowCamera(false);
  };

  const retakePhoto = () => {
    if (capturedImage) {
      URL.revokeObjectURL(capturedImage);
    }
    setCapturedImage(null);
    setCapturedImageBlob(null);
    startCamera();
  };

  const cancelPhoto = () => {
    if (capturedImage) {
      URL.revokeObjectURL(capturedImage);
    }
    setCapturedImage(null);
    setCapturedImageBlob(null);
    stopCamera();
    setUploadProgress(0);
  };

  const sendPhoto = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat = false) => {
    if (!capturedImageBlob || !chatId || !user || !recipientEmail) {
      console.error("Missing required data for sending photo");
      return;
    }

    setIsUploading(true);
    setSendingError(null);

    try {
      console.log("📤 Starting photo upload...");
      
      // Skip blocking check for self-chat
      if (!isSelfChat) {
        const isBlocked = await checkIfBlocked(user.email, recipientEmail);
        if (isBlocked) {
          setSendingError("You cannot send messages to this user. You have been blocked.");
          setIsUploading(false);
          return;
        }
      }

      // Convert blob to file with proper metadata
      const timestamp = Date.now();
      const fileName = `camera_photo_${timestamp}.jpg`;
      const file = new File([capturedImageBlob], fileName, { 
        type: "image/jpeg",
        lastModified: timestamp
      });

      console.log("📸 Photo file created:", {
        name: file.name,
        size: file.size,
        type: file.type
      });

      // Upload to Cloudinary
      const fileURL = await uploadToCloudinary(file, (progress) => {
        console.log(`⬆️ Upload progress: ${progress}%`);
        setUploadProgress(progress);
      });

      console.log("✅ Upload complete, URL:", fileURL);

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
        message: input || "",
        user: user.email,
        photoURL: user.photoURL,
        fileURL: fileURL,
        fileName: fileName,
        fileType: "image/jpeg",
        fileSize: capturedImageBlob.size,
        status: MESSAGE_STATUS.SENT,
      };

      // Add reply data if replying
      const replyData = buildReplyData(replyingTo);
      if (replyData) {
        messageData.replyTo = replyData;
      }

      console.log("💾 Saving message to Firestore:", messageData);

      // Send the message
      await addDoc(collection(db, "chats", chatId, "messages"), messageData);

      console.log("✅ Message saved successfully");

      // Clean up
      if (capturedImage) {
        URL.revokeObjectURL(capturedImage);
      }

      // Reset states
      setInput("");
      setCapturedImage(null);
      setCapturedImageBlob(null);
      setUploadProgress(0);
      setReplyingTo(null);
      scrollToBottom();
    } catch (error) {
      console.error("❌ Error sending photo:", error);
      setSendingError(`Failed to send photo: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    showCamera,
    capturedImage,
    uploadProgress,
    isUploading,
    videoRef,
    startCamera,
    capturePhoto,
    retakePhoto,
    cancelPhoto,
    sendPhoto,
  };
};