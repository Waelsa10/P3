// components/ChatScreen/hooks/useFileUpload.js
import { useState, useRef } from "react";
import { addDoc, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { uploadToCloudinary } from "../../../lib/cloudinary";
import { checkIfBlocked, buildReplyData } from "../utils";
import { MESSAGE_STATUS } from "../constants";

export const useFileUpload = (chatId, user, recipientEmail) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [showFileConfirmation, setShowFileConfirmation] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleAttachClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
      
      setShowFileConfirmation(true);
    }
    
    // Reset the input value so the same file can be selected again
    e.target.value = '';
  };

  const cancelFileSelection = () => {
    setSelectedFile(null);
    setFilePreview(null);
    setShowFileConfirmation(false);
    setUploadProgress(0);
  };

  const sendFileMessage = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat = false) => {
    if (!selectedFile || !chatId || !user || !recipientEmail) return;

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
      const fileURL = await uploadToCloudinary(selectedFile, (progress) => {
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
        message: input || "",
        user: user.email,
        photoURL: user.photoURL,
        fileURL: fileURL,
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        fileSize: selectedFile.size,
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
      setInput("");
      setSelectedFile(null);
      setFilePreview(null);
      setShowFileConfirmation(false);
      setUploadProgress(0);
      setReplyingTo(null);
      scrollToBottom();
    } catch (error) {
      console.error("Error sending file:", error);
      setSendingError(`Failed to send file: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    selectedFile,
    filePreview,
    showFileConfirmation,
    uploadProgress,
    isUploading,
    fileInputRef,
    handleAttachClick,
    handleFileSelect,
    cancelFileSelection,
    sendFileMessage,
  };
};