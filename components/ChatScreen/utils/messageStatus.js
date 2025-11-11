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
 * ✅ FIXED: Uses 'users' field to match your database structure
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
    
    // ✅ FIX: Use 'users' field (your actual database structure)
    const participants = chatData.users || chatData.participants || [];
    
    console.log(`🔍 [Chat: ${chatId}] Verifying participants:`, {
      chatUsers: participants,
      checkingUser1: userEmail1,
      checkingUser2: userEmail2,
      chatDataFields: Object.keys(chatData),
    });
    
    if (!Array.isArray(participants)) {
      console.error(`❌ [Chat: ${chatId}] 'users' field is not an array:`, typeof participants, participants);
      return false;
    }

    if (participants.length === 0) {
      console.error(`❌ [Chat: ${chatId}] No users in chat`);
      return false;
    }
    
    // Check if both users are participants
    const hasUser1 = participants.includes(userEmail1);
    const hasUser2 = !userEmail2 || participants.includes(userEmail2);
    
    if (!hasUser1) {
      console.error(`❌ [Chat: ${chatId}] User1 (${userEmail1}) NOT in chat. Chat users: [${participants.join(', ')}]`);
      return false;
    }
    
    if (!hasUser2) {
      console.error(`❌ [Chat: ${chatId}] User2 (${userEmail2}) NOT in chat. Chat users: [${participants.join(', ')}]`);
      return false;
    }
    
    console.log(`✅ [Chat: ${chatId}] Participants verified: Both ${userEmail1} and ${userEmail2} are in chat`);
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
  
  // Path should be: chats/{chatId}/messages/{messageId}
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
 * Mark a single message as delivered
 */
export const markMessageAsDelivered = async (chatId, messageId) => {
  try {
    if (!chatId || !messageId) {
      console.error(`❌ markMessageAsDelivered: Missing chatId or messageId`, { chatId, messageId });
      return;
    }

    const messageRef = doc(db, "chats", chatId, "messages", messageId);
    
    // Verify message exists in this specific chat
    const messageSnap = await getDoc(messageRef);
    if (!messageSnap.exists()) {
      console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
      return;
    }
    
    await updateDoc(messageRef, {
      status: MESSAGE_STATUS.DELIVERED,
      deliveredAt: serverTimestamp(),
    });
    console.log(`✅ [Chat: ${chatId}] Message ${messageId} marked as DELIVERED`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking message as delivered:`, error);
  }
};

/**
 * Mark a single message as read
 */
export const markMessageAsRead = async (chatId, messageId) => {
  try {
    if (!chatId || !messageId) {
      console.error(`❌ markMessageAsRead: Missing chatId or messageId`, { chatId, messageId });
      return;
    }

    const messageRef = doc(db, "chats", chatId, "messages", messageId);
    
    // Verify message exists in this specific chat
    const messageSnap = await getDoc(messageRef);
    if (!messageSnap.exists()) {
      console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
      return;
    }
    
    await updateDoc(messageRef, {
      status: MESSAGE_STATUS.READ,
      readAt: serverTimestamp(),
    });
    console.log(`✅ [Chat: ${chatId}] Message ${messageId} marked as READ`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking message as read:`, error);
  }
};

/**
 * Check if recipient is actually online (with threshold of 30 seconds)
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
    const lastSeen = recipientData.lastSeen?.toDate?.() || new Date(recipientData.lastSeen);
    const now = new Date();
    const secondsAgo = (now - lastSeen) / 1000;

    const isOnline = secondsAgo < 30;
    
    if (isOnline) {
      console.log(`🟢 Recipient ${recipientEmail} IS online (last seen ${Math.round(secondsAgo)}s ago)`);
    } else {
      console.log(`🔴 Recipient ${recipientEmail} OFFLINE (last seen ${Math.round(secondsAgo)}s ago)`);
    }

    return isOnline;
  } catch (error) {
    console.error("❌ Error checking recipient online status:", error);
    return false;
  }
};

/**
 * Mark YOUR messages (sent by currentUser) as DELIVERED ONLY when recipient is online
 */
export const markYourMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail) => {
  try {
    if (!chatId || !currentUserEmail) {
      console.error(`❌ markYourMessagesAsDelivered: Missing required params`, {
        chatId,
        currentUserEmail,
        recipientEmail
      });
      return;
    }

    console.log(`🔍 [Chat: ${chatId}] Attempting to mark YOUR messages as DELIVERED`);
    console.log(`   Current User: ${currentUserEmail}, Recipient: ${recipientEmail}`);
    
    // ✅ CRITICAL: Verify this is the correct chat BEFORE querying messages
    const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
    if (!isValidChat) {
      console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING message status update`);
      return;
    }
    
    // Check if recipient is actually online
    const online = await isRecipientOnline(recipientEmail);
    
    if (!online && recipientEmail) {
      console.log(`⏳ [Chat: ${chatId}] NOT marking YOUR messages as DELIVERED - recipient is offline`);
      return;
    }

    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(
      messagesRef,
      where("user", "==", currentUserEmail),
      where("status", "==", MESSAGE_STATUS.SENT)
    );
    
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      console.log(`✓ [Chat: ${chatId}] No SENT messages from you to mark as DELIVERED`);
      return;
    }

    console.log(`📋 [Chat: ${chatId}] Found ${snapshot.docs.length} messages to update`);

    const batch = writeBatch(db);
    let updateCount = 0;
    
    snapshot.docs.forEach((document) => {
      // Double-check message belongs to this chat
      if (!verifyMessageInChat(document, chatId)) {
        console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
        return;
      }

      const msgData = document.data();
      console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
      
      batch.update(document.ref, {
        status: MESSAGE_STATUS.DELIVERED,
        deliveredAt: serverTimestamp(),
      });
      updateCount++;
    });

    if (updateCount === 0) {
      console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
      return;
    }

    await batch.commit();
    console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} of YOUR messages as DELIVERED`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking YOUR messages as delivered:`, error);
  }
};

/**
 * Mark recipient's messages (FROM recipientEmail) as DELIVERED when you open chat
 */
export const markRecipientMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail = null) => {
  try {
    if (!chatId || !recipientEmail) {
      console.error(`❌ markRecipientMessagesAsDelivered: Missing required params`, {
        chatId,
        recipientEmail,
        currentUserEmail
      });
      return;
    }

    console.log(`🔍 [Chat: ${chatId}] Attempting to mark RECIPIENT messages as DELIVERED`);
    console.log(`   Recipient: ${recipientEmail}, Current User: ${currentUserEmail}`);
    
    // ✅ CRITICAL: Verify this is the correct chat
    if (currentUserEmail) {
      const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
      if (!isValidChat) {
        console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING`);
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
      console.log(`✓ [Chat: ${chatId}] No SENT messages from recipient to mark as DELIVERED`);
      return;
    }

    console.log(`📋 [Chat: ${chatId}] Found ${snapshot.docs.length} messages to update`);

    const batch = writeBatch(db);
    let updateCount = 0;
    
    snapshot.docs.forEach((document) => {
      if (!verifyMessageInChat(document, chatId)) {
        console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
        return;
      }

      const msgData = document.data();
      console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
      
      batch.update(document.ref, {
        status: MESSAGE_STATUS.DELIVERED,
        deliveredAt: serverTimestamp(),
      });
      updateCount++;
    });

    if (updateCount === 0) {
      console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
      return;
    }

    await batch.commit();
    console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} messages from recipient as DELIVERED`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking recipient messages as delivered:`, error);
  }
};

/**
 * Mark recipient's messages (FROM recipientEmail) as READ when you read them
 */
export const markRecipientMessagesAsRead = async (chatId, recipientEmail, currentUserEmail = null) => {
  try {
    if (!chatId || !recipientEmail) {
      console.error(`❌ markRecipientMessagesAsRead: Missing required params`, {
        chatId,
        recipientEmail,
        currentUserEmail
      });
      return;
    }

    console.log(`🔍 [Chat: ${chatId}] Attempting to mark RECIPIENT messages as READ`);
    console.log(`   Recipient: ${recipientEmail}, Current User: ${currentUserEmail}`);
    
    // ✅ CRITICAL: Verify this is the correct chat
    if (currentUserEmail) {
      const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
      if (!isValidChat) {
        console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING`);
        return;
      }
    }
    
    const messagesRef = collection(db, "chats", chatId, "messages");
    
    // Get all messages that are not yet read
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
    
    if (allDocs.length === 0) {
      console.log(`✓ [Chat: ${chatId}] No unread messages from recipient to mark as READ`);
      return;
    }

    console.log(`📋 [Chat: ${chatId}] Found ${allDocs.length} messages to update`);

    const batch = writeBatch(db);
    let updateCount = 0;
    
    allDocs.forEach((document) => {
      if (!verifyMessageInChat(document, chatId)) {
        console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
        return;
      }

      const msgData = document.data();
      console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
      
      batch.update(document.ref, {
        status: MESSAGE_STATUS.READ,
        readAt: serverTimestamp(),
      });
      updateCount++;
    });

    if (updateCount === 0) {
      console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
      return;
    }

    await batch.commit();
    console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} messages from recipient as READ`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking recipient messages as read:`, error);
  }
};

/**
 * Mark YOUR messages (sent by currentUser) as READ when recipient has read them
 */
export const markYourMessagesAsRead = async (chatId, currentUserEmail, recipientEmail = null) => {
  try {
    if (!chatId || !currentUserEmail) {
      console.error(`❌ markYourMessagesAsRead: Missing required params`, {
        chatId,
        currentUserEmail,
        recipientEmail
      });
      return;
    }

    console.log(`🔍 [Chat: ${chatId}] Attempting to mark YOUR messages as READ`);
    console.log(`   Current User: ${currentUserEmail}, Recipient: ${recipientEmail}`);
    
    // ✅ CRITICAL: Verify this is the correct chat
    if (recipientEmail) {
      const isValidChat = await verifyChatParticipants(chatId, currentUserEmail, recipientEmail);
      if (!isValidChat) {
        console.error(`❌ [Chat: ${chatId}] Chat validation failed - ABORTING`);
        return;
      }
    }
    
    const messagesRef = collection(db, "chats", chatId, "messages");
    
    const sentQuery = query(
      messagesRef,
      where("user", "==", currentUserEmail),
      where("status", "==", MESSAGE_STATUS.SENT)
    );
    
    const deliveredQuery = query(
      messagesRef,
      where("user", "==", currentUserEmail),
      where("status", "==", MESSAGE_STATUS.DELIVERED)
    );

    const [sentSnapshot, deliveredSnapshot] = await Promise.all([
      getDocs(sentQuery),
      getDocs(deliveredQuery)
    ]);

    const allDocs = [...sentSnapshot.docs, ...deliveredSnapshot.docs];
    
    if (allDocs.length === 0) {
      console.log(`✓ [Chat: ${chatId}] No unread messages from you to update`);
      return;
    }

    console.log(`📋 [Chat: ${chatId}] Found ${allDocs.length} messages to update`);

    const batch = writeBatch(db);
    let updateCount = 0;
    
    allDocs.forEach((document) => {
      if (!verifyMessageInChat(document, chatId)) {
        console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
        return;
      }

      const msgData = document.data();
      console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
      
      batch.update(document.ref, {
        status: MESSAGE_STATUS.READ,
        readAt: serverTimestamp(),
      });
      updateCount++;
    });

    if (updateCount === 0) {
      console.log(`⚠️ [Chat: ${chatId}] No valid messages to update after verification`);
      return;
    }

    await batch.commit();
    console.log(`✅ [Chat: ${chatId}] Marked ${updateCount} of YOUR messages as READ`);
  } catch (error) {
    console.error(`❌ [Chat: ${chatId}] Error marking YOUR messages as read:`, error);
  }
};

// Kept for backwards compatibility
export const markUserMessagesAsDelivered = markRecipientMessagesAsDelivered;
export const markUserMessagesAsRead = markRecipientMessagesAsRead;

/**
 * Listen to recipient's online status and mark messages as delivered
 */
export const subscribeToRecipientStatus = (recipientEmail, onStatusChange) => {
  if (!recipientEmail) {
    console.error(`❌ subscribeToRecipientStatus: Missing recipientEmail`);
    return () => {}; // Return empty unsubscribe function
  }

  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", recipientEmail));
  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      const recipientData = snapshot.docs[0].data();
      console.log(`👁️ Recipient ${recipientEmail} status:`, {
        lastSeen: recipientData.lastSeen?.toDate?.() || recipientData.lastSeen,
      });
      onStatusChange(recipientData);
    }
  }, (error) => {
    console.error("❌ Error subscribing to recipient status:", error);
  });

  return unsubscribe;
};