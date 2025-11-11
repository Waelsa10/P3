import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

export const useRecipientData = (user, chat) => {
  if (!user || !chat) {
    return {
      recipientEmail: null,
      recipient: null,
      recipientSnapshot: null,
      isSelfChat: false,
    };
  }

  // Check if this is a self-chat
  const isSelfChat = chat.users.length === 2 && chat.users[0] === chat.users[1];

  // Handle self-chat case - use current user's email
  const recipientEmail = isSelfChat 
    ? user.email 
    : chat.users.find((userEmail) => userEmail !== user.email) || user.email;

  const recipientQuery = recipientEmail
    ? query(collection(db, "users"), where("email", "==", recipientEmail))
    : null;

  const [recipientSnapshot] = useCollection(recipientQuery);

  const recipient = recipientSnapshot?.docs?.[0]?.data();

  return {
    recipientEmail,
    recipient: recipient || {
      email: recipientEmail,
      photoURL: user.photoURL, // Use current user's photo for self-chat
    },
    recipientSnapshot,
    isSelfChat,
  };
};