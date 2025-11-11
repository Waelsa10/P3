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
        console.log("❌ Invalid input data");
        return null;
    }
    const currentUserEmail = userLoggedIn.email.toLowerCase().trim();
    // Clean and normalize all emails
    const cleanedUsers = users.filter((email)=>email && typeof email === 'string').map((email)=>email.toLowerCase().trim());
    // Chat must have at least 1 user
    if (cleanedUsers.length === 0) {
        console.error("❌ No valid users in chat");
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
    // ===================================
    // 4️⃣ ERROR: Only contains current user (Corrupted)
    // ===================================
    console.error("❌ CORRUPTED CHAT: Only current user exists (not duplicated for self-chat)", {
        users: cleanedUsers,
        currentUser: currentUserEmail
    });
    return null;
};
const __TURBOPACK__default__export__ = getRecipientEmail;
}),
"[project]/components/Sidebar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/Sidebar.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [ssr] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '../context/AuthContext'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getRecipientEmail.js [ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './ChatListItem'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const Sidebar = ({ onChatSelect, activeChatId })=>{
    const { user: userLoggedIn } = useAuth();
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    // ===================================
    // 📨 LOAD USER'S CHATS
    // ===================================
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!userLoggedIn?.email) {
            setLoading(false);
            return;
        }
        console.log(`📨 Loading chats for: ${userLoggedIn.email}`);
        const chatsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], 'chats');
        const q = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["query"])(chatsRef, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["where"])('users', 'array-contains', userLoggedIn.email), (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["orderBy"])('lastMessageTime', 'desc'));
        const unsubscribe = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$29$__["onSnapshot"])(q, (snapshot)=>{
            const chatsData = snapshot.docs.map((doc)=>({
                    chatId: doc.id,
                    ...doc.data()
                }));
            console.log(`✅ Loaded ${chatsData.length} chats`);
            setChats(chatsData);
            setLoading(false);
        }, (error)=>{
            console.error('❌ Error loading chats:', error);
            setLoading(false);
        });
        return ()=>{
            console.log('🔌 Unsubscribing from chats');
            unsubscribe();
        };
    }, [
        userLoggedIn
    ]);
    // ===================================
    // ✅ MEMOIZED CHAT PROCESSING
    // ===================================
    const processedChats = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!userLoggedIn) return [];
        return chats.map((chat)=>{
            const recipientEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getRecipientEmail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(chat.users, userLoggedIn);
            // Skip chats with no valid recipient
            if (!recipientEmail) {
                console.warn(`⚠️ Skipping chat ${chat.chatId} - no valid recipient`);
                return null;
            }
            const isSelfChat = recipientEmail === userLoggedIn.email;
            return {
                ...chat,
                recipientEmail,
                isSelfChat,
                displayName: isSelfChat ? 'Saved Messages' : recipientEmail
            };
        }).filter(Boolean); // Remove null entries
    }, [
        chats,
        userLoggedIn
    ]);
    // ===================================
    // ✅ MEMOIZED SEARCH FILTERING
    // ===================================
    const filteredChats = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!searchQuery.trim()) return processedChats;
        const query = searchQuery.toLowerCase();
        return processedChats.filter((chat)=>chat.displayName.toLowerCase().includes(query) || chat.lastMessage?.toLowerCase().includes(query));
    }, [
        processedChats,
        searchQuery
    ]);
    // ===================================
    // 🎨 RENDER
    // ===================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "sidebar-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    children: "Chats"
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "search-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search chats...",
                    value: searchQuery,
                    onChange: (e)=>setSearchQuery(e.target.value),
                    className: "search-input"
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "chat-list",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "loading",
                    children: "Loading chats..."
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.js",
                    lineNumber: 123,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredChats.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "no-chats",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: searchQuery ? 'No chats found' : 'No chats yet'
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 126,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Sidebar.js",
                    lineNumber: 125,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : filteredChats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ChatListItem, {
                        chat: chat,
                        isActive: chat.chatId === activeChatId,
                        onClick: ()=>onChatSelect(chat.chatId, chat.users)
                    }, chat.chatId, false, {
                        fileName: "[project]/components/Sidebar.js",
                        lineNumber: 130,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.js",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.js",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Sidebar;
// Updated Styled Components with responsive design
const Overlay = styled.div`
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
// components/Sidebar.jsx - Better responsive Container
const Container = styled.div`
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

  /* Mobile and Tablet Responsive */
  @media (max-width: 1024px) {
    ${(props)=>props.sidebarOpen ? `
      /* When sidebar is open on mobile - take full width */
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
      /* When sidebar is closed - hide off screen */
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
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: ${(props)=>props.darkMode ? '#2a2a2a' : 'white'};
  color: ${(props)=>props.darkMode ? '#e0e0e0' : 'black'};
  
  ::placeholder {
    color: ${(props)=>props.darkMode ? '#888' : '#999'};
  }
`;
const Header = styled.div`
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
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ChatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &:hover {
    background-color: ${(props)=>props.darkMode ? '#2a2a2a' : '#f5f5f5'};
  }
`;
const OptionsButton = styled(IconButton)`
  visibility: hidden;
  
  ${ChatWrapper}:hover & {
    visibility: visible;
  }
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${(props)=>props.darkMode ? '#888' : '#666'};
`;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/Sidebar.js [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=_149f3861._.js.map