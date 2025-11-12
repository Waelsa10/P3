// components/ChatScreen/index.jsx
import React, { useRef, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { 
  addDoc, 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  serverTimestamp, 
  enableNetwork, 
  disableNetwork,
} from "firebase/firestore";
import { DarkModeContext } from "../DarkModeProvider";

// Hooks
import { useEmojiPicker } from "./hooks/useEmojiPicker";
import { useFileUpload } from "./hooks/useFileUpload";
import { useVoiceRecording } from "./hooks/useVoiceRecording";
import { useCamera } from "./hooks/useCamera";
import { useLocation } from "./hooks/useLocation";
import { useRecipientData } from "./hooks/useRecipientData";
import { useMessages } from "./hooks/useMessages";
import { useMessageStatus } from "./hooks/useMessageStatus";

// Components
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import EmojiPicker from "./components/EmojiPicker";
import AttachMenu from "./components/AttachMenu";
import FileUploadDialog from "./components/FileUploadDialog";
import CameraDialog from "./components/CameraDialog";
import LocationPreviewDialog from "./components/LocationPreviewDialog";
import VoiceRecordingDialog from "./components/VoiceRecordingDialog";
import ChatInfoDialog from "./components/ChatInfoDialog";
import ReplyPreview from "./components/ReplyPreview";

// Styled Components
import { Container, OfflineMessage, ErrorMessage } from "./ChatScreen.styles";

// Utils
import { checkIfBlocked, buildReplyData } from "./utils";
import { MESSAGE_STATUS } from "./constants";

function ChatScreen({ 
  chat, 
  messages, 
  isMobile = false, 
  onToggleSidebar = () => {} 
}) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const endOfMessagesRef = useRef(null);
  const inputRef = useRef(null);
  
  const [input, setInput] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);
  const [sendingError, setSendingError] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [attachMenuAnchor, setAttachMenuAnchor] = useState(null);

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };
  
  const chatId = router?.query?.id || null;

  // Custom Hooks
  const { recipientEmail, recipient, recipientSnapshot, isSelfChat, isLoading } = useRecipientData(user, chat);
  const { messagesSnapshot } = useMessages(chatId);
  
  useMessageStatus(
    chatId, 
    isLoading ? null : recipientEmail,
    user?.email,
    isSelfChat
  );
  
  const emojiPicker = useEmojiPicker();
  const fileUpload = useFileUpload(chatId, user, recipientEmail);
  const voiceRecording = useVoiceRecording(chatId, user, recipientEmail);
  const camera = useCamera(chatId, user, recipientEmail);
  const location = useLocation(chatId, user, recipientEmail);

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      enableNetwork(db);
    };

    const handleOffline = () => {
      setIsOnline(false);
      disableNetwork(db);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Scroll to bottom
  const scrollToBottom = () => {
    if (endOfMessagesRef?.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesSnapshot]);

  // Handle attach menu
  const handlePlusClick = (event) => {
    setAttachMenuAnchor(event.currentTarget);
  };

  const handleAttachMenuClose = () => {
    setAttachMenuAnchor(null);
  };

  // Handle display name update
  const handleUpdateDisplayName = async (newDisplayName) => {
    if (!recipientEmail || isSelfChat) return;

    try {
      console.log(`📝 Updating display name for ${recipientEmail} to "${newDisplayName}"`);
      
      // Store display name in a separate collection
      const displayNameRef = doc(db, "displayNames", `${user.email}_${recipientEmail}`);
      await setDoc(displayNameRef, {
        email: recipientEmail,
        displayName: newDisplayName,
        updatedBy: user.email,
        updatedAt: serverTimestamp(),
      });

      console.log("✅ Display name updated successfully");
    } catch (error) {
      console.error("❌ Error updating display name:", error);
      setSendingError("Failed to update display name");
    }
  };

  // Handle emoji selection
  const handleEmojiClick = (emoji) => {
    const cursorPosition = inputRef.current?.selectionStart || input.length;
    const textBeforeCursor = input.slice(0, cursorPosition);
    const textAfterCursor = input.slice(cursorPosition);
    
    setInput(textBeforeCursor + emoji + textAfterCursor);
    emojiPicker.saveRecentEmoji(emoji);
    
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        const newPosition = cursorPosition + emoji.length;
        inputRef.current.setSelectionRange(newPosition, newPosition);
      }
    }, 0);
  };

  // Delete message
  const deleteMessage = async (messageId) => {
    if (!chatId || !messageId) return;
    
    try {
      console.log(`🗑️ [Chat: ${chatId}] Deleting message ${messageId}`);
      await deleteDoc(doc(db, "chats", chatId, "messages", messageId));
      console.log(`✅ [Chat: ${chatId}] Message deleted successfully`);
    } catch (error) {
      console.error(`❌ [Chat: ${chatId}] Error deleting message:`, error);
      setSendingError("Failed to delete message. Please try again.");
    }
  };

  // Set reply
  const handleReply = (messageData) => {
    setReplyingTo(messageData);
    inputRef.current?.focus();
  };

  // Cancel reply
  const cancelReply = () => {
    setReplyingTo(null);
  };

  // Send text message
  const sendMessage = async (e) => {
    e.preventDefault();
    setSendingError(null);

    if (!input?.trim() || !chatId || !user || !recipientEmail) {
      console.warn("⚠️ Cannot send message - missing required data");
      return;
    }
    
    try {
      console.log(`📤 [Chat: ${chatId}] Preparing to send message to ${recipientEmail}`);
      
      if (!isSelfChat) {
        const isBlocked = await checkIfBlocked(user.email, recipientEmail);
        if (isBlocked) {
          setSendingError("You cannot send messages to this user. You have been blocked.");
          return;
        }
      }

      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          lastSeen: serverTimestamp(),
          email: user.email,
        },
        { merge: true }
      );

      const messageData = {
        timestamp: serverTimestamp(),
        message: input,
        user: user.email,
        photoURL: user.photoURL,
        status: MESSAGE_STATUS.SENT,
      };

      const replyData = buildReplyData(replyingTo);
      if (replyData) {
        messageData.replyTo = replyData;
      }

      await addDoc(collection(db, "chats", chatId, "messages"), messageData);

      setInput("");
      setReplyingTo(null);
      scrollToBottom();
    } catch (error) {
      console.error(`❌ [Chat: ${chatId}] Error sending message:`, error);
      setSendingError("Failed to send message. Please try again.");
    }
  };

  if (!isOnline) {
    return (
      <Container darkMode={darkMode}>
        <OfflineMessage darkMode={darkMode}>
          You are currently offline. Please check your internet connection.
        </OfflineMessage>
      </Container>
    );
  }

  if (error) {
    return (
      <Container darkMode={darkMode}>
        <ErrorMessage darkMode={darkMode}>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container darkMode={darkMode}>
      <ChatHeader
        recipient={recipient}
        recipientEmail={recipientEmail}
        recipientSnapshot={recipientSnapshot}
        isSelfChat={isSelfChat}
        onMoreClick={() => setShowProfile(true)}
        darkMode={darkMode}
        isMobile={isMobile}
        onToggleSidebar={onToggleSidebar}
      />

      <input
        ref={fileUpload.fileInputRef}
        type="file"
        hidden
        onChange={fileUpload.handleFileSelect}
        accept="*/*"
      />

      <MessageList
        ref={endOfMessagesRef}
        messagesSnapshot={messagesSnapshot}
        messages={messages}
        sendingError={sendingError}
        onDelete={deleteMessage}
        onReply={handleReply}
        darkMode={darkMode}
      />

      <AttachMenu
        anchorEl={attachMenuAnchor}
        open={Boolean(attachMenuAnchor)}
        onClose={handleAttachMenuClose}
        onAttachFile={fileUpload.handleAttachClick}
        onTakePhoto={camera.startCamera}
        onShareLocation={location.getLocation}
        darkMode={darkMode}
      />

      <EmojiPicker
        open={emojiPicker.openEmojiPicker}
        anchorEl={emojiPicker.emojiAnchorEl}
        onClose={emojiPicker.handleEmojiPickerClose}
        selectedCategory={emojiPicker.selectedEmojiCategory}
        onCategoryChange={emojiPicker.setSelectedEmojiCategory}
        searchTerm={emojiPicker.emojiSearchTerm}
        onSearchChange={emojiPicker.setEmojiSearchTerm}
        emojis={emojiPicker.getFilteredEmojis()}
        onEmojiSelect={handleEmojiClick}
        darkMode={darkMode}
      />

      <FileUploadDialog
        open={fileUpload.showFileConfirmation}
        onClose={fileUpload.cancelFileSelection}
        file={fileUpload.selectedFile}
        filePreview={fileUpload.filePreview}
        input={input}
        onInputChange={setInput}
        uploadProgress={fileUpload.uploadProgress}
        isUploading={fileUpload.isUploading}
        onSend={() => fileUpload.sendFileMessage(
          input,
          replyingTo,
          setSendingError,
          setInput,
          setReplyingTo,
          scrollToBottom,
          isSelfChat,
        )}
        darkMode={darkMode}
      />

      <CameraDialog
        open={camera.showCamera || camera.capturedImage !== null}
        showCamera={camera.showCamera}
        capturedImage={camera.capturedImage}
        videoRef={camera.videoRef}
        input={input}
        onInputChange={setInput}
        uploadProgress={camera.uploadProgress}
        isUploading={camera.isUploading}
        onCapture={camera.capturePhoto}
        onRetake={camera.retakePhoto}
        onCancel={camera.cancelPhoto}
        onSend={() => camera.sendPhoto(
          input,
          replyingTo,
          setSendingError,
          setInput,
          setReplyingTo,
          scrollToBottom,
          isSelfChat,
        )}
        darkMode={darkMode}
      />

      <LocationPreviewDialog
        open={location.showLocationPreview}
        locationData={location.locationData}
        input={input}
        onInputChange={setInput}
        onCancel={location.cancelLocation}
        onSend={() => location.sendLocation(
          input,
          replyingTo,
          setSendingError,
          setInput,
          setReplyingTo,
          scrollToBottom,
          isSelfChat,
        )}
        isGettingLocation={location.isGettingLocation}
        darkMode={darkMode}
      />

      <VoiceRecordingDialog
        open={voiceRecording.audioBlob !== null}
        audioBlob={voiceRecording.audioBlob}
        recordingTime={voiceRecording.recordingTime}
        uploadProgress={voiceRecording.uploadProgress}
        isUploading={voiceRecording.isUploading}
        onCancel={voiceRecording.cancelRecording}
        onSend={() => voiceRecording.sendVoiceMessage(
          replyingTo,
          setSendingError,
          setReplyingTo,
          scrollToBottom,
          isSelfChat,
        )}
        onError={setSendingError}
        darkMode={darkMode}
      />

      <ChatInfoDialog
        open={showProfile}
        onClose={() => setShowProfile(false)}
        recipient={recipient}
        recipientEmail={recipientEmail}
        isSelfChat={isSelfChat}
        messages={messagesSnapshot?.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate?.() || doc.data().timestamp
        })) || []}
        onUpdateDisplayName={handleUpdateDisplayName}
        darkMode={darkMode}
      />

      <ReplyPreview
        replyingTo={replyingTo}
        userEmail={user?.email}
        onCancel={cancelReply}
        darkMode={darkMode}
      />

      <ChatInput
        input={input}
        setInput={setInput}
        inputRef={inputRef}
        isRecording={voiceRecording.isRecording}
        recordingTime={voiceRecording.recordingTime}
        onSubmit={sendMessage}
        onEmojiClick={emojiPicker.handleEmojiPickerOpen}
        onPlusClick={handlePlusClick}
        onStartRecording={() => voiceRecording.startRecording(setSendingError)}
        onStopRecording={voiceRecording.stopRecording}
        darkMode={darkMode}
      />
    </Container>
  );
}

export default ChatScreen;