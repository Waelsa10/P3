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
  updateDoc,
  serverTimestamp, 
  enableNetwork, 
  disableNetwork,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { DarkModeContext } from "../DarkModeProvider";

// Hooks
import { useEmojiPicker } from "./hooks/useEmojiPicker";
import { useFileUpload } from "./hooks/useFileUpload";
import { useVoiceRecording } from "./hooks/useVoiceRecording";
import { useRecipientData } from "./hooks/useRecipientData";
import { useMessages } from "./hooks/useMessages";

// Components
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import EmojiPicker from "./components/EmojiPicker";
import FileUploadDialog from "./components/FileUploadDialog";
import VoiceRecordingDialog from "./components/VoiceRecordingDialog";
import ProfileDialog from "./components/ProfileDialog";
import ReplyPreview from "./components/ReplyPreview";

// Styled Components
import { Container, OfflineMessage, ErrorMessage } from "./ChatScreen.styles";

// Utils
import { checkIfBlocked, buildReplyData } from "./utils";
import { MESSAGE_STATUS } from "./constants";

// ✅ ADD DEFAULT PROPS HERE
function ChatScreen({ 
  chat, 
  messages, 
  isMobile = false, 
  onToggleSidebar = () => {} 
}) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const endOfMessagesRef = useRef(null);
  const fileInputRef = useRef(null);
  const inputRef = useRef(null);
  
  const [input, setInput] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);
  const [sendingError, setSendingError] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  // Get dark mode context
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode } = darkModeContext || { darkMode: false };
  
  const chatId = router?.query?.id || null;

  // Custom Hooks
  const { recipientEmail, recipient, recipientSnapshot, isSelfChat } = useRecipientData(user, chat);
  const { messagesSnapshot } = useMessages(chatId);
  
  const emojiPicker = useEmojiPicker();
  const fileUpload = useFileUpload(chatId, user, recipientEmail);
  const voiceRecording = useVoiceRecording(chatId, user, recipientEmail);

  // Mark recipient's messages as READ when viewing chat
  useEffect(() => {
    if (!chatId || !user || !recipientEmail || isSelfChat) return;

    const markMessagesAsRead = async () => {
      try {
        const messagesRef = collection(db, 'chats', chatId, 'messages');
        
        const unreadQuery = query(
          messagesRef,
          where('user', '==', recipientEmail),
          where('status', '!=', MESSAGE_STATUS.READ)
        );

        const snapshot = await getDocs(unreadQuery);
        
        if (snapshot.empty) {
          console.log('No unread messages to mark as read');
          return;
        }

        const updatePromises = snapshot.docs.map(messageDoc => 
          updateDoc(messageDoc.ref, { 
            status: MESSAGE_STATUS.READ,
            readAt: serverTimestamp()
          })
        );

        await Promise.all(updatePromises);
        console.log(`Marked ${snapshot.docs.length} messages as read`);
      } catch (error) {
        console.error('Error marking messages as read:', error);
      }
    };

    markMessagesAsRead();

    const handleFocus = () => {
      markMessagesAsRead();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [chatId, user, recipientEmail, isSelfChat]);

  // Update own messages to DELIVERED after a short delay
  useEffect(() => {
    if (!chatId || !user || !recipientEmail || isSelfChat) return;

    const updateToDelivered = async () => {
      try {
        const messagesRef = collection(db, 'chats', chatId, 'messages');
        
        const sentQuery = query(
          messagesRef,
          where('user', '==', user.email),
          where('status', '==', MESSAGE_STATUS.SENT)
        );

        const snapshot = await getDocs(sentQuery);
        
        if (snapshot.empty) return;

        const updatePromises = snapshot.docs.map(messageDoc =>
          updateDoc(messageDoc.ref, { 
            status: MESSAGE_STATUS.DELIVERED,
            deliveredAt: serverTimestamp()
          })
        );

        await Promise.all(updatePromises);
        console.log(`Updated ${snapshot.docs.length} messages to delivered`);
      } catch (error) {
        console.error('Error updating to delivered:', error);
      }
    };

    const timer = setTimeout(updateToDelivered, 2000);
    
    return () => clearTimeout(timer);
  }, [chatId, user, recipientEmail, isSelfChat, messagesSnapshot]);

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
      await deleteDoc(doc(db, "chats", chatId, "messages", messageId));
      console.log("Message deleted successfully");
    } catch (error) {
      console.error("Error deleting message:", error);
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

    if (!input?.trim() || !chatId || !user || !recipientEmail) return;

    try {
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
      console.error("Error sending message:", error);
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
        onAttachFile={() => fileInputRef.current?.click()}
        onMoreClick={() => setShowProfile(true)}
        darkMode={darkMode}
        isMobile={isMobile}
        onToggleSidebar={onToggleSidebar}
      />

      <input
        ref={fileInputRef}
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

      <ProfileDialog
        open={showProfile}
        onClose={() => setShowProfile(false)}
        recipient={recipient}
        recipientEmail={recipientEmail}
        isSelfChat={isSelfChat}
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
        onStartRecording={() => voiceRecording.startRecording(setSendingError)}
        onStopRecording={voiceRecording.stopRecording}
        darkMode={darkMode}
      />
    </Container>
  );
}

export default ChatScreen;