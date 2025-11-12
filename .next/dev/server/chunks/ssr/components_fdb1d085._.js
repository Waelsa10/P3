module.exports = [
"[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_cd58c9f3._.js",
  "server/chunks/ssr/[root-of-the-server]__4f02c0c6._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
"[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__bc25198b._.js",
  "server/chunks/ssr/node_modules_b657deff._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
];