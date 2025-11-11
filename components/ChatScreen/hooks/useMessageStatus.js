// components/ChatScreen/hooks/useMessageStatus.js

import { useEffect, useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import {
  markUserMessagesAsDelivered,
  markUserMessagesAsRead,
  subscribeToRecipientStatus,
} from "../utils/messageStatus";

export const useMessageStatus = (chatId, recipientEmail) => {
  const [user] = useAuthState(auth);

  // Mark messages as delivered when component mounts (user opened chat)
  useEffect(() => {
    if (!chatId || !recipientEmail || !user) return;

    const markAsDelivered = async () => {
      await markUserMessagesAsDelivered(chatId, recipientEmail, user.email);
    };

    markAsDelivered();
  }, [chatId, recipientEmail, user]);

  // Mark messages as read when user is actively viewing the chat
  const markMessagesAsRead = useCallback(async () => {
    if (!chatId || !recipientEmail || !user) return;
    
    await markUserMessagesAsRead(chatId, recipientEmail, user.email);
  }, [chatId, recipientEmail, user]);

  // Mark messages as read when user scrolls or interacts with chat
  useEffect(() => {
    if (!chatId || !recipientEmail || !user) return;

    // Mark as read immediately when chat is opened
    markMessagesAsRead();

    // Mark as read when user focuses on the window
    const handleFocus = () => {
      markMessagesAsRead();
    };

    // Mark as read when user scrolls (debounced)
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        markMessagesAsRead();
      }, 500);
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("scroll", handleScroll, true);
      clearTimeout(scrollTimeout);
    };
  }, [chatId, recipientEmail, user, markMessagesAsRead]);

  // Listen to recipient's status to auto-update message status
  useEffect(() => {
    if (!recipientEmail) return;

    const unsubscribe = subscribeToRecipientStatus(
      recipientEmail,
      (recipientData) => {
        // When recipient comes online, mark messages as delivered
        if (recipientData.isOnline) {
          markUserMessagesAsDelivered(chatId, recipientEmail, user?.email);
        }
      }
    );

    return () => unsubscribe();
  }, [recipientEmail, chatId, user]);

  return {
    markMessagesAsRead,
    markUserMessagesAsDelivered,
  };
};