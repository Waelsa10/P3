module.exports = [
"[project]/utils/chatHelpers.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/chatHelpers.js
/**
 * Generate deterministic chat IDs for both users
 */ __turbopack_context__.s([
    "generateChatIds",
    ()=>generateChatIds,
    "generateSelfChatId",
    ()=>generateSelfChatId,
    "isSelfChat",
    ()=>isSelfChat
]);
const generateChatIds = (userEmail, recipientEmail)=>{
    const user = userEmail.toLowerCase().trim();
    const recipient = recipientEmail.toLowerCase().trim();
    return {
        myChatId: `chat_${user}_${recipient}`,
        theirChatId: `chat_${recipient}_${user}`
    };
};
const isSelfChat = (userEmail, recipientEmail)=>{
    return userEmail.toLowerCase().trim() === recipientEmail.toLowerCase().trim();
};
const generateSelfChatId = (userEmail)=>{
    return `chat_self_${userEmail.toLowerCase().trim()}`;
};
}),
"[project]/utils/createDualChat.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// utils/createDualChat.js
__turbopack_context__.s([
    "createDualChat",
    ()=>createDualChat,
    "dualChatExists",
    ()=>dualChatExists
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$chatHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/chatHelpers.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const createDualChat = async (currentUserEmail, recipientEmail)=>{
    try {
        console.log(`📝 Creating dual chat: ${currentUserEmail} ↔ ${recipientEmail}`);
        // Handle self-chat
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$chatHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isSelfChat"])(currentUserEmail, recipientEmail)) {
            console.log(`💬 Self-chat detected - creating single chat`);
            const selfChatId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$chatHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["generateSelfChatId"])(currentUserEmail);
            // Check if exists
            const selfDoc = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', selfChatId));
            if (selfDoc.exists()) {
                console.log(`ℹ️ Self-chat already exists: ${selfChatId}`);
                return {
                    myChatId: selfChatId,
                    theirChatId: selfChatId
                };
            }
            // Create self-chat document
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', selfChatId), {
                owner: currentUserEmail,
                recipient: currentUserEmail,
                users: [
                    currentUserEmail,
                    currentUserEmail
                ],
                createdAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                lastMessage: '',
                lastMessageTime: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                deletedBy: [],
                archivedBy: [],
                isSelfChat: true
            });
            console.log(`✅ Self-chat created: ${selfChatId}`);
            return {
                myChatId: selfChatId,
                theirChatId: selfChatId
            };
        }
        // Generate chat IDs
        const { myChatId, theirChatId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$chatHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["generateChatIds"])(currentUserEmail, recipientEmail);
        // Check if chats already exist
        const [myDoc, theirDoc] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', myChatId)),
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', theirChatId))
        ]);
        if (myDoc.exists() && theirDoc.exists()) {
            console.log(`ℹ️ Chats already exist`);
            return {
                myChatId,
                theirChatId
            };
        }
        // Create both chat documents
        const chatData1 = {
            owner: currentUserEmail,
            recipient: recipientEmail,
            users: [
                currentUserEmail,
                recipientEmail
            ],
            createdAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
            lastMessage: '',
            lastMessageTime: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
            deletedBy: [],
            archivedBy: []
        };
        const chatData2 = {
            owner: recipientEmail,
            recipient: currentUserEmail,
            users: [
                recipientEmail,
                currentUserEmail
            ],
            createdAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
            lastMessage: '',
            lastMessageTime: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
            deletedBy: [],
            archivedBy: []
        };
        await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', myChatId), chatData1),
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', theirChatId), chatData2)
        ]);
        console.log(`✅ Dual chats created:`, {
            myChatId,
            theirChatId
        });
        return {
            myChatId,
            theirChatId
        };
    } catch (error) {
        console.error('❌ Error creating dual chat:', error);
        throw error;
    }
};
const dualChatExists = async (currentUserEmail, recipientEmail)=>{
    try {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$chatHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["isSelfChat"])(currentUserEmail, recipientEmail)) {
            const selfChatId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$chatHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["generateSelfChatId"])(currentUserEmail);
            const selfDoc = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', selfChatId));
            return selfDoc.exists();
        }
        const { myChatId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$chatHelpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["generateChatIds"])(currentUserEmail, recipientEmail);
        const myDoc = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats', myChatId));
        return myDoc.exists();
    } catch (error) {
        console.error('❌ Error checking dual chat:', error);
        return false;
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=utils_7c57f24c._.js.map