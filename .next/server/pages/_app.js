"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,459];
exports.modules = {

/***/ 7910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Loading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Loading.js




function Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SpinnerWrapper, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                    src: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png",
                    alt: "Logo"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_namespaceObject.CircularProgress, {
                    color: "success",
                    size: 60
                })
            ]
        })
    });
}
/* harmony default export */ const components_Loading = (Loading);
// Styled Components
const Container = (external_styled_components_default()).div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;
const SpinnerWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = (external_styled_components_default()).img`
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
`;


/***/ }),

/***/ 8510:
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
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2356);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7910);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4984);
/* harmony import */ var _components_DarkModeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5931);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, _login__WEBPACK_IMPORTED_MODULE_5__]);
([_firebase__WEBPACK_IMPORTED_MODULE_3__, _login__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MyApp({ Component , pageProps  }) {
    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I8);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) {
            const userRef = (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .doc */ .JU)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "users", user.uid);
            (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .setDoc */ .pl)(userRef, {
                email: user.email,
                lastSeen: (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .serverTimestamp */ .Bt)(),
                photoURL: user.photoURL
            }, {
                merge: true
            });
        }
    }, [
        user
    ]);
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    if (!user) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_login__WEBPACK_IMPORTED_MODULE_5__["default"], {});
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DarkModeProvider__WEBPACK_IMPORTED_MODULE_6__/* .DarkModeProvider */ .W, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [356,931,984], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();