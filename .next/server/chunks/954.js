"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 36:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(356);
/* harmony import */ var _utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(896);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__]);
([_firebase__WEBPACK_IMPORTED_MODULE_7__, firebase_firestore__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






 // MUI v5


 // Firebase v9
function Chat({ id , users  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I8);
    // Firebase v9 modular query
    const recipientQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "users"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_8__.where)("email", "==", (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(users, user)));
    const [recipientSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_4__.useCollection)(recipientQuery);
    const enterChat = ()=>{
        router.push(`/chat/${id}`);
    };
    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = (0,_utils_getRecipientEmail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(users, user);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        onClick: enterChat,
        children: [
            recipient ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                src: recipient.photoURL
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                children: recipientEmail[0]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: recipientEmail
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chat);
// styled-components
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_5___default()((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()))`
  margin: 5px;
  margin-right: 15px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(356);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(120);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(242);
/* harmony import */ var _mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(952);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(829);
/* harmony import */ var react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, _Chat__WEBPACK_IMPORTED_MODULE_11__, firebase_firestore__WEBPACK_IMPORTED_MODULE_14__]);
([_firebase__WEBPACK_IMPORTED_MODULE_3__, _Chat__WEBPACK_IMPORTED_MODULE_11__, firebase_firestore__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Sidebar() {
    const [user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8);
    const userChatsRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "chats"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.where)("users", "array-contains", user.email));
    const [chatsSnapshot] = (0,react_firebase_hooks_firestore__WEBPACK_IMPORTED_MODULE_12__.useCollection)(userChatsRef);
    const createChat = async ()=>{
        const input = prompt("Please enter an email address for the user you wish to chat with");
        if (!input) return;
        if (email_validator__WEBPACK_IMPORTED_MODULE_13__.validate(input) && !chatAlreadyExist(input) && input !== user.email) {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_14__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "chats"), {
                users: [
                    user.email,
                    input
                ]
            });
        }
    };
    const chatAlreadyExist = (recipientEmail)=>!!chatsSnapshot?.docs.find((chat)=>chat.data().users.includes(recipientEmail));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserAvatar, {
                        onClick: ()=>_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth.signOut */ .I8.signOut(),
                        src: user.photoURL
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconsContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Chat__WEBPACK_IMPORTED_MODULE_8___default()), {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default()), {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_9___default()), {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Search, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchInput, {
                        placeholder: "Search in chats",
                        type: "text"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarButton, {
                onClick: createChat,
                children: "Start a new chat"
            }),
            chatsSnapshot?.docs.map((chat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Chat__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    id: chat.id,
                    users: chat.data().users
                }, chat.id))
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);
// styled-components remain the same
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_4___default()((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_5___default()))`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const SidebarButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()((_mui_material_Button__WEBPACK_IMPORTED_MODULE_6___default()))`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Search = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
`;
const SearchInput = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().input)`
  outline-width: 0;
  border: none;
  flex: 1;
`;
const Header = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const IconsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)``;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getRecipientEmail = (users, userLoggedIn)=>users?.filter((userToFilter)=>userToFilter !== userLoggedIn?.email)[0];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRecipientEmail);


/***/ })

};
;