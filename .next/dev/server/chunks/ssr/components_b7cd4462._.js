module.exports = [
"[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_2241c923._.js",
  "server/chunks/ssr/[root-of-the-server]__d3875213._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
"[project]/components/ChatScreen.js [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/components_ChatScreen_2de1baa6.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/ChatScreen.js [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
];