"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 4984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2356);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_DarkModeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);
([_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Login() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Get dark mode context
    const darkModeContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_DarkModeProvider__WEBPACK_IMPORTED_MODULE_8__/* .DarkModeContext */ .v);
    const { darkMode  } = darkModeContext || {
        darkMode: false
    };
    const signIn = async ()=>{
        try {
            setLoading(true);
            setError("");
            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, _firebase__WEBPACK_IMPORTED_MODULE_2__/* .provider */ .Ap);
            console.log("Sign in successful:", result.user);
            // Redirect to home page after successful login
            router.push("/");
        } catch (error) {
            console.error("Sign in error:", error);
            // Handle specific errors
            if (error.code === "auth/popup-blocked") {
                setError("Popup was blocked. Please allow popups for this site.");
            } else if (error.code === "auth/popup-closed-by-user") {
                setError("Sign in was cancelled.");
            } else {
                setError(error.message);
            }
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Login"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginContainer, {
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {
                        src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                        alt: "WhatsApp Logo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
                        variant: "outlined",
                        onClick: signIn,
                        disabled: loading,
                        darkMode: darkMode,
                        children: loading ? "Signing in..." : "Sign in with Google"
                    }),
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ErrorText, {
                        darkMode: darkMode,
                        children: error
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
// Styled Components with Dark Mode
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${(props)=>props.darkMode ? "#0d1117" : "whitesmoke"};
  transition: background-color 0.3s ease;
`;
const LoginContainer = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props)=>props.darkMode ? "#1e1e1e" : "white"};
  border-radius: 5px;
  box-shadow: ${(props)=>props.darkMode ? "0px 4px 14px -3px rgba(0, 0, 0, 0.9)" : "0px 4px 14px -3px rgba(0, 0, 0, 0.75)"};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;
const Logo = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().img)`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
  filter: ${(props)=>props.darkMode ? "brightness(0.9)" : "none"};
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default()((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()))`
  && {
    color: ${(props)=>props.darkMode ? "#90caf9" : "#1976d2"};
    border-color: ${(props)=>props.darkMode ? "#90caf9" : "#1976d2"};
    
    &:hover {
      background-color: ${(props)=>props.darkMode ? "rgba(144, 202, 249, 0.08)" : "rgba(25, 118, 210, 0.04)"};
      border-color: ${(props)=>props.darkMode ? "#64b5f6" : "#1565c0"};
    }

    &:disabled {
      color: ${(props)=>props.darkMode ? "#666" : "#bdbdbd"};
      border-color: ${(props)=>props.darkMode ? "#666" : "#bdbdbd"};
    }
  }
`;
const ErrorText = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().p)`
  color: ${(props)=>props.darkMode ? "#ff6b6b" : "#d32f2f"};
  margin-top: 10px;
  font-size: 14px;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;