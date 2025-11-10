"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934,459];
exports.modules = {

/***/ 111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(356);
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(896);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(492);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(416);
/* harmony import */ var _mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(941);
/* harmony import */ var _mui_icons_material_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_Mic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88);
/* harmony import */ var _mui_icons_material_Mic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(788);
/* harmony import */ var timeago_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(timeago_react__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_6__, _Message__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_firebase__WEBPACK_IMPORTED_MODULE_6__, _Message__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






 // adjust path if needed









function ChatScreen({ chat , messages  }) {
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const endOfMessagesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // --------------------
    // Firestore references
    // --------------------
    const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "chats", router.query.id, "messages");
    const messagesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)(messagesRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.orderBy)("timestamp", "asc"));
    const [messagesSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)(messagesQuery);
    const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "users");
    const recipientQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("email", "==", (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(chat.users, user)));
    const [recipientSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_5__.useCollection)(recipientQuery);
    // --------------------
    // Display messages
    // --------------------
    const showMessages = ()=>{
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map((message)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    user: message.data().user,
                    message: {
                        ...message.data(),
                        timestamp: message.data().timestamp?.toMillis()
                    }
                }, message.id));
        } else {
            return JSON.parse(messages).map((message)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    user: message.user,
                    message: message
                }, message.id));
        }
    };
    // Scroll to bottom
    const scrollToBottom = ()=>{
        endOfMessagesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    // Send a message
    const sendMessage = async (e)=>{
        e.preventDefault();
        // Update user's last seen
        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, "users", user.uid);
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.setDoc)(userRef, {
            lastSeen: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.serverTimestamp)()
        }, {
            merge: true
        });
        // Add new message
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.addDoc)(messagesRef, {
            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.serverTimestamp)(),
            message: input,
            user: user.email,
            photoURL: user.photoURL
        });
        setInput("");
        scrollToBottom();
    };
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(chat.users, user);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                children: [
                    recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Avatar, {
                        src: recipient.photoURL
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Avatar, {
                        children: recipientEmail[0]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderInformation, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: recipientEmail
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Last active:",
                                    " ",
                                    recipientSnapshot ? recipient?.lastSeen?.toDate ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((timeago_react__WEBPACK_IMPORTED_MODULE_14___default()), {
                                        datetime: recipient.lastSeen.toDate()
                                    }) : "Unavailable" : "Loading Last active..."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderIcons, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AttachFile__WEBPACK_IMPORTED_MODULE_10___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_12___default()), {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContainer, {
                children: [
                    showMessages(),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EndOfMessage, {
                        ref: endOfMessagesRef
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputContainer, {
                onSubmit: sendMessage,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_InsertEmoticon__WEBPACK_IMPORTED_MODULE_11___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        type: "text"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        hidden: true,
                        disabled: !input,
                        type: "submit",
                        children: "Send"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Mic__WEBPACK_IMPORTED_MODULE_13___default()), {})
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatScreen);
// --------------------
// Styled Components
// --------------------
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  flex-direction: column;
`;
const Header = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderInformation = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`;
const HeaderIcons = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)``;
const MessageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`;
const InputContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().form)`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;
const Input = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().input)`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;
const EndOfMessage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  margin-bottom: 50px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(356);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__]);
_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Message({ user , message  }) {
    const [userLoggedIn] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_1__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8);
    const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TypeOfMessage, {
            children: [
                message.message,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Timestamp, {
                    children: message.timestamp ? moment__WEBPACK_IMPORTED_MODULE_4___default()(message.timestamp).format("LT") : "..."
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)``;
const MessageElement = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().p)`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;
const Sender = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const Reciever = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;
const Timestamp = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(356);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(954);
/* harmony import */ var _components_ChatScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(111);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(896);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__, _components_ChatScreen__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_firebase__WEBPACK_IMPORTED_MODULE_2__, _components_Sidebar__WEBPACK_IMPORTED_MODULE_4__, _components_ChatScreen__WEBPACK_IMPORTED_MODULE_5__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Chat({ chat , messages  }) {
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_7__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        "Chat with ",
                        (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(chat.users, user)
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChatContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ChatScreen__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    chat: chat,
                    messages: messages
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);
async function getServerSideProps(context) {
    const chatId = context.query.id;
    try {
        // Get the chat document
        const chatRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, "chats", chatId);
        const chatSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDoc)(chatRef);
        // Check if chat exists
        if (!chatSnap.exists()) {
            return {
                notFound: true
            };
        }
        // Prep the Messages...
        const messagesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, "chats", chatId, "messages");
        const messagesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)(messagesRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.orderBy)("timestamp", "asc"));
        const messagesSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.getDocs)(messagesQuery);
        const messages = messagesSnap.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            })).map((message)=>({
                ...message,
                timestamp: message.timestamp ? message.timestamp.toDate().getTime() : null
            }));
        // Prep the Chats...
        const chat = {
            id: chatSnap.id,
            ...chatSnap.data()
        };
        return {
            props: {
                messages: JSON.stringify(messages),
                chat: chat
            }
        };
    } catch (error) {
        console.error("Error fetching chat data:", error);
        return {
            notFound: true
        };
    }
}
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  display: flex;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`;
const ChatContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 416:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AttachFile");

/***/ }),

/***/ 242:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Chat");

/***/ }),

/***/ 941:
/***/ ((module) => {

module.exports = require("@mui/icons-material/InsertEmoticon");

/***/ }),

/***/ 88:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Mic");

/***/ }),

/***/ 952:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("email-validator");

/***/ }),

/***/ 245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 829:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 788:
/***/ ((module) => {

module.exports = require("timeago-react");

/***/ }),

/***/ 745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [356,954], () => (__webpack_exec__(986)));
module.exports = __webpack_exports__;

})();