// components/ChatScreen/hooks/useRecipientData.js

import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { useMemo } from "react";

export const useRecipientData = (user, chat) => {
  // ✅ Return early with null values if data is not ready
  if (!user || !chat || !chat.users || chat.users.length === 0) {
    console.log("⏳ useRecipientData: Waiting for chat data...", {
      hasUser: !!user,
      hasChat: !!chat,
      hasUsers: !!chat?.users,
      usersLength: chat?.users?.length,
    });
    return {
      recipientEmail: null,
      recipient: null,
      recipientSnapshot: null,
      isSelfChat: false,
      isLoading: true,
    };
  }

  // ✅ Memoize recipient calculation to prevent unnecessary recalculations
  const recipientData = useMemo(() => {
    // ✅ Clean the users array first
    const cleanUsers = [...new Set(chat.users.filter(Boolean))];
    
    console.log("🔍 useRecipientData: Processing chat", {
      originalUsers: chat.users,
      cleanUsers: cleanUsers,
      currentUser: user.email,
    });

    // Normalize emails for comparison
    const normalizedUserEmail = user.email.toLowerCase();
    const normalizedUsers = cleanUsers.map(email => email?.toLowerCase()).filter(Boolean);

    // Check if this is a self-chat (all users are the same person)
    // components/ChatScreen/hooks/useRecipientData.js (in the useMemo)

// Check if this is a self-chat
const isSelfChat = (
  // Single user that matches current user
  (normalizedUsers.length === 1 && normalizedUsers[0] === normalizedUserEmail) ||
  // All users are the same person (for 2-user arrays)
  (normalizedUsers.length === 2 && normalizedUsers.every(email => email === normalizedUserEmail))
);

    console.log("🔍 useRecipientData: Self-chat check", {
      normalizedUsers,
      normalizedUserEmail,
      isSelfChat,
    });

    // Handle self-chat case - use current user's email
    if (isSelfChat) {
      console.log("💬 useRecipientData: Self-chat detected - recipient is yourself");
      return {
        recipientEmail: user.email,
        isSelfChat: true,
      };
    }

    // Find the OTHER user (not the current user)
    const recipientEmail = cleanUsers.find(
      (userEmail) => userEmail && userEmail.toLowerCase() !== normalizedUserEmail
    );

    // ✅ IMPORTANT: If we can't find a recipient, DON'T fallback to user.email
    if (!recipientEmail) {
      console.error("❌ useRecipientData: Could not find recipient in chat.users", {
        cleanUsers,
        currentUser: user.email,
      });
      return {
        recipientEmail: null,
        isSelfChat: false,
      };
    }

    console.log("✅ useRecipientData: Found recipient", {
      recipient: recipientEmail,
      currentUser: user.email,
      isSelfChat: false,
    });

    return {
      recipientEmail,
      isSelfChat: false,
    };
  }, [chat.users, user.email]);

  // ✅ Only query Firestore if we have a valid recipient email
  const recipientQuery = recipientData.recipientEmail
    ? query(collection(db, "users"), where("email", "==", recipientData.recipientEmail))
    : null;

  const [recipientSnapshot] = useCollection(recipientQuery);

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  return {
    recipientEmail: recipientData.recipientEmail,
    recipient: recipient || {
      email: recipientData.recipientEmail,
      photoURL: recipientData.isSelfChat ? user.photoURL : null,
    },
    recipientSnapshot,
    isSelfChat: recipientData.isSelfChat,
    isLoading: false,
  };
};