"use strict";
exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 2356:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ap": () => (/* binding */ provider),
/* harmony export */   "Bt": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp),
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "JU": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "pl": () => (/* reexport safe */ firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)
/* harmony export */ });
/* unused harmony export storage */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseConfig = {
    apiKey: "AIzaSyCK7AV4BHrj0o_sPhstug4ph59adWv1eb0",
    authDomain: "file-transfer-app-9f7bd.firebaseapp.com",
    projectId: "file-transfer-app-9f7bd",
    storageBucket: "file-transfer-app-9f7bd.firebasestorage.app",
    messagingSenderId: "31409683737",
    appId: "1:31409683737:web:4b48323ff521d3d4619988",
    measurementId: "G-SDRWCQRRTW"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;