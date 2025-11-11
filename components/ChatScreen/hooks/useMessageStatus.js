// components/ChatScreen/hooks/useMessageStatus.js

import { useEffect, useCallback, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {
  markYourMessagesAsDelivered,
  markRecipientMessagesAsDelivered,
  markRecipientMessagesAsRead,
  markYourMessagesAsRead,
} from "../utils/messageStatus";
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ErrorIcon from '@mui/icons-material/Error';
import { MESSAGE_STATUS } from '../constants';
const MessageStatus = ({ status, darkMode }) => {
  const getStatusIcon = () => {
    switch (status) {
      case MESSAGE_STATUS.SENDING:
        return <AccessTimeIcon style={{ fontSize: 16, color: darkMode ? '#8696a0' : '#667781' }} />;
      
      case MESSAGE_STATUS.SENT:
        return <CheckIcon style={{ fontSize: 16, color: darkMode ? '#8696a0' : '#667781' }} />;
      
      case MESSAGE_STATUS.DELIVERED:
        return <DoneAllIcon style={{ fontSize: 16, color: darkMode ? '#8696a0' : '#667781' }} />;
      
      case MESSAGE_STATUS.READ:
        return <DoneAllIcon style={{ fontSize: 16, color: '#53bdeb' }} />; // Blue checkmarks
      
      case MESSAGE_STATUS.FAILED:
        return <ErrorIcon style={{ fontSize: 16, color: '#f44336' }} />;
      
      default:
        return <CheckIcon style={{ fontSize: 16, color: darkMode ? '#8696a0' : '#667781' }} />;
    }
  };

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 4 }}>
      {getStatusIcon()}
    </span>
  );
};

export default MessageStatus;
/**
 * Hook to manage WhatsApp-like message status (SENT → DELIVERED → READ)
 * 
 * For YOUR messages:
 * - SENT: Message sent
 * - DELIVERED: Recipient opened the app (when they go online)
 * - READ: Recipient opened the chat and read your message
 * 
 * For RECIPIENT'S messages:
 * - SENT: Message sent
 * - DELIVERED: You opened the app (immediately when chat opens)
 * - READ: You read the message (when chat is visible/focused)
 */
export const useMessageStatus = (chatId, recipientEmail, currentUserEmail, isSelfChat = false) => {
  const [user] = useAuthState(auth);
  const selfChatTimeoutRef = useRef(null); // ✅ NEW: Track timeout

  // ✅ NEW: Check if all required data is ready
  const isReady = !!(chatId && user && recipientEmail && currentUserEmail);

 // ✅ Mark YOUR messages as DELIVERED when recipient comes online
useEffect(() => {
  // ✅ CRITICAL: Don't run if data is not ready
  if (!isReady) {
    console.log(`⏳ [Chat: ${chatId}] Waiting for data before setting up online listener...`);
    return;
  }

  if (isSelfChat) {
    console.log(`⏭️ [Chat: ${chatId}] Skipping YOUR DELIVERED update - self-chat`);
    return;
  }

  // Sanity check: Don't monitor yourself
  if (currentUserEmail === recipientEmail) {
    console.warn(`⚠️ [Chat: ${chatId}] Skipping online listener - userEmail matches recipientEmail`);
    return;
  }

  console.log(`👁️ [Chat: ${chatId}] Listening for ${recipientEmail} to come online...`);
  console.log(`   Your messages from: ${currentUserEmail}`);

  // ✅ CRITICAL: Capture current values to avoid stale closures
  const currentChatId = chatId;
  const currentRecipient = recipientEmail;
  const currentUser = currentUserEmail;

  // Set up real-time listener for recipient's online status
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", currentRecipient));

  const unsubscribe = onSnapshot(
    q,
    async (snapshot) => {
      // ✅ Prevent running if chat has changed (stale listener)
      if (chatId !== currentChatId) {
        console.log(
          `⚠️ [OLD Chat: ${currentChatId}] Ignoring stale listener callback - current chat is ${chatId}`
        );
        return;
      }

      if (snapshot.empty) {
        console.log(`❓ [Chat: ${currentChatId}] Recipient ${currentRecipient} not found in users collection`);
        return;
      }

      const recipientData = snapshot.docs[0].data();
      const lastSeen = recipientData.lastSeen?.toDate?.() || new Date(recipientData.lastSeen);
      const now = new Date();
      const secondsAgo = (now - lastSeen) / 1000;

      if (secondsAgo < 30) {
        console.log(`🟢 [Chat: ${currentChatId}] RECIPIENT CAME ONLINE! (${Math.round(secondsAgo)}s ago)`);
        console.log(`   Updating YOUR messages from ${currentUser} to DELIVERED`);
        await markYourMessagesAsDelivered(currentChatId, currentRecipient, currentUser);
      } else {
        console.log(`🔴 [Chat: ${currentChatId}] Recipient offline (${Math.round(secondsAgo)}s ago)`);
      }
    },
    (error) => {
      console.error(`❌ [Chat: ${currentChatId}] Error listening to recipient status:`, error);
    }
  );

  return () => {
    console.log(`🔌 [Chat: ${currentChatId}] Stopping recipient status listener for ${currentRecipient}`);
    unsubscribe();
  };
}, [chatId, recipientEmail, currentUserEmail, isSelfChat, isReady]);

};