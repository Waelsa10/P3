(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Sidebar.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/Sidebar.jsx (Update the filtered chats section)
// Add these imports at the top
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
;
// Add this state for sorting
const [chatsList, setChatsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
// Add this useEffect to sort chats by latest message
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
                const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["collection"])(db, "chats", chat.id, "messages");
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["limit"])(1));
                const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.jsx [client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Sidebar.jsx [client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_Sidebar_jsx_10abc888._.js.map