// hooks/useNotifications.js
import { useEffect, useState, useRef } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { notificationManager } from "../utils/notifications";

export const useNotifications = (user, currentChatId, allChats) => {
  const [isTabFocused, setIsTabFocused] = useState(true);
  const processedMessagesRef = useRef(new Set());
  const lastCheckTimeRef = useRef(Date.now());

  // Track tab focus
  useEffect(() => {
    const handleFocus = () => setIsTabFocused(true);
    const handleBlur = () => setIsTabFocused(false);

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  // Listen to all chats for new messages
  useEffect(() => {
    if (!user || !allChats || allChats.length === 0) return;

    const unsubscribers = [];

    allChats.forEach((chat) => {
      const chatId = chat.id;
      const chatData = chat.data();
      
      // Only listen to chats where user is a participant
      if (!chatData.users?.includes(user.email)) return;

      const messagesRef = collection(db, "chats", chatId, "messages");
      const q = query(messagesRef, orderBy("timestamp", "desc"), limit(1));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const messageData = change.doc.data();
            const messageId = change.doc.id;
            const messageTimestamp = messageData.timestamp?.toMillis() || Date.now();

            // Check if this is a new message (after component mounted)
            if (messageTimestamp < lastCheckTimeRef.current) {
              return;
            }

            // Avoid duplicate notifications
            if (processedMessagesRef.current.has(messageId)) {
              return;
            }

            processedMessagesRef.current.add(messageId);

            // Check if we should show notification
            if (notificationManager.shouldShowNotification(
              user.email,
              messageData.user,
              isTabFocused,
              currentChatId,
              chatId
            )) {
              // Get sender info
              const recipientEmail = chatData.users.find(u => u !== user.email) || user.email;
              const isSelfChat = chatData.users.length === 1 || 
                                 (chatData.users.length === 2 && chatData.users[0] === chatData.users[1]);

              // Try to get custom display name from chat data or contacts
              const customDisplayName = chatData.customDisplayName || recipientEmail;

              // Get sender's photo
              const senderPhotoURL = messageData.photoURL;

              // Show notification
              notificationManager.showNotification({
                senderEmail: messageData.user,
                customDisplayName,
                message: {
                  ...messageData,
                  id: messageId,
                },
                chatId,
                isSelfChat,
                senderPhotoURL,
              });
            }
          }
        });
      });

      unsubscribers.push(unsubscribe);
    });

    return () => {
      unsubscribers.forEach(unsub => unsub());
    };
  }, [user, allChats, currentChatId, isTabFocused]);

  return { isTabFocused };
};