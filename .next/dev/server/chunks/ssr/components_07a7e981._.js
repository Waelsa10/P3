module.exports = [
"[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__22a46d2b._.js",
  "server/chunks/ssr/node_modules_b8ec1b56._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/Sidebar.js [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
"[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/[root-of-the-server]__fa40830f._.js",
  "server/chunks/ssr/node_modules_@mui_material_18b8c3ba._.js",
  "server/chunks/ssr/node_modules_ebbea99d._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/ChatScreen/index.jsx [ssr] (ecmascript, next/dynamic entry)");
    });
});
}),
];