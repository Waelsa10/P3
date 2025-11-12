module.exports = [
"[project]/utils/getRecipientEmail.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/getRecipientEmail.js
/**
 * Get the recipient email for a chat (WhatsApp-style)
 * @param {string[]} users - Array of user emails in the chat
 * @param {Object} userLoggedIn - Current logged-in user
 * @returns {string|null} Recipient email or null
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getRecipientEmail = (users, userLoggedIn)=>{
    // ===================================
    // 1️⃣ VALIDATION
    // ===================================
    if (!users || !Array.isArray(users) || !userLoggedIn?.email) {
        return null;
    }
    const currentUserEmail = userLoggedIn.email.toLowerCase().trim();
    // Clean and normalize all emails
    const cleanedUsers = users.filter((email)=>email && typeof email === 'string').map((email)=>email.toLowerCase().trim());
    // Chat must have at least 1 user
    if (cleanedUsers.length === 0) {
        return null;
    }
    // ===================================
    // 2️⃣ SELF-CHAT DETECTION (Saved Messages)
    // ===================================
    // Get unique participants
    const uniqueParticipants = [
        ...new Set(cleanedUsers)
    ];
    // If there's only ONE unique participant and it's ME → Self-chat
    if (uniqueParticipants.length === 1 && uniqueParticipants[0] === currentUserEmail) {
        return currentUserEmail;
    }
    // ===================================
    // 3️⃣ REGULAR CHAT - Find Other Person
    // ===================================
    // Find the first person who is NOT me
    const recipient = cleanedUsers.find((email)=>email !== currentUserEmail);
    if (recipient) {
        return recipient;
    }
    // No valid recipient found
    return null;
};
const __TURBOPACK__default__export__ = getRecipientEmail;
}),
"[project]/pages/chat/[id].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/chat/[id].js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dynamic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getRecipientEmail.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/Sidebar.js [client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const ChatScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/ChatScreen/index.jsx [client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function ChatPage() {
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [chat, setChat] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const chatId = router.query.id;
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    // Calculate if this is a self-chat
    const recipientEmail = chat?.users ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(chat.users, user) : null;
    const isSelfChat = recipientEmail === user?.email;
    // Detect mobile/tablet screen size
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const checkScreenSize = ()=>{
            const mobile = window.innerWidth <= 1024;
            setIsMobile(mobile);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return ()=>window.removeEventListener('resize', checkScreenSize);
    }, []);
    // Close sidebar when chat loads on mobile
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isMobile && chatId) {
            setSidebarOpen(false);
        }
    }, [
        chatId,
        isMobile
    ]);
    // Add online/offline detection
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleOnline = ()=>setIsOnline(true);
        const handleOffline = ()=>setIsOnline(false);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        setIsOnline(navigator.onLine);
        return ()=>{
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    // Fetch chat data
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!chatId || !isOnline) return;
        let mounted = true;
        const fetchChat = async ()=>{
            try {
                setError(null);
                const chatRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId);
                const chatSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(chatRef);
                if (!chatSnap.exists()) {
                    throw new Error("Chat not found");
                }
                if (mounted) {
                    const chatData = {
                        id: chatSnap.id,
                        ...chatSnap.data()
                    };
                    setChat(chatData);
                    console.log(`📱 [Chat ${chatId}] Loaded:`, {
                        users: chatData.users,
                        currentUser: user?.email
                    });
                }
            } catch (err) {
                console.error("Error fetching chat:", err);
                if (mounted) {
                    setError(err.message);
                    if (err.code === "not-found") {
                        router.replace("/");
                    }
                }
            } finally{
                if (mounted) setLoading(false);
            }
        };
        fetchChat();
        return ()=>{
            mounted = false;
        };
    }, [
        chatId,
        router,
        isOnline,
        user
    ]);
    // ✅ UPDATED: Mark received messages as read (NOT self-chat messages, NOT own sent messages)
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!chatId || !user?.email || !isOnline || isSelfChat) {
            console.log(`⏭️ [Chat ${chatId}] Skipping auto-read update:`, {
                hasChat: !!chatId,
                hasUser: !!user?.email,
                isOnline,
                isSelfChat
            });
            return;
        }
        let isActive = true;
        const markReceivedMessagesAsRead = async ()=>{
            try {
                console.log(`🔍 [Chat ${chatId}] Checking for messages to mark as read...`);
                const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
                const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(messagesRef);
                if (snapshot.empty || !isActive) {
                    console.log(`⏭️ [Chat ${chatId}] No messages to process`);
                    return;
                }
                const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
                let deliveredCount = 0;
                let readCount = 0;
                let skippedOwnMessages = 0;
                snapshot.docs.forEach((messageDoc)=>{
                    const data = messageDoc.data();
                    console.log(`📩 [Message ${messageDoc.id}]:`, {
                        from: data.user,
                        status: data.status,
                        isMyMessage: data.user === user.email
                    });
                    // ✅ CRITICAL: Only process messages FROM OTHER USERS
                    if (data.user === user.email) {
                        skippedOwnMessages++;
                        console.log(`  ⏭️ Skipping my own message`);
                        return;
                    }
                    // Update received "sent" messages to "delivered"
                    if (data.status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT) {
                        batch.update(messageDoc.ref, {
                            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
                            deliveredAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
                        });
                        deliveredCount++;
                        console.log(`  ✅ Will mark as DELIVERED`);
                    } else if (data.status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED) {
                        batch.update(messageDoc.ref, {
                            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
                            readAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
                        });
                        readCount++;
                        console.log(`  ✅ Will mark as READ`);
                    }
                });
                if ((deliveredCount > 0 || readCount > 0) && isActive) {
                    await batch.commit();
                    console.log(`✅ [Chat ${chatId}] Updated: ${deliveredCount} delivered, ${readCount} read (skipped ${skippedOwnMessages} own messages)`);
                } else {
                    console.log(`ℹ️ [Chat ${chatId}] No updates needed (skipped ${skippedOwnMessages} own messages)`);
                }
            } catch (error) {
                if (error.code !== 'failed-precondition') {
                    console.error(`❌ [Chat ${chatId}] Error updating messages:`, error);
                }
            }
        };
        // Initial update
        markReceivedMessagesAsRead();
        // Update on window focus
        const handleFocus = ()=>{
            if (isOnline && isActive) {
                console.log(`🔄 [Chat ${chatId}] Window focused - checking for new messages`);
                markReceivedMessagesAsRead();
            }
        };
        window.addEventListener('focus', handleFocus);
        return ()=>{
            isActive = false;
            window.removeEventListener('focus', handleFocus);
        };
    }, [
        chatId,
        user,
        isOnline,
        isSelfChat
    ]);
    if (!isOnline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
            darkMode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Offline - Chat"
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/chat/[id].js",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OfflineMessage, {
                    darkMode: darkMode,
                    children: "You are currently offline. Please check your internet connection."
                }, void 0, false, {
                    fileName: "[project]/pages/chat/[id].js",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/chat/[id].js",
            lineNumber: 221,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
            darkMode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Error - Chat"
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/chat/[id].js",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ErrorContainer, {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            children: "Error loading chat"
                        }, void 0, false, {
                            fileName: "[project]/pages/chat/[id].js",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/pages/chat/[id].js",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/"),
                            children: "Return to Home"
                        }, void 0, false, {
                            fileName: "[project]/pages/chat/[id].js",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/chat/[id].js",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/chat/[id].js",
            lineNumber: 234,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
            darkMode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/chat/[id].js",
                    lineNumber: 250,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoadingContainer, {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoadingSpinner, {
                            darkMode: darkMode
                        }, void 0, false, {
                            fileName: "[project]/pages/chat/[id].js",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: "Loading chat..."
                        }, void 0, false, {
                            fileName: "[project]/pages/chat/[id].js",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/chat/[id].js",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/chat/[id].js",
            lineNumber: 249,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Chat"
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/chat/[id].js",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AppContainer, {
                children: [
                    isMobile && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Overlay, {
                        onClick: ()=>setSidebarOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Sidebar, {
                        isMobile: isMobile,
                        sidebarOpen: sidebarOpen,
                        setSidebarOpen: setSidebarOpen
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatContainer, {
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatScreen, {
                            chat: chat,
                            messages: null,
                            isMobile: isMobile,
                            onToggleSidebar: ()=>setSidebarOpen(true)
                        }, void 0, false, {
                            fileName: "[project]/pages/chat/[id].js",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/chat/[id].js",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/chat/[id].js",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/chat/[id].js",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatPage;
// Styled Components
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
  min-height: 100vh;
  overflow: hidden;
`;
const AppContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`;
const Overlay = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  @media (min-width: 1025px) {
    display: none;
  }
`;
const ChatContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.darkMode ? '#121212' : '#f0f2f5'};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const ErrorContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#000'};
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

  > h3 {
    margin: 0 0 10px 0;
    color: ${(props)=>props.darkMode ? '#ff6b6b' : '#d32f2f'};
  }

  > p {
    margin: 10px 0;
    color: ${(props)=>props.darkMode ? '#ccc' : '#666'};
  }

  > button {
    margin-top: 10px;
    padding: 10px 20px;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s;

    &:hover {
      background: #20ba5a;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
const OfflineMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background-color: ${(props)=>props.darkMode ? '#3a3a00' : '#fff3cd'};
  color: ${(props)=>props.darkMode ? '#ffeb3b' : '#856404'};
  border: 1px solid ${(props)=>props.darkMode ? '#5a5a00' : '#ffeeba'};
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const LoadingContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : '#f0f2f5'};

  > p {
    margin-top: 20px;
    color: ${(props)=>props.darkMode ? '#888' : '#666'};
    font-size: 16px;
  }
`;
const LoadingSpinner = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 50px;
  height: 50px;
  border: 4px solid ${(props)=>props.darkMode ? '#333' : '#e0e0e0'};
  border-top: 4px solid #25D366;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1e33cc5f._.js.map