(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/saved/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SavedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookmarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as BookmarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/empty-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$item$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/item-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$clock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/clock.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SavedPage() {
    _s();
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$clock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHydrated"])();
    const savedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "SavedPage.useStore[savedIds]": (s)=>s.savedIds
    }["SavedPage.useStore[savedIds]"]);
    const listings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "SavedPage.useStore[listings]": (s)=>s.listings
    }["SavedPage.useStore[listings]"]);
    const items = savedIds.map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["findItem"])(id, listings)).filter((item)=>Boolean(item));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-6xl pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                title: "Saved",
                subtitle: hydrated ? `${items.length} ${items.length === 1 ? "item" : "items"} you're keeping an eye on` : "Loading your list"
            }, void 0, false, {
                fileName: "[project]/src/app/saved/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            !hydrated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 p-4 md:grid-cols-3 md:px-6 lg:grid-cols-4",
                children: Array.from({
                    length: 4
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "aspect-3/4 rounded-xl"
                    }, i, false, {
                        fileName: "[project]/src/app/saved/page.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/saved/page.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$empty$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookmarkIcon$3e$__["BookmarkIcon"],
                title: "Nothing saved yet",
                description: "Tap the bookmark on any listing and it will show up here so you can come back to it.",
                actionLabel: "Find something",
                actionHref: "/browse"
            }, void 0, false, {
                fileName: "[project]/src/app/saved/page.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 p-4 md:grid-cols-3 md:px-6 lg:grid-cols-4",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$item$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemCard"], {
                        item: item
                    }, item.id, false, {
                        fileName: "[project]/src/app/saved/page.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/saved/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/saved/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(SavedPage, "JUEq9/H0vMQfkD0YWFF+KY/y+EQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$clock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHydrated"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
_c = SavedPage;
var _c;
__turbopack_context__.k.register(_c, "SavedPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/empty-state.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
function EmptyState({ icon: Icon, title, description, actionLabel, actionHref }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-3 px-6 py-16 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex size-11 items-center justify-center rounded-full bg-muted",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "size-5 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/empty-state.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/empty-state.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-heading text-base font-medium",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/empty-state.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto max-w-xs text-sm text-muted-foreground",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/empty-state.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/empty-state.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            actionLabel && actionHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                asChild: true,
                size: "lg",
                className: "mt-2 h-11 px-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: actionHref,
                    children: actionLabel
                }, void 0, false, {
                    fileName: "[project]/src/components/empty-state.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/empty-state.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/empty-state.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/item-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ItemCard",
    ()=>ItemCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.mjs [app-client] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$save$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/save-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/geo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
function ItemCard({ item, className, showSave = true }) {
    const miles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMiles"])(item.location, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/item/${item.id}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-foreground/25", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-4/3 overflow-hidden bg-muted",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: item.images[0],
                        alt: item.title,
                        fill: true,
                        sizes: "(max-width: 768px) 50vw, 25vw",
                        className: "object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/item-card.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    item.status === "sold" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-background/70",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground",
                            children: "Sold"
                        }, void 0, false, {
                            fileName: "[project]/src/components/item-card.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/item-card.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    showSave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$save$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveButton"], {
                        itemId: item.id,
                        title: item.title,
                        className: "absolute top-2 right-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/item-card.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/item-card.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col gap-1 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-heading text-sm font-semibold",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(item.price)
                            }, void 0, false, {
                                fileName: "[project]/src/components/item-card.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            item.deliveryAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"], {
                                className: "size-3.5 shrink-0 text-muted-foreground",
                                "aria-label": "Delivery available"
                            }, void 0, false, {
                                fileName: "[project]/src/components/item-card.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/item-card.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "line-clamp-2 text-sm leading-snug text-foreground",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/item-card.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-auto truncate pt-1 text-xs text-muted-foreground",
                        children: [
                            item.location.neighborhood,
                            " · ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"])(miles)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/item-card.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/item-card.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/item-card.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ItemCard;
var _c;
__turbopack_context__.k.register(_c, "ItemCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/page-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader,
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PageHeader({ title, action, className }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-20 flex h-12 items-center gap-1 border-b bg-background/95 px-2 backdrop-blur", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>router.back(),
                "aria-label": "Go back",
                className: "flex size-9 items-center justify-center rounded-lg text-foreground hover:bg-muted",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                    className: "size-5"
                }, void 0, false, {
                    fileName: "[project]/src/components/page-header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/page-header.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "truncate font-heading text-sm font-medium",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/page-header.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto pr-1",
                children: action
            }, void 0, false, {
                fileName: "[project]/src/components/page-header.tsx",
                lineNumber: 36,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page-header.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(PageHeader, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PageHeader;
function SectionHeader({ title, subtitle, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-end justify-between gap-3 px-4 pt-5 pb-3 md:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-heading text-xl font-semibold tracking-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/page-header.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-0.5 text-sm text-muted-foreground",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/page-header.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/page-header.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            action
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page-header.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c1 = SectionHeader;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageHeader");
__turbopack_context__.k.register(_c1, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/save-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveButton",
    ()=>SaveButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookmarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as BookmarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/store.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$clock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/clock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SaveButton({ itemId, title, variant = "icon", className }) {
    _s();
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$clock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHydrated"])();
    const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "SaveButton.useStore[saved]": (s)=>s.savedIds.includes(itemId)
    }["SaveButton.useStore[saved]"]);
    const toggleSaved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"])({
        "SaveButton.useStore[toggleSaved]": (s)=>s.toggleSaved
    }["SaveButton.useStore[toggleSaved]"]);
    const isSaved = hydrated && saved;
    function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleSaved(itemId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(isSaved ? "Removed from saved" : "Saved", {
            description: title
        });
    }
    if (variant === "full") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "outline",
            onClick: onClick,
            "aria-pressed": isSaved,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 gap-2 px-4", className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookmarkIcon$3e$__["BookmarkIcon"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-4", isSaved && "fill-current")
                }, void 0, false, {
                    fileName: "[project]/src/components/save-button.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                isSaved ? "Saved" : "Save"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/save-button.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-label": isSaved ? "Remove from saved" : "Save item",
        "aria-pressed": isSaved,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex size-8 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition-colors hover:bg-background", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookmarkIcon$3e$__["BookmarkIcon"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-4", isSaved && "fill-current")
        }, void 0, false, {
            fileName: "[project]/src/components/save-button.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/save-button.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(SaveButton, "OCY9ei31UKU2EKwya2dwEWK+qqo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$clock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHydrated"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStore"]
    ];
});
_c = SaveButton;
var _c;
__turbopack_context__.k.register(_c, "SaveButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/clock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClock",
    ()=>useClock,
    "useHydrated",
    ()=>useHydrated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const TICK_MS = 250;
/**
 * Wall-clock time is an external mutable source, so it is exposed as a proper
 * external store: one shared timer, a cached snapshot that React can compare,
 * and a server snapshot of 0 so hydration markup always matches.
 */ let now = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Date.now();
let timer = null;
const listeners = new Set();
function subscribe(listener) {
    listeners.add(listener);
    if (!timer) {
        timer = setInterval(()=>{
            now = Date.now();
            for (const l of listeners)l();
        }, TICK_MS);
    }
    return ()=>{
        listeners.delete(listener);
        if (listeners.size === 0 && timer) {
            clearInterval(timer);
            timer = null;
        }
    };
}
const getSnapshot = ()=>now;
const getServerSnapshot = ()=>0;
function useClock() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getSnapshot, getServerSnapshot);
}
_s(useClock, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
const neverChanges = ()=>()=>{};
const clientTrue = ()=>true;
const serverFalse = ()=>false;
function useHydrated() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(neverChanges, clientTrue, serverFalse);
}
_s1(useHydrated, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/items.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ITEMS",
    ()=>ITEMS,
    "MARKET_ITEMS",
    ()=>MARKET_ITEMS,
    "ME",
    ()=>ME,
    "MY_SEEDED_LISTINGS",
    ()=>MY_SEEDED_LISTINGS,
    "STOCK_IMAGES",
    ()=>STOCK_IMAGES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/time.ts [app-client] (ecmascript)");
;
const SELLERS = {
    marla: {
        id: "s1",
        name: "Marla V.",
        rating: 4.9,
        sales: 62
    },
    dez: {
        id: "s2",
        name: "Dez Okafor",
        rating: 4.8,
        sales: 34
    },
    june: {
        id: "s3",
        name: "June Halloran",
        rating: 5,
        sales: 18
    },
    tobias: {
        id: "s4",
        name: "Tobias Reyn",
        rating: 4.7,
        sales: 91
    },
    saff: {
        id: "s5",
        name: "Saffron Ruiz",
        rating: 4.9,
        sales: 27
    },
    wendell: {
        id: "s6",
        name: "Wendell Pike",
        rating: 4.6,
        sales: 45
    },
    ines: {
        id: "s7",
        name: "Inés Aldama",
        rating: 5,
        sales: 11
    },
    cal: {
        id: "s8",
        name: "Cal Brenner",
        rating: 4.8,
        sales: 53
    }
};
const ITEMS = [
    {
        id: "twin-reverb",
        title: "1973 Fender Twin Reverb",
        price: 1450,
        category: "Music Gear",
        condition: "Good",
        description: "Silverface Twin Reverb, all original transformers. Recapped by a tech last spring and biased properly. Reverb and tremolo both work. Tolex has honest wear on the corners and the handle was replaced. Loud enough to clear a room.",
        images: [
            "/items/twin-reverb.jpg"
        ],
        seller: SELLERS.tobias,
        location: {
            lat: 35.7772,
            lng: -78.6432,
            neighborhood: "Warehouse District"
        },
        size: "large",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(2),
        status: "active"
    },
    {
        id: "rhodes-mark-i",
        title: "Fender Rhodes Mark I Stage 73",
        price: 2200,
        category: "Music Gear",
        condition: "Good",
        description: "1976 Stage 73 with the original chrome legs and sustain pedal. Recently tuned and voiced, every key sounds. Tolex is scuffed and one wooden cheek block has a chip. Heavy piece, delivery strongly recommended.",
        images: [
            "/items/rhodes-mark-i.jpg"
        ],
        seller: SELLERS.marla,
        location: {
            lat: 35.8034,
            lng: -78.6421,
            neighborhood: "Five Points"
        },
        size: "large",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(5),
        status: "active"
    },
    {
        id: "technics-sl1200",
        title: "Technics SL-1200 MK2 Turntable",
        price: 780,
        category: "Music Gear",
        condition: "Excellent",
        description: "Silver MK2 in genuinely clean shape. New feet, fresh pitch fader, platter spins dead on. Comes with a Shure cartridge already mounted and a spare slipmat. No dust cover, sadly.",
        images: [
            "/items/technics-sl1200.jpg"
        ],
        seller: SELLERS.dez,
        location: {
            lat: 35.7876,
            lng: -78.6689,
            neighborhood: "Hillsborough Street"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(1),
        status: "active"
    },
    {
        id: "sansui-receiver",
        title: "Sansui QR-6500 Stereo Receiver",
        price: 340,
        category: "Music Gear",
        condition: "Good",
        description: "Warm silver-face receiver with the walnut end caps intact. All lamps lit, dial moves smoothly, no scratchy pots. Drives a pair of bookshelf speakers beautifully. Original manual included.",
        images: [
            "/items/sansui-receiver.jpg"
        ],
        seller: SELLERS.wendell,
        location: {
            lat: 35.7965,
            lng: -78.6329,
            neighborhood: "Mordecai"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(8),
        status: "active"
    },
    {
        id: "walnut-speakers",
        title: "Pair of Walnut Bookshelf Speakers",
        price: 265,
        category: "Music Gear",
        condition: "Good",
        description: "Mid-seventies two-ways in real walnut veneer. Both drivers tested and clean, no rot in the surrounds. One grille cloth has a small snag near the bottom corner. Sound is exactly as warm as you want it to be.",
        images: [
            "/items/walnut-speakers.jpg"
        ],
        seller: SELLERS.cal,
        location: {
            lat: 35.7742,
            lng: -78.6488,
            neighborhood: "Boylan Heights"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(4),
        status: "active"
    },
    {
        id: "hollowbody-guitar",
        title: "1966 Sunburst Hollow Body Electric",
        price: 3100,
        category: "Music Gear",
        condition: "Fair",
        description: "Player-grade thinline with a lot of stories in the finish. Neck is straight, frets have maybe 60% left, both pickups are original and sing. Tortoise pickguard is a reissue. Includes a hardshell case.",
        images: [
            "/items/hollowbody-guitar.jpg"
        ],
        seller: SELLERS.tobias,
        location: {
            lat: 35.7831,
            lng: -78.6349,
            neighborhood: "Person Street"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(11),
        status: "active"
    },
    {
        id: "reel-to-reel",
        title: "Teac Reel-to-Reel Tape Deck",
        price: 495,
        category: "Music Gear",
        condition: "Good",
        description: "Four-track deck with both metal reels included. Heads were cleaned and demagnetized, transport is smooth in both directions. VU meters respond correctly. No tape included, but I can point you to a shop in town.",
        images: [
            "/items/reel-to-reel.jpg"
        ],
        seller: SELLERS.dez,
        location: {
            lat: 35.7952,
            lng: -78.6633,
            neighborhood: "Roanoke Park"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(6),
        status: "active"
    },
    {
        id: "teak-credenza",
        title: "Danish Teak Credenza, 78in",
        price: 1250,
        category: "Furniture",
        condition: "Excellent",
        description: "Sculpted-pull teak sideboard from the early sixties, four doors over a bank of drawers. Oiled last month and the grain is glowing. One small ring mark on the top left that photographs worse than it looks in person.",
        images: [
            "/items/teak-credenza.jpg"
        ],
        seller: SELLERS.june,
        location: {
            lat: 35.7900,
            lng: -78.6560,
            neighborhood: "Cameron Village"
        },
        size: "large",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(3),
        status: "active"
    },
    {
        id: "rattan-lounge-chair",
        title: "Rattan and Cane Lounge Chair",
        price: 420,
        category: "Furniture",
        condition: "Good",
        description: "Seventies bentwood rattan lounger with the original cane back fully intact — no breaks, no sagging. Cushion is a newer linen replacement in oatmeal. Surprisingly comfortable for how sculptural it is.",
        images: [
            "/items/rattan-lounge-chair.jpg"
        ],
        seller: SELLERS.saff,
        location: {
            lat: 35.8003,
            lng: -78.6484,
            neighborhood: "Hayes Barton"
        },
        size: "large",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(2),
        status: "active"
    },
    {
        id: "oak-writing-desk",
        title: "Mid-Century Oak Writing Desk",
        price: 585,
        category: "Furniture",
        condition: "Excellent",
        description: "Two-drawer oak desk with tapered legs and a floating top. Drawers glide, joints are tight, no wobble at all. Finish was refreshed by the previous owner and it looks close to new. Fits a 27in monitor with room to spare.",
        images: [
            "/items/oak-writing-desk.jpg"
        ],
        seller: SELLERS.june,
        location: {
            lat: 35.7916,
            lng: -78.6281,
            neighborhood: "Historic Oakwood"
        },
        size: "large",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(9),
        status: "active"
    },
    {
        id: "tolix-stools",
        title: "Pair of French Tolix Stools",
        price: 310,
        category: "Furniture",
        condition: "Fair",
        description: "Genuine Tolix Model A stools, stripped down to raw steel with a lot of patina and chipped paint left behind. Both stack and sit solid. Rust is surface only. Perfect at a counter if you like a rough edge.",
        images: [
            "/items/tolix-stools.jpg"
        ],
        seller: SELLERS.wendell,
        location: {
            lat: 35.7614,
            lng: -78.6440,
            neighborhood: "Caraleigh"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(14),
        status: "active"
    },
    {
        id: "kilim-rug",
        title: "Vintage Turkish Kilim Runner",
        price: 375,
        category: "Home Goods",
        condition: "Good",
        description: "Hand-knotted wool runner, roughly 3 by 8 feet, in faded terracotta and charcoal. Low pile with the good kind of wear in the center. Professionally washed, no odor, no moth damage. Fringe is complete on both ends.",
        images: [
            "/items/kilim-rug.jpg"
        ],
        seller: SELLERS.ines,
        location: {
            lat: 35.7823,
            lng: -78.6635,
            neighborhood: "Fairmont"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(1),
        status: "active"
    },
    {
        id: "cast-iron-dutch-oven",
        title: "Flame Orange Cast Iron Dutch Oven",
        price: 95,
        category: "Home Goods",
        condition: "Good",
        description: "Classic 5.5 quart round in the flame gradient, brass knob and all. Enamel interior is clean with light utensil marks. A few chips on the outer rim where the lid sits, purely cosmetic. Cooks like it did in 1974.",
        images: [
            "/items/cast-iron-dutch-oven.jpg"
        ],
        seller: SELLERS.saff,
        location: {
            lat: 35.8060,
            lng: -78.6440,
            neighborhood: "Budleigh"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(3),
        status: "active"
    },
    {
        id: "pyrex-bowl-set",
        title: "Pyrex Milk Glass Bowl Set, 8pc",
        price: 140,
        category: "Home Goods",
        condition: "Excellent",
        description: "Two nesting sets in the soft pastel palette — avocado, butter yellow, sky and white. No chips, no cracks, minimal utensil marks. Colors are still saturated because these were kept in a cabinet, not a dishwasher.",
        images: [
            "/items/pyrex-bowl-set.jpg"
        ],
        seller: SELLERS.ines,
        location: {
            lat: 35.7712,
            lng: -78.6288,
            neighborhood: "South Park"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(7),
        status: "active"
    },
    {
        id: "studio-pottery-vase",
        title: "Large Studio Pottery Vase",
        price: 185,
        category: "Home Goods",
        condition: "Excellent",
        description: "Wheel-thrown stoneware with a speckled oatmeal glaze that shifts in the light. Signed on the base, no maker I could trace. About 14 inches tall, holds water. Zero chips or crazing.",
        images: [
            "/items/studio-pottery-vase.jpg"
        ],
        seller: SELLERS.june,
        location: {
            lat: 35.8290,
            lng: -78.6540,
            neighborhood: "Brookhaven"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(4),
        status: "active"
    },
    {
        id: "smoked-glass-tumblers",
        title: "Smoked Glass Tumblers, Set of 6",
        price: 72,
        category: "Home Goods",
        condition: "Excellent",
        description: "Pressed amber and olive glass tumblers with a hobnail pattern, three of each color. All six ring clean with no chips on the rims. They stack a little and they look great with anything poured in them.",
        images: [
            "/items/smoked-glass-tumblers.jpg"
        ],
        seller: SELLERS.saff,
        location: {
            lat: 35.7810,
            lng: -78.6180,
            neighborhood: "Idlewild"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(2),
        status: "active"
    },
    {
        id: "industrial-task-lamp",
        title: "Industrial Articulated Task Lamp",
        price: 220,
        category: "Home Goods",
        condition: "Fair",
        description: "Olive enamel factory lamp on a heavy cast iron base. Springs still hold every position. Rewired with cloth cord and a new plug, so it's safe to use. Paint is genuinely chipped down to metal in places, which is the whole appeal.",
        images: [
            "/items/industrial-task-lamp.jpg"
        ],
        seller: SELLERS.wendell,
        location: {
            lat: 35.7700,
            lng: -78.6600,
            neighborhood: "Dix Park"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(10),
        status: "active"
    },
    {
        id: "brass-floor-lamp",
        title: "Patinated Brass Tripod Floor Lamp",
        price: 295,
        category: "Home Goods",
        condition: "Good",
        description: "Slim brass column on a splayed tripod base, about 58 inches tall. Patina is uneven and warm, exactly as it should be. Shade is a newer cream linen drum. Rewired, switch in the socket works fine.",
        images: [
            "/items/brass-floor-lamp.jpg"
        ],
        seller: SELLERS.cal,
        location: {
            lat: 35.8100,
            lng: -78.6500,
            neighborhood: "Anderson Heights"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(6),
        status: "active"
    },
    {
        id: "polaroid-sx70",
        title: "Polaroid SX-70 Land Camera",
        price: 320,
        category: "Trinkets",
        condition: "Good",
        description: "Folding SX-70 in brown leather and chrome. Tested with a fresh pack and it ejects and develops correctly. Leather is supple with a small scuff on the back panel. Comes in the original zip case.",
        images: [
            "/items/polaroid-sx70.jpg"
        ],
        seller: SELLERS.dez,
        location: {
            lat: 35.7801,
            lng: -78.6372,
            neighborhood: "Moore Square"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(1),
        status: "active"
    },
    {
        id: "brass-telescope",
        title: "Antique Brass Telescope on Tripod",
        price: 640,
        category: "Trinkets",
        condition: "Good",
        description: "Refracting brass telescope with a leather-wrapped tube on a mahogany tripod. Optics are clear, draw tubes extend smoothly. Brass has a deep unpolished patina I would leave alone. Tripod legs lock tight.",
        images: [
            "/items/brass-telescope.jpg"
        ],
        seller: SELLERS.marla,
        location: {
            lat: 35.8367,
            lng: -78.6420,
            neighborhood: "North Hills"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(13),
        status: "active"
    },
    {
        id: "vintage-globe",
        title: "1960s Terrestrial Globe",
        price: 155,
        category: "Trinkets",
        condition: "Good",
        description: "Twelve-inch globe on a turned wood base with a brass meridian. Paper is intact with the soft faded palette these get after sixty years. A few countries no longer exist, which is sort of the point. Spins true.",
        images: [
            "/items/vintage-globe.jpg"
        ],
        seller: SELLERS.ines,
        location: {
            lat: 35.8500,
            lng: -78.6400,
            neighborhood: "Six Forks"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(5),
        status: "active"
    },
    {
        id: "cathedral-tube-radio",
        title: "1940s Cathedral Tube Radio",
        price: 275,
        category: "Trinkets",
        condition: "Fair",
        description: "Walnut veneer cathedral cabinet with the arched top and fluted columns intact. Powers on and pulls in AM stations, though it hums until it warms up. Veneer has lifted slightly along the base on one side.",
        images: [
            "/items/cathedral-tube-radio.jpg"
        ],
        seller: SELLERS.tobias,
        location: {
            lat: 35.7855,
            lng: -78.6183,
            neighborhood: "Longview"
        },
        size: "medium",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(12),
        status: "active"
    },
    {
        id: "travel-alarm-clock",
        title: "Folding Travel Alarm Clock",
        price: 48,
        category: "Trinkets",
        condition: "Excellent",
        description: "Cream and black folding travel clock with a mustard second hand. Winds and keeps time within a minute a day. Alarm actually rings. Case snaps shut cleanly with no cracks in the plastic.",
        images: [
            "/items/travel-alarm-clock.jpg"
        ],
        seller: SELLERS.cal,
        location: {
            lat: 35.7876,
            lng: -78.6465,
            neighborhood: "Glenwood South"
        },
        size: "small",
        deliveryAvailable: true,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(2),
        status: "active"
    },
    {
        id: "mortar-and-pestle",
        title: "Iron Mortar, Pestle and Brass Weights",
        price: 130,
        category: "Trinkets",
        condition: "Good",
        description: "Cast iron mortar with a porcelain-lined bowl, matching pestle, and a graduated stack of three brass apothecary weights. Heavy in the hand. Iron has even oxidation, porcelain has no cracks.",
        images: [
            "/items/mortar-and-pestle.jpg"
        ],
        seller: SELLERS.marla,
        location: {
            lat: 35.7742,
            lng: -78.6398,
            neighborhood: "Prince Hall"
        },
        size: "small",
        deliveryAvailable: false,
        postedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["daysAgoISO"])(16),
        status: "active"
    }
];
const ME = {
    id: "me",
    name: "You",
    rating: 4.9,
    sales: 12
};
/** Seeded listings attributed to the demo user, kept out of the buy-side feed. */ const MY_LISTING_IDS = {
    "travel-alarm-clock": "active",
    "smoked-glass-tumblers": "active",
    "industrial-task-lamp": "sold",
    "mortar-and-pestle": "sold"
};
const MY_SEEDED_LISTINGS = ITEMS.filter((item)=>item.id in MY_LISTING_IDS).map(_c = (item)=>({
        ...item,
        seller: ME,
        status: MY_LISTING_IDS[item.id]
    }));
_c1 = MY_SEEDED_LISTINGS;
const MARKET_ITEMS = ITEMS.filter(_c2 = (item)=>!(item.id in MY_LISTING_IDS));
_c3 = MARKET_ITEMS;
const STOCK_IMAGES = ITEMS.map(_c4 = (item)=>item.images[0]);
_c5 = STOCK_IMAGES;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "MY_SEEDED_LISTINGS$ITEMS.filter(\n  (item) => item.id in MY_LISTING_IDS,\n).map");
__turbopack_context__.k.register(_c1, "MY_SEEDED_LISTINGS");
__turbopack_context__.k.register(_c2, "MARKET_ITEMS$ITEMS.filter");
__turbopack_context__.k.register(_c3, "MARKET_ITEMS");
__turbopack_context__.k.register(_c4, "STOCK_IMAGES$ITEMS.map");
__turbopack_context__.k.register(_c5, "STOCK_IMAGES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/neighborhoods.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NEIGHBORHOODS",
    ()=>NEIGHBORHOODS,
    "NEIGHBORHOOD_NAMES",
    ()=>NEIGHBORHOOD_NAMES
]);
const NEIGHBORHOODS = {
    "Glenwood South": {
        lat: 35.7876,
        lng: -78.6465
    },
    "Five Points": {
        lat: 35.8034,
        lng: -78.6421
    },
    "Historic Oakwood": {
        lat: 35.7869,
        lng: -78.6297
    },
    Mordecai: {
        lat: 35.7965,
        lng: -78.6329
    },
    "Boylan Heights": {
        lat: 35.7742,
        lng: -78.6488
    },
    "Cameron Village": {
        lat: 35.79,
        lng: -78.656
    },
    "Warehouse District": {
        lat: 35.7772,
        lng: -78.6432
    },
    "North Hills": {
        lat: 35.8367,
        lng: -78.642
    }
};
const NEIGHBORHOOD_NAMES = Object.keys(NEIGHBORHOODS);
_c = NEIGHBORHOOD_NAMES;
var _c;
__turbopack_context__.k.register(_c, "NEIGHBORHOOD_NAMES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/geo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOME",
    ()=>HOME,
    "RALEIGH_CENTER",
    ()=>RALEIGH_CENTER,
    "SIZE_LABEL",
    ()=>SIZE_LABEL,
    "deliveryFee",
    ()=>deliveryFee,
    "distanceMiles",
    ()=>distanceMiles,
    "formatDistance",
    ()=>formatDistance,
    "formatPrice",
    ()=>formatPrice,
    "pointAlongPath",
    ()=>pointAlongPath
]);
const RALEIGH_CENTER = {
    lat: 35.7796,
    lng: -78.6382
};
const HOME = {
    lat: 35.7846,
    lng: -78.6469,
    address: "612 Glenwood Ave, Raleigh, NC 27603"
};
const EARTH_RADIUS_MI = 3958.8;
function distanceMiles(a, b) {
    const toRad = (deg)=>deg * Math.PI / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return EARTH_RADIUS_MI * 2 * Math.asin(Math.sqrt(h));
}
function formatDistance(miles) {
    return miles < 0.1 ? "Nearby" : `${miles.toFixed(1)} mi away`;
}
const SIZE_BASE_FEE = {
    small: 6,
    medium: 11,
    large: 19
};
const SIZE_LABEL = {
    small: "Fits in a backpack",
    medium: "Fits in a car",
    large: "Needs a truck"
};
function deliveryFee(size, miles) {
    const raw = SIZE_BASE_FEE[size] + miles * 1.4;
    return Math.round(raw * 2) / 2;
}
function formatPrice(value) {
    return value % 1 === 0 ? `$${value.toLocaleString("en-US")}` : `$${value.toFixed(2)}`;
}
function pointAlongPath(path, t) {
    if (path.length === 0) return RALEIGH_CENTER;
    if (path.length === 1) return path[0];
    const legs = path.slice(1).map((p, i)=>distanceMiles(path[i], p));
    const total = legs.reduce((sum, l)=>sum + l, 0);
    if (total === 0) return path[0];
    let remaining = Math.min(Math.max(t, 0), 1) * total;
    for(let i = 0; i < legs.length; i++){
        if (remaining <= legs[i] || i === legs.length - 1) {
            const ratio = legs[i] === 0 ? 0 : Math.min(remaining / legs[i], 1);
            return {
                lat: path[i].lat + (path[i + 1].lat - path[i].lat) * ratio,
                lng: path[i].lng + (path[i + 1].lng - path[i].lng) * ratio
            };
        }
        remaining -= legs[i];
    }
    return path[path.length - 1];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/store.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findItem",
    ()=>findItem,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/items.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$neighborhoods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/neighborhoods.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/geo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$clock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/clock.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const COURIERS = [
    "Rosalie B.",
    "Amir T.",
    "Devon Marsh",
    "Priya N.",
    "Hollis Grant"
];
/** Courier standby points around Raleigh, so each order starts somewhere different. */ const COURIER_STARTS = [
    {
        lat: 35.7721,
        lng: -78.6553
    },
    {
        lat: 35.7994,
        lng: -78.6265
    },
    {
        lat: 35.8112,
        lng: -78.6591
    },
    {
        lat: 35.7688,
        lng: -78.6301
    }
];
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        savedIds: [
            "technics-sl1200",
            "kilim-rug"
        ],
        orders: [],
        listings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MY_SEEDED_LISTINGS"],
        recentSearches: [],
        toggleSaved: (id)=>set((s)=>({
                    savedIds: s.savedIds.includes(id) ? s.savedIds.filter((x)=>x !== id) : [
                        id,
                        ...s.savedIds
                    ]
                })),
        placeOrder: (item, fulfillment, dropoff)=>{
            const miles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceMiles"])(item.location, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME"]);
            const fee = fulfillment === "delivery" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deliveryFee"])(item.size, miles) : 0;
            const seed = get().orders.length;
            const order = {
                id: `SM-${Math.random().toString(36).toUpperCase().slice(2, 8)}`,
                itemId: item.id,
                fulfillment,
                dropoffAddress: dropoff,
                itemPrice: item.price,
                deliveryFee: fee,
                total: item.price + fee,
                courierName: COURIERS[seed % COURIERS.length],
                courierStart: COURIER_STARTS[seed % COURIER_STARTS.length],
                placedAt: Date.now()
            };
            set((s)=>({
                    orders: [
                        order,
                        ...s.orders
                    ]
                }));
            return order;
        },
        addListing: (draft)=>{
            const spot = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$neighborhoods$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEIGHBORHOODS"][draft.neighborhood] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME"];
            const item = {
                id: `mine-${Date.now().toString(36)}`,
                title: draft.title.trim(),
                price: Number(draft.price) || 0,
                category: draft.category,
                condition: draft.condition,
                description: draft.description.trim(),
                images: [
                    draft.image
                ],
                seller: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ME"],
                location: {
                    lat: spot.lat,
                    lng: spot.lng,
                    neighborhood: draft.neighborhood.trim() || "Glenwood South"
                },
                size: "medium",
                deliveryAvailable: draft.deliveryAvailable,
                postedAt: new Date().toISOString(),
                status: "active"
            };
            set((s)=>({
                    listings: [
                        item,
                        ...s.listings
                    ]
                }));
            return item;
        },
        markSold: (id)=>set((s)=>({
                    listings: s.listings.map((l)=>l.id === id ? {
                            ...l,
                            status: "sold"
                        } : l)
                })),
        removeListing: (id)=>set((s)=>({
                    listings: s.listings.filter((l)=>l.id !== id)
                })),
        recordSearch: (query)=>{
            const q = query.trim();
            if (!q) return;
            set((s)=>({
                    recentSearches: [
                        q,
                        ...s.recentSearches.filter((x)=>x.toLowerCase() !== q.toLowerCase())
                    ].slice(0, 6)
                }));
        },
        clearSearches: ()=>set({
                recentSearches: []
            })
    }), {
    name: "swapmeet"
}));
function findItem(id, listings) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_ITEMS"].find((i)=>i.id === id) ?? listings.find((i)=>i.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/time.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TODAY_UTC",
    ()=>TODAY_UTC,
    "daysAgoISO",
    ()=>daysAgoISO,
    "formatRelativeTime",
    ()=>formatRelativeTime
]);
const DAY_MS = 86_400_000;
const TODAY_UTC = new Date().setUTCHours(0, 0, 0, 0);
function daysAgoISO(days) {
    return new Date(TODAY_UTC - days * DAY_MS).toISOString();
}
function formatRelativeTime(iso) {
    const days = Math.round((TODAY_UTC - Date.parse(iso)) / DAY_MS);
    if (days <= 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_025pzee._.js.map