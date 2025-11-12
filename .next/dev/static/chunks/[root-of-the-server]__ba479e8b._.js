(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/firebase.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "provider",
    ()=>provider,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/storage/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/storage/dist/index.esm2017.js [client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyCK7AV4BHrj0o_sPhstug4ph59adWv1eb0",
    authDomain: "file-transfer-app-9f7bd.firebaseapp.com",
    projectId: "file-transfer-app-9f7bd",
    storageBucket: "file-transfer-app-9f7bd.firebasestorage.app",
    messagingSenderId: "31409683737",
    appId: "1:31409683737:web:4b48323ff521d3d4619988",
    measurementId: "G-SDRWCQRRTW"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["GoogleAuthProvider"]();
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Loading.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [client] (ecmascript)");
;
;
;
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
        className: "d-flex justify-content-center align-items-center min-vh-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoWrapper, {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                        src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Gemini-2.5-flash-image-preview_%28nano-banana%29_a_make_it_with_white_b.png",
                        alt: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/components/Loading.js",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Loading.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DotsContainer, {
                    className: "d-flex justify-content-center gap-2 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                            className: "bg-primary",
                            delay: "0s"
                        }, void 0, false, {
                            fileName: "[project]/components/Loading.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                            className: "bg-primary",
                            delay: "0.15s"
                        }, void 0, false, {
                            fileName: "[project]/components/Loading.js",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                            className: "bg-primary",
                            delay: "0.3s"
                        }, void 0, false, {
                            fileName: "[project]/components/Loading.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Loading.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-secondary fw-normal",
                    children: "Connecting..."
                }, void 0, false, {
                    fileName: "[project]/components/Loading.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Loading.js",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Loading.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Loading;
const __TURBOPACK__default__export__ = Loading;
const bounce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 80%, 100% { 
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% { 
    transform: scale(1.2);
    opacity: 1;
  }
`;
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].div`
  background-color: #ffffff;
`;
_c1 = Container;
const LogoWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 450px;
  height: 450px;
  margin: 0 auto;
  overflow: hidden;
`;
_c2 = LogoWrapper;
const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.08));
  display: block;
`;
_c3 = Logo;
const DotsContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].div``;
_c4 = DotsContainer;
const Dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out;
  animation-delay: ${(props)=>props.delay};
`;
_c5 = Dot;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Loading");
__turbopack_context__.k.register(_c1, "Container");
__turbopack_context__.k.register(_c2, "LogoWrapper");
__turbopack_context__.k.register(_c3, "Logo");
__turbopack_context__.k.register(_c4, "DotsContainer");
__turbopack_context__.k.register(_c5, "Dot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DarkModeProvider.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DarkModeContext",
    ()=>DarkModeContext,
    "DarkModeProvider",
    ()=>DarkModeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const DarkModeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createContext"])();
const DarkModeProvider = ({ children })=>{
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "DarkModeProvider.useState": ()=>{
            // Get saved preference from localStorage
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("darkMode");
                return saved === "true";
            }
            //TURBOPACK unreachable
            ;
        }
    }["DarkModeProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DarkModeProvider.useEffect": ()=>{
            // Save preference to localStorage
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("darkMode", darkMode);
            }
        }
    }["DarkModeProvider.useEffect"], [
        darkMode
    ]);
    const toggleDarkMode = ()=>{
        setDarkMode((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkModeContext.Provider, {
        value: {
            darkMode,
            toggleDarkMode
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/DarkModeProvider.js",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DarkModeProvider, "jG8bf9BO04aFkntndiw58aDyu7k=");
_c = DarkModeProvider;
var _c;
__turbopack_context__.k.register(_c, "DarkModeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/login.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Button/Button.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function Login() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Get dark mode context
    const darkModeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DarkModeContext"]);
    const { darkMode } = darkModeContext || {
        darkMode: false
    };
    const signIn = async ()=>{
        try {
            setLoading(true);
            setError("");
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["signInWithPopup"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"], __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["provider"]);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
        darkMode: darkMode,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/pages/login.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/login.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginContainer, {
                darkMode: darkMode,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                        src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Gemini-2.5-flash-image-preview_%28nano-banana%29_a_make_it_with_white_b.png",
                        alt: "swifttalk Logo"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledButton, {
                        variant: "outlined",
                        onClick: signIn,
                        disabled: loading,
                        darkMode: darkMode,
                        startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoogleLogo, {
                            src: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",
                            alt: "Google logo"
                        }, void 0, false, {
                            fileName: "[project]/pages/login.js",
                            lineNumber: 60,
                            columnNumber: 13
                        }, void 0),
                        children: loading ? "Signing in..." : "Sign in with Google"
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorText, {
                        darkMode: darkMode,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/pages/login.js",
                        lineNumber: 68,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/login.js",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/login.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Login, "b/u3DJTN693MkT+uvBv5P8YGPRE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Login;
const __TURBOPACK__default__export__ = Login;
// Styled Components with Dark Mode
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${(props)=>props.darkMode ? '#0d1117' : 'whitesmoke'};
  transition: background-color 0.3s ease;
`;
_c1 = Container;
const LoginContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].div`
  padding: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props)=>props.darkMode ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)'};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  border: 1px solid ${(props)=>props.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.5)'};
  box-shadow: ${(props)=>props.darkMode ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : '0 8px 32px 0 rgba(31, 38, 135, 0.15)'};
  transition: all 0.3s ease;
`;
_c2 = LoginContainer;
const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].img`
  height: 400px;
  width: 400px;
  margin-bottom: 50px;
  filter: ${(props)=>props.darkMode ? 'brightness(0.9)' : 'none'};
`;
_c3 = Logo;
const GoogleLogo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].img`
  width: 18px;
  height: 18px;
`;
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])`
  && {
    width: 100%;
    padding: 12px 24px;
    background-color: white;
    color: #3c4043;
    border: 1px solid #dadce0;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    text-transform: none;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3);
    transition: all 0.15s ease-in-out;
    
    &:hover {
      background-color: #f8f9fa;
      border-color: #d2e3fc;
      box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3);
    }

    &:active {
      background-color: #f1f3f4;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3);
    }

    &:disabled {
      background-color: #f1f3f4;
      color: #9aa0a6;
      border-color: #dadce0;
      box-shadow: none;
      cursor: not-allowed;
    }

    .MuiButton-startIcon {
      margin-right: 12px;
    }
  }
`;
_c4 = StyledButton;
const ErrorText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].p`
  color: ${(props)=>props.darkMode ? '#ff6b6b' : '#d32f2f'};
  margin-top: 10px;
  font-size: 14px;
`;
_c5 = ErrorText;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Login");
__turbopack_context__.k.register(_c1, "Container");
__turbopack_context__.k.register(_c2, "LoginContainer");
__turbopack_context__.k.register(_c3, "Logo");
__turbopack_context__.k.register(_c4, "StyledButton");
__turbopack_context__.k.register(_c5, "ErrorText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChatScreen/hooks/useOnlineStatus.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ChatScreen/hooks/useOnlineStatus.js
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useOnlineStatus",
    ()=>useOnlineStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-firebase-hooks/auth/dist/index.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
// ✅ FIXED: Add default export
const useOnlineStatus = ()=>{
    _s();
    const [user] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    const isUpdating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOnlineStatus.useEffect": ()=>{
            if (!user) return;
            const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            const updateStatus = {
                "useOnlineStatus.useEffect.updateStatus": async (isOnline)=>{
                    if (isUpdating.current) return;
                    isUpdating.current = true;
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setDoc"])(userRef, {
                            isOnline,
                            lastSeen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                        }, {
                            merge: true
                        });
                        console.log(`${isOnline ? '🟢' : '🔴'} [${user.email}] Status updated: ${isOnline ? 'ONLINE' : 'OFFLINE'}`);
                    } catch (err) {
                        console.error("❌ Error updating online status:", err);
                    } finally{
                        setTimeout({
                            "useOnlineStatus.useEffect.updateStatus": ()=>{
                                isUpdating.current = false;
                            }
                        }["useOnlineStatus.useEffect.updateStatus"], 1000);
                    }
                }
            }["useOnlineStatus.useEffect.updateStatus"];
            const setOnline = {
                "useOnlineStatus.useEffect.setOnline": ()=>updateStatus(true)
            }["useOnlineStatus.useEffect.setOnline"];
            const setOffline = {
                "useOnlineStatus.useEffect.setOffline": ()=>updateStatus(false)
            }["useOnlineStatus.useEffect.setOffline"];
            // Mark online immediately
            setOnline();
            // Handle visibility changes
            const handleVisibilityChange = {
                "useOnlineStatus.useEffect.handleVisibilityChange": ()=>{
                    if (document.hidden) {
                        console.log(`🔴 [${user.email}] Tab hidden - setting offline`);
                        setOffline();
                    } else {
                        console.log(`🟢 [${user.email}] Tab visible - setting online`);
                        setOnline();
                    }
                }
            }["useOnlineStatus.useEffect.handleVisibilityChange"];
            // Handle browser connection changes
            const handleOnline = {
                "useOnlineStatus.useEffect.handleOnline": ()=>{
                    console.log(`🟢 [${user.email}] Internet connected - setting online`);
                    setOnline();
                }
            }["useOnlineStatus.useEffect.handleOnline"];
            const handleOffline = {
                "useOnlineStatus.useEffect.handleOffline": ()=>{
                    console.log(`🔴 [${user.email}] Internet disconnected - setting offline`);
                    setOffline();
                }
            }["useOnlineStatus.useEffect.handleOffline"];
            // Handle window/tab closing
            const handleBeforeUnload = {
                "useOnlineStatus.useEffect.handleBeforeUnload": ()=>{
                    // Use sendBeacon for reliable offline status on page unload
                    const data = JSON.stringify({
                        isOnline: false,
                        lastSeen: new Date().toISOString()
                    });
                    // This will work even if page is closing
                    navigator.sendBeacon(`https://firestore.googleapis.com/v1/projects/${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/users/${user.uid}`, data);
                    setOffline();
                }
            }["useOnlineStatus.useEffect.handleBeforeUnload"];
            // Add event listeners
            document.addEventListener("visibilitychange", handleVisibilityChange);
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);
            window.addEventListener("beforeunload", handleBeforeUnload);
            // Update every 25 seconds while active
            const interval = setInterval({
                "useOnlineStatus.useEffect.interval": ()=>{
                    if (!document.hidden && navigator.onLine) {
                        setOnline();
                    }
                }
            }["useOnlineStatus.useEffect.interval"], 25000);
            // Cleanup
            return ({
                "useOnlineStatus.useEffect": ()=>{
                    clearInterval(interval);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    window.removeEventListener("online", handleOnline);
                    window.removeEventListener("offline", handleOffline);
                    window.removeEventListener("beforeunload", handleBeforeUnload);
                    setOffline();
                }
            })["useOnlineStatus.useEffect"];
        }
    }["useOnlineStatus.useEffect"], [
        user
    ]);
};
_s(useOnlineStatus, "KnBpIndpw48Jvl6GNnVRyHLCwbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useAuthState"]
    ];
});
;
const __TURBOPACK__default__export__ = useOnlineStatus;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/_app.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/_app.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-firebase-hooks/auth/dist/index.esm.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/firebase.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Loading.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$login$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/login.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DarkModeProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useOnlineStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChatScreen/hooks/useOnlineStatus.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    _s();
    const [user, loading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"]);
    // ✅ Use the online status hook (handles isOnline field)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useOnlineStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useOnlineStatus"])();
    // ✅ ALSO update email and photoURL periodically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyApp.useEffect": ()=>{
            if (!user) return;
            const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$firebase$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "users", user.uid);
            const updateUserData = {
                "MyApp.useEffect.updateUserData": async ()=>{
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setDoc"])(userRef, {
                            email: user.email,
                            photoURL: user.photoURL || null
                        }, {
                            merge: true
                        });
                    } catch (error) {
                        console.error("❌ Error updating user data:", error);
                    }
                }
            }["MyApp.useEffect.updateUserData"];
            // Initial update
            updateUserData();
            // Update email/photo every 5 minutes (in case they change)
            const interval = setInterval(updateUserData, 300000);
            return ({
                "MyApp.useEffect": ()=>{
                    clearInterval(interval);
                }
            })["MyApp.useEffect"];
        }
    }["MyApp.useEffect"], [
        user
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loading$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/_app.js",
        lineNumber: 50,
        columnNumber: 23
    }, this);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$login$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/_app.js",
        lineNumber: 51,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DarkModeProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["DarkModeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
            ...pageProps
        }, void 0, false, {
            fileName: "[project]/pages/_app.js",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/_app.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(MyApp, "Heg8V3KkCDAqNm5wTn8bl8BtAzA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useAuthState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChatScreen$2f$hooks$2f$useOnlineStatus$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useOnlineStatus"]
    ];
});
_c = MyApp;
const __TURBOPACK__default__export__ = MyApp;
var _c;
__turbopack_context__.k.register(_c, "MyApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/_app.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/_app.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/_app\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/_app.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ba479e8b._.js.map