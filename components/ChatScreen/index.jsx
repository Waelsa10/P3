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
  getDocs,
  getDoc,
  onSnapshot,
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

  // Helper function to check if recipient is online
  const isRecipientOnline = (lastSeenTimestamp) => {
    if (!lastSeenTimestamp) return false;
    
    const lastSeen = lastSeenTimestamp.toDate ? lastSeenTimestamp.toDate() : new Date(lastSeenTimestamp);
    const now = new Date();
    const diffInSeconds = (now - lastSeen) / 1000;
    
    // Consider online if last seen within 30 seconds
    return diffInSeconds < 30;
  };

  // ✅ MARK RECIPIENT'S MESSAGES AS READ when chat opens (NOT for regular chats)
  useEffect(() => {
    if (!chatId || !user || !recipientEmail) return;

    const markRecipientMessagesAsRead = async () => {
      try {
        const messagesRef = collection(db, 'chats', chatId, 'messages');
        
        if (isSelfChat) {
          // Self-chat: mark your DELIVERED messages as READ
          const deliveredQuery = query(
            messagesRef,
            where('user', '==', user.email),
            where('status', '==', MESSAGE_STATUS.DELIVERED)
          );

          const snapshot = await getDocs(deliveredQuery);
          
          if (snapshot.empty) {
            console.log('✓ [Self-chat] No delivered messages to mark as read');
            return;
          }

          const updatePromises = snapshot.docs.map(messageDoc =>
            updateDoc(messageDoc.ref, { 
              status: MESSAGE_STATUS.READ,
              readAt: serverTimestamp()
            })
          );

          await Promise.all(updatePromises);
          console.log(`✅ [Self-chat] Marked ${snapshot.docs.length} messages as READ`);
          
        } else {
          // ✅ Regular chat: ONLY mark messages where user == recipientEmail
          const allMessagesQuery = query(messagesRef);
          const snapshot = await getDocs(allMessagesQuery);
          
          if (snapshot.empty) {
            console.log('✓ No messages in chat');
            return;
          }

          // Filter to get ONLY messages sent BY the recipient (not by you)
          const recipientMessages = snapshot.docs.filter(doc => {
            const data = doc.data();
            const isFromRecipient = data.user === recipientEmail;
            const isNotRead = data.status !== MESSAGE_STATUS.READ;
            return isFromRecipient && isNotRead;
          });

          if (recipientMessages.length === 0) {
            console.log('✓ No unread messages from recipient');
            return;
          }

          console.log(`📖 Found ${recipientMessages.length} unread messages FROM ${recipientEmail}`);

          // Mark each message as READ (they will stay DELIVERED)
          const updatePromises = recipientMessages.map(messageDoc => {
            const msgData = messageDoc.data();
            console.log(`  → Marking message from ${msgData.user}: "${msgData.message?.substring(0, 30)}..." as READ`);
            
            return updateDoc(messageDoc.ref, { 
              status: MESSAGE_STATUS.READ,
              readAt: serverTimestamp()
            });
          });

          await Promise.all(updatePromises);
          console.log(`✅ Marked ${recipientMessages.length} messages from ${recipientEmail} as READ`);
        }
      } catch (error) {
        console.error('❌ Error marking messages as read:', error);
      }
    };

    // Mark messages as read when chat opens
    markRecipientMessagesAsRead();

    // Also mark as read when window/tab gains focus
    const handleFocus = () => {
      console.log('🔍 Window focused - checking for unread messages');
      markRecipientMessagesAsRead();
    };

    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [chatId, user, recipientEmail, isSelfChat]);

  // ✅ For SELF-CHAT ONLY: Update SENT → DELIVERED immediately, then DELIVERED → READ after a delay
  useEffect(() => {
    if (!chatId || !user || !isSelfChat) return;

    const updateSelfChatMessages = async () => {
      try {
        const messagesRef = collection(db, 'chats', chatId, 'messages');
        
        // Step 1: Update SENT to DELIVERED (immediately when chat opens)
        const sentQuery = query(
          messagesRef,
          where('user', '==', user.email),
          where('status', '==', MESSAGE_STATUS.SENT)
        );

        const sentSnapshot = await getDocs(sentQuery);
        
        if (sentSnapshot.docs.length > 0) {
          console.log(`📤 [Self-chat] Found ${sentSnapshot.docs.length} SENT messages, updating to DELIVERED...`);
          
          const updateToDeliveredPromises = sentSnapshot.docs.map(messageDoc =>
            updateDoc(messageDoc.ref, { 
              status: MESSAGE_STATUS.DELIVERED,
              deliveredAt: serverTimestamp()
            })
          );

          await Promise.all(updateToDeliveredPromises);
          console.log(`✅ [Self-chat] Updated ${sentSnapshot.docs.length} messages to DELIVERED`);
        }

        // Step 2: Update DELIVERED to READ (after a short delay)
        setTimeout(async () => {
          try {
            const deliveredQuery = query(
              messagesRef,
              where('user', '==', user.email),
              where('status', '==', MESSAGE_STATUS.DELIVERED)
            );

            const deliveredSnapshot = await getDocs(deliveredQuery);
            
            if (deliveredSnapshot.docs.length > 0) {
              console.log(`📖 [Self-chat] Found ${deliveredSnapshot.docs.length} DELIVERED messages, updating to READ...`);
              
              const updateToReadPromises = deliveredSnapshot.docs.map(messageDoc =>
                updateDoc(messageDoc.ref, { 
                  status: MESSAGE_STATUS.READ,
                  readAt: serverTimestamp()
                })
              );

              await Promise.all(updateToReadPromises);
              console.log(`✅ [Self-chat] Updated ${deliveredSnapshot.docs.length} messages to READ`);
            }
          } catch (error) {
            console.error('❌ Error updating to READ:', error);
          }
        }, 1500);

      } catch (error) {
        console.error('❌ Error updating self-chat messages:', error);
      }
    };

    // Run on component mount
    updateSelfChatMessages();

    // Also run when window gains focus
    const handleFocus = () => {
      console.log('🔍 [Self-chat] Window focused - updating message statuses');
      updateSelfChatMessages();
    };

    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [chatId, user, isSelfChat]);

  // ✅ Real-time listener for recipient's online status - ONLY for regular chats
 useEffect(() => {
  if (!chatId || !user || !recipientEmail) return;

  const markMessagesToMeAsRead = async () => {
    try {
      const messagesRef = collection(db, 'chats', chatId, 'messages');
      
      if (isSelfChat) {
        // Self-chat: mark your own DELIVERED messages as READ
        const deliveredQuery = query(
          messagesRef,
          where('user', '==', user.email),
          where('status', '==', MESSAGE_STATUS.DELIVERED)
        );

        const snapshot = await getDocs(deliveredQuery);
        
        if (snapshot.empty) {
          console.log('✓ [Self-chat] No delivered messages to mark as read');
          return;
        }

        const updatePromises = snapshot.docs.map(messageDoc =>
          updateDoc(messageDoc.ref, { 
            status: MESSAGE_STATUS.READ,
            readAt: serverTimestamp()
          })
        );

        await Promise.all(updatePromises);
        console.log(`✅ [Self-chat] Marked ${snapshot.docs.length} messages as read`);
        
      } else {
        // ✅ Regular chat: ONLY mark messages sent TO me (from recipient)
        const messagesToMeQuery = query(
          messagesRef,
          where('user', '==', recipientEmail), // Messages FROM recipient TO me
          where('status', '!=', MESSAGE_STATUS.READ) // Not already read
        );

        const snapshot = await getDocs(messagesToMeQuery);
        
        if (snapshot.empty) {
          console.log('✓ No unread messages from recipient to mark as read');
          return;
        }

        console.log(`📖 Found ${snapshot.docs.length} unread messages FROM ${recipientEmail} to mark as read`);

        // Mark each message as read
        const updatePromises = snapshot.docs.map(messageDoc => {
          const msgData = messageDoc.data();
          console.log(`  → Marking message from ${msgData.user}: "${msgData.message?.substring(0, 30)}..." as read`);
          
          return updateDoc(messageDoc.ref, { 
            status: MESSAGE_STATUS.READ,
            readAt: serverTimestamp()
          });
        });

        await Promise.all(updatePromises);
        console.log(`✅ Marked ${snapshot.docs.length} messages from ${recipientEmail} as read`);
      }
    } catch (error) {
      console.error('❌ Error marking messages as read:', error);
    }
  };

  // Mark messages as read when chat opens
  markMessagesToMeAsRead();

  // Also mark as read when window/tab gains focus
  const handleFocus = () => {
    console.log('🔍 Window focused - checking for unread messages TO me');
    markMessagesToMeAsRead();
  };

  window.addEventListener('focus', handleFocus);

  return () => {
    window.removeEventListener('focus', handleFocus);
  };
}, [chatId, user, recipientEmail, isSelfChat]);

// ✅ NEW: Mark YOUR messages as READ when RECIPIENT opens the chat
// This should be triggered by a real-time listener when recipient reads your messages
useEffect(() => {
  if (!chatId || !user || !recipientEmail || isSelfChat) return;

  let unsubscribe = null;

  const setupRecipientReadListener = async () => {
    try {
      const messagesRef = collection(db, 'chats', chatId, 'messages');

      // Listen to messages collection for changes
      unsubscribe = onSnapshot(
        query(messagesRef, where('user', '==', user.email)), // Only YOUR messages
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'modified') {
              const messageData = change.doc.data();
              if (messageData.status === MESSAGE_STATUS.READ && messageData.user === user.email) {
                console.log(`✅ Your message was marked as read by recipient: "${messageData.message?.substring(0, 30)}..."`);
              }
            }
          });
        },
        (error) => {
          console.error('❌ Error in recipient read listener:', error);
        }
      );

    } catch (error) {
      console.error('❌ Error setting up recipient read listener:', error);
    }
  };

  setupRecipientReadListener();

  return () => {
    if (unsubscribe) {
      console.log('🔌 Cleaning up recipient read listener');
      unsubscribe();
    }
  };
}, [chatId, user, recipientEmail, isSelfChat]);

// ✅ KEEP: Update YOUR messages to DELIVERED (when recipient is online)
useEffect(() => {
  if (!chatId || !user || !recipientEmail) return;

  const updateYourMessagesToDelivered = async () => {
    try {
      const messagesRef = collection(db, 'chats', chatId, 'messages');

      if (isSelfChat) {
        // Self-chat: update SENT to DELIVERED immediately
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
        console.log(`✅ [Self-chat] Updated ${snapshot.docs.length} messages to DELIVERED`);
        return;
      }

      // Regular chat: only update to DELIVERED if recipient is online
      if (!recipientSnapshot?.docs?.[0]) return;

      const recipientData = recipientSnapshot.docs[0].data();
      const recipientOnline = isRecipientOnline(recipientData?.lastSeen);
      
      if (!recipientOnline) {
        console.log('🔴 Recipient is OFFLINE - keeping messages as SENT');
        return;
      }

      console.log('🟢 Recipient is ONLINE - updating YOUR messages to DELIVERED');

      const yourSentMessagesQuery = query(
        messagesRef,
        where('user', '==', user.email), // YOUR messages
        where('status', '==', MESSAGE_STATUS.SENT)
      );

      const snapshot = await getDocs(yourSentMessagesQuery);
      
      if (snapshot.empty) return;

      const updatePromises = snapshot.docs.map(messageDoc =>
        updateDoc(messageDoc.ref, { 
          status: MESSAGE_STATUS.DELIVERED,
          deliveredAt: serverTimestamp()
        })
      );

      await Promise.all(updatePromises);
      console.log(`✅ Updated ${snapshot.docs.length} of YOUR messages to DELIVERED`);
      
    } catch (error) {
      console.error('❌ Error updating to delivered:', error);
    }
  };

  const delay = isSelfChat ? 500 : 2000;
  const timer = setTimeout(updateYourMessagesToDelivered, delay);

  return () => clearTimeout(timer);
}, [chatId, user, recipientEmail, isSelfChat, recipientSnapshot]);

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
      console.log("✅ Message deleted successfully");
    } catch (error) {
      console.error("❌ Error deleting message:", error);
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
  // In your sendMessage function, you can add:
const sendMessage = async (e) => {
  e.preventDefault();
  setSendingError(null);

  if (!input?.trim() || !chatId || !user || !recipientEmail) return;

  // Create a temporary message with pending status for immediate UI feedback
  const tempMessageId = Date.now().toString();
  
  try {
    if (!isSelfChat) {
      const isBlocked = await checkIfBlocked(user.email, recipientEmail);
      if (isBlocked) {
        setSendingError("You cannot send messages to this user. You have been blocked.");
        return;
      }
    }

    // Update user's last seen
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
      status: MESSAGE_STATUS.SENT, // Will start as SENT
    };

    const replyData = buildReplyData(replyingTo);
    if (replyData) {
      messageData.replyTo = replyData;
    }

    console.log(`📤 Sending message with status: ${MESSAGE_STATUS.SENT}`);
    await addDoc(collection(db, "chats", chatId, "messages"), messageData);

    setInput("");
    setReplyingTo(null);
    scrollToBottom();
  } catch (error) {
    console.error("❌ Error sending message:", error);
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