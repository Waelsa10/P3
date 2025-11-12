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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ErrorOutline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/ErrorOutline.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/constants.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function MessageStatus({ status, darkMode }) {
    // ✅ Handle PENDING/SENDING status
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].PENDING || status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENDING) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$AccessTime$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 14
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    // ✅ Handle SENT status - Single gray checkmark
    if (!status || status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].SENT) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Done$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    // ✅ Handle DELIVERED status - Double gray checkmarks
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].DELIVERED) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    // ✅ Handle READ status - Double blue checkmarks
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].READ) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            isRead: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$DoneAll$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    // ✅ Handle FAILED status - Error icon
    if (status === __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$constants$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["MESSAGE_STATUS"].FAILED) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatusIcon, {
            darkMode: darkMode,
            isFailed: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$ErrorOutline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ChatScreen/components/MessageStatus.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    return null;
}
const __TURBOPACK__default__export__ = MessageStatus;
// ✅ Clean styled component - removed unused ones
const StatusIcon = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].span`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  vertical-align: middle;
  color: ${(props)=>{
    if (props.isFailed) return '#f44336'; // Red for failed
    if (props.isRead) return '#53bdeb'; // Blue for read
    return props.darkMode ? '#8696a0' : '#667781'; // Gray for others
}};
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
const Chat = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].memo(({ id, users, latestMessage: propLatestMessage, customDisplayName })=>{
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
    // ✅ MEMOIZED: Get display name (custom name or email)
    const displayName = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (isSelfChat) {
            return customDisplayName || recipientEmail || user?.email;
        }
        return customDisplayName || recipientEmail;
    }, [
        customDisplayName,
        recipientEmail,
        isSelfChat,
        user?.email
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
        // Location message
        if (latestMessage.location) {
            return "📍 Location";
        }
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
                lineNumber: 206,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : recipient ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                src: recipient?.photoURL
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 208,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UserAvatar, {
                children: recipientEmail?.[0]?.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 210,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatContent, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatHeader, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RecipientName, {
                                darkMode: darkMode,
                                children: isSelfChat ? `${displayName} (You)` : displayName
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 214,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            latestMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageTime, {
                                darkMode: darkMode,
                                children: formatTimestamp(latestMessage.timestamp)
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 218,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chat.js",
                        lineNumber: 213,
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
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chat.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MessageText, {
                                        hasUnread: hasUnread,
                                        darkMode: darkMode,
                                        children: messagePreview
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chat.js",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 224,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            hasUnread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UnreadBadge, {
                                darkMode: darkMode,
                                children: unreadCount
                            }, void 0, false, {
                                fileName: "[project]/components/Chat.js",
                                lineNumber: 238,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chat.js",
                        lineNumber: 223,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chat.js",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chat.js",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, (prevProps, nextProps)=>{
    // ✅ Custom comparison - only re-render if these change
    return prevProps.id === nextProps.id && JSON.stringify(prevProps.users) === JSON.stringify(nextProps.users) && prevProps.latestMessage?.timestamp === nextProps.latestMessage?.timestamp && prevProps.latestMessage?.message === nextProps.latestMessage?.message && prevProps.customDisplayName === nextProps.customDisplayName;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Archive$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Archive.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Unarchive$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Unarchive.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Delete.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Block$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Block.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$PersonOff$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/PersonOff.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Settings.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Info$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/Info.js [ssr] (ecmascript)");
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
    const [displayNames, setDisplayNames] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [showArchived, setShowArchived] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode, toggleDarkMode } = darkModeContext || {
        darkMode: false,
        toggleDarkMode: ()=>{}
    };
    const userChatsRef = user ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("owner", "==", user.email) // ✅ KEY CHANGE
    ) : null;
    const [chatsSnapshot, loading, error] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(userChatsRef);
    // Get current user document to check blocked users
    const userDocRef = user ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid) : null;
    const [userDocSnapshot] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$firebase$2d$hooks$2f$firestore__$5b$external$5d$__$28$react$2d$firebase$2d$hooks$2f$firestore$2c$__cjs$29$__["useCollection"])(userDocRef ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users"), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])("__name__", "==", user.uid)) : null);
    const currentUserData = userDocSnapshot?.docs?.[0]?.data();
    const blockedUsers = currentUserData?.blockedUsers || [];
    // ✅ Fetch display names for all contacts
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!user || !chatsSnapshot) return;
        const fetchDisplayNames = async ()=>{
            const names = {};
            // Get all unique recipient emails
            const recipientEmails = new Set();
            chatsSnapshot.docs.forEach((chat)=>{
                const chatUsers = chat.data().users || [];
                chatUsers.forEach((email)=>{
                    if (email !== user.email) {
                        recipientEmails.add(email);
                    }
                });
            });
            // Fetch display names for each recipient
            await Promise.all(Array.from(recipientEmails).map(async (recipientEmail)=>{
                try {
                    const contactRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid, "contacts", recipientEmail);
                    const contactSnap = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(contactRef);
                    if (contactSnap.exists()) {
                        names[recipientEmail] = contactSnap.data().displayName;
                    }
                } catch (error) {
                    console.error(`Error fetching display name for ${recipientEmail}:`, error);
                }
            }));
            setDisplayNames(names);
        };
        fetchDisplayNames();
    }, [
        user,
        chatsSnapshot
    ]);
    // ✅ OPTIMIZED: Load and sort chats with cleaned users array
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!chatsSnapshot || !user) {
            setChatsList([]);
            return;
        }
        const loadChatsWithLatestMessage = async ()=>{
            const chatsWithMessages = await Promise.all(chatsSnapshot.docs.filter((chat)=>{
                const deletedBy = chat.data().deletedBy || [];
                const archivedBy = chat.data().archivedBy || [];
                // Don't show deleted chats
                if (deletedBy.includes(user.email)) {
                    return false;
                }
                // Filter based on archive view
                const isArchived = archivedBy.includes(user.email);
                return showArchived ? isArchived : !isArchived;
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
        user,
        showArchived
    ]);
    // ✅ Toggle archive view
    const toggleArchiveView = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setShowArchived((prev)=>!prev);
    }, []);
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
    const createChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!user) {
            console.error("No user logged in");
            return;
        }
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) return;
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$email$2d$validator__$5b$external$5d$__$28$email$2d$validator$2c$__cjs$29$__["validate"](input)) {
            alert("Please enter a valid email address");
            return;
        }
        try {
            console.log(`🔍 Checking if chat exists between ${user.email} and ${input}`);
            // Check if chat already exists
            const exists = await dualChatExists(user.email, input);
            if (exists) {
                alert("Chat already exists with this user");
                return;
            }
            console.log(`📝 Creating dual chat...`);
            // Create dual chat
            const { myChatId, theirChatId } = await createDualChat(user.email, input);
            console.log(`✅ Dual chats created:`, {
                myChatId,
                theirChatId
            });
            alert("Chat created successfully!");
        } catch (error) {
            console.error("❌ Error creating chat:", error);
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            alert(`Failed to create chat: ${error.message}`);
        }
    }, [
        user
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
    // ✅ MEMOIZED: Archive chat
    const archiveChat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        if (!selectedChatId || !user) return;
        try {
            const chatRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "chats", selectedChatId);
            const chatDoc = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["getDoc"])(chatRef);
            const archivedBy = chatDoc.data()?.archivedBy || [];
            const isArchived = archivedBy.includes(user.email);
            if (isArchived) {
                // Unarchive
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(chatRef, {
                    archivedBy: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayRemove"])(user.email)
                });
                alert("Chat unarchived");
            } else {
                // Archive
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["updateDoc"])(chatRef, {
                    archivedBy: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["arrayUnion"])(user.email)
                });
                alert("Chat archived");
            }
            handleMenuClose();
        } catch (error) {
            console.error("Error archiving/unarchiving chat:", error);
            alert("Failed to archive/unarchive chat");
        }
    }, [
        selectedChatId,
        user,
        handleMenuClose
    ]);
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
    // ✅ Check if selected chat is archived
    const isSelectedChatArchived = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (!selectedChatId || !chatsSnapshot) return false;
        const chat = chatsSnapshot.docs.find((doc)=>doc.id === selectedChatId);
        if (!chat) return false;
        const archivedBy = chat.data()?.archivedBy || [];
        return archivedBy.includes(user.email);
    }, [
        selectedChatId,
        chatsSnapshot,
        user
    ]);
    // ✅ Get display name for a recipient
    const getDisplayName = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((recipientEmail)=>{
        return displayNames[recipientEmail] || null;
    }, [
        displayNames
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
            // Search by both email and display name
            const displayName = getDisplayName(otherUser);
            return otherUser?.toLowerCase().includes(searchLower) || displayName?.toLowerCase().includes(searchLower);
        });
    }, [
        chatsList,
        searchTerm,
        user,
        getDisplayName
    ]);
    // ✅ Count archived chats
    const archivedCount = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!chatsSnapshot || !user) return 0;
        return chatsSnapshot.docs.filter((chat)=>{
            const archivedBy = chat.data()?.archivedBy || [];
            const deletedBy = chat.data()?.deletedBy || [];
            return archivedBy.includes(user.email) && !deletedBy.includes(user.email);
        }).length;
    }, [
        chatsSnapshot,
        user
    ]);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Container, {
        darkMode: darkMode,
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/components/Sidebar.js",
        lineNumber: 465,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            isMobile && sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Overlay, {
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 471,
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
                                lineNumber: 480,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(IconsContainer, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: toggleArchiveView,
                                        title: showArchived ? "Show active chats" : "Show archived chats",
                                        children: showArchived ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Unarchive$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                color: darkMode ? '#25D366' : '#128C7E'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                color: darkMode ? 'gray' : 'inherit'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !showArchived && archivedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ArchiveBadge, {
                                        darkMode: darkMode,
                                        children: archivedCount
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handleHeaderMenuOpen,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                color: darkMode ? 'gray' : 'inherit'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: ()=>setSidebarOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Close$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                color: darkMode ? 'gray' : 'inherit'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 496,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 481,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 479,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showArchived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ArchiveHeader, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Archive$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                style: {
                                    fontSize: 20,
                                    marginRight: 8
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 505,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: [
                                    "Archived Chats (",
                                    archivedCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 506,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 504,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Search, {
                        darkMode: darkMode,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 511,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SearchInput, {
                                darkMode: darkMode,
                                placeholder: showArchived ? "Search archived chats" : "Search in chats",
                                type: "text",
                                value: searchTerm,
                                onChange: (e)=>setSearchTerm(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 512,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 510,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !showArchived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SidebarButton, {
                        onClick: createChat,
                        disabled: loading,
                        children: "Start a new chat"
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 522,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LoadingContainer, {
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "Loading chats..."
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 529,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 528,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : filteredChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(EmptyState, {
                        darkMode: darkMode,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "body2",
                            children: showArchived ? "No archived chats" : "No chats yet"
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 533,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 532,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : filteredChats.map((chat)=>{
                        const chatUsers = chat.data.users || [];
                        const otherUser = chatUsers.find((email)=>email !== user.email);
                        const customDisplayName = otherUser ? getDisplayName(otherUser) : null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatWrapper, {
                            darkMode: darkMode,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chat$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    id: chat.id,
                                    users: chat.data.users,
                                    latestMessage: chat.latestMessage,
                                    customDisplayName: customDisplayName
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 545,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(OptionsButton, {
                                    onClick: (e)=>handleMenuOpen(e, chat.id, chat.data.users),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$MoreVert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 554,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 551,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, chat.id, true, {
                            fileName: "[project]/components/Sidebar.js",
                            lineNumber: 544,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
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
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            marginRight: 8,
                                            color: darkMode ? '#64b5f6' : '#1976d2'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 574,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Settings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 573,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleBlockedUsersOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$PersonOff$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            marginRight: 8,
                                            color: darkMode ? '#ff9800' : '#f57c00'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 578,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Blocked Users"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 577,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: handleAboutOpen,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Info$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            marginRight: 8,
                                            color: darkMode ? '#4caf50' : '#2e7d32'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "About"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 581,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 562,
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: archiveChat,
                                children: isSelectedChatArchived() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Unarchive$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small",
                                            style: {
                                                marginRight: 8,
                                                color: darkMode ? '#64b5f6' : '#1976d2'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 602,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Unarchive Chat"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Archive$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small",
                                            style: {
                                                marginRight: 8,
                                                color: darkMode ? '#64b5f6' : '#1976d2'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 607,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Archive Chat"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 599,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            selectedChatUsers && selectedChatUsers.find((email)=>email !== user.email) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                children: isUserBlocked() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: ()=>{
                                        const recipientEmail = selectedChatUsers.find((email)=>email !== user.email);
                                        unblockUser(recipientEmail);
                                        handleMenuClose();
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$PersonOff$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small",
                                            style: {
                                                marginRight: 8,
                                                color: darkMode ? '#4caf50' : '#2e7d32'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 621,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Unblock User"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 616,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: blockUser,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Block$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            fontSize: "small",
                                            style: {
                                                marginRight: 8,
                                                color: darkMode ? '#ff9800' : '#f57c00'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 626,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Block User"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 625,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$MenuItem$2f$MenuItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onClick: deleteChat,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Delete$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        fontSize: "small",
                                        style: {
                                            marginRight: 8,
                                            color: '#f44336'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 634,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Delete Chat"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 633,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 588,
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DialogTitleContainer, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Settings$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                marginRight: 8,
                                                color: darkMode ? '#64b5f6' : '#1976d2'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 653,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Settings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 652,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 651,
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
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, void 0),
                                    label: "Dark Mode"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 658,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 657,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleSettingsClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 670,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 669,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 639,
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DialogTitleContainer, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$PersonOff$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                marginRight: 8,
                                                color: darkMode ? '#ff9800' : '#f57c00'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 688,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Blocked Users"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 687,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 686,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: blockedUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "body2",
                                    color: "textSecondary",
                                    children: "No blocked users"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 694,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$List$2f$List$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: blockedUsers.map((blockedEmail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItem$2f$ListItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$ListItemText$2f$ListItemText$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    primary: getDisplayName(blockedEmail) || blockedEmail,
                                                    secondary: getDisplayName(blockedEmail) ? blockedEmail : null,
                                                    primaryTypographyProps: {
                                                        style: {
                                                            color: darkMode ? '#e0e0e0' : 'black'
                                                        }
                                                    },
                                                    secondaryTypographyProps: {
                                                        style: {
                                                            color: darkMode ? '#888' : '#666'
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 701,
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
                                                        lineNumber: 712,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 711,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, blockedEmail, true, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 700,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 698,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 692,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleBlockedUsersClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 726,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 725,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 674,
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DialogTitleContainer, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$Info$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            style: {
                                                marginRight: 8,
                                                color: darkMode ? '#4caf50' : '#2e7d32'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "About"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 743,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 742,
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
                                        lineNumber: 749,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body1",
                                        paragraph: true,
                                        children: "Version: 1.0.0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 752,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        paragraph: true,
                                        children: "A real-time messaging application built with React and Firebase. Connect with friends and family through instant messaging."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 755,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        paragraph: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                            children: "Features:"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 760,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 759,
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
                                                    lineNumber: 764,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "User authentication"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 765,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Search chats"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 766,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Block/Unblock users"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 767,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Archive/Unarchive chats"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 768,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Delete conversations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 769,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Dark mode support"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 770,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Chat with yourself (like WhatsApp)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 771,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Sorted by latest message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 772,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "File sharing support"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 773,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Voice messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 774,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Custom display names"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 775,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Location sharing"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 776,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Camera photo capture"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 777,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Message status indicators"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 778,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Reply to messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.js",
                                                    lineNumber: 779,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Sidebar.js",
                                            lineNumber: 763,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.js",
                                        lineNumber: 762,
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
                                        lineNumber: 782,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 748,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onClick: handleAboutClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.js",
                                    lineNumber: 787,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.js",
                                lineNumber: 786,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 730,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 474,
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
  position: relative;
`;
const ArchiveBadge = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  position: absolute;
  top: 8px;
  left: 28px;
  background-color: ${(props)=>props.darkMode ? '#00a884' : '#25d366'};
  color: white;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  padding: 0 4px;
`;
const ArchiveHeader = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f0f0f0'};
  color: ${(props)=>props.darkMode ? '#25D366' : '#128C7E'};
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid ${(props)=>props.darkMode ? '#333' : '#e0e0e0'};
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
const EmptyState = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  color: ${(props)=>props.darkMode ? '#888' : '#666'};
`;
const DialogTitleContainer = __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$components__$5b$external$5d$__$28$styled$2d$components$2c$__cjs$29$__["default"].div`
  display: flex;
  align-items: center;
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Sidebar.js [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f02c0c6._.js.map