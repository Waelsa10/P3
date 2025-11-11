module.exports = [
"[project]/components/Sidebar.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Sidebar.jsx (Update the filtered chats section)
// Add these imports at the top
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// Add this state for sorting
const [chatsList, setChatsList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
// Add this useEffect to sort chats by latest message
(0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
    if (!chatsSnapshot || !user) {
        setChatsList([]);
        return;
    }
    const loadChatsWithLatestMessage = async ()=>{
        const chatsWithMessages = await Promise.all(chatsSnapshot.docs.filter((chat)=>{
            const deletedBy = chat.data().deletedBy || [];
            return !deletedBy.includes(user.email);
        }).map(async (chat)=>{
            try {
                const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(db, "chats", chat.id, "messages");
                const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["limit"])(1));
                const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
                const latestMessage = snapshot.empty ? null : {
                    ...snapshot.docs[0].data(),
                    timestamp: snapshot.docs[0].data().timestamp?.toMillis() || 0
                };
                return {
                    id: chat.id,
                    data: chat.data(),
                    latestMessage,
                    latestTimestamp: latestMessage?.timestamp || 0
                };
            } catch (error) {
                console.error("Error loading message for chat:", chat.id, error);
                return {
                    id: chat.id,
                    data: chat.data(),
                    latestMessage: null,
                    latestTimestamp: 0
                };
            }
        }));
        // Sort by latest message timestamp (newest first)
        const sortedChats = chatsWithMessages.sort((a, b)=>{
            return b.latestTimestamp - a.latestTimestamp;
        });
        setChatsList(sortedChats);
    };
    loadChatsWithLatestMessage();
}, [
    chatsSnapshot,
    user
]);
// Update the filtered chats logic
const filteredChats = chatsList.filter((chat)=>{
    if (!searchTerm.trim()) return true;
    const chatUsers = chat.data.users || [];
    const otherUser = chatUsers.find((email)=>email !== user.email);
    // For self-chat, search by own email
    if (!otherUser) {
        return user.email?.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return otherUser?.toLowerCase().includes(searchTerm.toLowerCase());
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Sidebar.jsx [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Sidebar.jsx [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=components_Sidebar_jsx_49c11a09._.js.map