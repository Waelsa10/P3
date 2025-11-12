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
"[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-firebase-hooks/firestore", () => require("react-firebase-hooks/firestore"));

module.exports = mod;
}),
"[project]/components/ChatScreen/components/MessageStatus.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/MessageStatus.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Done$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Done.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/DoneAll.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AccessTime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
function MessageStatus({ status, darkMode }) {
    if (!status || status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT) {
        // Single gray checkmark for sent
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Done$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED) {
        // Double gray checkmarks for delivered
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 23,
            columnNumber: 7
        }, this);
    }
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ) {
        // Double blue checkmarks for read
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            isRead: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return null;
}
const __TURBOPACK__default__export__ = MessageStatus;
const StatusIcon = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  display: inline-flex;
  align-items: center;
  color: ${(props)=>props.isRead ? '#53bdeb' : props.darkMode ? '#8696a0' : '#667781'};
  margin-left: 4px;
`;
// Styled Components
const StatusContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  vertical-align: middle;
`;
const SingleCheck = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Done$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 16px !important;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
`;
const DoubleCheckGray = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 16px !important;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
`;
const DoubleCheckBlue = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 16px !important;
  color: #53bdeb;
`;
const PendingIcon = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  font-size: 14px !important;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
  opacity: 0.6;
`;
}),
"[project]/components/Chat.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Chat.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getRecipientEmail.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageStatus.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
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
const Chat = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].memo(({ id, users, latestMessage: propLatestMessage })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const [latestMessage, setLatestMessage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(propLatestMessage || null);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    // ✅ MEMOIZED: Calculate recipient email
    const recipientEmail = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!users || !user) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(users, user);
    }, [
        users,
        user
    ]);
    // ✅ MEMOIZED: Check if self-chat
    const isSelfChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!users || !user) return false;
        const cleanUsers = [
            ...new Set(users.filter(Boolean).map((e)=>e.toLowerCase()))
        ];
        return cleanUsers.length === 1 && cleanUsers[0] === user.email.toLowerCase();
    }, [
        users,
        user
    ]);
    // Get recipient info - only query if recipientEmail exists
    const recipientQuery = recipientEmail && !isSelfChat ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail)) : null;
    const [recipientSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(recipientQuery);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    // Real-time listener for latest message and unread count
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Exit early if required data is missing
        if (!id || !user || !recipientEmail) {
            return;
        }
        // Real-time listener for latest message
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", id, "messages");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["limit"])(1));
        const unsubscribeMessages = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, (snapshot)=>{
            if (!snapshot.empty) {
                const messageData = snapshot.docs[0].data();
                setLatestMessage({
                    id: snapshot.docs[0].id,
                    ...messageData,
                    timestamp: messageData.timestamp?.toMillis()
                });
            } else {
                setLatestMessage(null);
            }
        }, (error)=>{
            console.error("Error listening to messages:", error);
        });
        // Real-time listener for unread count (skip for self-chat)
        let unsubscribeUnread = ()=>{};
        if (!isSelfChat && recipientEmail) {
            const unreadQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "in", [
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED
            ]));
            unsubscribeUnread = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(unreadQuery, (snapshot)=>{
                setUnreadCount(snapshot.docs.length);
            }, (error)=>{
                console.error("Error listening to unread count:", error);
                setUnreadCount(0);
            });
        }
        return ()=>{
            unsubscribeMessages();
            unsubscribeUnread();
        };
    }, [
        id,
        user,
        recipientEmail,
        isSelfChat
    ]);
    const enterChat = ()=>{
        router.push(`/chat/${id}`);
    };
    // ✅ MEMOIZED: Format timestamp
    const formatTimestamp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return (timestamp)=>{
            if (!timestamp) return "";
            const messageDate = new Date(timestamp);
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            // Check if today
            if (messageDate.toDateString() === today.toDateString()) {
                return messageDate.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            }
            // Check if yesterday
            if (messageDate.toDateString() === yesterday.toDateString()) {
                return "Yesterday";
            }
            // Check if within this week
            const weekAgo = new Date(today);
            weekAgo.setDate(weekAgo.getDate() - 7);
            if (messageDate > weekAgo) {
                return messageDate.toLocaleDateString([], {
                    weekday: 'short'
                });
            }
            // Older messages
            return messageDate.toLocaleDateString([], {
                month: 'short',
                day: 'numeric'
            });
        };
    }, []);
    // ✅ MEMOIZED: Truncate message
    const truncateMessage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return (message, maxLength = 35)=>{
            if (!message) return "";
            if (message.length <= maxLength) return message;
            return message.substring(0, maxLength) + "...";
        };
    }, []);
    // ✅ MEMOIZED: Get message preview
    const messagePreview = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!latestMessage) return "No messages yet";
        // Voice message
        if (latestMessage.voiceURL) {
            return "🎤 Voice message";
        }
        // File attachment
        if (latestMessage.fileURL) {
            if (latestMessage.fileType?.startsWith('image/')) {
                return "📷 Photo";
            }
            if (latestMessage.fileType?.startsWith('video/')) {
                return "🎥 Video";
            }
            if (latestMessage.fileType?.startsWith('audio/')) {
                return "🎵 Audio";
            }
            return `📎 ${truncateMessage(latestMessage.fileName || 'File', 25)}`;
        }
        // Regular text message
        return truncateMessage(latestMessage.message);
    }, [
        latestMessage,
        truncateMessage
    ]);
    const isOwnMessage = latestMessage?.user === user?.email;
    const hasUnread = unreadCount > 0 && !isOwnMessage;
    // Don't render if missing essential data
    if (!recipientEmail) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        onClick: enterChat,
        darkMode: darkMode,
        children: [
            isSelfChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                src: user?.photoURL,
                children: user?.email?.[0]?.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 193,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : recipient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                src: recipient?.photoURL
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 195,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                children: recipientEmail?.[0]?.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 197,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatContent, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatHeader, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecipientName, {
                                darkMode: darkMode,
                                children: isSelfChat ? `${recipientEmail} (You)` : recipientEmail
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 201,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            latestMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageTime, {
                                darkMode: darkMode,
                                children: formatTimestamp(latestMessage.timestamp)
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 205,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chat.js",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LastMessageContainer, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LastMessage, {
                                isOwnMessage: isOwnMessage,
                                children: [
                                    isOwnMessage && latestMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusWrapper, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            status: latestMessage.status || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                                            darkMode: darkMode
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chat.js",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chat.js",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageText, {
                                        hasUnread: hasUnread,
                                        darkMode: darkMode,
                                        children: messagePreview
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chat.js",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 211,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            hasUnread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UnreadBadge, {
                                darkMode: darkMode,
                                children: unreadCount
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 225,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chat.js",
                        lineNumber: 210,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chat.js",
        lineNumber: 191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, (prevProps, nextProps)=>{
    // ✅ Custom comparison - only re-render if these change
    return prevProps.id === nextProps.id && JSON.stringify(prevProps.users) === JSON.stringify(nextProps.users) && prevProps.latestMessage?.timestamp === nextProps.latestMessage?.timestamp && prevProps.latestMessage?.message === nextProps.latestMessage?.message;
});
Chat.displayName = 'Chat';
const __TURBOPACK__default__export__ = Chat;
// Styled Components
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  transition: background-color 0.2s;

  :hover {
    background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  }
`;
const UserAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"])`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`;
const ChatContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`;
const ChatHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
const RecipientName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#000'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;
const MessageTime = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#667781'};
  margin-left: 8px;
  flex-shrink: 0;
`;
const LastMessageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
const LastMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;
const StatusWrapper = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;
const MessageText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 14px;
  color: ${(props)=>{
    if (props.hasUnread) {
        return props.darkMode ? '#e0e0e0' : '#000';
    }
    return props.darkMode ? '#8696a0' : '#667781';
}};
  font-weight: ${(props)=>props.hasUnread ? '600' : '400'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;
const UnreadBadge = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  background-color: ${(props)=>props.darkMode ? '#00a884' : '#25d366'};
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  padding: 0 6px;
  flex-shrink: 0;
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/email-validator [external] (email-validator, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("email-validator", () => require("email-validator"));

module.exports = mod;
}),
"[project]/components/Sidebar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Sidebar.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Chat.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Search.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Chat.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$email$2d$validator__$5b$external$5d$__$28$email$2d$validator$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/email-validator [external] (email-validator, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/FormControlLabel/FormControlLabel.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Switch/Switch.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Typography/Typography.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/List/List.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItem/ListItem.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemSecondaryAction$2f$ListItemSecondaryAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
const Sidebar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].memo(({ isMobile, sidebarOpen, setSidebarOpen })=>{
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [headerAnchorEl, setHeaderAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedChatId, setSelectedChatId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedChatUsers, setSelectedChatUsers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [aboutOpen, setAboutOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [blockedUsersOpen, setBlockedUsersOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [chatsList, setChatsList] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode, toggleDarkMode } = darkModeContext || {
        darkMode: false,
        toggleDarkMode: ()=>{}
    };
    const userChatsRef = user ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("users", "array-contains", user.email)) : null;
    const [chatsSnapshot, loading, error] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(userChatsRef);
    // Get current user document to check blocked users
    const userDocRef = user ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid) : null;
    const [userDocSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(userDocRef ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("__name__", "==", user.uid)) : null);
    const currentUserData = userDocSnapshot?.docs?.[0]?.data();
    const blockedUsers = currentUserData?.blockedUsers || [];
    // ✅ OPTIMIZED: Load and sort chats with cleaned users array
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
                    const chatData = chat.data();
                    // ✅ FIXED: Validate and clean users array
                    if (!chatData.users || !Array.isArray(chatData.users)) {
                        console.error(`❌ Invalid users array for chat ${chat.id}:`, chatData.users);
                        return null;
                    }
                    // ✅ FIXED: Remove duplicates for display (but keep original for self-chat detection)
                    const cleanUsers = chatData.users.filter((email)=>email && typeof email === 'string');
                    const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chat.id, "messages");
                    const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])("timestamp", "desc"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["limit"])(1));
                    const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
                    const latestMessage = snapshot.empty ? null : {
                        ...snapshot.docs[0].data(),
                        timestamp: snapshot.docs[0].data().timestamp?.toMillis() || 0
                    };
                    return {
                        id: chat.id,
                        data: {
                            ...chatData,
                            users: cleanUsers
                        },
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
            // ✅ Filter out any null entries
            const validChats = chatsWithMessages.filter(Boolean);
            // Sort by latest message timestamp (newest first)
            const sortedChats = validChats.sort((a, b)=>{
                return b.latestTimestamp - a.latestTimestamp;
            });
            setChatsList(sortedChats);
        };
        loadChatsWithLatestMessage();
    }, [
        chatsSnapshot,
        user
    ]);
    // ✅ MEMOIZED: Check if chat already exists
    const chatAlreadyExist = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((recipientEmail)=>{
        if (!chatsSnapshot) return false;
        if (recipientEmail === user.email) {
            return !!chatsSnapshot.docs.find((chat)=>{
                const users = chat.data().users;
                return users.length === 2 && users[0] === user.email && users[1] === user.email;
            });
        }
        return !!chatsSnapshot.docs.find((chat)=>{
            const users = chat.data().users;
            return users.includes(recipientEmail) && users.includes(user.email);
        });
    }, [
        chatsSnapshot,
        user
    ]);
    // ✅ MEMOIZED: Create chat function
    const createChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!user) {
            console.error("No user logged in");
            return;
        }
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) {
            return;
        }
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$email$2d$validator__$5b$external$5d$__$28$email$2d$validator$2c$__cjs$29$__["validate"](input)) {
            alert("Please enter a valid email address");
            return;
        }
        if (chatAlreadyExist(input)) {
            alert("Chat already exists with this user");
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats"), {
                users: [
                    user.email,
                    input
                ],
                deletedBy: [],
                createdAt: new Date()
            });
        } catch (error) {
            console.error("Error creating chat:", error);
            alert(`Failed to create chat: ${error.message}`);
        }
    }, [
        user,
        chatAlreadyExist
    ]);
    // ✅ MEMOIZED: Menu handlers
    const handleMenuOpen = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((event, chatId, chatUsers)=>{
        setAnchorEl(event.currentTarget);
        setSelectedChatId(chatId);
        setSelectedChatUsers(chatUsers);
    }, []);
    const handleMenuClose = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setAnchorEl(null);
        setSelectedChatId(null);
        setSelectedChatUsers(null);
    }, []);
    const handleHeaderMenuOpen = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((event)=>{
        setHeaderAnchorEl(event.currentTarget);
    }, []);
    const handleHeaderMenuClose = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setHeaderAnchorEl(null);
    }, []);
    const handleSettingsOpen = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setSettingsOpen(true);
        handleHeaderMenuClose();
    }, [
        handleHeaderMenuClose
    ]);
    const handleSettingsClose = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setSettingsOpen(false);
    }, []);
    const handleAboutOpen = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setAboutOpen(true);
        handleHeaderMenuClose();
    }, [
        handleHeaderMenuClose
    ]);
    const handleAboutClose = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setAboutOpen(false);
    }, []);
    const handleBlockedUsersOpen = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setBlockedUsersOpen(true);
        handleHeaderMenuClose();
    }, [
        handleHeaderMenuClose
    ]);
    const handleBlockedUsersClose = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setBlockedUsersOpen(false);
    }, []);
    // ✅ MEMOIZED: Delete chat
    const deleteChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!selectedChatId || !user) return;
        try {
            const chatRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", selectedChatId);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(chatRef, {
                deletedBy: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayUnion"])(user.email)
            });
            handleMenuClose();
            alert("Chat deleted");
        } catch (error) {
            console.error("Error deleting chat:", error);
            alert("Failed to delete chat");
        }
    }, [
        selectedChatId,
        user,
        handleMenuClose
    ]);
    // ✅ MEMOIZED: Block user
    const blockUser = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!selectedChatUsers || !user) return;
        const recipientEmail = selectedChatUsers.find((email)=>email !== user.email);
        if (!recipientEmail || recipientEmail === user.email) {
            alert("You cannot block yourself");
            return;
        }
        try {
            const userDocRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userDocRef, {
                email: user.email,
                blockedUsers: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayUnion"])(recipientEmail)
            }, {
                merge: true
            });
            handleMenuClose();
            alert(`${recipientEmail} has been blocked. They can no longer send you messages.`);
        } catch (error) {
            console.error("Error blocking user:", error);
            alert("Failed to block user");
        }
    }, [
        selectedChatUsers,
        user,
        handleMenuClose
    ]);
    // ✅ MEMOIZED: Unblock user
    const unblockUser = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async (emailToUnblock)=>{
        if (!user) return;
        try {
            const userDocRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(userDocRef, {
                blockedUsers: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayRemove"])(emailToUnblock)
            });
            alert(`${emailToUnblock} has been unblocked`);
        } catch (error) {
            console.error("Error unblocking user:", error);
            alert("Failed to unblock user");
        }
    }, [
        user
    ]);
    // ✅ MEMOIZED: Check if user is blocked
    const isUserBlocked = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!selectedChatUsers || !user) return false;
        const recipientEmail = selectedChatUsers.find((email)=>email !== user.email);
        if (!recipientEmail) return false;
        return blockedUsers.includes(recipientEmail);
    }, [
        selectedChatUsers,
        user,
        blockedUsers
    ]);
    // ✅ MEMOIZED: Filter chats by search term
    const filteredChats = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!searchTerm.trim()) return chatsList;
        const searchLower = searchTerm.toLowerCase();
        return chatsList.filter((chat)=>{
            const chatUsers = chat.data.users || [];
            const otherUser = chatUsers.find((email)=>email !== user.email);
            if (!otherUser) {
                return user.email?.toLowerCase().includes(searchLower);
            }
            return otherUser?.toLowerCase().includes(searchLower);
        });
    }, [
        chatsList,
        searchTerm,
        user
    ]);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        darkMode: darkMode,
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/components/Sidebar.js",
        lineNumber: 337,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            isMobile && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Overlay, {
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 343,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
                darkMode: darkMode,
                isMobile: isMobile,
                sidebarOpen: sidebarOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Header, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].signOut(),
                                src: user.photoURL
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 352,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(IconsContainer, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handleHeaderMenuOpen,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 357,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>setSidebarOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 353,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 351,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Search, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 369,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SearchInput, {
                                darkMode: darkMode,
                                placeholder: "Search in chats",
                                type: "text",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 370,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 368,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SidebarButton, {
                        onClick: createChat,
                        disabled: loading,
                        children: "Start a new chat"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 379,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoadingContainer, {
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "Loading chats..."
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 385,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 384,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : filteredChats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatWrapper, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    id: chat.id,
                                    users: chat.data.users,
                                    latestMessage: chat.latestMessage
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 390,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OptionsButton, {
                                    onClick: (e)=>handleMenuOpen(e, chat.id, chat.data.users),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 398,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, chat.id, true, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 389,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        anchorEl: headerAnchorEl,
                        open: Boolean(headerAnchorEl),
                        onClose: handleHeaderMenuClose,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleSettingsOpen,
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 415,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleBlockedUsersOpen,
                                children: "Blocked Users"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 416,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleAboutOpen,
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 417,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 404,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        anchorEl: anchorEl,
                        open: Boolean(anchorEl),
                        onClose: handleMenuClose,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            selectedChatUsers && selectedChatUsers.find((email)=>email !== user.email) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: isUserBlocked() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>{
                                        const recipientEmail = selectedChatUsers.find((email)=>email !== user.email);
                                        unblockUser(recipientEmail);
                                        handleMenuClose();
                                    },
                                    children: "Unblock User"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 434,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: blockUser,
                                    children: "Block User"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 442,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: deleteChat,
                                children: "Delete Chat"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 446,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 420,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: settingsOpen,
                        onClose: handleSettingsClose,
                        maxWidth: "sm",
                        fullWidth: true,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 461,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    control: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Switch$2f$Switch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        checked: darkMode,
                                        onChange: toggleDarkMode,
                                        color: "primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, void 0),
                                    label: "Dark Mode"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 462,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleSettingsClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 474,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 449,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: blockedUsersOpen,
                        onClose: handleBlockedUsersClose,
                        maxWidth: "sm",
                        fullWidth: true,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "Blocked Users"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 491,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: blockedUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "body2",
                                    color: "textSecondary",
                                    children: "No blocked users"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: blockedUsers.map((blockedEmail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    primary: blockedEmail,
                                                    primaryTypographyProps: {
                                                        style: {
                                                            color: darkMode ? '#e0e0e0' : 'black'
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 501,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemSecondaryAction$2f$ListItemSecondaryAction$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        variant: "outlined",
                                                        size: "small",
                                                        onClick: ()=>unblockUser(blockedEmail),
                                                        children: "Unblock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.js",
                                                        lineNumber: 508,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 507,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, blockedEmail, true, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 492,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleBlockedUsersClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 521,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 479,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        open: aboutOpen,
                        onClose: handleAboutClose,
                        maxWidth: "sm",
                        fullWidth: true,
                        PaperProps: {
                            style: {
                                backgroundColor: darkMode ? '#1e1e1e' : 'white',
                                color: darkMode ? '#e0e0e0' : 'black'
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 538,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "h6",
                                        gutterBottom: true,
                                        children: "Chat Application"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body1",
                                        paragraph: true,
                                        children: "Version: 1.0.0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        paragraph: true,
                                        children: "A real-time messaging application built with React and Firebase. Connect with friends and family through instant messaging."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        paragraph: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: "Features:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 551,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 550,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        component: "div",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Real-time messaging"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "User authentication"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 556,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Search chats"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 557,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Block/Unblock users"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 558,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Delete conversations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 559,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Dark mode support"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 560,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Chat with yourself (like WhatsApp)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 561,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Sorted by latest message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 562,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "File sharing support"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 563,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Voice messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 564,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 553,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        color: "textSecondary",
                                        style: {
                                            marginTop: 20
                                        },
                                        children: "© 2024 Chat App. All rights reserved."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 567,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 539,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleAboutClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 572,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 571,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 526,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 346,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
});
Sidebar.displayName = 'Sidebar';
const __TURBOPACK__default__export__ = Sidebar;
// Styled Components
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
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 0.45;
  border-right: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 1024px) {
    ${(props)=>props.sidebarOpen ? `
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 999;
      max-width: 100%;
      width: 100%;
      transform: translateX(0);
    ` : `
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 999;
      max-width: 85%;
      width: 85%;
      transform: translateX(-100%);
    `}
    transition: transform 0.3s ease-in-out;
    box-shadow: ${(props)=>props.sidebarOpen ? '2px 0 10px rgba(0,0,0,0.3)' : 'none'};
  }
`;
const UserAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const SidebarButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Search = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
`;
const SearchInput = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  
  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const Header = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
`;
const IconsContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
`;
const ChatWrapper = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &:hover {
    background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  }
`;
const OptionsButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])`
  visibility: hidden;
  
  ${ChatWrapper}:hover & {
    visibility: visible;
  }
`;
const LoadingContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${(props)=>props.darkMode ? '#888' : '#666'};
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useEmojiPicker.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/hooks/useEmojiPicker.js
__turbopack_context__.s([
    "useEmojiPicker",
    ()=>useEmojiPicker
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
;
;
const useEmojiPicker = ()=>{
    const [emojiAnchorEl, setEmojiAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [selectedEmojiCategory, setSelectedEmojiCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("recent");
    const [recentEmojis, setRecentEmojis] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [emojiSearchTerm, setEmojiSearchTerm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    // Load recent emojis from localStorage
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem("recentEmojis");
        if (stored) {
            setRecentEmojis(JSON.parse(stored));
        }
    }, []);
    const saveRecentEmoji = (emoji)=>{
        const updated = [
            emoji,
            ...recentEmojis.filter((e)=>e !== emoji)
        ].slice(0, 30);
        setRecentEmojis(updated);
        localStorage.setItem("recentEmojis", JSON.stringify(updated));
    };
    const handleEmojiPickerOpen = (event)=>{
        setEmojiAnchorEl(event.currentTarget);
    };
    const handleEmojiPickerClose = ()=>{
        setEmojiAnchorEl(null);
        setEmojiSearchTerm("");
    };
    const getFilteredEmojis = ()=>{
        if (selectedEmojiCategory === "recent") {
            return recentEmojis;
        }
        const categoryEmojis = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EMOJIS"][selectedEmojiCategory] || [];
        return categoryEmojis;
    };
    return {
        emojiAnchorEl,
        selectedEmojiCategory,
        setSelectedEmojiCategory,
        emojiSearchTerm,
        setEmojiSearchTerm,
        recentEmojis,
        handleEmojiPickerOpen,
        handleEmojiPickerClose,
        saveRecentEmoji,
        getFilteredEmojis,
        openEmojiPicker: Boolean(emojiAnchorEl)
    };
};
}),
"[project]/lib/cloudinary.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/cloudinary.js
__turbopack_context__.s([
    "testCloudinaryConfig",
    ()=>testCloudinaryConfig,
    "uploadToCloudinary",
    ()=>uploadToCloudinary
]);
const CLOUDINARY_CLOUD_NAME = ("TURBOPACK compile-time value", "dlmdxpf0j");
const CLOUDINARY_UPLOAD_PRESET = ("TURBOPACK compile-time value", "chat_uploads");
// Validate environment variables
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;
const uploadToCloudinary = async (file, onProgress = null)=>{
    return new Promise((resolve, reject)=>{
        // Validation
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!file) {
            reject(new Error('No file provided'));
            return;
        }
        console.log('🔄 Starting Cloudinary upload...');
        console.log('📦 File size:', file.size, 'bytes');
        console.log('📦 File type:', file.type);
        console.log('☁️ Cloud name:', CLOUDINARY_CLOUD_NAME);
        console.log('🔑 Upload preset:', CLOUDINARY_UPLOAD_PRESET);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', 'chat-app');
        const xhr = new XMLHttpRequest();
        // Track upload progress
        if (onProgress) {
            xhr.upload.addEventListener('progress', (e)=>{
                if (e.lengthComputable) {
                    const percentComplete = e.loaded / e.total * 100;
                    console.log(`📤 Upload progress: ${Math.round(percentComplete)}%`);
                    onProgress(percentComplete);
                }
            });
        }
        xhr.addEventListener('load', ()=>{
            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    console.log('✅ Upload successful!');
                    console.log('🔗 URL:', response.secure_url);
                    resolve(response.secure_url);
                } catch (parseError) {
                    console.error('❌ Failed to parse response:', parseError);
                    reject(new Error('Failed to parse Cloudinary response'));
                }
            } else {
                console.error('❌ Upload failed with status:', xhr.status);
                console.error('📄 Response:', xhr.responseText);
                let errorMessage = `Upload failed (${xhr.status})`;
                try {
                    const errorResponse = JSON.parse(xhr.responseText);
                    errorMessage = errorResponse.error?.message || errorMessage;
                } catch (e) {
                // Ignore parsing error
                }
                reject(new Error(errorMessage));
            }
        });
        xhr.addEventListener('error', ()=>{
            console.error('❌ Network error during upload');
            reject(new Error('Network error during upload'));
        });
        xhr.addEventListener('abort', ()=>{
            console.log('⚠️ Upload cancelled');
            reject(new Error('Upload cancelled'));
        });
        console.log('🚀 Sending request to:', CLOUDINARY_URL);
        xhr.open('POST', CLOUDINARY_URL);
        xhr.send(formData);
    });
};
const testCloudinaryConfig = ()=>{
    console.log('🧪 Testing Cloudinary Configuration:');
    console.log('Cloud Name:', CLOUDINARY_CLOUD_NAME || '❌ NOT SET');
    console.log('Upload Preset:', CLOUDINARY_UPLOAD_PRESET || '❌ NOT SET');
    console.log('URL:', CLOUDINARY_URL);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    console.log('✅ Cloudinary configuration looks good!');
    return true;
};
}),
"[project]/components/ChatScreen/utils.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "buildReplyData",
    ()=>buildReplyData,
    "checkIfBlocked",
    ()=>checkIfBlocked,
    "formatFileSize",
    ()=>formatFileSize,
    "formatTime",
    ()=>formatTime,
    "getFileIcon",
    ()=>getFileIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const checkIfBlocked = async (currentUserEmail, recipientEmail)=>{
    try {
        // Don't check blocking for self-chat
        if (currentUserEmail === recipientEmail) {
            return false;
        }
        // Check if current user is blocked by recipient
        const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail));
        const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (!querySnapshot.empty) {
            const recipientData = querySnapshot.docs[0].data();
            const blockedUsers = recipientData.blockedUsers || [];
            if (blockedUsers.includes(currentUserEmail)) {
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error("Error checking if blocked:", error);
        return false;
    }
};
const buildReplyData = (replyingTo)=>{
    if (!replyingTo) return null;
    const replyData = {
        messageId: replyingTo.id,
        user: replyingTo.user,
        message: replyingTo.message
    };
    if (replyingTo.fileURL) {
        replyData.fileURL = replyingTo.fileURL;
        replyData.fileName = replyingTo.fileName;
        replyData.fileType = replyingTo.fileType;
    }
    if (replyingTo.voiceURL) {
        replyData.voiceURL = replyingTo.voiceURL;
        replyData.duration = replyingTo.duration;
    }
    return replyData;
};
const formatFileSize = (bytes)=>{
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
};
const formatTime = (seconds)=>{
    if (!seconds || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
};
const getFileIcon = (fileType)=>{
    if (fileType?.startsWith("image/")) return "🖼️";
    if (fileType?.startsWith("video/")) return "🎥";
    if (fileType?.startsWith("audio/")) return "🎵";
    if (fileType?.includes("pdf")) return "📄";
    if (fileType?.includes("word") || fileType?.includes("document")) return "📝";
    if (fileType?.includes("sheet") || fileType?.includes("excel")) return "📊";
    if (fileType?.includes("zip") || fileType?.includes("rar")) return "📦";
    return "📎";
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useFileUpload.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useFileUpload.js
__turbopack_context__.s([
    "useFileUpload",
    ()=>useFileUpload
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudinary.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const useFileUpload = (chatId, user, recipientEmail)=>{
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [filePreview, setFilePreview] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showFileConfirmation, setShowFileConfirmation] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleFileSelect = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Create preview for images
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    setFilePreview(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setFilePreview(null);
            }
            setShowFileConfirmation(true);
        }
    };
    const cancelFileSelection = ()=>{
        setSelectedFile(null);
        setFilePreview(null);
        setShowFileConfirmation(false);
        setUploadProgress(0);
    };
    const sendFileMessage = async (input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat = false)=>{
        if (!selectedFile || !chatId || !user || !recipientEmail) return;
        setIsUploading(true);
        setSendingError(null);
        try {
            // Skip blocking check for self-chat
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    setIsUploading(false);
                    return;
                }
            }
            // Upload to Cloudinary with progress tracking
            const fileURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["uploadToCloudinary"])(selectedFile, (progress)=>{
                setUploadProgress(progress);
            });
            // Update user's last seen
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            // Build message data
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: input || "",
                user: user.email,
                photoURL: user.photoURL,
                fileURL: fileURL,
                fileName: selectedFile.name,
                fileType: selectedFile.type,
                fileSize: selectedFile.size,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            // Send the message
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            // Reset states
            setInput("");
            setSelectedFile(null);
            setFilePreview(null);
            setShowFileConfirmation(false);
            setUploadProgress(0);
            setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error("Error sending file:", error);
            setSendingError(`Failed to send file: ${error.message}`);
        } finally{
            setIsUploading(false);
        }
    };
    return {
        selectedFile,
        filePreview,
        showFileConfirmation,
        uploadProgress,
        isUploading,
        handleFileSelect,
        cancelFileSelection,
        sendFileMessage
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useVoiceRecording.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useVoiceRecording.js
__turbopack_context__.s([
    "useVoiceRecording",
    ()=>useVoiceRecording
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cloudinary.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const useVoiceRecording = (chatId, user, recipientEmail)=>{
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [recordingTime, setRecordingTime] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [audioBlob, setAudioBlob] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    // Recording timer
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let interval;
        if (isRecording) {
            interval = setInterval(()=>{
                setRecordingTime((prev)=>prev + 1);
            }, 1000);
        } else {
            setRecordingTime(0);
        }
        return ()=>clearInterval(interval);
    }, [
        isRecording
    ]);
    const startRecording = async (setSendingError)=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            // Check for supported MIME types
            let mimeType = 'audio/webm';
            if (!MediaRecorder.isTypeSupported(mimeType)) {
                mimeType = 'audio/webm;codecs=opus';
                if (!MediaRecorder.isTypeSupported(mimeType)) {
                    mimeType = 'audio/ogg;codecs=opus';
                    if (!MediaRecorder.isTypeSupported(mimeType)) {
                        mimeType = 'audio/mp4';
                        if (!MediaRecorder.isTypeSupported(mimeType)) {
                            mimeType = ''; // Let browser choose
                        }
                    }
                }
            }
            console.log('Using MIME type:', mimeType || 'default');
            const options = mimeType ? {
                mimeType
            } : {};
            const mediaRecorder = new MediaRecorder(stream, options);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (event)=>{
                console.log('Data available:', event.data.size, 'bytes');
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = ()=>{
                console.log('Recording stopped, chunks:', audioChunksRef.current.length);
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: mimeType || 'audio/webm'
                });
                console.log('Blob size:', audioBlob.size);
                // Check if blob has data
                if (audioBlob.size > 0) {
                    setAudioBlob(audioBlob);
                } else {
                    console.error('No audio data captured');
                    setSendingError("Recording failed: No audio data captured. Please try again.");
                }
                stream.getTracks().forEach((track)=>track.stop());
            };
            mediaRecorder.onerror = (event)=>{
                console.error('MediaRecorder error:', event.error);
                setSendingError(`Recording error: ${event.error.name}`);
            };
            // Start with timeslice to ensure data is collected periodically
            mediaRecorder.start(100); // Collect data every 100ms
            setIsRecording(true);
        } catch (error) {
            console.error("Error starting recording:", error);
            setSendingError("Failed to access microphone. Please check permissions.");
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };
    const cancelRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
        setAudioBlob(null);
        setRecordingTime(0);
    };
    const sendVoiceMessage = async (replyingTo, setSendingError, setReplyingTo, scrollToBottom, isSelfChat = false)=>{
        if (!audioBlob || !chatId || !user || !recipientEmail) return;
        setIsUploading(true);
        setSendingError(null);
        try {
            // Skip blocking check for self-chat
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    setIsUploading(false);
                    return;
                }
            }
            // Upload to Cloudinary with progress tracking
            const voiceURL = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cloudinary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["uploadToCloudinary"])(audioBlob, (progress)=>{
                setUploadProgress(progress);
            });
            // Update user's last seen
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
            }, {
                merge: true
            });
            // Build message data
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: "",
                user: user.email,
                photoURL: user.photoURL,
                voiceURL: voiceURL,
                voiceDuration: recordingTime,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            // Add reply data if replying
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            // Send the message
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            // Reset states
            setAudioBlob(null);
            setUploadProgress(0);
            setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error("Error sending voice message:", error);
            setSendingError(`Failed to send voice message: ${error.message}`);
        } finally{
            setIsUploading(false);
        }
    };
    return {
        isRecording,
        recordingTime,
        audioBlob,
        uploadProgress,
        isUploading,
        startRecording,
        stopRecording,
        cancelRecording,
        sendVoiceMessage
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useRecipientData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useRecipientData.js
__turbopack_context__.s([
    "useRecipientData",
    ()=>useRecipientData
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const useRecipientData = (user, chat)=>{
    // ✅ Return early with null values if data is not ready
    if (!user || !chat || !chat.users || chat.users.length === 0) {
        console.log("⏳ useRecipientData: Waiting for chat data...", {
            hasUser: !!user,
            hasChat: !!chat,
            hasUsers: !!chat?.users,
            usersLength: chat?.users?.length
        });
        return {
            recipientEmail: null,
            recipient: null,
            recipientSnapshot: null,
            isSelfChat: false,
            isLoading: true
        };
    }
    // ✅ Memoize recipient calculation to prevent unnecessary recalculations
    const recipientData = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        // ✅ Clean the users array first
        const cleanUsers = [
            ...new Set(chat.users.filter(Boolean))
        ];
        console.log("🔍 useRecipientData: Processing chat", {
            originalUsers: chat.users,
            cleanUsers: cleanUsers,
            currentUser: user.email
        });
        // Normalize emails for comparison
        const normalizedUserEmail = user.email.toLowerCase();
        const normalizedUsers = cleanUsers.map((email)=>email?.toLowerCase()).filter(Boolean);
        // Check if this is a self-chat (all users are the same person)
        // components/ChatScreen/hooks/useRecipientData.js (in the useMemo)
        // Check if this is a self-chat
        const isSelfChat = // Single user that matches current user
        normalizedUsers.length === 1 && normalizedUsers[0] === normalizedUserEmail || normalizedUsers.length === 2 && normalizedUsers.every((email)=>email === normalizedUserEmail);
        console.log("🔍 useRecipientData: Self-chat check", {
            normalizedUsers,
            normalizedUserEmail,
            isSelfChat
        });
        // Handle self-chat case - use current user's email
        if (isSelfChat) {
            console.log("💬 useRecipientData: Self-chat detected - recipient is yourself");
            return {
                recipientEmail: user.email,
                isSelfChat: true
            };
        }
        // Find the OTHER user (not the current user)
        const recipientEmail = cleanUsers.find((userEmail)=>userEmail && userEmail.toLowerCase() !== normalizedUserEmail);
        // ✅ IMPORTANT: If we can't find a recipient, DON'T fallback to user.email
        if (!recipientEmail) {
            console.error("❌ useRecipientData: Could not find recipient in chat.users", {
                cleanUsers,
                currentUser: user.email
            });
            return {
                recipientEmail: null,
                isSelfChat: false
            };
        }
        console.log("✅ useRecipientData: Found recipient", {
            recipient: recipientEmail,
            currentUser: user.email,
            isSelfChat: false
        });
        return {
            recipientEmail,
            isSelfChat: false
        };
    }, [
        chat.users,
        user.email
    ]);
    // ✅ Only query Firestore if we have a valid recipient email
    const recipientQuery = recipientData.recipientEmail ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientData.recipientEmail)) : null;
    const [recipientSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(recipientQuery);
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    return {
        recipientEmail: recipientData.recipientEmail,
        recipient: recipient || {
            email: recipientData.recipientEmail,
            photoURL: recipientData.isSelfChat ? user.photoURL : null
        },
        recipientSnapshot,
        isSelfChat: recipientData.isSelfChat,
        isLoading: false
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useMessages.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useMessages.js
__turbopack_context__.s([
    "useMessages",
    ()=>useMessages
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/firestore [external] (react-firebase-hooks/firestore, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const useMessages = (chatId)=>{
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!chatId) return null;
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
    }, [
        chatId
    ]);
    const messagesQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!messagesRef) return null;
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])("timestamp", "asc"));
    }, [
        messagesRef
    ]);
    const [messagesSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(messagesQuery || null);
    return {
        messagesSnapshot
    };
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/utils/messageStatus.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/utils/messageStatus.js
__turbopack_context__.s([
    "isRecipientOnline",
    ()=>isRecipientOnline,
    "markMessageAsDelivered",
    ()=>markMessageAsDelivered,
    "markMessageAsRead",
    ()=>markMessageAsRead,
    "markRecipientMessagesAsDelivered",
    ()=>markRecipientMessagesAsDelivered,
    "markRecipientMessagesAsRead",
    ()=>markRecipientMessagesAsRead,
    "markUserMessagesAsDelivered",
    ()=>markUserMessagesAsDelivered,
    "markUserMessagesAsRead",
    ()=>markUserMessagesAsRead,
    "markYourMessagesAsDelivered",
    ()=>markYourMessagesAsDelivered,
    "markYourMessagesAsRead",
    ()=>markYourMessagesAsRead,
    "subscribeToRecipientStatus",
    ()=>subscribeToRecipientStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
/**
 * Verify that a chat actually involves the specified users
 * ✅ FIXED: Uses 'users' field to match your database structure
 */ const verifyChatParticipants = async (chatId, userEmail1, userEmail2)=>{
    try {
        if (!chatId) {
            console.error(`❌ verifyChatParticipants: chatId is missing`);
            return false;
        }
        const chatRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId);
        const chatSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(chatRef);
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
            chatDataFields: Object.keys(chatData)
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
 */ const verifyMessageInChat = (messageDoc, expectedChatId)=>{
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
const markMessageAsDelivered = async (chatId, messageId)=>{
    try {
        if (!chatId || !messageId) {
            console.error(`❌ markMessageAsDelivered: Missing chatId or messageId`, {
                chatId,
                messageId
            });
            return;
        }
        const messageRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId);
        // Verify message exists in this specific chat
        const messageSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(messageRef);
        if (!messageSnap.exists()) {
            console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
            deliveredAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
        });
        console.log(`✅ [Chat: ${chatId}] Message ${messageId} marked as DELIVERED`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking message as delivered:`, error);
    }
};
const markMessageAsRead = async (chatId, messageId)=>{
    try {
        if (!chatId || !messageId) {
            console.error(`❌ markMessageAsRead: Missing chatId or messageId`, {
                chatId,
                messageId
            });
            return;
        }
        const messageRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId);
        // Verify message exists in this specific chat
        const messageSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(messageRef);
        if (!messageSnap.exists()) {
            console.error(`❌ [Chat: ${chatId}] Message ${messageId} not found`);
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(messageRef, {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
            readAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
        });
        console.log(`✅ [Chat: ${chatId}] Message ${messageId} marked as READ`);
    } catch (error) {
        console.error(`❌ [Chat: ${chatId}] Error marking message as read:`, error);
    }
};
const isRecipientOnline = async (recipientEmail)=>{
    try {
        if (!recipientEmail) {
            console.log(`❓ isRecipientOnline: No recipientEmail provided`);
            return false;
        }
        const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
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
const markYourMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail)=>{
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
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", currentUserEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (snapshot.empty) {
            console.log(`✓ [Chat: ${chatId}] No SENT messages from you to mark as DELIVERED`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${snapshot.docs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        snapshot.docs.forEach((document)=>{
            // Double-check message belongs to this chat
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
                deliveredAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
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
const markRecipientMessagesAsDelivered = async (chatId, recipientEmail, currentUserEmail = null)=>{
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
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const snapshot = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(q);
        if (snapshot.empty) {
            console.log(`✓ [Chat: ${chatId}] No SENT messages from recipient to mark as DELIVERED`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${snapshot.docs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        snapshot.docs.forEach((document)=>{
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED,
                deliveredAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
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
const markRecipientMessagesAsRead = async (chatId, recipientEmail, currentUserEmail = null)=>{
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
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        // Get all messages that are not yet read
        const sentQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const deliveredQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", recipientEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED));
        const [sentSnapshot, deliveredSnapshot] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(sentQuery),
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(deliveredQuery)
        ]);
        const allDocs = [
            ...sentSnapshot.docs,
            ...deliveredSnapshot.docs
        ];
        if (allDocs.length === 0) {
            console.log(`✓ [Chat: ${chatId}] No unread messages from recipient to mark as READ`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${allDocs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        allDocs.forEach((document)=>{
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
                readAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
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
const markYourMessagesAsRead = async (chatId, currentUserEmail, recipientEmail = null)=>{
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
        const messagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages");
        const sentQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", currentUserEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT));
        const deliveredQuery = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("user", "==", currentUserEmail), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("status", "==", __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED));
        const [sentSnapshot, deliveredSnapshot] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(sentQuery),
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDocs"])(deliveredQuery)
        ]);
        const allDocs = [
            ...sentSnapshot.docs,
            ...deliveredSnapshot.docs
        ];
        if (allDocs.length === 0) {
            console.log(`✓ [Chat: ${chatId}] No unread messages from you to update`);
            return;
        }
        console.log(`📋 [Chat: ${chatId}] Found ${allDocs.length} messages to update`);
        const batch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        let updateCount = 0;
        allDocs.forEach((document)=>{
            if (!verifyMessageInChat(document, chatId)) {
                console.error(`⚠️ [Chat: ${chatId}] Skipping message ${document.id} - path mismatch`);
                return;
            }
            const msgData = document.data();
            console.log(`  📝 [Chat: ${chatId}] Updating message ${document.id} from ${msgData.user}`);
            batch.update(document.ref, {
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ,
                readAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])()
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
const markUserMessagesAsDelivered = markRecipientMessagesAsDelivered;
const markUserMessagesAsRead = markRecipientMessagesAsRead;
const subscribeToRecipientStatus = (recipientEmail, onStatusChange)=>{
    if (!recipientEmail) {
        console.error(`❌ subscribeToRecipientStatus: Missing recipientEmail`);
        return ()=>{}; // Return empty unsubscribe function
    }
    const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
    const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", recipientEmail));
    const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, (snapshot)=>{
        if (!snapshot.empty) {
            const recipientData = snapshot.docs[0].data();
            console.log(`👁️ Recipient ${recipientEmail} status:`, {
                lastSeen: recipientData.lastSeen?.toDate?.() || recipientData.lastSeen
            });
            onStatusChange(recipientData);
        }
    }, (error)=>{
        console.error("❌ Error subscribing to recipient status:", error);
    });
    return unsubscribe;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/hooks/useMessageStatus.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/hooks/useMessageStatus.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useMessageStatus",
    ()=>useMessageStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils/messageStatus.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Check.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/DoneAll.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AccessTime.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Error$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Error.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
const MessageStatus = ({ status, darkMode })=>{
    const getStatusIcon = ()=>{
        switch(status){
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENDING:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 22,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 25,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 28,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: '#53bdeb'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 31,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0)); // Blue checkmarks
            case __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].FAILED:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Error$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: '#f44336'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 34,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Check$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    style: {
                        fontSize: 16,
                        color: darkMode ? '#8696a0' : '#667781'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
                    lineNumber: 37,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: 4
        },
        children: getStatusIcon()
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/hooks/useMessageStatus.js",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MessageStatus;
const useMessageStatus = (chatId, recipientEmail, currentUserEmail, isSelfChat = false)=>{
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const selfChatTimeoutRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null); // ✅ NEW: Track timeout
    // ✅ NEW: Check if all required data is ready
    const isReady = !!(chatId && user && recipientEmail && currentUserEmail);
    // ✅ Mark YOUR messages as DELIVERED when recipient comes online
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // ✅ CRITICAL: Don't run if data is not ready
        if (!isReady) {
            console.log(`⏳ [Chat: ${chatId}] Waiting for data before setting up online listener...`);
            return;
        }
        if (isSelfChat) {
            console.log(`⏭️ [Chat: ${chatId}] Skipping YOUR DELIVERED update - self-chat`);
            return;
        }
        // Sanity check: Don't monitor yourself
        if (currentUserEmail === recipientEmail) {
            console.warn(`⚠️ [Chat: ${chatId}] Skipping online listener - userEmail matches recipientEmail`);
            return;
        }
        console.log(`👁️ [Chat: ${chatId}] Listening for ${recipientEmail} to come online...`);
        console.log(`   Your messages from: ${currentUserEmail}`);
        // ✅ CRITICAL: Capture current values to avoid stale closures
        const currentChatId = chatId;
        const currentRecipient = recipientEmail;
        const currentUser = currentUserEmail;
        // Set up real-time listener for recipient's online status
        const usersRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users");
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("email", "==", currentRecipient));
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, async (snapshot)=>{
            // ✅ Prevent running if chat has changed (stale listener)
            if (chatId !== currentChatId) {
                console.log(`⚠️ [OLD Chat: ${currentChatId}] Ignoring stale listener callback - current chat is ${chatId}`);
                return;
            }
            if (snapshot.empty) {
                console.log(`❓ [Chat: ${currentChatId}] Recipient ${currentRecipient} not found in users collection`);
                return;
            }
            const recipientData = snapshot.docs[0].data();
            const lastSeen = recipientData.lastSeen?.toDate?.() || new Date(recipientData.lastSeen);
            const now = new Date();
            const secondsAgo = (now - lastSeen) / 1000;
            if (secondsAgo < 30) {
                console.log(`🟢 [Chat: ${currentChatId}] RECIPIENT CAME ONLINE! (${Math.round(secondsAgo)}s ago)`);
                console.log(`   Updating YOUR messages from ${currentUser} to DELIVERED`);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2f$messageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["markYourMessagesAsDelivered"])(currentChatId, currentRecipient, currentUser);
            } else {
                console.log(`🔴 [Chat: ${currentChatId}] Recipient offline (${Math.round(secondsAgo)}s ago)`);
            }
        }, (error)=>{
            console.error(`❌ [Chat: ${currentChatId}] Error listening to recipient status:`, error);
        });
        return ()=>{
            console.log(`🔌 [Chat: ${currentChatId}] Stopping recipient status listener for ${currentRecipient}`);
            unsubscribe();
        };
    }, [
        chatId,
        recipientEmail,
        currentUserEmail,
        isSelfChat,
        isReady
    ]);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/timeago-react [external] (timeago-react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timeago-react", () => require("timeago-react"));

module.exports = mod;
}),
"[project]/components/ChatScreen/components/ChatHeader.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ChatHeader.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Menu.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/timeago-react [external] (timeago-react, cjs)");
;
;
;
;
;
;
;
function ChatHeader({ recipient, recipientEmail, recipientSnapshot, isSelfChat, onMoreClick, darkMode, isMobile, onToggleSidebar }) {
    const getHeaderTitle = ()=>{
        if (isSelfChat) {
            return `${recipientEmail} (You)`;
        }
        return recipientEmail;
    };
    const getStatusText = ()=>{
        if (isSelfChat) {
            return "Message yourself";
        }
        if (recipient?.lastSeen?.toDate) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                children: [
                    "Last active: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__["default"], {
                        datetime: recipient.lastSeen.toDate()
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 34,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true);
        }
        return "Loading...";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Header, {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeaderLeft, {
                children: [
                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onToggleSidebar,
                        style: {
                            marginRight: '10px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    recipient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                        src: recipientSnapshot?.docs?.[0]?.data()?.photoURL
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                        children: recipientEmail?.[0]?.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeaderInformation, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: getHeaderTitle()
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: getStatusText()
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(HeaderActions, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    onClick: onMoreClick,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ChatHeader.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatHeader;
// Styled Components
const Header = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: sticky;
  background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${(props)=>props.darkMode ? "#333" : "whitesmoke"};
  justify-content: space-between;
`;
const HeaderLeft = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
`;
const UserAvatar = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"])`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`;
const HeaderInformation = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-left: 15px;
  flex: 1;
  min-width: 0;

  > h3 {
    margin: 0;
    margin-bottom: 3px;
    color: ${(props)=>props.darkMode ? "#e0e0e0" : "#000"};
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    font-size: 13px;
    color: ${(props)=>props.darkMode ? "#888" : "gray"};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    margin-left: 10px;

    > h3 {
      font-size: 15px;
    }

    > p {
      font-size: 12px;
    }
  }
`;
const HeaderActions = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
}),
"[externals]/moment [external] (moment, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("moment", () => require("moment"));

module.exports = mod;
}),
"[project]/components/Message.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Message.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/moment [external] (moment, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Menu/Menu.js [ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/MenuItem/MenuItem.js [ssr] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemIcon/ListItemIcon.js [ssr] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/ListItemText/ListItemText.js [ssr] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Download.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertDriveFile.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$VideoLibrary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/VideoLibrary.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Audiotrack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Audiotrack.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/MoreVert.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Delete.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Reply.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageStatus.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
;
function Message({ user, message, messageId, onDelete, onReply }) {
    const [userLoggedIn] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    const TypeOfMessage = user === userLoggedIn?.email ? Sender : Receiver;
    const isOwnMessage = user === userLoggedIn?.email;
    // Check if message is less than 1 hour old
    const isRecentMessage = ()=>{
        if (!message.timestamp) return false;
        const messageTime = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(message.timestamp);
        const now = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])();
        const hoursDiff = now.diff(messageTime, 'hours');
        return hoursDiff < 1;
    };
    // Open menu
    const handleMenuOpen = (event)=>{
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    // Close menu
    const handleMenuClose = ()=>{
        setAnchorEl(null);
    };
    // Handle delete
    const handleDelete = ()=>{
        handleMenuClose();
        if (onDelete && messageId) {
            onDelete(messageId);
        }
    };
    // Handle reply
    const handleReply = ()=>{
        handleMenuClose();
        if (onReply) {
            onReply({
                id: messageId,
                user: user,
                message: message.message,
                timestamp: message.timestamp,
                fileURL: message.fileURL,
                fileName: message.fileName,
                fileType: message.fileType,
                voiceURL: message.voiceURL,
                voiceDuration: message.voiceDuration
            });
        }
    };
    // Optimize Cloudinary image URLs with transformations
    const getOptimizedImageUrl = (url)=>{
        if (!url || !url.includes('cloudinary.com')) return url;
        const transformation = '/w_600,h_600,c_limit,f_auto,q_auto';
        return url.replace('/upload/', `/upload${transformation}/`);
    };
    // Get thumbnail for video
    const getVideoThumbnail = (url)=>{
        if (!url || !url.includes('cloudinary.com')) return null;
        const transformation = '/w_600,h_400,c_fill,f_jpg,q_auto';
        return url.replace('/upload/', `/upload${transformation}/`).replace(/\.[^.]+$/, '.jpg');
    };
    // Download file function with better Cloudinary support
    const downloadFile = async (url, fileName)=>{
        try {
            let downloadUrl = url;
            if (url.includes('cloudinary.com')) {
                downloadUrl = url.replace('/upload/', '/upload/fl_attachment/');
            }
            const response = await fetch(downloadUrl);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = fileName || "download";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(()=>window.URL.revokeObjectURL(blobUrl), 100);
        } catch (error) {
            console.error("Download failed:", error);
            window.open(url, '_blank');
        }
    };
    // Format file size
    const formatFileSize = (bytes)=>{
        if (!bytes || bytes === 0) return "Unknown size";
        const k = 1024;
        const sizes = [
            "Bytes",
            "KB",
            "MB",
            "GB"
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
    };
    // Format voice duration
    const formatDuration = (seconds)=>{
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    // Get file type icon and color
    const getFileIcon = (fileType)=>{
        if (!fileType) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: darkMode ? '#64b5f6' : '#1976d2'
        };
        if (fileType.includes('pdf')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#d32f2f'
        };
        if (fileType.includes('word') || fileType.includes('document')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#2196f3'
        };
        if (fileType.includes('sheet') || fileType.includes('excel')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#4caf50'
        };
        if (fileType.includes('zip') || fileType.includes('rar')) return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: '#ff9800'
        };
        return {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertDriveFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
            color: darkMode ? '#64b5f6' : '#1976d2'
        };
    };
    const fileIconData = getFileIcon(message.fileType);
    const FileIconComponent = fileIconData.icon;
    const showDelete = isRecentMessage();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TypeOfMessage, {
            darkMode: darkMode,
            isSender: isOwnMessage,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageContent, {
                    children: [
                        message.replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyPreview, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyBar, {
                                    isSender: isOwnMessage
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyContent, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyUser, {
                                            darkMode: darkMode,
                                            children: message.replyTo.user === userLoggedIn?.email ? 'You' : message.replyTo.user
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ReplyText, {
                                            darkMode: darkMode,
                                            children: message.replyTo.message || message.replyTo.fileName || '🎤 Voice message'
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this),
                        message.fileURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileAttachment, {
                            children: [
                                message.fileType?.startsWith("image/") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageContainer, {
                                    children: [
                                        !imageLoaded && !imageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImagePlaceholder, {
                                            darkMode: darkMode,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                style: {
                                                    fontSize: 48,
                                                    color: darkMode ? '#555' : '#ccc'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Message.js",
                                                lineNumber: 179,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 178,
                                            columnNumber: 21
                                        }, this),
                                        imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageError, {
                                            darkMode: darkMode,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    style: {
                                                        fontSize: 48,
                                                        color: darkMode ? '#666' : '#999'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    children: "Failed to load image"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 183,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImagePreview, {
                                            src: getOptimizedImageUrl(message.fileURL),
                                            alt: message.fileName || "Image",
                                            onClick: ()=>window.open(message.fileURL, "_blank"),
                                            onLoad: ()=>setImageLoaded(true),
                                            onError: ()=>setImageError(true),
                                            loading: "lazy",
                                            style: {
                                                display: imageLoaded ? 'block' : 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 188,
                                            columnNumber: 21
                                        }, this),
                                        message.fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ImageFileName, {
                                            darkMode: darkMode,
                                            children: message.fileName
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 199,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this) : message.fileType?.startsWith("video/") ? /* Video Preview */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VideoContainer, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VideoPreview, {
                                            controls: true,
                                            preload: "metadata",
                                            poster: getVideoThumbnail(message.fileURL),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("source", {
                                                    src: message.fileURL,
                                                    type: message.fileType
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, this),
                                                "Your browser does not support the video tag."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this),
                                        message.fileName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VideoFileName, {
                                            darkMode: darkMode,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$VideoLibrary$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    style: {
                                                        fontSize: 16,
                                                        marginRight: 4
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 215,
                                                    columnNumber: 23
                                                }, this),
                                                message.fileName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 214,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this) : message.fileType?.startsWith("audio/") && !message.voiceURL ? /* Audio File (not voice message) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileContainer, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileHeader, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Audiotrack$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    style: {
                                                        fontSize: 32,
                                                        color: darkMode ? '#64b5f6' : '#1976d2'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileInfo, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileName, {
                                                            darkMode: darkMode,
                                                            children: message.fileName || "Audio File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Message.js",
                                                            lineNumber: 226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioFileSize, {
                                                            darkMode: darkMode,
                                                            children: formatFileSize(message.fileSize)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Message.js",
                                                            lineNumber: 229,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 223,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioPlayer, {
                                            controls: true,
                                            src: message.fileURL,
                                            darkMode: darkMode,
                                            children: "Your browser does not support the audio element."
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 222,
                                    columnNumber: 17
                                }, this) : /* Other Files (PDF, Documents, etc.) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileInfo, {
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileIconComponent, {
                                            style: {
                                                fontSize: 40,
                                                color: fileIconData.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileDetails, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileName, {
                                                    darkMode: darkMode,
                                                    children: message.fileName || "File"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(FileSize, {
                                                    darkMode: darkMode,
                                                    children: formatFileSize(message.fileSize)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Message.js",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 242,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 240,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DownloadButton, {
                                    onClick: ()=>downloadFile(message.fileURL, message.fileName),
                                    size: "small",
                                    darkMode: darkMode,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: 5,
                                                fontSize: 12
                                            },
                                            children: "Download"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Message.js",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        message.voiceURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceMessageContainer, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceLabel, {
                                    darkMode: darkMode,
                                    children: "🎤 Voice Message"
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AudioPlayer, {
                                    controls: true,
                                    src: message.voiceURL,
                                    darkMode: darkMode,
                                    children: "Your browser does not support the audio element."
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                message.voiceDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(VoiceDuration, {
                                    darkMode: darkMode,
                                    children: [
                                        "Duration: ",
                                        formatDuration(message.voiceDuration)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this),
                        message.message && message.message.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageText, {
                            darkMode: darkMode,
                            children: message.message
                        }, void 0, false, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageFooter, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Timestamp, {
                                    darkMode: darkMode,
                                    children: message.timestamp ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$moment__$5b$external$5d$__$28$moment$2c$__cjs$29$__["default"])(message.timestamp).format("LT") : "..."
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageStatus$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    status: message.status || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT,
                                    darkMode: darkMode
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Message.js",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageActions, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageMenuButton, {
                        onClick: handleMenuOpen,
                        size: "small",
                        darkMode: darkMode,
                        isSender: isOwnMessage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            fontSize: "small"
                        }, void 0, false, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Message.js",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Message.js",
                    lineNumber: 298,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Menu$2f$Menu$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    anchorEl: anchorEl,
                    open: Boolean(anchorEl),
                    onClose: handleMenuClose,
                    PaperProps: {
                        style: {
                            backgroundColor: darkMode ? '#2a2a2a' : 'white',
                            color: darkMode ? '#e0e0e0' : 'black'
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            onClick: handleReply,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            color: darkMode ? '#64b5f6' : '#1976d2'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Message.js",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                    style: {
                                        color: darkMode ? '#e0e0e0' : 'black'
                                    },
                                    children: "Reply"
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        showDelete && isOwnMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            onClick: handleDelete,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            color: '#d32f2f'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Message.js",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                    style: {
                                        color: darkMode ? '#e0e0e0' : 'black'
                                    },
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/components/Message.js",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Message.js",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Message.js",
                    lineNumber: 310,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Message.js",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Message.js",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Message;
// Styled Components
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin: 5px 0;
  
  &:hover {
    ${(props)=>`
      ${MessageActions} {
        opacity: 1;
      }
    `}
  }
`;
const MessageElement = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: fit-content;
  max-width: 65%;
  padding: 10px 15px;
  padding-top: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 8px;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
const Sender = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(MessageElement)`
  margin-left: auto;
  background-color: ${(props)=>props.darkMode ? '#056162' : '#dcf8c6'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  border-radius: 8px 8px 0 8px;
`;
const Receiver = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(MessageElement)`
  background-color: ${(props)=>props.darkMode ? '#1f2c33' : 'whitesmoke'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  text-align: left;
  border-radius: 8px 8px 8px 0;
  margin-left: 10px;
  margin-right: auto;
`;
const MessageContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  min-width: 0;
`;
const MessageActions = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  align-items: flex-start;
`;
const MessageMenuButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  opacity: 0.6 !important;
  padding: 4px !important;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#666'} !important;
  
  &:hover {
    opacity: 1 !important;
    background-color: ${(props)=>props.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'} !important;
  }
`;
const MessageFooter = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 4px;
  padding-top: 2px;
`;
const ReplyPreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${(props)=>props.darkMode ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)'};
  border-radius: 6px;
`;
const ReplyBar = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 4px;
  background-color: ${(props)=>props.isSender ? '#00a884' : '#1976d2'};
  border-radius: 2px;
  margin-right: 8px;
  flex-shrink: 0;
`;
const ReplyContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const ReplyUser = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  font-weight: 600;
  color: ${(props)=>props.darkMode ? '#64b5f6' : '#1976d2'};
  margin-bottom: 2px;
`;
const ReplyText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 13px;
  color: ${(props)=>props.darkMode ? '#aaa' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MessageText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.4;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  white-space: pre-wrap;
`;
const Timestamp = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  font-size: 11px;
  margin-left: 8px;
`;
const FileAttachment = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
// Image Styles
const ImageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props)=>props.darkMode ? '#1a1a1a' : '#f5f5f5'};
`;
const ImagePlaceholder = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#e0e0e0'};
`;
const ImageError = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f0f0f0'};
  
  p {
    margin-top: 10px;
    color: ${(props)=>props.darkMode ? '#888' : '#666'};
    font-size: 14px;
  }
`;
const ImagePreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].img`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.95;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
const ImageFileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 8px;
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#666'};
  background-color: ${(props)=>props.darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.9)'};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
// Video Styles
const VideoContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;
const VideoPreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].video`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  background-color: #000;
`;
const VideoFileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : '#666'};
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 6px;
  margin-top: 6px;
`;
// Audio File Styles
const AudioFileContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 12px;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 280px;
`;
const AudioFileHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;
const AudioFileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const AudioFileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 14px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const AudioFileSize = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  margin-top: 2px;
`;
// General File Styles
const FileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 220px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props)=>props.darkMode ? '#3a4952' : '#e8e8e8'};
  }
`;
const FileDetails = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const FileName = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const FileSize = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  margin: 0;
  font-size: 12px;
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  margin-top: 4px;
`;
const DownloadButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  display: flex !important;
  align-items: center !important;
  padding: 8px 14px !important;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#e3f2fd'} !important;
  color: ${(props)=>props.darkMode ? '#64b5f6' : '#1976d2'} !important;
  border-radius: 6px !important;
  font-size: 12px !important;
  align-self: flex-start !important;
  transition: all 0.2s !important;

  &:hover {
    background-color: ${(props)=>props.darkMode ? '#3a4952' : '#bbdefb'} !important;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
// Voice Message Styles
const VoiceMessageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  padding: 12px;
  background-color: ${(props)=>props.darkMode ? '#2a3942' : '#f0f0f0'};
  border-radius: 8px;
  min-width: 280px;
`;
const VoiceLabel = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 13px;
  font-weight: 500;
  color: ${(props)=>props.darkMode ? '#64b5f6' : '#1976d2'};
  display: flex;
  align-items: center;
  gap: 6px;
`;
const AudioPlayer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].audio`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 6px;
  
  &::-webkit-media-controls-panel {
    background-color: ${(props)=>props.darkMode ? '#1f2c33' : 'white'};
    border-radius: 6px;
  }

  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-mute-button {
    filter: ${(props)=>props.darkMode ? 'invert(1)' : 'none'};
  }
`;
const VoiceDuration = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  font-size: 11px;
  color: ${(props)=>props.darkMode ? '#8696a0' : 'gray'};
  text-align: right;
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/ChatScreen.styles.js
__turbopack_context__.s([
    "Container",
    ()=>Container,
    "EmojiButton",
    ()=>EmojiButton,
    "EmojiCategoryTabs",
    ()=>EmojiCategoryTabs,
    "EmojiGrid",
    ()=>EmojiGrid,
    "EmojiPickerContainer",
    ()=>EmojiPickerContainer,
    "EmojiPickerHeader",
    ()=>EmojiPickerHeader,
    "EmojiSearchContainer",
    ()=>EmojiSearchContainer,
    "EmojiSearchInput",
    ()=>EmojiSearchInput,
    "EndOfMessage",
    ()=>EndOfMessage,
    "ErrorAlert",
    ()=>ErrorAlert,
    "ErrorMessage",
    ()=>ErrorMessage,
    "FileInfo",
    ()=>FileInfo,
    "FileInput",
    ()=>FileInput,
    "FilePreview",
    ()=>FilePreview,
    "Header",
    ()=>Header,
    "HeaderIcons",
    ()=>HeaderIcons,
    "HeaderInformation",
    ()=>HeaderInformation,
    "Input",
    ()=>Input,
    "InputContainer",
    ()=>InputContainer,
    "MessageContainer",
    ()=>MessageContainer,
    "NoEmojisMessage",
    ()=>NoEmojisMessage,
    "OfflineMessage",
    ()=>OfflineMessage,
    "ProfileContainer",
    ()=>ProfileContainer,
    "ProfileInfo",
    ()=>ProfileInfo,
    "RecordingDot",
    ()=>RecordingDot,
    "RecordingIndicator",
    ()=>RecordingIndicator,
    "ReplyBarIndicator",
    ()=>ReplyBarIndicator,
    "ReplyPreviewBar",
    ()=>ReplyPreviewBar,
    "ReplyPreviewContent",
    ()=>ReplyPreviewContent,
    "ReplyPreviewHeader",
    ()=>ReplyPreviewHeader,
    "ReplyPreviewText",
    ()=>ReplyPreviewText,
    "SendButton",
    ()=>SendButton,
    "UploadProgress",
    ()=>UploadProgress,
    "VoicePreview",
    ()=>VoicePreview
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Tabs/Tabs.js [ssr] (ecmascript) <export default as Tabs>");
;
;
const Container = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
`;
const Header = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: sticky;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
  flex-shrink: 0;
`;
const HeaderInformation = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-left: 15px;
  flex: 1;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  > h3 {
    margin-bottom: 3px;
    color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  }
  > p {
    font-size: 14px;
    color: ${(props)=>props.darkMode ? '#aaa' : 'gray'};
  }
`;
const HeaderIcons = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div``;
const MessageContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 30px;
  background-color: ${(props)=>props.darkMode ? '#0d1117' : '#e5ded8'};
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
const InputContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].form`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  gap: 10px;
  flex-shrink: 0;
  border-top: 1px solid ${(props)=>props.darkMode ? '#333' : 'whitesmoke'};
`;
const Input = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  flex: 1;
  flex-shrink: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'whitesmoke'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  padding: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;

  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const EndOfMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 50px;
`;
const OfflineMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
  color: ${(props)=>props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${(props)=>props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${(props)=>props.darkMode ? '#721c24' : '#f5c6cb'};
  border-radius: 4px;
  margin: 20px;
`;
const ErrorMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
  color: ${(props)=>props.darkMode ? '#ffeeba' : '#856404'};
  background-color: ${(props)=>props.darkMode ? '#664d03' : '#fff3cd'};
  border: 1px solid ${(props)=>props.darkMode ? '#856404' : '#ffeeba'};
  border-radius: 4px;
  margin: 20px;
`;
const ErrorAlert = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  color: ${(props)=>props.darkMode ? '#f8d7da' : '#721c24'};
  background-color: ${(props)=>props.darkMode ? '#5a1f1f' : '#f8d7da'};
  border: 1px solid ${(props)=>props.darkMode ? '#721c24' : '#f5c6cb'};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
`;
const SendButton = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].button`
  background-color: ${(props)=>props.darkMode ? '#d32f2f' : '#f44336'} !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  font-weight: 600 !important;
  display: block !important;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  opacity: ${(props)=>props.disabled ? '0.5' : '1'} !important;
  
  &:hover {
    background-color: ${(props)=>props.darkMode ? '#b71c1c' : '#d32f2f'} !important;
  }

  &:disabled {
    cursor: not-allowed !important;
  }
`;
const FilePreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  margin-bottom: 20px;
`;
const FileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  border-radius: 8px;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  p {
    margin: 5px 0;
  }
`;
const FileInput = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  width: 100%;
  outline: 0;
  border: 1px solid ${(props)=>props.darkMode ? '#444' : '#ddd'};
  border-radius: 8px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  padding: 12px;
  font-size: 16px;
  margin-bottom: 10px;

  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const UploadProgress = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 10px;
    font-weight: bold;
  }
`;
const ProfileContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  text-align: center;
  padding: 20px;
`;
const ProfileInfo = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  h2 {
    margin-bottom: 15px;
    color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    color: ${(props)=>props.darkMode ? '#aaa' : 'gray'};
  }
`;
const RecordingIndicator = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : '#ffebee'};
  border-radius: 10px;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#c62828'};
  font-weight: 500;
`;
const RecordingDot = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 12px;
  height: 12px;
  background-color: #f44336;
  border-radius: 50%;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
`;
const VoicePreview = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  padding: 20px;
  text-align: center;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
const EmojiPickerContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 350px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
`;
const EmojiPickerHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#444' : '#e0e0e0'};

  h3 {
    margin: 0;
    font-size: 18px;
    color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  }
`;
const EmojiSearchContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#444' : '#e0e0e0'};
`;
const EmojiSearchInput = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  flex: 1;
  border: none;
  outline: none;
  background-color: ${(props)=>props.darkMode ? '#1e1e1e' : '#f5f5f5'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;

  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const EmojiCategoryTabs = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tabs$2f$Tabs$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tabs$3e$__["Tabs"])`
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#444' : '#e0e0e0'};
  min-height: 48px;

  .MuiTabs-flexContainer {
    justify-content: space-around;
  }
`;
const EmojiGrid = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 4px;
  padding: 12px;
  overflow-y: auto;
  max-height: 280px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props)=>props.darkMode ? '#1e1e1e' : '#f1f1f1'};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props)=>props.darkMode ? '#555' : '#888'};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props)=>props.darkMode ? '#666' : '#555'};
  }
`;
const EmojiButton = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props)=>props.darkMode ? '#3a3a3a' : '#f0f0f0'};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }
`;
const NoEmojisMessage = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px 20px;
  color: ${(props)=>props.darkMode ? '#888' : '#999'};
  font-size: 14px;
`;
const ReplyPreviewBar = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  padding: 12px 16px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  border-top: 1px solid ${(props)=>props.darkMode ? '#333' : '#e0e0e0'};
  gap: 12px;
  align-items: center;
`;
const ReplyBarIndicator = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 4px;
  height: 50px;
  background-color: #00a884;
  border-radius: 2px;
  flex-shrink: 0;
`;
const ReplyPreviewContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  overflow: hidden;
`;
const ReplyPreviewHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  
  span {
    font-size: 13px;
    font-weight: 600;
    color: #00a884;
  }
`;
const ReplyPreviewText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  font-size: 14px;
  color: ${(props)=>props.darkMode ? '#aaa' : '#666'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
}),
"[project]/components/ChatScreen/components/MessageList.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/components/MessageList.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Message.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const MessageList = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["forwardRef"])(({ messagesSnapshot, messages, sendingError, onDelete, onReply, darkMode }, ref)=>{
    const showMessages = ()=>{
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    messageId: message.id,
                    user: message.data().user,
                    message: {
                        ...message.data(),
                        timestamp: message.data().timestamp?.toMillis()
                    },
                    onDelete: onDelete,
                    onReply: onReply
                }, message.id, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)));
        } else {
            return messages ? JSON.parse(messages).map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Message$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    messageId: message.id,
                    user: message.user,
                    message: message,
                    onDelete: onDelete,
                    onReply: onReply
                }, message.id, false, {
                    fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))) : null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MessageContainer"], {
        darkMode: darkMode,
        children: [
            showMessages(),
            sendingError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorAlert"], {
                darkMode: darkMode,
                children: sendingError
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                lineNumber: 46,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EndOfMessage"], {
                ref: ref
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/MessageList.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
MessageList.displayName = 'MessageList';
const __TURBOPACK__default__export__ = MessageList;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/ChatInput.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ChatInput.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertEmoticon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/InsertEmoticon.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Mic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Mic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Stop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Stop.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/AttachFile.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function ChatInput({ input, setInput, inputRef, isRecording, recordingTime, onSubmit, onEmojiClick, onAttachFile, onStartRecording, onStopRecording, darkMode }) {
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(InputContainer, {
        darkMode: darkMode,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Form, {
            onSubmit: onSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmojiButton, {
                    onClick: onEmojiClick,
                    darkMode: darkMode,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$InsertEmoticon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AttachButton, {
                    onClick: onAttachFile,
                    darkMode: darkMode,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AttachFile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Input, {
                    ref: inputRef,
                    value: input,
                    onChange: (e)=>setInput(e.target.value),
                    placeholder: "Type a message",
                    disabled: isRecording,
                    darkMode: darkMode
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingContainer, {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingIndicator, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingDot, {}, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecordingTime, {
                                    children: formatTime(recordingTime)
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StopButton, {
                            onClick: onStopRecording,
                            darkMode: darkMode,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Stop$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ButtonsContainer, {
                    children: input.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SendButton, {
                        type: "submit",
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 64,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 63,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MicButton, {
                        onClick: onStartRecording,
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Mic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                        lineNumber: 67,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/components/ChatInput.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatInput;
// Styled Components
const InputContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
  border-top: 1px solid ${(props)=>props.darkMode ? "#333" : "whitesmoke"};
  z-index: 100;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
const Form = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].form`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 4px;
  }
`;
const EmojiButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#b0b0b0" : "#919191"};
    padding: 8px;
    
    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;
const AttachButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#b0b0b0" : "#919191"};
    padding: 8px;
    
    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;
const Input = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 25px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "whitesmoke"};
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "black"};
  padding: 12px 20px;
  font-size: 15px;
  min-width: 0; /* Allow input to shrink below content size */

  &::placeholder {
    color: ${(props)=>props.darkMode ? "#888" : "#999"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;
const ButtonsContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
const SendButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#25D366" : "#128C7E"};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(37, 211, 102, 0.1)" : "rgba(18, 140, 126, 0.1)"};
    }
  }
`;
const MicButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: ${(props)=>props.darkMode ? "#b0b0b0" : "#919191"};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
    }
  }
`;
const RecordingContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${(props)=>props.darkMode ? "#2a2a2a" : "#f0f0f0"};
  border-radius: 25px;
  padding: 8px 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 6px 10px;
  }
`;
const RecordingIndicator = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;
const RecordingDot = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f44336;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;
const RecordingTime = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  color: ${(props)=>props.darkMode ? "#e0e0e0" : "#333"};
  font-size: 14px;
  font-weight: 500;
  min-width: 40px;

  @media (max-width: 768px) {
    font-size: 13px;
    min-width: 35px;
  }
`;
const StopButton = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])`
  && {
    color: #f44336;
    padding: 6px;

    @media (max-width: 768px) {
      padding: 4px;
    }

    &:hover {
      background-color: rgba(244, 67, 54, 0.1);
    }
  }
`;
}),
"[project]/components/ChatScreen/components/EmojiPicker.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/EmojiPicker.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Popover/Popover.js [ssr] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Tab/Tab.js [ssr] (ecmascript) <export default as Tab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Search.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
const EmojiPicker = ({ open, anchorEl, onClose, selectedCategory, onCategoryChange, searchTerm, onSearchChange, emojis, onEmojiSelect, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Popover$2f$Popover$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
        open: open,
        anchorEl: anchorEl,
        onClose: onClose,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiPickerContainer"], {
            darkMode: darkMode,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiPickerHeader"], {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            children: "Emojis"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            onClick: onClose,
                            size: "small",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                style: {
                                    color: darkMode ? '#e0e0e0' : 'inherit'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiSearchContainer"], {
                    darkMode: darkMode,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            style: {
                                color: darkMode ? '#888' : '#666'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiSearchInput"], {
                            darkMode: darkMode,
                            placeholder: "Search emoji...",
                            value: searchTerm,
                            onChange: (e)=>onSearchChange(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiCategoryTabs"], {
                    value: selectedCategory,
                    onChange: (e, newValue)=>onCategoryChange(newValue),
                    variant: "scrollable",
                    scrollButtons: "auto",
                    darkMode: darkMode,
                    TabIndicatorProps: {
                        style: {
                            backgroundColor: darkMode ? '#d32f2f' : '#f44336'
                        }
                    },
                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EMOJI_CATEGORIES"]).map(([key, { name, icon }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Tab$2f$Tab$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tab$3e$__["Tab"], {
                            value: key,
                            label: icon,
                            title: name,
                            style: {
                                color: darkMode ? '#e0e0e0' : 'black',
                                minWidth: 50
                            }
                        }, key, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiGrid"], {
                    darkMode: darkMode,
                    children: emojis.length > 0 ? emojis.map((emoji, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EmojiButton"], {
                            onClick: ()=>onEmojiSelect(emoji),
                            darkMode: darkMode,
                            children: emoji
                        }, `${emoji}-${index}`, false, {
                            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["NoEmojisMessage"], {
                        darkMode: darkMode,
                        children: selectedCategory === "recent" ? "No recent emojis. Start using emojis!" : "No emojis found"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
            lineNumber: 52,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ChatScreen/components/EmojiPicker.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EmojiPicker;
}),
"[project]/components/ChatScreen/components/FileUploadDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/components/FileUploadDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const FileUploadDialog = ({ open, onClose, file, filePreview, input, onInputChange, uploadProgress, isUploading, onSend, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                style: {
                    color: darkMode ? '#e0e0e0' : 'black'
                },
                children: [
                    "Send File",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onClose,
                        style: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    filePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FilePreview"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: filePreview,
                            alt: "Preview",
                            style: {
                                maxWidth: '100%',
                                maxHeight: '300px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FileInfo"], {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "File:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                        lineNumber: 58,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    file?.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "Size:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                        lineNumber: 59,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["formatFileSize"])(file?.size),
                                    " MB"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: "Type:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                        lineNumber: 60,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    file?.type || 'Unknown'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FileInput"], {
                        darkMode: darkMode,
                        value: input,
                        onChange: (e)=>onInputChange(e.target.value),
                        placeholder: "Add a message (optional)",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["UploadProgress"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                variant: "determinate",
                                value: uploadProgress
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    Math.round(uploadProgress),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onClose,
                        style: {
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onSend,
                        variant: "contained",
                        disabled: isUploading,
                        style: {
                            backgroundColor: darkMode ? '#d32f2f' : '#f44336',
                            color: 'white'
                        },
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                            lineNumber: 85,
                            columnNumber: 22
                        }, void 0),
                        children: isUploading ? 'Sending...' : 'Send'
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/FileUploadDialog.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FileUploadDialog;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/components/VoiceRecordingDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CircularProgress/CircularProgress.js [ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Send.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const VoiceRecordingDialog = ({ open, audioBlob, recordingTime, uploadProgress, isUploading, onCancel, onSend, onError, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onCancel,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                style: {
                    color: darkMode ? '#e0e0e0' : 'black'
                },
                children: "Voice Message Recorded"
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["VoicePreview"], {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    "Duration: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["formatTime"])(recordingTime)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            audioBlob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: darkMode ? '#888' : '#666'
                                        },
                                        children: [
                                            "Size: ",
                                            (audioBlob.size / 1024).toFixed(2),
                                            " KB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: darkMode ? '#888' : '#666'
                                        },
                                        children: [
                                            "Type: ",
                                            audioBlob.type
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("audio", {
                                        controls: true,
                                        src: URL.createObjectURL(audioBlob),
                                        style: {
                                            width: '100%',
                                            marginTop: 10
                                        },
                                        onError: (e)=>{
                                            console.error('Audio playback error:', e);
                                            onError('Failed to play audio. The recording might be corrupted.');
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["UploadProgress"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                variant: "determinate",
                                value: uploadProgress
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: [
                                    Math.round(uploadProgress),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onCancel,
                        disabled: isUploading,
                        style: {
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: onSend,
                        variant: "contained",
                        disabled: isUploading || !audioBlob || audioBlob.size === 0,
                        style: {
                            backgroundColor: darkMode ? '#d32f2f' : '#f44336',
                            color: 'white'
                        },
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                            lineNumber: 81,
                            columnNumber: 22
                        }, void 0),
                        children: isUploading ? 'Sending...' : 'Send'
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = VoiceRecordingDialog;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ChatScreen/components/ProfileDialog.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ProfileDialog.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Dialog/Dialog.js [ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [ssr] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [ssr] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Avatar/Avatar.js [ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/timeago-react [external] (timeago-react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
;
;
;
;
;
;
const ProfileDialog = ({ open, onClose, recipient, recipientEmail, darkMode })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            style: {
                backgroundColor: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#e0e0e0' : 'black'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                style: {
                    color: darkMode ? '#e0e0e0' : 'black'
                },
                children: [
                    "User Profile",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                        onClick: onClose,
                        style: {
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: darkMode ? '#e0e0e0' : 'inherit'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ProfileContainer"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Avatar$2f$Avatar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                            src: recipient?.photoURL,
                            style: {
                                width: 100,
                                height: 100,
                                margin: '0 auto 20px'
                            },
                            children: recipientEmail?.[0]?.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ProfileInfo"], {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    children: recipientEmail
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: "Last Seen:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        recipient?.lastSeen?.toDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$timeago$2d$react__$5b$external$5d$__$28$timeago$2d$react$2c$__cjs$29$__["default"], {
                                            datetime: recipient.lastSeen.toDate()
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : "Not available"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                recipient?.displayName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: "Name:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                            lineNumber: 56,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        recipient.displayName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                    onClick: onClose,
                    style: {
                        color: darkMode ? '#e0e0e0' : 'inherit'
                    },
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ProfileDialog.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProfileDialog;
}),
"[project]/components/ChatScreen/components/ReplyPreview.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/components/ReplyPreview.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Close.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
;
;
;
;
;
const ReplyPreview = ({ replyingTo, userEmail, onCancel, darkMode })=>{
    if (!replyingTo) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewBar"], {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyBarIndicator"], {}, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: [
                                    "Replying to ",
                                    replyingTo.user === userEmail ? 'yourself' : replyingTo.user
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                onClick: onCancel,
                                size: "small",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    fontSize: "small",
                                    style: {
                                        color: darkMode ? '#e0e0e0' : 'inherit'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ReplyPreviewText"], {
                        darkMode: darkMode,
                        children: replyingTo.message || replyingTo.fileName || '🎤 Voice message'
                    }, void 0, false, {
                        fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/components/ReplyPreview.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ReplyPreview;
}),
"[project]/components/ChatScreen/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatScreen/index.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-firebase-hooks/auth [external] (react-firebase-hooks/auth, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useEmojiPicker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useEmojiPicker.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useFileUpload.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useVoiceRecording.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useRecipientData.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useMessages.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useMessageStatus.js [ssr] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatHeader$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ChatHeader.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/MessageList.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInput$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ChatInput.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$EmojiPicker$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/EmojiPicker.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/FileUploadDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/VoiceRecordingDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ProfileDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ProfileDialog.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ReplyPreview$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/components/ReplyPreview.jsx [ssr] (ecmascript)");
// Styled Components
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/ChatScreen.styles.js [ssr] (ecmascript)");
// Utils
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/utils.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
function ChatScreen({ chat, messages, isMobile = false, onToggleSidebar = ()=>{} }) {
    const [user] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$auth__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$auth$2c$__cjs$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const endOfMessagesRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [isOnline, setIsOnline] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [sendingError, setSendingError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [showProfile, setShowProfile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    const chatId = router?.query?.id || null;
    // Custom Hooks
    const { recipientEmail, recipient, recipientSnapshot, isSelfChat, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useRecipientData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRecipientData"])(user, chat);
    const { messagesSnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessages$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useMessages"])(chatId);
    // ✅ Use message status hook to manage SENT → DELIVERED → READ transitions
    // 🔥 FIX: Pass user.email as currentUserEmail for proper validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useMessageStatus$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useMessageStatus"])(chatId, isLoading ? null : recipientEmail, user?.email, isSelfChat);
    const emojiPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useEmojiPicker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useEmojiPicker"])();
    const fileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useFileUpload$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useFileUpload"])(chatId, user, recipientEmail);
    const voiceRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useVoiceRecording$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useVoiceRecording"])(chatId, user, recipientEmail);
    // Monitor online status
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleOnline = ()=>{
            setIsOnline(true);
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["enableNetwork"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        };
        const handleOffline = ()=>{
            setIsOnline(false);
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["disableNetwork"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]);
        };
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    // Scroll to bottom
    const scrollToBottom = ()=>{
        if (endOfMessagesRef?.current) {
            endOfMessagesRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messagesSnapshot
    ]);
    // Handle emoji selection
    const handleEmojiClick = (emoji)=>{
        const cursorPosition = inputRef.current?.selectionStart || input.length;
        const textBeforeCursor = input.slice(0, cursorPosition);
        const textAfterCursor = input.slice(cursorPosition);
        setInput(textBeforeCursor + emoji + textAfterCursor);
        emojiPicker.saveRecentEmoji(emoji);
        setTimeout(()=>{
            if (inputRef.current) {
                inputRef.current.focus();
                const newPosition = cursorPosition + emoji.length;
                inputRef.current.setSelectionRange(newPosition, newPosition);
            }
        }, 0);
    };
    // Delete message
    const deleteMessage = async (messageId)=>{
        if (!chatId || !messageId) return;
        try {
            console.log(`🗑️ [Chat: ${chatId}] Deleting message ${messageId}`);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages", messageId));
            console.log(`✅ [Chat: ${chatId}] Message deleted successfully`);
        } catch (error) {
            console.error(`❌ [Chat: ${chatId}] Error deleting message:`, error);
            setSendingError("Failed to delete message. Please try again.");
        }
    };
    // Set reply
    const handleReply = (messageData)=>{
        setReplyingTo(messageData);
        inputRef.current?.focus();
    };
    // Cancel reply
    const cancelReply = ()=>{
        setReplyingTo(null);
    };
    // Send text message
    const sendMessage = async (e)=>{
        e.preventDefault();
        setSendingError(null);
        if (!input?.trim() || !chatId || !user || !recipientEmail) {
            console.warn("⚠️ Cannot send message - missing required data", {
                hasInput: !!input?.trim(),
                chatId,
                hasUser: !!user,
                recipientEmail
            });
            return;
        }
        try {
            console.log(`📤 [Chat: ${chatId}] Preparing to send message to ${recipientEmail}`);
            if (!isSelfChat) {
                const isBlocked = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["checkIfBlocked"])(user.email, recipientEmail);
                if (isBlocked) {
                    setSendingError("You cannot send messages to this user. You have been blocked.");
                    console.log(`🚫 [Chat: ${chatId}] Message blocked - user is blocked`);
                    return;
                }
            }
            // Update user's last seen
            const userRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["setDoc"])(userRef, {
                lastSeen: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                email: user.email
            }, {
                merge: true
            });
            const messageData = {
                timestamp: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["serverTimestamp"])(),
                message: input,
                user: user.email,
                photoURL: user.photoURL,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT
            };
            const replyData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$utils$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["buildReplyData"])(replyingTo);
            if (replyData) {
                messageData.replyTo = replyData;
            }
            console.log(`📤 [Chat: ${chatId}] Sending message with status: ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT}`);
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", chatId, "messages"), messageData);
            console.log(`✅ [Chat: ${chatId}] Message sent successfully`);
            setInput("");
            setReplyingTo(null);
            scrollToBottom();
        } catch (error) {
            console.error(`❌ [Chat: ${chatId}] Error sending message:`, error);
            setSendingError("Failed to send message. Please try again.");
        }
    };
    // ✅ Add validation logging
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (chatId && user?.email && recipientEmail) {
            console.log(`🔍 [Chat: ${chatId}] Chat initialized:`, {
                currentUser: user.email,
                recipient: recipientEmail,
                isSelfChat
            });
        }
    }, [
        chatId,
        user?.email,
        recipientEmail,
        isSelfChat
    ]);
    if (!isOnline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Container"], {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["OfflineMessage"], {
                darkMode: darkMode,
                children: "You are currently offline. Please check your internet connection."
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 241,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/index.jsx",
            lineNumber: 240,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Container"], {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorMessage"], {
                darkMode: darkMode,
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 251,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/index.jsx",
            lineNumber: 250,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$ChatScreen$2e$styles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Container"], {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatHeader$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                recipient: recipient,
                recipientEmail: recipientEmail,
                recipientSnapshot: recipientSnapshot,
                isSelfChat: isSelfChat,
                onAttachFile: ()=>fileInputRef.current?.click(),
                onMoreClick: ()=>setShowProfile(true),
                darkMode: darkMode,
                isMobile: isMobile,
                onToggleSidebar: onToggleSidebar
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                hidden: true,
                onChange: fileUpload.handleFileSelect,
                accept: "*/*"
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$MessageList$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                ref: endOfMessagesRef,
                messagesSnapshot: messagesSnapshot,
                messages: messages,
                sendingError: sendingError,
                onDelete: deleteMessage,
                onReply: handleReply,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$EmojiPicker$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: emojiPicker.openEmojiPicker,
                anchorEl: emojiPicker.emojiAnchorEl,
                onClose: emojiPicker.handleEmojiPickerClose,
                selectedCategory: emojiPicker.selectedEmojiCategory,
                onCategoryChange: emojiPicker.setSelectedEmojiCategory,
                searchTerm: emojiPicker.emojiSearchTerm,
                onSearchChange: emojiPicker.setEmojiSearchTerm,
                emojis: emojiPicker.getFilteredEmojis(),
                onEmojiSelect: handleEmojiClick,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$FileUploadDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: fileUpload.showFileConfirmation,
                onClose: fileUpload.cancelFileSelection,
                file: fileUpload.selectedFile,
                filePreview: fileUpload.filePreview,
                input: input,
                onInputChange: setInput,
                uploadProgress: fileUpload.uploadProgress,
                isUploading: fileUpload.isUploading,
                onSend: ()=>fileUpload.sendFileMessage(input, replyingTo, setSendingError, setInput, setReplyingTo, scrollToBottom, isSelfChat),
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$VoiceRecordingDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: voiceRecording.audioBlob !== null,
                audioBlob: voiceRecording.audioBlob,
                recordingTime: voiceRecording.recordingTime,
                uploadProgress: voiceRecording.uploadProgress,
                isUploading: voiceRecording.isUploading,
                onCancel: voiceRecording.cancelRecording,
                onSend: ()=>voiceRecording.sendVoiceMessage(replyingTo, setSendingError, setReplyingTo, scrollToBottom, isSelfChat),
                onError: setSendingError,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ProfileDialog$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: showProfile,
                onClose: ()=>setShowProfile(false),
                recipient: recipient,
                recipientEmail: recipientEmail,
                isSelfChat: isSelfChat,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ReplyPreview$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                replyingTo: replyingTo,
                userEmail: user?.email,
                onCancel: cancelReply,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$components$2f$ChatInput$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                input: input,
                setInput: setInput,
                inputRef: inputRef,
                isRecording: voiceRecording.isRecording,
                recordingTime: voiceRecording.recordingTime,
                onSubmit: sendMessage,
                onEmojiClick: emojiPicker.handleEmojiPickerOpen,
                onStartRecording: ()=>voiceRecording.startRecording(setSendingError),
                onStopRecording: voiceRecording.stopRecording,
                darkMode: darkMode
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/index.jsx",
                lineNumber: 356,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatScreen/index.jsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ChatScreen;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/index.jsx
__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-components [external] (styled-components, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ChatBubbleOutline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/ChatBubbleOutline.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true); // ✅ Changed to true by default
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    // Detect mobile/tablet screen size
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const checkScreenSize = ()=>{
            const mobile = window.innerWidth <= 1024;
            setIsMobile(mobile);
            // On mobile, open sidebar by default when no chat selected
            if (mobile && !router.query.id) {
                setSidebarOpen(true);
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return ()=>window.removeEventListener('resize', checkScreenSize);
    }, [
        router.query.id
    ]);
    // Close sidebar when chat selected on mobile
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isMobile && router.query.id) {
            setSidebarOpen(false);
        }
    }, [
        router.query.id,
        isMobile
    ]);
    const chatId = router.query.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: chatId ? 'Chat' : 'Your Chats'
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AppContainer, {
                children: [
                    isMobile && sidebarOpen && chatId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Overlay, {
                        onClick: ()=>setSidebarOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isMobile: isMobile,
                        sidebarOpen: sidebarOpen,
                        setSidebarOpen: setSidebarOpen
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    chatId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isMobile: isMobile,
                        onToggleSidebar: ()=>setSidebarOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this) : // On desktop, show welcome screen. On mobile, don't show anything (sidebar takes full screen)
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(WelcomeScreen, {
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(WelcomeContent, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ChatBubbleOutline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    style: {
                                        fontSize: 100,
                                        opacity: 0.3,
                                        marginBottom: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(WelcomeTitle, {
                                    darkMode: darkMode,
                                    children: "Welcome to Chat App"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(WelcomeText, {
                                    darkMode: darkMode,
                                    children: "Select a chat from the sidebar to start messaging"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(WelcomeSubText, {
                                    darkMode: darkMode,
                                    children: "or create a new chat to connect with someone"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/index.js",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
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
`;
const WelcomeScreen = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props)=>props.darkMode ? '#121212' : '#f0f2f5'};
  border-left: 1px solid ${(props)=>props.darkMode ? '#333' : '#e0e0e0'};

  @media (max-width: 1024px) {
    display: none;
  }
`;
const WelcomeContent = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 500px;
`;
const WelcomeTitle = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].h1`
  font-size: 28px;
  font-weight: 400;
  color: ${(props)=>props.darkMode ? '#e0e0e0' : '#333'};
  margin: 0 0 20px 0;
`;
const WelcomeText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  font-size: 16px;
  color: ${(props)=>props.darkMode ? '#888' : '#666'};
  margin: 0 0 10px 0;
  line-height: 1.5;
`;
const WelcomeSubText = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].p`
  font-size: 14px;
  color: ${(props)=>props.darkMode ? '#666' : '#999'};
  margin: 0;
  font-style: italic;
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ff4be1fa._.js.map