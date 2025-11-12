// components/ChatScreen/utils/messageStatus.js

import { 
  collection, 
  query, 
  where, 
  getDocs, 
  updateDoc, 
  doc,
  onSnapshot,
  writeBatch,
  serverTimestamp,
  getDoc
} from "firebase/firestore";
import { db } from "../../../firebase";
import { MESSAGE_STATUS } from "../constants";

/**
 * Verify that a chat actually involves the specified users
 */
const verifyChatParticipants = async (chatId, userEmail1, userEmail2) => {
  try {
    if (!chatId) {
      console.error(`❌ verifyChatParticipants: chatId is missing`);
      return false;
    }

    const chatRef = doc(db, "chats", chatId);
    const chatSnap = await getDoc(chatRef);
    
    if (!chatSnap.exists()) {
      console.error(`❌ [Chat: ${chatId}] Chat does not exist`);
      return false;
    }
    
    const chatData = chatSnap.data();
    const participants = chatData.users || [];
    
    console.log(`🔍 [Chat: ${chatId}] Verifying participants:`, {
      chatUsers: participants,
      checkingUser1: userEmail1,
      checkingUser2: userEmail2,
    });
    
    if (!Array.isArray(participants)) {
      console.error(`❌ [Chat: ${chatId}] 'users' field is not an array`);
      return false;
    }

    if (participants.length === 0) {
      console.error(`❌ [Chat: ${chatId}] No users in chat`);
      return false;
    }
    
    const hasUser1 = participants.includes(userEmail1);
    const hasUser2 = !userEmail2 || participants.includes(userEmail2);
    
    if (!hasUser1 || !hasUser2) {
      console.error(`❌ [Chat: ${chatId}] User verification failed`);
      return false;
    }
    
    console.log(`✅ [Chat: ${chatId}] Participants verified`);
    return true;
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error verifying chat participants:`, error);
    return false;
  }
};

/**
 * Verify message belongs to the specific chat
 */
const verifyMessageInChat = (messageDoc, expectedChatId) => {
  const messagePath = messageDoc.ref.path;
  const pathParts = messagePath.split('/');
  
  if (pathParts.length >= 4 && pathParts[0] === 'chats' && pathParts[2] === 'messages') {
    const actualChatId = pathParts[1];
    
    if (actualChatId !== expectedChatId) {
      console.error(`❌ Message ${messageDoc.id} belongs to chat ${actualChatId}, not ${expectedChatId}`);
      return false;
    }
    return true;
  }
  
  console.error(`❌ Invalid message path: ${messagePath}`);
  return false;
};

/**
 * ✅ FIXED: Check if recipient is actually online
 * Now checks BOTH isOnline field AND lastSeen timestamp
 */
export const isRecipientOnline = async (recipientEmail) => {
  try {
    if (!recipientEmail) {
      console.log(`❓ isRecipientOnline: No recipientEmail provided`);
      return false;
    }

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", recipientEmail));
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log(`❓ Recipient ${recipientEmail} not found in users`);
      return false;
    }

    const recipientData = snapshot.docs[0].data();
    
    // ✅ PRIMARY CHECK: Use isOnline field (set by useOnlineStatus hook)
    if (recipientData.isOnline === true) {
      console.log(`🟢 Recipient ${recipientEmail} IS ONLINE (isOnline: true)`);
      return true;
    }

    // ✅ FALLBACK CHECK: If isOnline field is missing, check lastSeen
    if (recipientData.lastSeen) {
      const lastSeen = recipientData.lastSeen?.toDate?.() || new Date(recipientData.lastSeen);
      const now = new Date();
      const secondsAgo = (now - lastSeen) / 1000;

      const isOnlineByLastSeen = secondsAgo < 30;
      
      if (isOnlineByLastSeen) {
        console.log(`🟢 Recipient ${recipientEmail} appears online (last seen ${Math.round(secondsAgo)}s ago)`);
        return true;
      } else {
        console.log(`🔴 Recipient ${recipientEmail} OFFLINE (isOnline: ${recipientData.isOnline}, last seen ${Math.round(secondsAgo)}s ago)`);
        return false;
      }
    }

    console.log(`🔴 Recipient ${recipientEmail} OFFLINE (no isOnline field, no lastSeen)`);
    return false;
  } catch (error) {
    console.error("❌ Error checking recipient online status:", error);
    return false;
  }
};

/**
 * Mark a single message as delivered
 */
export const markMessageAsDelivered = async (chatId, messageId) => {
  try {
    if (!chatId || !messageId) {
      console.error(`❌ markMessageAsDelivered: Missing params`, { chatId, messageId });
      return;
    }

    const messageRef = doc(db, "chats", chatId, "messages", messageId);
    const messageSnap = await getDoc(messageRef);
    
    if (!messageSnap.exists()) {
      console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
      return;
    }
    
    await updateDoc(messageRef, {
      status: MESSAGE_STATUS.DELIVERED,
      deliveredAt: serverTimestamp(),
    });
    
    console.log(`✅ [Chat: ${chatId}] Message ${messageId} → DELIVERED`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking as delivered:`, error);
  }
};

/**
 * Mark a single message as read
 */
export const markMessageAsRead = async (chatId, messageId) => {
  try {
    if (!chatId || !messageId) {
      console.error(`❌ markMessageAsRead: Missing params`, { chatId, messageId });
      return;
    }

    const messageRef = doc(db, "chats", chatId, "messages", messageId);
    const messageSnap = await getDoc(messageRef);
    
    if (!messageSnap.exists()) {
      console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
      return;
    }
    
    await updateDoc(messageRef, {
      status: MESSAGE_STATUS.READ,
      readAt: serverTimestamp(),
    });
    
    console.log(`✅ [Chat: ${chatId}] Message ${messageId} → READ`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking as read:`, error);
  }
};

/**
 * Mark YOUR sent messages as DELIVERED when recipient comes online
 */
export const markYourMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail) => {
  try {
    if (!chatId || !currentUserEmail) {
      console.error(`❌ markYourMessagesAsDelivered: Missing params`);
      return;
    }

    console.log(`🔍 [Chat: ${chatId}] Checking if YOUR messages should be marked DELIVERED`);
    
    // Verify chat participants
    const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
    if (!isValidChat) {
      console.error(`❌ [Chat: ${chatId}] Invalid chat - ABORTING`);
      return;
    }
    
    // ✅ Check if recipient is online (uses fixed isRecipientOnline function)
    const online = await isRecipientOnline(recipientEmail);
    
    if (!online && recipientEmail) {
      console.log(`⏳ [Chat: ${chatId}] Recipient offline - NOT marking as DELIVERED yet`);
      return;
    }

    // Get messages sent by current user with status "sent"
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(
      messagesRef,
      where("user", "==", currentUserEmail),
      where("status", "==", MESSAGE_STATUS.SENT)
    );
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log(`✓ [Chat: ${chatId}] No SENT messages from you`);
      return;
    }

    const batch = writeBatch(db);
    let updateCount = 0;
    
    snapshot.docs.forEach((messageDoc) => {
      if (verifyMessageInChat(messageDoc, chatId)) {
        batch.update(messageDoc.ref, {
          status: MESSAGE_STATUS.DELIVERED,
          deliveredAt: serverTimestamp(),
        });
        updateCount++;
      }
    });

    if (updateCount > 0) {
      await batch.commit();
      console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} of YOUR messages as DELIVERED`);
    }
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error:`, error);
  }
};

/**
 * Mark RECIPIENT's messages as DELIVERED when you open the chat
 */
export const markRecipientMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail) => {
  try {
    if (!chatId || !recipientEmail) {
      console.error(`❌ markRecipientMessagesAsDelivered: Missing params`);
      return;
    }

    console.log(`🔍 [Chat: ${chatId}] Marking RECIPIENT's messages as DELIVERED`);
    
    if (currentUserEmail) {
      const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
      if (!isValidChat) {
        console.error(`❌ [Chat: ${chatId}] Invalid chat - ABORTING`);
        return;
      }
    }
    
    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(
      messagesRef,
      where("user", "==", recipientEmail),
      where("status", "==", MESSAGE_STATUS.SENT)
    );
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log(`✓ [Chat: ${chatId}] No SENT messages from recipient`);
      return;
    }

    const batch = writeBatch(db);
    let updateCount = 0;
    
    snapshot.docs.forEach((messageDoc) => {
      if (verifyMessageInChat(messageDoc, chatId)) {
        batch.update(messageDoc.ref, {
          status: MESSAGE_STATUS.DELIVERED,
          deliveredAt: serverTimestamp(),
        });
        updateCount++;
      }
    });

    if (updateCount > 0) {
      await batch.commit();
      console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} messages from recipient as DELIVERED`);
    }
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error:`, error);
  }
};

/**
 * Mark RECIPIENT's messages as READ when you view them
 */
export const markRecipientMessagesAsRead = async (chatId, recipientEmail, currentUserEmail) => {
  try {
    if (!chatId || !recipientEmail) {
      console.error(`❌ markRecipientMessagesAsRead: Missing params`);
      return;
    }

    console.log(`🔍 [Chat: ${chatId}] Marking RECIPIENT's messages as READ`);
    
    if (currentUserEmail) {
      const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
      if (!isValidChat) {
        console.error(`❌ [Chat: ${chatId}] Invalid chat - ABORTING`);
        return;
      }
    }
    
    const messagesRef = collection(db, "chats", chatId, "messages");
    
    // Get both SENT and DELIVERED messages
    const [sentSnapshot, deliveredSnapshot] = await Promise.all([
      getDocs(query(messagesRef, where("user", "==", recipientEmail), where("status", "==", MESSAGE_STATUS.SENT))),
      getDocs(query(messagesRef, where("user", "==", recipientEmail), where("status", "==", MESSAGE_STATUS.DELIVERED)))
    ]);

    const allDocs = [...sentSnapshot.docs, ...deliveredSnapshot.docs];
    
    if (allDocs.length === 0) {
      console.log(`✓ [Chat: ${chatId}] No unread messages from recipient`);
      return;
    }

    const batch = writeBatch(db);
    let updateCount = 0;
    
    allDocs.forEach((messageDoc) => {
      if (verifyMessageInChat(messageDoc, chatId)) {
        batch.update(messageDoc.ref, {
          status: MESSAGE_STATUS.READ,
          readAt: serverTimestamp(),
        });
        updateCount++;
      }
    });

    if (updateCount > 0) {
      await batch.commit();
      console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} messages from recipient as READ`);
    }
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error:`, error);
  }
};

/**
 * Listen to recipient's online status
 */
export const subscribeToRecipientStatus = (recipientEmail, onStatusChange) => {
  if (!recipientEmail) {
    console.error(`❌ subscribeToRecipientStatus: Missing recipientEmail`);
    return () => {};
  }

  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", recipientEmail));
  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      const recipientData = snapshot.docs[0].data();
      console.log(`👁️ Recipient ${recipientEmail} status changed:`, {
        isOnline: recipientData.isOnline,
        lastSeen: recipientData.lastSeen?.toDate?.(),
      });
      onStatusChange(recipientData);
    }
  }, (error) => {
    console.error("❌ Error subscribing to recipient status:", error);
  });

  return unsubscribe;
};

// Backwards compatibility
export const markUserMessagesAsDelivered = markRecipientMessagesAsDelivered;
export const markUserMessagesAsRead = markRecipientMessagesAsRead;