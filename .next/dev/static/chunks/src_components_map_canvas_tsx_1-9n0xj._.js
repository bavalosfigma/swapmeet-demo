(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/map/canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinMap",
    ()=>PinMap,
    "RouteMap",
    ()=>RouteMap,
    "StickerMap",
    ()=>StickerMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Marker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Polyline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/geo.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
function stickerIcon(item, selected) {
    const ring = selected ? "border-foreground bg-foreground text-background shadow-lg scale-105" : "border-border bg-background text-foreground shadow-sm";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "sticker-icon",
        iconSize: [
            0,
            0
        ],
        iconAnchor: [
            0,
            0
        ],
        html: `
      <div class="sticker-wrap">
        <div class="flex items-center gap-1 rounded-full border py-0.5 pr-2 pl-0.5 transition-all ${ring}">
          <img src="${item.images[0]}" alt="" class="size-6 shrink-0 rounded-full object-cover" />
          <span class="text-[11px] font-semibold whitespace-nowrap">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(item.price)}</span>
        </div>
      </div>
    `
    });
}
function dotIcon(label, filled) {
    const style = filled ? "border-background bg-foreground text-background" : "border-foreground bg-background text-foreground";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "sticker-icon",
        iconSize: [
            0,
            0
        ],
        iconAnchor: [
            0,
            0
        ],
        html: `
      <div class="sticker-wrap" style="transform: translate(-50%, 50%)">
        <div class="flex items-center gap-1.5">
          <span class="size-3 rounded-full border-2 ${style}"></span>
          <span class="rounded-full border border-border bg-background/90 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-foreground">${label}</span>
        </div>
      </div>
    `
    });
}
function courierIcon() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
        className: "sticker-icon",
        iconSize: [
            0,
            0
        ],
        iconAnchor: [
            0,
            0
        ],
        html: `
      <div class="sticker-wrap" style="transform: translate(-50%, 50%)">
        <span class="flex size-7 items-center justify-center rounded-full border-2 border-background bg-foreground shadow-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5 text-background">
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
            <path d="M15 18H9"/>
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
            <circle cx="17" cy="18" r="2"/>
            <circle cx="7" cy="18" r="2"/>
          </svg>
        </span>
      </div>
    `
    });
}
/** Keeps the Leaflet viewport in sync with React state changes. */ function ViewSync({ center, bounds, fitPadding = [
    48,
    48
] }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const lat = center?.lat;
    const lng = center?.lng;
    const [padX, padY] = fitPadding;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewSync.useEffect": ()=>{
            if (lat == null || lng == null) return;
            map.panTo([
                lat,
                lng
            ], {
                animate: true,
                duration: 0.4
            });
        }
    }["ViewSync.useEffect"], [
        map,
        lat,
        lng
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewSync.useEffect": ()=>{
            if (!bounds?.length) return;
            map.fitBounds(bounds.map({
                "ViewSync.useEffect": (p)=>[
                        p.lat,
                        p.lng
                    ]
            }["ViewSync.useEffect"]), {
                padding: [
                    padX,
                    padY
                ],
                animate: false
            });
        }
    }["ViewSync.useEffect"], [
        map,
        bounds,
        padX,
        padY
    ]);
    // Leaflet measures its container on init; when that happens before layout
    // settles the tiles come out misaligned until a resize is forced.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ViewSync.useEffect": ()=>{
            const id = setTimeout({
                "ViewSync.useEffect.id": ()=>map.invalidateSize()
            }["ViewSync.useEffect.id"], 120);
            return ({
                "ViewSync.useEffect": ()=>clearTimeout(id)
            })["ViewSync.useEffect"];
        }
    }["ViewSync.useEffect"], [
        map
    ]);
    return null;
}
_s(ViewSync, "OhiT3lNApSksMqMaIneO3P2U9+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"]
    ];
});
_c = ViewSync;
function StickerMap({ items, selectedId, onSelect, className }) {
    _s1();
    const markers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StickerMap.useMemo[markers]": ()=>items.map({
                "StickerMap.useMemo[markers]": (item)=>({
                        item,
                        icon: stickerIcon(item, item.id === selectedId)
                    })
            }["StickerMap.useMemo[markers]"])
    }["StickerMap.useMemo[markers]"], [
        items,
        selectedId
    ]);
    const selected = items.find((i)=>i.id === selectedId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        // Framed on the item cluster rather than fitted to every pin — fitting
        // the full spread zooms out far enough that the stickers collide.
        center: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME"].lat,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$geo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HOME"].lng
        ],
        zoom: 13,
        zoomControl: false,
        className: className,
        style: {
            height: "100%",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                url: TILE_URL,
                attribution: TILE_ATTRIBUTION
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewSync, {
                center: selected ? selected.location : undefined
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            markers.map(({ item, icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                    position: [
                        item.location.lat,
                        item.location.lng
                    ],
                    icon: icon,
                    zIndexOffset: item.id === selectedId ? 1000 : 0,
                    eventHandlers: {
                        click: ()=>onSelect?.(item.id)
                    }
                }, item.id, false, {
                    fileName: "[project]/src/components/map/canvas.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/map/canvas.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s1(StickerMap, "P/37rPEZMEfzYT4YsBbRL/DpqrU=");
_c1 = StickerMap;
function RouteMap({ route, courier, sellerLabel, buyerLabel, pickedUp, className }) {
    _s2();
    const seller = route[2] ?? route[0];
    const buyer = route.at(-1);
    const bounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RouteMap.useMemo[bounds]": ()=>route
    }["RouteMap.useMemo[bounds]"], [
        route
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        center: [
            seller.lat,
            seller.lng
        ],
        zoom: 13,
        zoomControl: false,
        className: className,
        style: {
            height: "100%",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                url: TILE_URL,
                attribution: TILE_ATTRIBUTION
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewSync, {
                bounds: bounds
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Polyline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polyline"], {
                positions: route.map((p)=>[
                        p.lat,
                        p.lng
                    ]),
                pathOptions: {
                    color: "#171717",
                    weight: 3,
                    opacity: 0.35,
                    dashArray: "6 8"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: [
                    seller.lat,
                    seller.lng
                ],
                icon: dotIcon(sellerLabel, pickedUp)
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: [
                    buyer.lat,
                    buyer.lng
                ],
                icon: dotIcon(buyerLabel, false)
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            courier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: [
                    courier.lat,
                    courier.lng
                ],
                icon: courierIcon(),
                zIndexOffset: 1000
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/map/canvas.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s2(RouteMap, "ypDBEG5YAgtIAeCuLzhQzhRHxlI=");
_c2 = RouteMap;
function PinMap({ point, label, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
        center: [
            point.lat,
            point.lng
        ],
        zoom: 14,
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        keyboard: false,
        attributionControl: false,
        className: className,
        style: {
            height: "100%",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                url: TILE_URL
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewSync, {}, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Marker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: [
                    point.lat,
                    point.lng
                ],
                icon: dotIcon(label, true)
            }, void 0, false, {
                fileName: "[project]/src/components/map/canvas.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/map/canvas.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c3 = PinMap;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ViewSync");
__turbopack_context__.k.register(_c1, "StickerMap");
__turbopack_context__.k.register(_c2, "RouteMap");
__turbopack_context__.k.register(_c3, "PinMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/map/canvas.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/map/canvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_map_canvas_tsx_1-9n0xj._.js.map