module.exports = [
"[project]/components/Sidebar.jsx [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/components_Sidebar_jsx_49c11a09._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/Sidebar.jsx [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
"[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__ac5a79ba._.js",
  "server/chunks/ssr/node_modules_bdf16aa6._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
];