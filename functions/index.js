// functions/index.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

// ✅ Auto-update message status to "delivered" when recipient comes online
exports.updateMessageStatusOnUserOnline = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();
    
    const userEmail = after.email;
    
    // Check if user just came online (lastSeen updated recently)
    const now = Date.now();
    const lastSeenTime = after.lastSeen?.toMillis() || 0;
    const wasRecentlyOnline = (now - lastSeenTime) < 30000; // Within 30 seconds
    
    if (!wasRecentlyOnline) return null;

    // Find all chats where this user is a participant
    const chatsSnapshot = await db.collection('chats')
      .where('users', 'array-contains', userEmail)
      .get();

    const updatePromises = [];

    for (const chatDoc of chatsSnapshot.docs) {
      const chatId = chatDoc.id;
      
      // Find all "sent" messages in this chat that are NOT from this user
      const messagesSnapshot = await db.collection('chats')
        .doc(chatId)
        .collection('messages')
        .where('status', '==', 'sent')
        .where('user', '!=', userEmail)
        .get();

      // Update all to "delivered"
      messagesSnapshot.docs.forEach(messageDoc => {
        updatePromises.push(
          messageDoc.ref.update({
            status: 'delivered',
            deliveredAt: admin.firestore.FieldValue.serverTimestamp()
          })
        );
      });
    }

    await Promise.all(updatePromises);
    
    console.log(`✅ Updated ${updatePromises.length} messages to "delivered" for ${userEmail}`);
    return null;
  });