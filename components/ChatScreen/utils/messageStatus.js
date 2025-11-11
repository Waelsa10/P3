// components/ChatScreen/utils/messageStatus.js

import { 
  collection, 
  query, 
  where, 
  getDocs, 
  updateDoc, 
  doc,
  onSnapshot,
  writeBatch
} from "firebase/firestore";
import { db } from "../../../firebase";
import { MESSAGE_STATUS } from "../constants";

/**
 * Mark a single message as delivered
 */
export const markMessageAsDelivered = async (chatId, messageId) => {
  try {
    const messageRef = doc(db, "chats", chatId, "messages", messageId);
    await updateDoc(messageRef, {
      status: MESSAGE_STATUS.DELIVERED,
      deliveredAt: new Date(),
    });
  } catch (error) {
    console.error("Error marking message as delivered:", error);
  }
};

/**
 * Mark a single message as read
 */
export const markMessageAsRead = async (chatId, messageId) => {
  try {
    const messageRef = doc(db, "chats", chatId, "messages", messageId);
    await updateDoc(messageRef, {
      status: MESSAGE_STATUS.READ,
      readAt: new Date(),
    });
  } catch (error) {
    console.error("Error marking message as read:", error);
  }
};

/**
 * Mark all messages from a specific user as delivered (batch update)
 */
export const markUserMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail) => {
  try {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(
      messagesRef,
      where("user", "==", recipientEmail),
      where("status", "==", MESSAGE_STATUS.SENT)
    );
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) return;

    const batch = writeBatch(db);
    
    snapshot.docs.forEach((document) => {
      batch.update(document.ref, {
        status: MESSAGE_STATUS.DELIVERED,
        deliveredAt: new Date(),
      });
    });

    await batch.commit();
    console.log(`Marked ${snapshot.docs.length} messages as delivered`);
  } catch (error) {
    console.error("Error marking messages as delivered:", error);
  }
};

/**
 * Mark all messages from a specific user as read (batch update)
 */
export const markUserMessagesAsRead = async (chatId, recipientEmail, currentUserEmail) => {
  try {
    const messagesRef = collection(db, "chats", chatId, "messages");
    
    // Get all messages that are either sent or delivered, but not read
    const sentQuery = query(
      messagesRef,
      where("user", "==", recipientEmail),
      where("status", "==", MESSAGE_STATUS.SENT)
    );
    
    const deliveredQuery = query(
      messagesRef,
      where("user", "==", recipientEmail),
      where("status", "==", MESSAGE_STATUS.DELIVERED)
    );

    const [sentSnapshot, deliveredSnapshot] = await Promise.all([
      getDocs(sentQuery),
      getDocs(deliveredQuery)
    ]);

    const allDocs = [...sentSnapshot.docs, ...deliveredSnapshot.docs];
    
    if (allDocs.length === 0) return;

    const batch = writeBatch(db);
    
    allDocs.forEach((document) => {
      batch.update(document.ref, {
        status: MESSAGE_STATUS.READ,
        readAt: new Date(),
      });
    });

    await batch.commit();
    console.log(`Marked ${allDocs.length} messages as read`);
  } catch (error) {
    console.error("Error marking messages as read:", error);
  }
};

/**
 * Listen to recipient's online status and mark messages as delivered
 */
export const subscribeToRecipientStatus = (recipientEmail, onStatusChange) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", recipientEmail));
  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      const recipientData = snapshot.docs[0].data();
      onStatusChange(recipientData);
    }
  });

  return unsubscribe;
};