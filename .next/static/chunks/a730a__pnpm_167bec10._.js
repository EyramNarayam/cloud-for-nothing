(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/compose-refs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_react@19.1.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$refs$40$1$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_react@19.1.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = "".concat(ownerName, ".Slot");
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$refs$40$1$2e$1$2e$2_react$40$19$2e$1$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = "".concat(ownerName, ".SlotClone");
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = (param)=>{
        let { children } = param;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = "".concat(ownerName, ".Slottable");
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = function() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    var _Object_getOwnPropertyDescriptor, _Object_getOwnPropertyDescriptor1;
    let getter = (_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(element.props, "ref")) === null || _Object_getOwnPropertyDescriptor === void 0 ? void 0 : _Object_getOwnPropertyDescriptor.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = (_Object_getOwnPropertyDescriptor1 = Object.getOwnPropertyDescriptor(element, "ref")) === null || _Object_getOwnPropertyDescriptor1 === void 0 ? void 0 : _Object_getOwnPropertyDescriptor1.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/postinstall.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // This value is retrieved and hardcoded by the NPM postinstall script
__turbopack_context__.s([
    "getDefaultsFromPostinstall",
    ()=>getDefaultsFromPostinstall
]);
const getDefaultsFromPostinstall = ()=>undefined;
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONSTANTS",
    ()=>CONSTANTS,
    "DecodeBase64StringError",
    ()=>DecodeBase64StringError,
    "Deferred",
    ()=>Deferred,
    "ErrorFactory",
    ()=>ErrorFactory,
    "FirebaseError",
    ()=>FirebaseError,
    "MAX_VALUE_MILLIS",
    ()=>MAX_VALUE_MILLIS,
    "RANDOM_FACTOR",
    ()=>RANDOM_FACTOR,
    "Sha1",
    ()=>Sha1,
    "areCookiesEnabled",
    ()=>areCookiesEnabled,
    "assert",
    ()=>assert,
    "assertionError",
    ()=>assertionError,
    "async",
    ()=>async,
    "base64",
    ()=>base64,
    "base64Decode",
    ()=>base64Decode,
    "base64Encode",
    ()=>base64Encode,
    "base64urlEncodeWithoutPadding",
    ()=>base64urlEncodeWithoutPadding,
    "calculateBackoffMillis",
    ()=>calculateBackoffMillis,
    "contains",
    ()=>contains,
    "createMockUserToken",
    ()=>createMockUserToken,
    "createSubscribe",
    ()=>createSubscribe,
    "decode",
    ()=>decode,
    "deepCopy",
    ()=>deepCopy,
    "deepEqual",
    ()=>deepEqual,
    "deepExtend",
    ()=>deepExtend,
    "errorPrefix",
    ()=>errorPrefix,
    "extractQuerystring",
    ()=>extractQuerystring,
    "getDefaultAppConfig",
    ()=>getDefaultAppConfig,
    "getDefaultEmulatorHost",
    ()=>getDefaultEmulatorHost,
    "getDefaultEmulatorHostnameAndPort",
    ()=>getDefaultEmulatorHostnameAndPort,
    "getDefaults",
    ()=>getDefaults,
    "getExperimentalSetting",
    ()=>getExperimentalSetting,
    "getGlobal",
    ()=>getGlobal,
    "getModularInstance",
    ()=>getModularInstance,
    "getUA",
    ()=>getUA,
    "isAdmin",
    ()=>isAdmin,
    "isBrowser",
    ()=>isBrowser,
    "isBrowserExtension",
    ()=>isBrowserExtension,
    "isCloudWorkstation",
    ()=>isCloudWorkstation,
    "isCloudflareWorker",
    ()=>isCloudflareWorker,
    "isElectron",
    ()=>isElectron,
    "isEmpty",
    ()=>isEmpty,
    "isIE",
    ()=>isIE,
    "isIndexedDBAvailable",
    ()=>isIndexedDBAvailable,
    "isMobileCordova",
    ()=>isMobileCordova,
    "isNode",
    ()=>isNode,
    "isNodeSdk",
    ()=>isNodeSdk,
    "isReactNative",
    ()=>isReactNative,
    "isSafari",
    ()=>isSafari,
    "isSafariOrWebkit",
    ()=>isSafariOrWebkit,
    "isUWP",
    ()=>isUWP,
    "isValidFormat",
    ()=>isValidFormat,
    "isValidTimestamp",
    ()=>isValidTimestamp,
    "isWebWorker",
    ()=>isWebWorker,
    "issuedAtTime",
    ()=>issuedAtTime,
    "jsonEval",
    ()=>jsonEval,
    "map",
    ()=>map,
    "ordinal",
    ()=>ordinal,
    "pingServer",
    ()=>pingServer,
    "promiseWithTimeout",
    ()=>promiseWithTimeout,
    "querystring",
    ()=>querystring,
    "querystringDecode",
    ()=>querystringDecode,
    "safeGet",
    ()=>safeGet,
    "stringLength",
    ()=>stringLength,
    "stringToByteArray",
    ()=>stringToByteArray,
    "stringify",
    ()=>stringify,
    "updateEmulatorBanner",
    ()=>updateEmulatorBanner,
    "validateArgCount",
    ()=>validateArgCount,
    "validateCallback",
    ()=>validateCallback,
    "validateContextObject",
    ()=>validateContextObject,
    "validateIndexedDBOpenable",
    ()=>validateIndexedDBOpenable,
    "validateNamespace",
    ()=>validateNamespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$postinstall$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/postinstall.mjs [app-client] (ecmascript)");
;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */ const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */ NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */ NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */ SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Throws an error if the provided assertion is falsy
 */ const assert = function(assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */ const assertionError = function(message) {
    return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const stringToByteArray$1 = function(str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */ const byteArrayToString = function(bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while(pos < bytes.length){
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        } else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
        } else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        } else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
// TODO(dlarocque): Define this as a class, since we no longer target ES5.
const base64 = {
    /**
     * Maps bytes to characters.
     */ byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */ charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */ byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */ charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */ get ENCODED_VALS () {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */ get ENCODED_VALS_WEBSAFE () {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */ HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeByteArray (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
        const output = [];
        for(let i = 0; i < input.length; i += 3){
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
            let outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */ encodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */ decodeString (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */ decodeStringToByteArray (input, webSafe) {
        this.init_();
        const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
        const output = [];
        for(let i = 0; i < input.length;){
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw new DecodeBase64StringError();
            }
            const outByte1 = byte1 << 2 | byte2 >> 4;
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = byte3 << 6 & 0xc0 | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */ init_ () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for(let i = 0; i < this.ENCODED_VALS.length; i++){
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * An error encountered while decoding base64 string.
 */ class DecodeBase64StringError extends Error {
    constructor(){
        super(...arguments);
        this.name = 'DecodeBase64StringError';
    }
}
/**
 * URL-safe base64 encoding
 */ const base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */ const base64urlEncodeWithoutPadding = function(str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */ const base64Decode = function(str) {
    try {
        return base64.decodeString(str, true);
    } catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */ function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */ function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch(source.constructor){
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for(const prop in source){
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */ function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    }
    //TURBOPACK unreachable
    ;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const getDefaultsFromGlobal = ()=>getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */ const getDefaultsFromEnvVariable = ()=>{
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === 'undefined' || typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env === 'undefined') {
        return;
    }
    const defaultsJsonString = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
    }
};
const getDefaultsFromCookie = ()=>{
    if (typeof document === 'undefined') {
        return;
    }
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */ const getDefaults = ()=>{
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$postinstall$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultsFromPostinstall"])() || getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
    } catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */ console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */ const getDefaultEmulatorHost = (productName)=>{
    var _getDefaults_emulatorHosts, _getDefaults;
    return (_getDefaults = getDefaults()) === null || _getDefaults === void 0 ? void 0 : (_getDefaults_emulatorHosts = _getDefaults.emulatorHosts) === null || _getDefaults_emulatorHosts === void 0 ? void 0 : _getDefaults_emulatorHosts[productName];
};
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */ const getDefaultEmulatorHostnameAndPort = (productName)=>{
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
        return undefined;
    }
    const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
        throw new Error("Invalid host ".concat(host, " with no separate hostname and port!"));
    }
    // eslint-disable-next-line no-restricted-globals
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === '[') {
        // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
        return [
            host.substring(1, separatorIndex - 1),
            port
        ];
    } else {
        return [
            host.substring(0, separatorIndex),
            port
        ];
    }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */ const getDefaultAppConfig = ()=>{
    var _getDefaults;
    return (_getDefaults = getDefaults()) === null || _getDefaults === void 0 ? void 0 : _getDefaults.config;
};
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */ const getExperimentalSetting = (name)=>{
    var _getDefaults;
    return (_getDefaults = getDefaults()) === null || _getDefaults === void 0 ? void 0 : _getDefaults["_".concat(name)];
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Deferred {
    /**
     * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */ wrapCallback(callback) {
        return (error, value)=>{
            if (error) {
                this.reject(error);
            } else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(()=>{});
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                } else {
                    callback(error, value);
                }
            }
        };
    }
    constructor(){
        this.reject = ()=>{};
        this.resolve = ()=>{};
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Checks whether host is a cloud workstation or not.
 * @public
 */ function isCloudWorkstation(url) {
    // `isCloudWorkstation` is called without protocol in certain connect*Emulator functions
    // In HTTP request builders, it's called with the protocol.
    // If called with protocol prefix, it's a valid URL, so we extract the hostname
    // If called without, we assume the string is the hostname.
    try {
        const host = url.startsWith('http://') || url.startsWith('https://') ? new URL(url).hostname : url;
        return host.endsWith('.cloudworkstations.dev');
    } catch (e) {
        return false;
    }
}
/**
 * Makes a fetch request to the given server.
 * Mostly used for forwarding cookies in Firebase Studio.
 * @public
 */ async function pingServer(endpoint) {
    const result = await fetch(endpoint, {
        credentials: 'include'
    });
    return result.ok;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = {
        // Set all required fields to decent defaults
        iss: "https://securetoken.google.com/".concat(project),
        aud: project,
        iat,
        exp: iat + 3600,
        auth_time: iat,
        sub,
        user_id: sub,
        firebase: {
            sign_in_provider: 'custom',
            identities: {}
        },
        // Override with user options
        ...token
    };
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
const emulatorStatus = {};
// Checks whether any products are running on an emulator
function getEmulatorSummary() {
    const summary = {
        prod: [],
        emulator: []
    };
    for (const key of Object.keys(emulatorStatus)){
        if (emulatorStatus[key]) {
            summary.emulator.push(key);
        } else {
            summary.prod.push(key);
        }
    }
    return summary;
}
function getOrCreateEl(id) {
    let parentDiv = document.getElementById(id);
    let created = false;
    if (!parentDiv) {
        parentDiv = document.createElement('div');
        parentDiv.setAttribute('id', id);
        created = true;
    }
    return {
        created,
        element: parentDiv
    };
}
let previouslyDismissed = false;
/**
 * Updates Emulator Banner. Primarily used for Firebase Studio
 * @param name
 * @param isRunningEmulator
 * @public
 */ function updateEmulatorBanner(name, isRunningEmulator) {
    if (typeof window === 'undefined' || typeof document === 'undefined' || !isCloudWorkstation(window.location.host) || emulatorStatus[name] === isRunningEmulator || emulatorStatus[name] || // If already set to use emulator, can't go back to prod.
    previouslyDismissed) {
        return;
    }
    emulatorStatus[name] = isRunningEmulator;
    function prefixedId(id) {
        return "__firebase__banner__".concat(id);
    }
    const bannerId = '__firebase__banner';
    const summary = getEmulatorSummary();
    const showError = summary.prod.length > 0;
    function tearDown() {
        const element = document.getElementById(bannerId);
        if (element) {
            element.remove();
        }
    }
    function setupBannerStyles(bannerEl) {
        bannerEl.style.display = 'flex';
        bannerEl.style.background = '#7faaf0';
        bannerEl.style.position = 'fixed';
        bannerEl.style.bottom = '5px';
        bannerEl.style.left = '5px';
        bannerEl.style.padding = '.5em';
        bannerEl.style.borderRadius = '5px';
        bannerEl.style.alignItems = 'center';
    }
    function setupIconStyles(prependIcon, iconId) {
        prependIcon.setAttribute('width', '24');
        prependIcon.setAttribute('id', iconId);
        prependIcon.setAttribute('height', '24');
        prependIcon.setAttribute('viewBox', '0 0 24 24');
        prependIcon.setAttribute('fill', 'none');
        prependIcon.style.marginLeft = '-6px';
    }
    function setupCloseBtn() {
        const closeBtn = document.createElement('span');
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.marginLeft = '16px';
        closeBtn.style.fontSize = '24px';
        closeBtn.innerHTML = ' &times;';
        closeBtn.onclick = ()=>{
            previouslyDismissed = true;
            tearDown();
        };
        return closeBtn;
    }
    function setupLinkStyles(learnMoreLink, learnMoreId) {
        learnMoreLink.setAttribute('id', learnMoreId);
        learnMoreLink.innerText = 'Learn more';
        learnMoreLink.href = 'https://firebase.google.com/docs/studio/preview-apps#preview-backend';
        learnMoreLink.setAttribute('target', '__blank');
        learnMoreLink.style.paddingLeft = '5px';
        learnMoreLink.style.textDecoration = 'underline';
    }
    function setupDom() {
        const banner = getOrCreateEl(bannerId);
        const firebaseTextId = prefixedId('text');
        const firebaseText = document.getElementById(firebaseTextId) || document.createElement('span');
        const learnMoreId = prefixedId('learnmore');
        const learnMoreLink = document.getElementById(learnMoreId) || document.createElement('a');
        const prependIconId = prefixedId('preprendIcon');
        const prependIcon = document.getElementById(prependIconId) || document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        if (banner.created) {
            // update styles
            const bannerEl = banner.element;
            setupBannerStyles(bannerEl);
            setupLinkStyles(learnMoreLink, learnMoreId);
            const closeBtn = setupCloseBtn();
            setupIconStyles(prependIcon, prependIconId);
            bannerEl.append(prependIcon, firebaseText, learnMoreLink, closeBtn);
            document.body.appendChild(bannerEl);
        }
        if (showError) {
            firebaseText.innerText = "Preview backend disconnected.";
            prependIcon.innerHTML = '<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>';
        } else {
            prependIcon.innerHTML = '<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>';
            firebaseText.innerText = 'Preview backend running in this workspace.';
        }
        firebaseText.setAttribute('id', firebaseTextId);
    }
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', setupDom);
    } else {
        setupDom();
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */ function getUA() {
    if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    } else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */ function isMobileCordova() {
    return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
    // just to deal with this case would probably be a bad idea.
    !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */ // Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    var _getDefaults;
    const forceEnvironment = (_getDefaults = getDefaults()) === null || _getDefaults === void 0 ? void 0 : _getDefaults.forceEnvironment;
    if (forceEnvironment === 'node') {
        return true;
    } else if (forceEnvironment === 'browser') {
        return false;
    }
    try {
        return Object.prototype.toString.call(/*TURBOPACK member replacement*/ __turbopack_context__.g.process) === '[object process]';
    } catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment.
 * Note: This will return true for certain test frameworks that are incompletely
 * mimicking a browser, and should not lead to assuming all browser APIs are
 * available.
 */ function isBrowser() {
    return typeof window !== 'undefined' || isWebWorker();
}
/**
 * Detect Web Worker context.
 */ function isWebWorker() {
    return typeof WorkerGlobalScope !== 'undefined' && typeof self !== 'undefined' && self instanceof WorkerGlobalScope;
}
/**
 * Detect Cloudflare Worker context.
 */ function isCloudflareWorker() {
    return typeof navigator !== 'undefined' && navigator.userAgent === 'Cloudflare-Workers';
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */ function isReactNative() {
    return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */ function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */ function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */ function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */ function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */ function isSafari() {
    return !isNode() && !!navigator.userAgent && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/** Returns true if we are running in Safari or WebKit */ function isSafariOrWebkit() {
    return !isNode() && !!navigator.userAgent && (navigator.userAgent.includes('Safari') || navigator.userAgent.includes('WebKit')) && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */ function isIndexedDBAvailable() {
    try {
        return typeof indexedDB === 'object';
    } catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */ function validateIndexedDBOpenable() {
    return new Promise((resolve, reject)=>{
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = ()=>{
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = ()=>{
                preExist = false;
            };
            request.onerror = ()=>{
                var _request_error;
                reject(((_request_error = request.error) === null || _request_error === void 0 ? void 0 : _request_error.message) || '');
            };
        } catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */ function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // TypeScript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */ const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(/** The error code for this error. */ code, message, /** Custom data for this error. */ customData){
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */ this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // TODO(dlarocque): Replace this with `new.target`: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
        //                   which we can now use since we no longer target ES5.
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    create(code) {
        for(var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            data[_key - 1] = arguments[_key];
        }
        const customData = data[0] || {};
        const fullCode = "".concat(this.service, "/").concat(code);
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = "".concat(this.serviceName, ": ").concat(message, " (").concat(fullCode, ").");
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
    constructor(service, serviceName, errors){
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key)=>{
        const value = data[key];
        return value != null ? String(value) : "<".concat(key, "?>");
    });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */ function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data JavaScript object to be stringified.
 * @return {string} The JSON contents of the object.
 */ function stringify(data) {
    return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const decode = function(token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    } catch (e) {}
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidTimestamp = function(token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        } else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        } else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const issuedAtTime = function(token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isValidFormat = function(token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */ const isAdmin = function(token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    } else {
        return undefined;
    }
}
function isEmpty(obj) {
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */ function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys){
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        } else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys){
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */ function promiseWithTimeout(promise) {
    let timeInMS = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2000;
    const deferredPromise = new Deferred();
    setTimeout(()=>deferredPromise.reject('timeout!'), timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */ function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)){
        if (Array.isArray(value)) {
            value.forEach((arrayVal)=>{
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        } else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */ function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach((token)=>{
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */ function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */ /**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */ class Sha1 {
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */ compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for(let i = 0; i < 16; i++){
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
                offset += 4;
            }
        } else {
            for(let i = 0; i < 16; i++){
                W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for(let i = 16; i < 80; i++){
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = (t << 1 | t >>> 31) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for(let i = 0; i < 80; i++){
            if (i < 40) {
                if (i < 20) {
                    f = d ^ b & (c ^ d);
                    k = 0x5a827999;
                } else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            } else {
                if (i < 60) {
                    f = b & c | d & (b | c);
                    k = 0x8f1bbcdc;
                } else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
            e = d;
            d = c;
            c = (b << 30 | b >>> 2) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = this.chain_[0] + a & 0xffffffff;
        this.chain_[1] = this.chain_[1] + b & 0xffffffff;
        this.chain_[2] = this.chain_[2] + c & 0xffffffff;
        this.chain_[3] = this.chain_[3] + d & 0xffffffff;
        this.chain_[4] = this.chain_[4] + e & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while(n < length){
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while(n <= lengthMinusBlock){
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while(n < length){
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        break;
                    }
                }
            } else {
                while(n < length){
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */ digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        } else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for(let i = this.blockSize - 1; i >= 56; i--){
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for(let i = 0; i < 5; i++){
            for(let j = 24; j >= 0; j -= 8){
                digest[n] = this.chain_[i] >> j & 255;
                ++n;
            }
        }
        return digest;
    }
    constructor(){
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */ this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */ this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */ this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */ this.pad_ = [];
        /**
         * @private {number}
         */ this.inbuf_ = 0;
        /**
         * @private {number}
         */ this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for(let i = 1; i < this.blockSize; ++i){
            this.pad_[i] = 0;
        }
        this.reset();
    }
}
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */ function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */ class ObserverProxy {
    next(value) {
        this.forEachObserver((observer)=>{
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer)=>{
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer)=>{
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber synchronously to their
     *   call to subscribe().
     */ subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined && error === undefined && complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        } else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(()=>{
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    } else {
                        observer.complete();
                    }
                } catch (e) {
                // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for(let i = 0; i < this.observers.length; i++){
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                } catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(()=>{
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */ constructor(executor, onNoObservers){
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task.then(()=>{
            executor(this);
        }).catch((e)=>{
            this.error(e);
        });
    }
}
/** Turn synchronous function into one called asynchronously. */ // eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        Promise.resolve(true).then(()=>{
            fn(...args);
        }).catch((error)=>{
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */ function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods){
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */ const validateArgCount = function(fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    } else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */ function errorPrefix(fnName, argName) {
    return "".concat(fnName, " failed: ").concat(argName, " argument ");
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */ function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in JavaScript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */ const stringToByteArray = function(str) {
    const out = [];
    let p = 0;
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        } else if (c < 2048) {
            out[p++] = c >> 6 | 192;
            out[p++] = c & 63 | 128;
        } else if (c < 65536) {
            out[p++] = c >> 12 | 224;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        } else {
            out[p++] = c >> 18 | 240;
            out[p++] = c >> 12 & 63 | 128;
            out[p++] = c >> 6 & 63 | 128;
            out[p++] = c & 63 | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */ const stringLength = function(str) {
    let p = 0;
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        } else if (c < 2048) {
            p += 2;
        } else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        } else {
            p += 3;
        }
    }
    return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The amount of milliseconds to exponentially increase.
 */ const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */ const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */ const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */ const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */ function calculateBackoffMillis(backoffCount) {
    let intervalMillis = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_INTERVAL_MILLIS, backoffFactor = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_BACKOFF_FACTOR;
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(// A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
    // if we add or subtract.
    (Math.random() - 0.5) * 2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provide English ordinal letters after a number
 */ function ordinal(i) {
    if (!Number.isFinite(i)) {
        return "".concat(i);
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    } else {
        return service;
    }
}
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+component@0.7.0/node_modules/@firebase/component/dist/esm/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Component",
    ()=>Component,
    "ComponentContainer",
    ()=>ComponentContainer,
    "Provider",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/index.esm.js [app-client] (ecmascript)");
;
/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */ class Component {
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */ constructor(name, instanceFactory, type){
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */ this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */ ;
        this.onInstanceCreated = null;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */ class Provider {
    /**
     * @param identifier A provider can provide multiple instances of a service
     * if this.component.multipleInstances is true.
     */ get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Deferred"]();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                } catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        var _options_optional;
        const optional = (_options_optional = options === null || options === void 0 ? void 0 : options.optional) !== null && _options_optional !== void 0 ? _options_optional : false;
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            } catch (e) {
                if (optional) {
                    return null;
                } else {
                    throw e;
                }
            }
        } else {
            // In case a component is not initialized and should/cannot be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            } else {
                throw Error("Service ".concat(this.name, " is not available"));
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
        }
        if (this.component) {
            throw Error("Component for ".concat(this.name, " has already been provided"));
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({
                    instanceIdentifier: DEFAULT_ENTRY_NAME
                });
            } catch (e) {
            // when the instance factory for an eager Component throws an exception during the eager
            // initialization, it should not cause a fatal error.
            // TODO: Investigate if we need to make it configurable, because some component may want to cause
            // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            } catch (e) {
            // when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance() {
        let identifier = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_ENTRY_NAME;
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services.filter((service)=>'INTERNAL' in service) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service.INTERNAL.delete()),
            ...services.filter((service)=>'_delete' in service) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((service)=>service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized() {
        let identifier = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_ENTRY_NAME;
        return this.instances.has(identifier);
    }
    getOptions() {
        let identifier = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_ENTRY_NAME;
        return this.instancesOptions.get(identifier) || {};
    }
    initialize() {
        let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
        }
        if (!this.isComponentSet()) {
            throw Error("Component ".concat(this.name, " has not been registered yet"));
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()){
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */ onInit(callback, identifier) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        var _this_onInitCallbacks_get;
        const existingCallbacks = (_this_onInitCallbacks_get = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _this_onInitCallbacks_get !== void 0 ? _this_onInitCallbacks_get : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return ()=>{
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */ invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks){
            try {
                callback(instance, identifier);
            } catch (e) {
            // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService(param) {
        let { instanceIdentifier, options = {} } = param;
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */ this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */ if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                } catch (e) {
                // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier() {
        let identifier = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_ENTRY_NAME;
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        } else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return !!this.component && this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */ ;
    }
    constructor(name, container){
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */ ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */ class ComponentContainer {
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */ addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */ getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
    constructor(name){
        this.name = name;
        this.providers = new Map();
    }
}
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+logger@0.5.0/node_modules/@firebase/logger/dist/esm/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A container for all of the Logger instances
 */ __turbopack_context__.s([
    "LogLevel",
    ()=>LogLevel,
    "Logger",
    ()=>Logger,
    "setLogLevel",
    ()=>setLogLevel,
    "setUserLogHandler",
    ()=>setUserLogHandler
]);
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */ var LogLevel;
(function(LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */ const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */ const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */ const defaultLogHandler = function(instance, logType) {
    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        args[_key - 2] = arguments[_key];
    }
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method]("[".concat(now, "]  ").concat(instance.name, ":"), ...args);
    } else {
        throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
    }
};
class Logger {
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError('Invalid value "'.concat(val, '" assigned to `logLevel`'));
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */ debug() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */ constructor(name){
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */ this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */ this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */ this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */ instances.push(this);
    }
}
function setLogLevel(level) {
    instances.forEach((inst)=>{
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances){
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        } else {
            instance.userLogHandler = function(instance, level) {
                for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    args[_key - 2] = arguments[_key];
                }
                const message = args.map((arg)=>{
                    if (arg == null) {
                        return null;
                    } else if (typeof arg === 'string') {
                        return arg;
                    } else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    } else if (arg instanceof Error) {
                        return arg.message;
                    } else {
                        try {
                            return JSON.stringify(arg);
                        } catch (ignored) {
                            return null;
                        }
                    }
                }).filter((arg)=>arg).join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/wrap-idb-value.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>reverseTransformCache,
    "i",
    ()=>instanceOfAny,
    "r",
    ()=>replaceTraps,
    "u",
    ()=>unwrap,
    "w",
    ()=>wrap
]);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise.then((value)=>{
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
    // Catching to avoid "Uncaught Promise exceptions"
    }).catch(()=>{});
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
        return function(storeNames) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [
                storeNames
            ]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function') return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteDB",
    ()=>deleteDB,
    "openDB",
    ()=>openDB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$wrap$2d$idb$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/wrap-idb-value.js [app-client] (ecmascript)");
;
;
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version) {
    let { blocked, upgrade, blocking, terminated } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const request = indexedDB.open(name, version);
    const openPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$wrap$2d$idb$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event)=>{
            upgrade((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$wrap$2d$idb$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(request.result), event.oldVersion, event.newVersion, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$wrap$2d$idb$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event.newVersion, event));
    }
    openPromise.then((db)=>{
        if (terminated) db.addEventListener('close', ()=>terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event)=>blocking(event.oldVersion, event.newVersion, event));
        }
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name) {
    let { blocked } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$wrap$2d$idb$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["w"])(request).then(()=>undefined);
}
const readMethods = [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
];
const writeMethods = [
    'put',
    'add',
    'delete',
    'clear'
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function(storeName) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$wrap$2d$idb$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["r"])((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+app@0.14.3/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_VERSION",
    ()=>SDK_VERSION,
    "_DEFAULT_ENTRY_NAME",
    ()=>DEFAULT_ENTRY_NAME,
    "_addComponent",
    ()=>_addComponent,
    "_addOrOverwriteComponent",
    ()=>_addOrOverwriteComponent,
    "_apps",
    ()=>_apps,
    "_clearComponents",
    ()=>_clearComponents,
    "_components",
    ()=>_components,
    "_getProvider",
    ()=>_getProvider,
    "_isFirebaseApp",
    ()=>_isFirebaseApp,
    "_isFirebaseServerApp",
    ()=>_isFirebaseServerApp,
    "_isFirebaseServerAppSettings",
    ()=>_isFirebaseServerAppSettings,
    "_registerComponent",
    ()=>_registerComponent,
    "_removeServiceInstance",
    ()=>_removeServiceInstance,
    "_serverApps",
    ()=>_serverApps,
    "deleteApp",
    ()=>deleteApp,
    "getApp",
    ()=>getApp,
    "getApps",
    ()=>getApps,
    "initializeApp",
    ()=>initializeApp,
    "initializeServerApp",
    ()=>initializeServerApp,
    "onLog",
    ()=>onLog,
    "registerVersion",
    ()=>registerVersion,
    "setLogLevel",
    ()=>setLogLevel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+component@0.7.0/node_modules/@firebase/component/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$logger$40$0$2e$5$2e$0$2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+logger@0.5.0/node_modules/@firebase/logger/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class PlatformLoggerServiceImpl {
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers.map((provider)=>{
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return "".concat(service.library, "/").concat(service.version);
            } else {
                return null;
            }
        }).filter((logString)=>logString).join(' ');
    }
    constructor(container){
        this.container = container;
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */ function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */ ;
}
const name$q = "@firebase/app";
const version$1 = "0.14.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$logger$40$0$2e$5$2e$0$2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"]('@firebase/app');
const name$p = "@firebase/app-compat";
const name$o = "@firebase/analytics-compat";
const name$n = "@firebase/analytics";
const name$m = "@firebase/app-check-compat";
const name$l = "@firebase/app-check";
const name$k = "@firebase/auth";
const name$j = "@firebase/auth-compat";
const name$i = "@firebase/database";
const name$h = "@firebase/data-connect";
const name$g = "@firebase/database-compat";
const name$f = "@firebase/functions";
const name$e = "@firebase/functions-compat";
const name$d = "@firebase/installations";
const name$c = "@firebase/installations-compat";
const name$b = "@firebase/messaging";
const name$a = "@firebase/messaging-compat";
const name$9 = "@firebase/performance";
const name$8 = "@firebase/performance-compat";
const name$7 = "@firebase/remote-config";
const name$6 = "@firebase/remote-config-compat";
const name$5 = "@firebase/storage";
const name$4 = "@firebase/storage-compat";
const name$3 = "@firebase/firestore";
const name$2 = "@firebase/ai";
const name$1 = "@firebase/firestore-compat";
const name = "firebase";
const version = "12.3.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The default app name
 *
 * @internal
 */ const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$q]: 'fire-core',
    [name$p]: 'fire-core-compat',
    [name$n]: 'fire-analytics',
    [name$o]: 'fire-analytics-compat',
    [name$l]: 'fire-app-check',
    [name$m]: 'fire-app-check-compat',
    [name$k]: 'fire-auth',
    [name$j]: 'fire-auth-compat',
    [name$i]: 'fire-rtdb',
    [name$h]: 'fire-data-connect',
    [name$g]: 'fire-rtdb-compat',
    [name$f]: 'fire-fn',
    [name$e]: 'fire-fn-compat',
    [name$d]: 'fire-iid',
    [name$c]: 'fire-iid-compat',
    [name$b]: 'fire-fcm',
    [name$a]: 'fire-fcm-compat',
    [name$9]: 'fire-perf',
    [name$8]: 'fire-perf-compat',
    [name$7]: 'fire-rc',
    [name$6]: 'fire-rc-compat',
    [name$5]: 'fire-gcs',
    [name$4]: 'fire-gcs-compat',
    [name$3]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    [name$2]: 'fire-vertex',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */ const _apps = new Map();
/**
 * @internal
 */ const _serverApps = new Map();
/**
 * Registered components.
 *
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */ function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    } catch (e) {
        logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
    }
}
/**
 *
 * @internal
 */ function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */ function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()){
        _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()){
        _addComponent(serverApp, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */ function _getProvider(app, name) {
    const heartbeatController = app.container.getProvider('heartbeat').getImmediate({
        optional: true
    });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */ function _removeServiceInstance(app, name) {
    let instanceIdentifier = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_ENTRY_NAME;
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 *
 * @param obj - an object of type FirebaseApp, FirebaseOptions or FirebaseAppSettings.
 *
 * @returns true if the provide object is of type FirebaseApp.
 *
 * @internal
 */ function _isFirebaseApp(obj) {
    return obj.options !== undefined;
}
/**
 *
 * @param obj - an object of type FirebaseApp, FirebaseOptions or FirebaseAppSettings.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */ function _isFirebaseServerAppSettings(obj) {
    if (_isFirebaseApp(obj)) {
        return false;
    }
    return 'authIdToken' in obj || 'appCheckToken' in obj || 'releaseOnDeref' in obj || 'automaticDataCollectionEnabled' in obj;
}
/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */ function _isFirebaseServerApp(obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    return obj.settings !== undefined;
}
/**
 * Test only
 *
 * @internal
 */ function _clearComponents() {
    _components.clear();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["no-app" /* AppError.NO_APP */ ]: "No Firebase App '{$appName}' has been created - " + 'call initializeApp() first',
    ["bad-app-name" /* AppError.BAD_APP_NAME */ ]: "Illegal App name: '{$appName}'",
    ["duplicate-app" /* AppError.DUPLICATE_APP */ ]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* AppError.APP_DELETED */ ]: "Firebase App named '{$appName}' already deleted",
    ["server-app-deleted" /* AppError.SERVER_APP_DELETED */ ]: 'Firebase Server App has been deleted',
    ["no-options" /* AppError.NO_OPTIONS */ ]: 'Need to provide options, when not being deployed to hosting via source.',
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */ ]: 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.',
    ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */ ]: 'First argument to `onLog` must be null or a function.',
    ["idb-open" /* AppError.IDB_OPEN */ ]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-get" /* AppError.IDB_GET */ ]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-set" /* AppError.IDB_WRITE */ ]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-delete" /* AppError.IDB_DELETE */ ]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    ["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */ ]: 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    ["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */ ]: 'FirebaseServerApp is not for use in browser environments.'
};
const ERROR_FACTORY = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorFactory"]('app', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FirebaseAppImpl {
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */ , {
                appName: this._name
            });
        }
    }
    constructor(options, config, container){
        this._isDeleted = false;
        this._options = {
            ...options
        };
        this._config = {
            ...config
        };
        this._name = config.name;
        this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]('app', ()=>this, "PUBLIC" /* ComponentType.PUBLIC */ ));
    }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Parse the token and check to see if the `exp` claim is in the future.
// Reports an error to the console if the token or claim could not be parsed, or if `exp` is in
// the past.
function validateTokenTTL(base64Token, tokenName) {
    const secondPart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64Decode"])(base64Token.split('.')[1]);
    if (secondPart === null) {
        console.error("FirebaseServerApp ".concat(tokenName, " is invalid: second part could not be parsed."));
        return;
    }
    const expClaim = JSON.parse(secondPart).exp;
    if (expClaim === undefined) {
        console.error("FirebaseServerApp ".concat(tokenName, " is invalid: expiration claim could not be parsed"));
        return;
    }
    const exp = JSON.parse(secondPart).exp * 1000;
    const now = new Date().getTime();
    const diff = exp - now;
    if (diff <= 0) {
        console.error("FirebaseServerApp ".concat(tokenName, " is invalid: the token has expired."));
    }
}
class FirebaseServerAppImpl extends FirebaseAppImpl {
    toJSON() {
        return undefined;
    }
    get refCount() {
        return this._refCount;
    }
    // Increment the reference count of this server app. If an object is provided, register it
    // with the finalization registry.
    incRefCount(obj) {
        if (this.isDeleted) {
            return;
        }
        this._refCount++;
        if (obj !== undefined && this._finalizationRegistry !== null) {
            this._finalizationRegistry.register(obj, this);
        }
    }
    // Decrement the reference count.
    decRefCount() {
        if (this.isDeleted) {
            return 0;
        }
        return --this._refCount;
    }
    // Invoked by the FinalizationRegistry callback to note that this app should go through its
    // reference counts and delete itself if no reference count remain. The coordinating logic that
    // handles this is in deleteApp(...).
    automaticCleanup() {
        void deleteApp(this);
    }
    get settings() {
        this.checkDestroyed();
        return this._serverConfig;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */ checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */ );
        }
    }
    constructor(options, serverConfig, name, container){
        // Build configuration parameters for the FirebaseAppImpl base class.
        const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined ? serverConfig.automaticDataCollectionEnabled : true;
        // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
        const config = {
            name,
            automaticDataCollectionEnabled
        };
        if (options.apiKey !== undefined) {
            // Construct the parent FirebaseAppImp object.
            super(options, config, container);
        } else {
            const appImpl = options;
            super(appImpl.options, config, container);
        }
        // Now construct the data for the FirebaseServerAppImpl.
        this._serverConfig = {
            automaticDataCollectionEnabled,
            ...serverConfig
        };
        // Ensure that the current time is within the `authIdtoken` window of validity.
        if (this._serverConfig.authIdToken) {
            validateTokenTTL(this._serverConfig.authIdToken, 'authIdToken');
        }
        // Ensure that the current time is within the `appCheckToken` window of validity.
        if (this._serverConfig.appCheckToken) {
            validateTokenTTL(this._serverConfig.appCheckToken, 'appCheckToken');
        }
        this._finalizationRegistry = null;
        if (typeof FinalizationRegistry !== 'undefined') {
            this._finalizationRegistry = new FinalizationRegistry(()=>{
                this.automaticCleanup();
            });
        }
        this._refCount = 0;
        this.incRefCount(this._serverConfig.releaseOnDeref);
        // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
        // will never trigger.
        this._serverConfig.releaseOnDeref = undefined;
        serverConfig.releaseOnDeref = undefined;
        registerVersion(name$q, version$1, 'serverapp');
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The current SDK version.
 *
 * @public
 */ const SDK_VERSION = version;
function initializeApp(_options) {
    let rawConfig = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let options = _options;
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = {
            name
        };
    }
    const config = {
        name: DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: true,
        ...rawConfig
    };
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */ , {
            appName: String(name)
        });
    }
    options || (options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppConfig"])());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */ );
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(options, existingApp.options) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(config, existingApp.config)) {
            return existingApp;
        } else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */ , {
                appName: name
            });
        }
    }
    const container = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentContainer"](name);
    for (const component of _components.values()){
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
function initializeServerApp(_options) {
    let _serverAppConfig = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebWorker"])()) {
        // FirebaseServerApp isn't designed to be run in browsers.
        throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */ );
    }
    let firebaseOptions;
    let serverAppSettings = _serverAppConfig || {};
    if (_options) {
        if (_isFirebaseApp(_options)) {
            firebaseOptions = _options.options;
        } else if (_isFirebaseServerAppSettings(_options)) {
            serverAppSettings = _options;
        } else {
            firebaseOptions = _options;
        }
    }
    if (serverAppSettings.automaticDataCollectionEnabled === undefined) {
        serverAppSettings.automaticDataCollectionEnabled = true;
    }
    firebaseOptions || (firebaseOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppConfig"])());
    if (!firebaseOptions) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */ );
    }
    // Build an app name based on a hash of the configuration options.
    const nameObj = {
        ...serverAppSettings,
        ...firebaseOptions
    };
    // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
    // construction of FirebaseServerApp instances. For example, if the object is the request headers.
    if (nameObj.releaseOnDeref !== undefined) {
        delete nameObj.releaseOnDeref;
    }
    const hashCode = (s)=>{
        return [
            ...s
        ].reduce((hash, c)=>Math.imul(31, hash) + c.charCodeAt(0) | 0, 0);
    };
    if (serverAppSettings.releaseOnDeref !== undefined) {
        if (typeof FinalizationRegistry === 'undefined') {
            throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */ , {});
        }
    }
    const nameString = '' + hashCode(JSON.stringify(nameObj));
    const existingApp = _serverApps.get(nameString);
    if (existingApp) {
        existingApp.incRefCount(serverAppSettings.releaseOnDeref);
        return existingApp;
    }
    const container = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComponentContainer"](nameString);
    for (const component of _components.values()){
        container.addComponent(component);
    }
    const newApp = new FirebaseServerAppImpl(firebaseOptions, serverAppSettings, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */ function getApp() {
    let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_ENTRY_NAME;
    const app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultAppConfig"])()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */ , {
            appName: name
        });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */ function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */ async function deleteApp(app) {
    let cleanupProviders = false;
    const name = app.name;
    if (_apps.has(name)) {
        cleanupProviders = true;
        _apps.delete(name);
    } else if (_serverApps.has(name)) {
        const firebaseServerApp = app;
        if (firebaseServerApp.decRefCount() <= 0) {
            _serverApps.delete(name);
            cleanupProviders = true;
        }
    }
    if (cleanupProviders) {
        await Promise.all(app.container.getProviders().map((provider)=>provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */ function registerVersion(libraryKeyOrName, version, variant) {
    var _PLATFORM_LOG_STRING_libraryKeyOrName;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_PLATFORM_LOG_STRING_libraryKeyOrName = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _PLATFORM_LOG_STRING_libraryKeyOrName !== void 0 ? _PLATFORM_LOG_STRING_libraryKeyOrName : libraryKeyOrName;
    if (variant) {
        library += "-".concat(variant);
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            'Unable to register library "'.concat(library, '" with version "').concat(version, '":')
        ];
        if (libraryMismatch) {
            warning.push('library name "'.concat(library, '" contains illegal characters (whitespace or "/")'));
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push('version name "'.concat(version, '" contains illegal characters (whitespace or "/")'));
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]("".concat(library, "-version"), ()=>({
            library,
            version
        }), "VERSION" /* ComponentType.VERSION */ ));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */ function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */ );
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$logger$40$0$2e$5$2e$0$2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserLogHandler"])(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */ function setLogLevel(logLevel) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$logger$40$0$2e$5$2e$0$2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLogLevel"])(logLevel);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DB_NAME = 'firebase-heartbeat-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openDB"])(DB_NAME, DB_VERSION, {
            upgrade: (db, oldVersion)=>{
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch(oldVersion){
                    case 0:
                        try {
                            db.createObjectStore(STORE_NAME);
                        } catch (e) {
                            // Safari/iOS browsers throw occasional exceptions on
                            // db.createObjectStore() that may be a bug. Avoid blocking
                            // the rest of the app functionality.
                            console.warn(e);
                        }
                }
            }
        }).catch((e)=>{
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */ , {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME);
        const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
        // We already have the value but tx.done can throw,
        // so we need to await it here to catch errors
        await tx.done;
        return result;
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseError"]) {
            logger.warn(e.message);
        } else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */ , {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        await tx.done;
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseError"]) {
            logger.warn(e.message);
        } else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */ , {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
function computeKey(app) {
    return "".concat(app.name, "!").concat(app.options.appId);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MAX_HEADER_BYTES = 1024;
const MAX_NUM_STORED_HEARTBEATS = 30;
class HeartbeatServiceImpl {
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */ async triggerHeartbeat() {
        try {
            var _this__heartbeatsCache;
            const platformLogger = this.container.getProvider('platform-logger').getImmediate();
            // This is the "Firebase user agent" string from the platform logger
            // service, not the browser user agent.
            const agent = platformLogger.getPlatformInfoString();
            const date = getUTCDateString();
            if (((_this__heartbeatsCache = this._heartbeatsCache) === null || _this__heartbeatsCache === void 0 ? void 0 : _this__heartbeatsCache.heartbeats) == null) {
                var _this__heartbeatsCache1;
                this._heartbeatsCache = await this._heartbeatsCachePromise;
                // If we failed to construct a heartbeats cache, then return immediately.
                if (((_this__heartbeatsCache1 = this._heartbeatsCache) === null || _this__heartbeatsCache1 === void 0 ? void 0 : _this__heartbeatsCache1.heartbeats) == null) {
                    return;
                }
            }
            // Do not store a heartbeat if one is already stored for this day
            // or if a header has already been sent today.
            if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat)=>singleDateHeartbeat.date === date)) {
                return;
            } else {
                // There is no entry for this date. Create one.
                this._heartbeatsCache.heartbeats.push({
                    date,
                    agent
                });
                // If the number of stored heartbeats exceeds the maximum number of stored heartbeats, remove the heartbeat with the earliest date.
                // Since this is executed each time a heartbeat is pushed, the limit can only be exceeded by one, so only one needs to be removed.
                if (this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
                    const earliestHeartbeatIdx = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
                    this._heartbeatsCache.heartbeats.splice(earliestHeartbeatIdx, 1);
                }
            }
            return this._storage.overwrite(this._heartbeatsCache);
        } catch (e) {
            logger.warn(e);
        }
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */ async getHeartbeatsHeader() {
        try {
            var _this__heartbeatsCache;
            if (this._heartbeatsCache === null) {
                await this._heartbeatsCachePromise;
            }
            // If it's still null or the array is empty, there is no data to send.
            if (((_this__heartbeatsCache = this._heartbeatsCache) === null || _this__heartbeatsCache === void 0 ? void 0 : _this__heartbeatsCache.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
                return '';
            }
            const date = getUTCDateString();
            // Extract as many heartbeats from the cache as will fit under the size limit.
            const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
            const headerString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64urlEncodeWithoutPadding"])(JSON.stringify({
                version: 2,
                heartbeats: heartbeatsToSend
            }));
            // Store last sent date to prevent another being logged/sent for the same day.
            this._heartbeatsCache.lastSentHeartbeatDate = date;
            if (unsentEntries.length > 0) {
                // Store any unsent entries if they exist.
                this._heartbeatsCache.heartbeats = unsentEntries;
                // This seems more likely than emptying the array (below) to lead to some odd state
                // since the cache isn't empty and this will be called again on the next request,
                // and is probably safest if we await it.
                await this._storage.overwrite(this._heartbeatsCache);
            } else {
                this._heartbeatsCache.heartbeats = [];
                // Do not wait for this, to reduce latency.
                void this._storage.overwrite(this._heartbeatsCache);
            }
            return headerString;
        } catch (e) {
            logger.warn(e);
            return '';
        }
    }
    constructor(container){
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */ this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then((result)=>{
            this._heartbeatsCache = result;
            return result;
        });
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache) {
    let maxSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : MAX_HEADER_BYTES;
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache){
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find((hb)=>hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [
                    singleDateHeartbeat.date
                ]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        } else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    async runIndexedDBEnvironmentCheck() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexedDBAvailable"])()) {
            return false;
        } else {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateIndexedDBOpenable"])().then(()=>true).catch(()=>false);
        }
    }
    /**
     * Read all heartbeats.
     */ async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return {
                heartbeats: []
            };
        } else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                return idbHeartbeatObject;
            } else {
                return {
                    heartbeats: []
                };
            }
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        } else {
            const existingHeartbeatsObject = await this.read();
            var _heartbeatsObject_lastSentHeartbeatDate;
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_heartbeatsObject_lastSentHeartbeatDate = heartbeatsObject.lastSentHeartbeatDate) !== null && _heartbeatsObject_lastSentHeartbeatDate !== void 0 ? _heartbeatsObject_lastSentHeartbeatDate : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        } else {
            const existingHeartbeatsObject = await this.read();
            var _heartbeatsObject_lastSentHeartbeatDate;
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_heartbeatsObject_lastSentHeartbeatDate = heartbeatsObject.lastSentHeartbeatDate) !== null && _heartbeatsObject_lastSentHeartbeatDate !== void 0 ? _heartbeatsObject_lastSentHeartbeatDate : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
    constructor(app){
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */ function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base64urlEncodeWithoutPadding"])(// heartbeatsCache wrapper properties
    JSON.stringify({
        version: 2,
        heartbeats: heartbeatsCache
    })).length;
}
/**
 * Returns the index of the heartbeat with the earliest date.
 * If the heartbeats array is empty, -1 is returned.
 */ function getEarliestHeartbeatIdx(heartbeats) {
    if (heartbeats.length === 0) {
        return -1;
    }
    let earliestHeartbeatIdx = 0;
    let earliestHeartbeatDate = heartbeats[0].date;
    for(let i = 1; i < heartbeats.length; i++){
        if (heartbeats[i].date < earliestHeartbeatDate) {
            earliestHeartbeatDate = heartbeats[i].date;
            earliestHeartbeatIdx = i;
        }
    }
    return earliestHeartbeatIdx;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function registerCoreComponents(variant) {
    _registerComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]('platform-logger', (container)=>new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */ ));
    _registerComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]('heartbeat', (container)=>new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */ ));
    // Register `app` package.
    registerVersion(name$q, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm, cjs, etc during the compilation
    registerVersion(name$q, version$1, 'esm2020');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */ registerCoreComponents('');
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+app@0.14.3/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirebaseError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseError"],
    "SDK_VERSION",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SDK_VERSION"],
    "_DEFAULT_ENTRY_NAME",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_DEFAULT_ENTRY_NAME"],
    "_addComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_addComponent"],
    "_addOrOverwriteComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_addOrOverwriteComponent"],
    "_apps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_apps"],
    "_clearComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_clearComponents"],
    "_components",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_components"],
    "_getProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_getProvider"],
    "_isFirebaseApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_isFirebaseApp"],
    "_isFirebaseServerApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_isFirebaseServerApp"],
    "_isFirebaseServerAppSettings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_isFirebaseServerAppSettings"],
    "_registerComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_registerComponent"],
    "_removeServiceInstance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_removeServiceInstance"],
    "_serverApps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_serverApps"],
    "deleteApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteApp"],
    "getApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"],
    "getApps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"],
    "initializeApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"],
    "initializeServerApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeServerApp"],
    "onLog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onLog"],
    "registerVersion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerVersion"],
    "setLogLevel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setLogLevel"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+app@0.14.3/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/index.esm.js [app-client] (ecmascript)");
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+app@0.14.3/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
;
;
var name = "firebase";
var version = "12.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerVersion"])(name, version, 'app'); //# sourceMappingURL=index.esm.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$analytics$40$0$2e$10$2e$18_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+analytics@0.10.18_@firebase+app@0.14.3/node_modules/@firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript)"); //# sourceMappingURL=index.esm.js.map
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$auth$40$1$2e$11$2e$0_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+auth@1.11.0_@firebase+app@0.14.3/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.esm.js.map
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/firebase@12.3.0/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$firestore$40$4$2e$9$2e$2_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+firestore@4.9.2_@firebase+app@0.14.3/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)"); //# sourceMappingURL=index.esm.js.map
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+installations@0.6.19_@firebase+app@0.14.3/node_modules/@firebase/installations/dist/esm/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteInstallations",
    ()=>deleteInstallations,
    "getId",
    ()=>getId,
    "getInstallations",
    ()=>getInstallations,
    "getToken",
    ()=>getToken,
    "onIdChange",
    ()=>onIdChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+app@0.14.3/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+component@0.7.0/node_modules/@firebase/component/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/idb@7.1.1/node_modules/idb/build/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
const name = "@firebase/installations";
const version = "0.6.19";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PENDING_TIMEOUT_MS = 10000;
const PACKAGE_VERSION = "w:".concat(version);
const INTERNAL_AUTH_VERSION = 'FIS_v2';
const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
const SERVICE = 'installations';
const SERVICE_NAME = 'Installations';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERROR_DESCRIPTION_MAP = {
    ["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */ ]: 'Missing App configuration value: "{$valueName}"',
    ["not-registered" /* ErrorCode.NOT_REGISTERED */ ]: 'Firebase Installation is not registered.',
    ["installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */ ]: 'Firebase Installation not found.',
    ["request-failed" /* ErrorCode.REQUEST_FAILED */ ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    ["app-offline" /* ErrorCode.APP_OFFLINE */ ]: 'Could not process request. Application offline.',
    ["delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */ ]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorFactory"](SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */ function isServerError(error) {
    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseError"] && error.code.includes("request-failed" /* ErrorCode.REQUEST_FAILED */ );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function getInstallationsEndpoint(param) {
    let { projectId } = param;
    return "".concat(INSTALLATIONS_API_URL, "/projects/").concat(projectId, "/installations");
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* RequestStatus.COMPLETED */ ,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
async function getErrorFromResponse(requestName, response) {
    const responseJson = await response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY.create("request-failed" /* ErrorCode.REQUEST_FAILED */ , {
        requestName,
        serverCode: errorData.code,
        serverMessage: errorData.message,
        serverStatus: errorData.status
    });
}
function getHeaders(param) {
    let { apiKey } = param;
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, param) {
    let { refreshToken } = param;
    const headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */ async function retryIfServerError(fn) {
    const result = await fn();
    if (result.status >= 500 && result.status < 600) {
        // Internal Server Error. Retry request.
        return fn();
    }
    return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return "".concat(INTERNAL_AUTH_VERSION, " ").concat(refreshToken);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function createInstallationRequest(param, param1) {
    let { appConfig, heartbeatServiceProvider } = param, { fid } = param1;
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    // If heartbeat service exists, add the heartbeat string to the header.
    const heartbeatService = heartbeatServiceProvider.getImmediate({
        optional: true
    });
    if (heartbeatService) {
        const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
        if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
        }
    }
    const body = {
        fid,
        authVersion: INTERNAL_AUTH_VERSION,
        appId: appConfig.appId,
        sdkVersion: PACKAGE_VERSION
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(()=>fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2 /* RequestStatus.COMPLETED */ ,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
        };
        return registeredInstallationEntry;
    } else {
        throw await getErrorFromResponse('Create Installation', response);
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Returns a promise that resolves after given time passes. */ function sleep(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bufferToBase64UrlSafe(array) {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */ function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        const fidByteArray = new Uint8Array(17);
        const crypto = self.crypto || self.msCrypto;
        crypto.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 0b01110000 + fidByteArray[0] % 0b00010000;
        const fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    } catch (e) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */ function encode(fidByteArray) {
    const b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Returns a string key that can be used to identify the app. */ function getKey(appConfig) {
    return "".concat(appConfig.appName, "!").concat(appConfig.appId);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */ function fidChanged(appConfig, fid) {
    const key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    const key = getKey(appConfig);
    let callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    const key = getKey(appConfig);
    const callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
        fidChangeCallbacks.delete(key);
    }
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    const callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
        return;
    }
    for (const callback of callbacks){
        callback(fid);
    }
}
function broadcastFidChange(key, fid) {
    const channel = getBroadcastChannel();
    if (channel) {
        channel.postMessage({
            key,
            fid
        });
    }
    closeBroadcastChannel();
}
let broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */ function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = (e)=>{
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DATABASE_NAME = 'firebase-installations-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-installations-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$idb$40$7$2e$1$2e$1$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["openDB"])(DATABASE_NAME, DATABASE_VERSION, {
            upgrade: (db, oldVersion)=>{
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch(oldVersion){
                    case 0:
                        db.createObjectStore(OBJECT_STORE_NAME);
                }
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */ async function set(appConfig, value) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await objectStore.get(key);
    await objectStore.put(value, key);
    await tx.done;
    if (!oldValue || oldValue.fid !== value.fid) {
        fidChanged(appConfig, value.fid);
    }
    return value;
}
/** Removes record(s) from the objectStore that match the given key. */ async function remove(appConfig) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.done;
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */ async function update(appConfig, updateFn) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await store.get(key);
    const newValue = updateFn(oldValue);
    if (newValue === undefined) {
        await store.delete(key);
    } else {
        await store.put(newValue, key);
    }
    await tx.done;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
        fidChanged(appConfig, newValue.fid);
    }
    return newValue;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */ async function getInstallationEntry(installations) {
    let registrationPromise;
    const installationEntry = await update(installations.appConfig, (oldEntry)=>{
        const installationEntry = updateOrCreateInstallationEntry(oldEntry);
        const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
        registrationPromise = entryWithPromise.registrationPromise;
        return entryWithPromise.installationEntry;
    });
    if (installationEntry.fid === INVALID_FID) {
        // FID generation failed. Waiting for the FID from the server.
        return {
            installationEntry: await registrationPromise
        };
    }
    return {
        installationEntry,
        registrationPromise
    };
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */ function updateOrCreateInstallationEntry(oldEntry) {
    const entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* RequestStatus.NOT_STARTED */ 
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */ function triggerRegistrationIfNecessary(installations, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */ ) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */ ));
            return {
                installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        const inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* RequestStatus.IN_PROGRESS */ ,
            registrationTime: Date.now()
        };
        const registrationPromise = registerInstallation(installations, inProgressEntry);
        return {
            installationEntry: inProgressEntry,
            registrationPromise
        };
    } else if (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ ) {
        return {
            installationEntry,
            registrationPromise: waitUntilFidRegistration(installations)
        };
    } else {
        return {
            installationEntry
        };
    }
}
/** This will be executed only once for each new Firebase Installation. */ async function registerInstallation(installations, installationEntry) {
    try {
        const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
        return set(installations.appConfig, registeredInstallationEntry);
    } catch (e) {
        if (isServerError(e) && e.customData.serverCode === 409) {
            // Server returned a "FID cannot be used" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
        } else {
            // Registration failed. Set FID as not registered.
            await set(installations.appConfig, {
                fid: installationEntry.fid,
                registrationStatus: 0 /* RequestStatus.NOT_STARTED */ 
            });
        }
        throw e;
    }
}
/** Call if FID registration is pending in another request. */ async function waitUntilFidRegistration(installations) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateInstallationRequest(installations.appConfig);
    while(entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ ){
        // createInstallation request still in progress.
        await sleep(100);
        entry = await updateInstallationRequest(installations.appConfig);
    }
    if (entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */ ) {
        // The request timed out or failed in a different call. Try again.
        const { installationEntry, registrationPromise } = await getInstallationEntry(installations);
        if (registrationPromise) {
            return registrationPromise;
        } else {
            // if there is no registrationPromise, entry is registered.
            return installationEntry;
        }
    }
    return entry;
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */ function updateInstallationRequest(appConfig) {
    return update(appConfig, (oldEntry)=>{
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */ );
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* RequestStatus.NOT_STARTED */ 
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */  && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateAuthTokenRequest(param, installationEntry) {
    let { appConfig, heartbeatServiceProvider } = param;
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    // If heartbeat service exists, add the heartbeat string to the header.
    const heartbeatService = heartbeatServiceProvider.getImmediate({
        optional: true
    });
    if (heartbeatService) {
        const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
        if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
        }
    }
    const body = {
        installation: {
            sdkVersion: PACKAGE_VERSION,
            appId: appConfig.appId
        }
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(()=>fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
        return completedAuthToken;
    } else {
        throw await getErrorFromResponse('Generate Auth Token', response);
    }
}
function getGenerateAuthTokenEndpoint(appConfig, param) {
    let { fid } = param;
    return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid, "/authTokens:generate");
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */ async function refreshAuthToken(installations) {
    let forceRefresh = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let tokenPromise;
    const entry = await update(installations.appConfig, (oldEntry)=>{
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */ );
        }
        const oldAuthToken = oldEntry.authToken;
        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
            // There is a valid token in the DB.
            return oldEntry;
        } else if (oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ ) {
            // There already is a token request in progress.
            tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
            return oldEntry;
        } else {
            // No token or token expired.
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */ );
            }
            const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
            tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
            return inProgressEntry;
        }
    });
    const authToken = tokenPromise ? await tokenPromise : entry.authToken;
    return authToken;
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */ async function waitUntilAuthTokenRequest(installations, forceRefresh) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateAuthTokenRequest(installations.appConfig);
    while(entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ ){
        // generateAuthToken still in progress.
        await sleep(100);
        entry = await updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */ ) {
        // The request timed out or failed in a different call. Try again.
        return refreshAuthToken(installations, forceRefresh);
    } else {
        return authToken;
    }
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */ function updateAuthTokenRequest(appConfig) {
    return update(appConfig, (oldEntry)=>{
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */ );
        }
        const oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return {
                ...oldEntry,
                authToken: {
                    requestStatus: 0 /* RequestStatus.NOT_STARTED */ 
                }
            };
        }
        return oldEntry;
    });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
    try {
        const authToken = await generateAuthTokenRequest(installations, installationEntry);
        const updatedInstallationEntry = {
            ...installationEntry,
            authToken
        };
        await set(installations.appConfig, updatedInstallationEntry);
        return authToken;
    } catch (e) {
        if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
            // Server returned a "FID not found" or a "Invalid authentication" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
        } else {
            const updatedInstallationEntry = {
                ...installationEntry,
                authToken: {
                    requestStatus: 0 /* RequestStatus.NOT_STARTED */ 
                }
            };
            await set(installations.appConfig, updatedInstallationEntry);
        }
        throw e;
    }
}
function isEntryRegistered(installationEntry) {
    return installationEntry !== undefined && installationEntry.registrationStatus === 2 /* RequestStatus.COMPLETED */ ;
}
function isAuthTokenValid(authToken) {
    return authToken.requestStatus === 2 /* RequestStatus.COMPLETED */  && !isAuthTokenExpired(authToken);
}
function isAuthTokenExpired(authToken) {
    const now = Date.now();
    return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */ function makeAuthTokenRequestInProgressEntry(oldEntry) {
    const inProgressAuthToken = {
        requestStatus: 1 /* RequestStatus.IN_PROGRESS */ ,
        requestTime: Date.now()
    };
    return {
        ...oldEntry,
        authToken: inProgressAuthToken
    };
}
function hasAuthTokenRequestTimedOut(authToken) {
    return authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */  && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */ async function getId(installations) {
    const installationsImpl = installations;
    const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl);
    if (registrationPromise) {
        registrationPromise.catch(console.error);
    } else {
        // If the installation is already registered, update the authentication
        // token if needed.
        refreshAuthToken(installationsImpl).catch(console.error);
    }
    return installationEntry.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */ async function getToken(installations) {
    let forceRefresh = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const installationsImpl = installations;
    await completeInstallationRegistration(installationsImpl);
    // At this point we either have a Registered Installation in the DB, or we've
    // already thrown an error.
    const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
}
async function completeInstallationRegistration(installations) {
    const { registrationPromise } = await getInstallationEntry(installations);
    if (registrationPromise) {
        // A createInstallation request is in progress. Wait until it finishes.
        await registrationPromise;
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function deleteInstallationRequest(appConfig, installationEntry) {
    const endpoint = getDeleteEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const request = {
        method: 'DELETE',
        headers
    };
    const response = await retryIfServerError(()=>fetch(endpoint, request));
    if (!response.ok) {
        throw await getErrorFromResponse('Delete Installation', response);
    }
}
function getDeleteEndpoint(appConfig, param) {
    let { fid } = param;
    return "".concat(getInstallationsEndpoint(appConfig), "/").concat(fid);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */ async function deleteInstallations(installations) {
    const { appConfig } = installations;
    const entry = await update(appConfig, (oldEntry)=>{
        if (oldEntry && oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */ ) {
            // Delete the unregistered entry without sending a deleteInstallation request.
            return undefined;
        }
        return oldEntry;
    });
    if (entry) {
        if (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ ) {
            // Can't delete while trying to register.
            throw ERROR_FACTORY.create("delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */ );
        } else if (entry.registrationStatus === 2 /* RequestStatus.COMPLETED */ ) {
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */ );
            } else {
                await deleteInstallationRequest(appConfig, entry);
                await remove(appConfig);
            }
        }
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */ function onIdChange(installations, callback) {
    const { appConfig } = installations;
    addCallback(appConfig, callback);
    return ()=>{
        removeCallback(appConfig, callback);
    };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */ function getInstallations() {
    let app = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
    const installationsImpl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_getProvider"])(app, 'installations').getImmediate();
    return installationsImpl;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function extractAppConfig(app) {
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    const configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    for (const keyName of configKeys){
        if (!app.options[keyName]) {
            throw getMissingValueError(keyName);
        }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */ , {
        valueName
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const INSTALLATIONS_NAME = 'installations';
const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
const publicFactory = (container)=>{
    const app = container.getProvider('app').getImmediate();
    // Throws if app isn't configured properly.
    const appConfig = extractAppConfig(app);
    const heartbeatServiceProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_getProvider"])(app, 'heartbeat');
    const installationsImpl = {
        app,
        appConfig,
        heartbeatServiceProvider,
        _delete: ()=>Promise.resolve()
    };
    return installationsImpl;
};
const internalFactory = (container)=>{
    const app = container.getProvider('app').getImmediate();
    // Internal FIS instance relies on public FIS instance.
    const installations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_getProvider"])(app, INSTALLATIONS_NAME).getImmediate();
    const installationsInternal = {
        getId: ()=>getId(installations),
        getToken: (forceRefresh)=>getToken(installations, forceRefresh)
    };
    return installationsInternal;
};
function registerInstallations() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_registerComponent"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"](INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* ComponentType.PUBLIC */ ));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_registerComponent"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"](INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* ComponentType.PRIVATE */ ));
}
/**
 * The Firebase Installations Web SDK.
 * This SDK does not work in a Node.js environment.
 *
 * @packageDocumentation
 */ registerInstallations();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerVersion"])(name, version);
// BUILD_TARGET will be replaced by values like esm, cjs, etc during the compilation
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerVersion"])(name, version, 'esm2020');
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+analytics@0.10.18_@firebase+app@0.14.3/node_modules/@firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAnalytics",
    ()=>getAnalytics,
    "getGoogleAnalyticsClientId",
    ()=>getGoogleAnalyticsClientId,
    "initializeAnalytics",
    ()=>initializeAnalytics,
    "isSupported",
    ()=>isSupported,
    "logEvent",
    ()=>logEvent,
    "setAnalyticsCollectionEnabled",
    ()=>setAnalyticsCollectionEnabled,
    "setConsent",
    ()=>setConsent,
    "setCurrentScreen",
    ()=>setCurrentScreen,
    "setDefaultEventParameters",
    ()=>setDefaultEventParameters,
    "setUserId",
    ()=>setUserId,
    "setUserProperties",
    ()=>setUserProperties,
    "settings",
    ()=>settings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+app@0.14.3/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$logger$40$0$2e$5$2e$0$2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+logger@0.5.0/node_modules/@firebase/logger/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+util@1.13.0/node_modules/@firebase/util/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+component@0.7.0/node_modules/@firebase/component/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$installations$40$0$2e$6$2e$19_$40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$installations$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+installations@0.6.19_@firebase+app@0.14.3/node_modules/@firebase/installations/dist/esm/index.esm.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Type constant for Firebase Analytics.
 */ const ANALYTICS_TYPE = 'analytics';
// Key to attach FID to in gtag params.
const GA_FID_KEY = 'firebase_id';
const ORIGIN_KEY = 'origin';
const FETCH_TIMEOUT_MILLIS = 60 * 1000;
const DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
const GTAG_URL = 'https://www.googletagmanager.com/gtag/js';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const logger = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$logger$40$0$2e$5$2e$0$2f$node_modules$2f40$firebase$2f$logger$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"]('@firebase/analytics');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ERRORS = {
    ["already-exists" /* AnalyticsError.ALREADY_EXISTS */ ]: 'A Firebase Analytics instance with the appId {$id} ' + ' already exists. ' + 'Only one Firebase Analytics instance can be created for each appId.',
    ["already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */ ]: 'initializeAnalytics() cannot be called again with different options than those ' + 'it was initially called with. It can be called again with the same options to ' + 'return the existing instance, or getAnalytics() can be used ' + 'to get a reference to the already-initialized instance.',
    ["already-initialized-settings" /* AnalyticsError.ALREADY_INITIALIZED_SETTINGS */ ]: 'Firebase Analytics has already been initialized.' + 'settings() must be called before initializing any Analytics instance' + 'or it will have no effect.',
    ["interop-component-reg-failed" /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */ ]: 'Firebase Analytics Interop Component failed to instantiate: {$reason}',
    ["invalid-analytics-context" /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */ ]: 'Firebase Analytics is not supported in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}',
    ["indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */ ]: 'IndexedDB unavailable or restricted in this environment. ' + 'Wrap initialization of analytics in analytics.isSupported() ' + 'to prevent initialization in unsupported environments. Details: {$errorInfo}',
    ["fetch-throttle" /* AnalyticsError.FETCH_THROTTLE */ ]: 'The config fetch request timed out while in an exponential backoff state.' + ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
    ["config-fetch-failed" /* AnalyticsError.CONFIG_FETCH_FAILED */ ]: 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
    ["no-api-key" /* AnalyticsError.NO_API_KEY */ ]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid API key.',
    ["no-app-id" /* AnalyticsError.NO_APP_ID */ ]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' + 'contain a valid app ID.',
    ["no-client-id" /* AnalyticsError.NO_CLIENT_ID */ ]: 'The "client_id" field is empty.',
    ["invalid-gtag-resource" /* AnalyticsError.INVALID_GTAG_RESOURCE */ ]: 'Trusted Types detected an invalid gtag resource: {$gtagURL}.'
};
const ERROR_FACTORY = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorFactory"]('analytics', 'Analytics', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Verifies and creates a TrustedScriptURL.
 */ function createGtagTrustedTypesScriptURL(url) {
    if (!url.startsWith(GTAG_URL)) {
        const err = ERROR_FACTORY.create("invalid-gtag-resource" /* AnalyticsError.INVALID_GTAG_RESOURCE */ , {
            gtagURL: url
        });
        logger.warn(err.message);
        return '';
    }
    return url;
}
/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */ function promiseAllSettled(promises) {
    return Promise.all(promises.map((promise)=>promise.catch((e)=>e)));
}
/**
 * Creates a TrustedTypePolicy object that implements the rules passed as policyOptions.
 *
 * @param policyName A string containing the name of the policy
 * @param policyOptions Object containing implementations of instance methods for TrustedTypesPolicy, see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy#instance_methods
 * | the TrustedTypePolicy reference documentation}.
 */ function createTrustedTypesPolicy(policyName, policyOptions) {
    // Create a TrustedTypes policy that we can use for updating src
    // properties
    let trustedTypesPolicy;
    if (window.trustedTypes) {
        trustedTypesPolicy = window.trustedTypes.createPolicy(policyName, policyOptions);
    }
    return trustedTypesPolicy;
}
/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */ function insertScriptTag(dataLayerName, measurementId) {
    const trustedTypesPolicy = createTrustedTypesPolicy('firebase-js-sdk-policy', {
        createScriptURL: createGtagTrustedTypesScriptURL
    });
    const script = document.createElement('script');
    // We are not providing an analyticsId in the URL because it would trigger a `page_view`
    // without fid. We will initialize ga-id using gtag (config) command together with fid.
    const gtagScriptURL = "".concat(GTAG_URL, "?l=").concat(dataLayerName, "&id=").concat(measurementId);
    script.src = trustedTypesPolicy ? trustedTypesPolicy === null || trustedTypesPolicy === void 0 ? void 0 : trustedTypesPolicy.createScriptURL(gtagScriptURL) : gtagScriptURL;
    script.async = true;
    document.head.appendChild(script);
}
/**
 * Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */ function getOrCreateDataLayer(dataLayerName) {
    // Check for existing dataLayer and create if needed.
    let dataLayer = [];
    if (Array.isArray(window[dataLayerName])) {
        dataLayer = window[dataLayerName];
    } else {
        window[dataLayerName] = dataLayer;
    }
    return dataLayer;
}
/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */ async function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
    // If config is already fetched, we know the appId and can use it to look up what FID promise we
    /// are waiting for, and wait only on that one.
    const correspondingAppId = measurementIdToAppId[measurementId];
    try {
        if (correspondingAppId) {
            await initializationPromisesMap[correspondingAppId];
        } else {
            // If config is not fetched yet, wait for all configs (we don't know which one we need) and
            // find the appId (if any) corresponding to this measurementId. If there is one, wait on
            // that appId's initialization promise. If there is none, promise resolves and gtag
            // call goes through.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            const foundConfig = dynamicConfigResults.find((config)=>config.measurementId === measurementId);
            if (foundConfig) {
                await initializationPromisesMap[foundConfig.appId];
            }
        }
    } catch (e) {
        logger.error(e);
    }
    gtagCore("config" /* GtagCommand.CONFIG */ , measurementId, gtagParams);
}
/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */ async function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
    try {
        let initializationPromisesToWaitFor = [];
        // If there's a 'send_to' param, check if any ID specified matches
        // an initializeIds() promise we are waiting for.
        if (gtagParams && gtagParams['send_to']) {
            let gaSendToList = gtagParams['send_to'];
            // Make it an array if is isn't, so it can be dealt with the same way.
            if (!Array.isArray(gaSendToList)) {
                gaSendToList = [
                    gaSendToList
                ];
            }
            // Checking 'send_to' fields requires having all measurement ID results back from
            // the dynamic config fetch.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            for (const sendToId of gaSendToList){
                // Any fetched dynamic measurement ID that matches this 'send_to' ID
                const foundConfig = dynamicConfigResults.find((config)=>config.measurementId === sendToId);
                const initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];
                if (initializationPromise) {
                    initializationPromisesToWaitFor.push(initializationPromise);
                } else {
                    // Found an item in 'send_to' that is not associated
                    // directly with an FID, possibly a group.  Empty this array,
                    // exit the loop early, and let it get populated below.
                    initializationPromisesToWaitFor = [];
                    break;
                }
            }
        }
        // This will be unpopulated if there was no 'send_to' field , or
        // if not all entries in the 'send_to' field could be mapped to
        // a FID. In these cases, wait on all pending initialization promises.
        if (initializationPromisesToWaitFor.length === 0) {
            /* eslint-disable-next-line @typescript-eslint/no-floating-promises */ initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
        }
        // Run core gtag function with args after all relevant initialization
        // promises have been resolved.
        await Promise.all(initializationPromisesToWaitFor);
        // Workaround for http://b/141370449 - third argument cannot be undefined.
        gtagCore("event" /* GtagCommand.EVENT */ , measurementId, gtagParams || {});
    } catch (e) {
        logger.error(e);
    }
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 */ function wrapGtag(gtagCore, /**
 * Allows wrapped gtag calls to wait on whichever initialization promises are required,
 * depending on the contents of the gtag params' `send_to` field, if any.
 */ initializationPromisesMap, /**
 * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
 * before determining what initialization promises (which include FIDs) to wait for.
 */ dynamicConfigPromisesList, /**
 * Wrapped gtag config calls can narrow down which initialization promise (with FID)
 * to wait for if the measurementId is already fetched, by getting the corresponding appId,
 * which is the key for the initialization promises map.
 */ measurementIdToAppId) {
    /**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */ async function gtagWrapper(command) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        try {
            // If event, check that relevant initialization promises have completed.
            if (command === "event" /* GtagCommand.EVENT */ ) {
                const [measurementId, gtagParams] = args;
                // If EVENT, second arg must be measurementId.
                await gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams);
            } else if (command === "config" /* GtagCommand.CONFIG */ ) {
                const [measurementId, gtagParams] = args;
                // If CONFIG, second arg must be measurementId.
                await gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams);
            } else if (command === "consent" /* GtagCommand.CONSENT */ ) {
                const [consentAction, gtagParams] = args;
                // consentAction can be one of 'default' or 'update'.
                gtagCore("consent" /* GtagCommand.CONSENT */ , consentAction, gtagParams);
            } else if (command === "get" /* GtagCommand.GET */ ) {
                const [measurementId, fieldName, callback] = args;
                gtagCore("get" /* GtagCommand.GET */ , measurementId, fieldName, callback);
            } else if (command === "set" /* GtagCommand.SET */ ) {
                const [customParams] = args;
                // If SET, second arg must be params.
                gtagCore("set" /* GtagCommand.SET */ , customParams);
            } else {
                gtagCore(command, ...args);
            }
        } catch (e) {
            logger.error(e);
        }
    }
    return gtagWrapper;
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
 */ function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
    // Create a basic core gtag function
    let gtagCore = function() {
        for(var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++){
            _args[_key] = arguments[_key];
        }
        // Must push IArguments object, not an array.
        window[dataLayerName].push(arguments);
    };
    // Replace it with existing one if found
    if (window[gtagFunctionName] && typeof window[gtagFunctionName] === 'function') {
        // @ts-ignore
        gtagCore = window[gtagFunctionName];
    }
    window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
    return {
        gtagCore,
        wrappedGtag: window[gtagFunctionName]
    };
}
/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */ function findGtagScriptOnPage(dataLayerName) {
    const scriptTags = window.document.getElementsByTagName('script');
    for (const tag of Object.values(scriptTags)){
        if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName)) {
            return tag;
        }
    }
    return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Backoff factor for 503 errors, which we want to be conservative about
 * to avoid overloading servers. Each retry interval will be
 * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
 * will be ~30 seconds (with fuzzing).
 */ const LONG_RETRY_FACTOR = 30;
/**
 * Base wait interval to multiplied by backoffFactor^backoffCount.
 */ const BASE_INTERVAL_MILLIS = 1000;
/**
 * Stubbable retry data storage class.
 */ class RetryData {
    getThrottleMetadata(appId) {
        return this.throttleMetadata[appId];
    }
    setThrottleMetadata(appId, metadata) {
        this.throttleMetadata[appId] = metadata;
    }
    deleteThrottleMetadata(appId) {
        delete this.throttleMetadata[appId];
    }
    constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS){
        this.throttleMetadata = throttleMetadata;
        this.intervalMillis = intervalMillis;
    }
}
const defaultRetryData = new RetryData();
/**
 * Set GET request headers.
 * @param apiKey App API key.
 */ function getHeaders(apiKey) {
    return new Headers({
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */ async function fetchDynamicConfig(appFields) {
    const { appId, apiKey } = appFields;
    const request = {
        method: 'GET',
        headers: getHeaders(apiKey)
    };
    const appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
    const response = await fetch(appUrl, request);
    if (response.status !== 200 && response.status !== 304) {
        let errorMessage = '';
        try {
            var _jsonResponse_error;
            // Try to get any error message text from server response.
            const jsonResponse = await response.json();
            if ((_jsonResponse_error = jsonResponse.error) === null || _jsonResponse_error === void 0 ? void 0 : _jsonResponse_error.message) {
                errorMessage = jsonResponse.error.message;
            }
        } catch (_ignored) {}
        throw ERROR_FACTORY.create("config-fetch-failed" /* AnalyticsError.CONFIG_FETCH_FAILED */ , {
            httpStatus: response.status,
            responseMessage: errorMessage
        });
    }
    return response.json();
}
/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */ async function fetchDynamicConfigWithRetry(app) {
    let // retryData and timeoutMillis are parameterized to allow passing a different value for testing.
    retryData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultRetryData, timeoutMillis = arguments.length > 2 ? arguments[2] : void 0;
    const { appId, apiKey, measurementId } = app.options;
    if (!appId) {
        throw ERROR_FACTORY.create("no-app-id" /* AnalyticsError.NO_APP_ID */ );
    }
    if (!apiKey) {
        if (measurementId) {
            return {
                measurementId,
                appId
            };
        }
        throw ERROR_FACTORY.create("no-api-key" /* AnalyticsError.NO_API_KEY */ );
    }
    const throttleMetadata = retryData.getThrottleMetadata(appId) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
    };
    const signal = new AnalyticsAbortSignal();
    setTimeout(async ()=>{
        // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
        signal.abort();
    }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
    return attemptFetchDynamicConfigWithRetry({
        appId,
        apiKey,
        measurementId
    }, throttleMetadata, signal, retryData);
}
/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */ async function attemptFetchDynamicConfigWithRetry(appFields, param, signal) {
    let { throttleEndTimeMillis, backoffCount } = param, retryData = arguments.length > 3 && arguments[3] !== void 0 // for testing
     ? arguments[3] : defaultRetryData;
    const { appId, measurementId } = appFields;
    // Starts with a (potentially zero) timeout to support resumption from stored state.
    // Ensures the throttle end time is honored if the last attempt timed out.
    // Note the SDK will never make a request if the fetch timeout expires at this point.
    try {
        await setAbortableTimeout(signal, throttleEndTimeMillis);
    } catch (e) {
        if (measurementId) {
            logger.warn("Timed out fetching this Firebase app's measurement ID from the server." + " Falling back to the measurement ID ".concat(measurementId) + ' provided in the "measurementId" field in the local Firebase config. ['.concat(e === null || e === void 0 ? void 0 : e.message, "]"));
            return {
                appId,
                measurementId
            };
        }
        throw e;
    }
    try {
        const response = await fetchDynamicConfig(appFields);
        // Note the SDK only clears throttle state if response is success or non-retriable.
        retryData.deleteThrottleMetadata(appId);
        return response;
    } catch (e) {
        var _error_customData;
        const error = e;
        if (!isRetriableError(error)) {
            retryData.deleteThrottleMetadata(appId);
            if (measurementId) {
                logger.warn("Failed to fetch this Firebase app's measurement ID from the server." + " Falling back to the measurement ID ".concat(measurementId) + ' provided in the "measurementId" field in the local Firebase config. ['.concat(error === null || error === void 0 ? void 0 : error.message, "]"));
                return {
                    appId,
                    measurementId
                };
            } else {
                throw e;
            }
        }
        const backoffMillis = Number(error === null || error === void 0 ? void 0 : (_error_customData = error.customData) === null || _error_customData === void 0 ? void 0 : _error_customData.httpStatus) === 503 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateBackoffMillis"])(backoffCount, retryData.intervalMillis);
        // Increments backoff state.
        const throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
        };
        // Persists state.
        retryData.setThrottleMetadata(appId, throttleMetadata);
        logger.debug("Calling attemptFetch again in ".concat(backoffMillis, " millis"));
        return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
    }
}
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */ function setAbortableTimeout(signal, throttleEndTimeMillis) {
    return new Promise((resolve, reject)=>{
        // Derives backoff from given end time, normalizing negative numbers to zero.
        const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
        const timeout = setTimeout(resolve, backoffMillis);
        // Adds listener, rather than sets onabort, because signal is a shared object.
        signal.addEventListener(()=>{
            clearTimeout(timeout);
            // If the request completes before this timeout, the rejection has no effect.
            reject(ERROR_FACTORY.create("fetch-throttle" /* AnalyticsError.FETCH_THROTTLE */ , {
                throttleEndTimeMillis
            }));
        });
    });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */ function isRetriableError(e) {
    if (!(e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirebaseError"]) || !e.customData) {
        return false;
    }
    // Uses string index defined by ErrorData, which FirebaseError implements.
    const httpStatus = Number(e.customData['httpStatus']);
    return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */ class AnalyticsAbortSignal {
    addEventListener(listener) {
        this.listeners.push(listener);
    }
    abort() {
        this.listeners.forEach((listener)=>listener());
    }
    constructor(){
        this.listeners = [];
    }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Event parameters to set on 'gtag' during initialization.
 */ let defaultEventParametersForInit;
/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */ async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
    if (options && options.global) {
        gtagFunction("event" /* GtagCommand.EVENT */ , eventName, eventParams);
        return;
    } else {
        const measurementId = await initializationPromise;
        const params = {
            ...eventParams,
            'send_to': measurementId
        };
        gtagFunction("event" /* GtagCommand.EVENT */ , eventName, params);
    }
}
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */ async function setCurrentScreen$1(gtagFunction, initializationPromise, screenName, options) {
    if (options && options.global) {
        gtagFunction("set" /* GtagCommand.SET */ , {
            'screen_name': screenName
        });
        return Promise.resolve();
    } else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* GtagCommand.CONFIG */ , measurementId, {
            update: true,
            'screen_name': screenName
        });
    }
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */ async function setUserId$1(gtagFunction, initializationPromise, id, options) {
    if (options && options.global) {
        gtagFunction("set" /* GtagCommand.SET */ , {
            'user_id': id
        });
        return Promise.resolve();
    } else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* GtagCommand.CONFIG */ , measurementId, {
            update: true,
            'user_id': id
        });
    }
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */ async function setUserProperties$1(gtagFunction, initializationPromise, properties, options) {
    if (options && options.global) {
        const flatProperties = {};
        for (const key of Object.keys(properties)){
            // use dot notation for merge behavior in gtag.js
            flatProperties["user_properties.".concat(key)] = properties[key];
        }
        gtagFunction("set" /* GtagCommand.SET */ , flatProperties);
        return Promise.resolve();
    } else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* GtagCommand.CONFIG */ , measurementId, {
            update: true,
            'user_properties': properties
        });
    }
}
/**
 * Retrieves a unique Google Analytics identifier for the web client.
 * See {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id | client_id}.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 */ async function internalGetGoogleAnalyticsClientId(gtagFunction, initializationPromise) {
    const measurementId = await initializationPromise;
    return new Promise((resolve, reject)=>{
        gtagFunction("get" /* GtagCommand.GET */ , measurementId, 'client_id', (clientId)=>{
            if (!clientId) {
                reject(ERROR_FACTORY.create("no-client-id" /* AnalyticsError.NO_CLIENT_ID */ ));
            }
            resolve(clientId);
        });
    });
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */ async function setAnalyticsCollectionEnabled$1(initializationPromise, enabled) {
    const measurementId = await initializationPromise;
    window["ga-disable-".concat(measurementId)] = !enabled;
}
/**
 * Consent parameters to default to during 'gtag' initialization.
 */ let defaultConsentSettingsForInit;
/**
 * Sets the variable {@link defaultConsentSettingsForInit} for use in the initialization of
 * analytics.
 *
 * @param consentSettings Maps the applicable end user consent state for gtag.js.
 */ function _setConsentDefaultForInit(consentSettings) {
    defaultConsentSettingsForInit = consentSettings;
}
/**
 * Sets the variable `defaultEventParametersForInit` for use in the initialization of
 * analytics.
 *
 * @param customParams Any custom params the user may pass to gtag.js.
 */ function _setDefaultEventParametersForInit(customParams) {
    defaultEventParametersForInit = customParams;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function validateIndexedDB() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexedDBAvailable"])()) {
        logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */ , {
            errorInfo: 'IndexedDB is not available in this environment.'
        }).message);
        return false;
    } else {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateIndexedDBOpenable"])();
        } catch (e) {
            logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */ , {
                errorInfo: e === null || e === void 0 ? void 0 : e.toString()
            }).message);
            return false;
        }
    }
    return true;
}
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */ async function _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName, options) {
    const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
    // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
    dynamicConfigPromise.then((config)=>{
        measurementIdToAppId[config.measurementId] = config.appId;
        if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
            logger.warn("The measurement ID in the local Firebase config (".concat(app.options.measurementId, ")") + " does not match the measurement ID fetched from the server (".concat(config.measurementId, ").") + " To ensure analytics events are always sent to the correct Analytics property," + " update the" + " measurement ID field in the local config or remove it from the local config.");
        }
    }).catch((e)=>logger.error(e));
    // Add to list to track state of all dynamic config promises.
    dynamicConfigPromisesList.push(dynamicConfigPromise);
    const fidPromise = validateIndexedDB().then((envIsValid)=>{
        if (envIsValid) {
            return installations.getId();
        } else {
            return undefined;
        }
    });
    const [dynamicConfig, fid] = await Promise.all([
        dynamicConfigPromise,
        fidPromise
    ]);
    // Detect if user has already put the gtag <script> tag on this page with the passed in
    // data layer name.
    if (!findGtagScriptOnPage(dataLayerName)) {
        insertScriptTag(dataLayerName, dynamicConfig.measurementId);
    }
    // Detects if there are consent settings that need to be configured.
    if (defaultConsentSettingsForInit) {
        gtagCore("consent" /* GtagCommand.CONSENT */ , 'default', defaultConsentSettingsForInit);
        _setConsentDefaultForInit(undefined);
    }
    // This command initializes gtag.js and only needs to be called once for the entire web app,
    // but since it is idempotent, we can call it multiple times.
    // We keep it together with other initialization logic for better code structure.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtagCore('js', new Date());
    var _options_config;
    // User config added first. We don't want users to accidentally overwrite
    // base Firebase config properties.
    const configProperties = (_options_config = options === null || options === void 0 ? void 0 : options.config) !== null && _options_config !== void 0 ? _options_config : {};
    // guard against developers accidentally setting properties with prefix `firebase_`
    configProperties[ORIGIN_KEY] = 'firebase';
    configProperties.update = true;
    if (fid != null) {
        configProperties[GA_FID_KEY] = fid;
    }
    // It should be the first config command called on this GA-ID
    // Initialize this GA-ID and set FID on it using the gtag config API.
    // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
    // `configProperties`.
    gtagCore("config" /* GtagCommand.CONFIG */ , dynamicConfig.measurementId, configProperties);
    // Detects if there is data that will be set on every event logged from the SDK.
    if (defaultEventParametersForInit) {
        gtagCore("set" /* GtagCommand.SET */ , defaultEventParametersForInit);
        _setDefaultEventParametersForInit(undefined);
    }
    return dynamicConfig.measurementId;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Analytics Service class.
 */ class AnalyticsService {
    _delete() {
        delete initializationPromisesMap[this.app.options.appId];
        return Promise.resolve();
    }
    constructor(app){
        this.app = app;
    }
}
/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */ let initializationPromisesMap = {};
/**
 * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
 * wait on all these to be complete in order to determine if it can selectively
 * wait for only certain initialization (FID) promises or if it must wait for all.
 */ let dynamicConfigPromisesList = [];
/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */ const measurementIdToAppId = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */ let dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */ let gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */ let gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */ let wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */ let globalInitDone = false;
/**
 * Configures Firebase Analytics to use custom `gtag` or `dataLayer` names.
 * Intended to be used if `gtag.js` script has been installed on
 * this page independently of Firebase Analytics, and is using non-default
 * names for either the `gtag` function or for `dataLayer`.
 * Must be called before calling `getAnalytics()` or it won't
 * have any effect.
 *
 * @public
 *
 * @param options - Custom gtag and dataLayer names.
 */ function settings(options) {
    if (globalInitDone) {
        throw ERROR_FACTORY.create("already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */ );
    }
    if (options.dataLayerName) {
        dataLayerName = options.dataLayerName;
    }
    if (options.gtagName) {
        gtagName = options.gtagName;
    }
}
/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */ function warnOnBrowserContextMismatch() {
    const mismatchedEnvMessages = [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserExtension"])()) {
        mismatchedEnvMessages.push('This is a browser extension environment.');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areCookiesEnabled"])()) {
        mismatchedEnvMessages.push('Cookies are not available.');
    }
    if (mismatchedEnvMessages.length > 0) {
        const details = mismatchedEnvMessages.map((message, index)=>"(".concat(index + 1, ") ").concat(message)).join(' ');
        const err = ERROR_FACTORY.create("invalid-analytics-context" /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */ , {
            errorInfo: details
        });
        logger.warn(err.message);
    }
}
/**
 * Analytics instance factory.
 * @internal
 */ function factory(app, installations, options) {
    warnOnBrowserContextMismatch();
    const appId = app.options.appId;
    if (!appId) {
        throw ERROR_FACTORY.create("no-app-id" /* AnalyticsError.NO_APP_ID */ );
    }
    if (!app.options.apiKey) {
        if (app.options.measurementId) {
            logger.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest' + " measurement ID for this Firebase app. Falling back to the measurement ID ".concat(app.options.measurementId) + ' provided in the "measurementId" field in the local Firebase config.');
        } else {
            throw ERROR_FACTORY.create("no-api-key" /* AnalyticsError.NO_API_KEY */ );
        }
    }
    if (initializationPromisesMap[appId] != null) {
        throw ERROR_FACTORY.create("already-exists" /* AnalyticsError.ALREADY_EXISTS */ , {
            id: appId
        });
    }
    if (!globalInitDone) {
        // Steps here should only be done once per page: creation or wrapping
        // of dataLayer and global gtag function.
        getOrCreateDataLayer(dataLayerName);
        const { wrappedGtag, gtagCore } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
        wrappedGtagFunction = wrappedGtag;
        gtagCoreFunction = gtagCore;
        globalInitDone = true;
    }
    // Async but non-blocking.
    // This map reflects the completion state of all promises for each appId.
    initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
    const analyticsInstance = new AnalyticsService(app);
    return analyticsInstance;
}
/* eslint-disable @typescript-eslint/no-explicit-any */ /**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */ function getAnalytics() {
    let app = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModularInstance"])(app);
    // Dependencies
    const analyticsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_getProvider"])(app, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) {
        return analyticsProvider.getImmediate();
    }
    return initializeAnalytics(app);
}
/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */ function initializeAnalytics(app) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    // Dependencies
    const analyticsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_getProvider"])(app, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) {
        const existingInstance = analyticsProvider.getImmediate();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"])(options, analyticsProvider.getOptions())) {
            return existingInstance;
        } else {
            throw ERROR_FACTORY.create("already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */ );
        }
    }
    const analyticsInstance = analyticsProvider.initialize({
        options
    });
    return analyticsInstance;
}
/**
 * This is a public static method provided to users that wraps four different checks:
 *
 * 1. Check if it's not a browser extension environment.
 * 2. Check if cookies are enabled in current browser.
 * 3. Check if IndexedDB is supported by the browser environment.
 * 4. Check if the current browser context is valid for using `IndexedDB.open()`.
 *
 * @public
 *
 */ async function isSupported() {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserExtension"])()) {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areCookiesEnabled"])()) {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIndexedDBAvailable"])()) {
        return false;
    }
    try {
        const isDBOpenable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateIndexedDBOpenable"])();
        return isDBOpenable;
    } catch (error) {
        return false;
    }
}
/**
 * Use gtag `config` command to set `screen_name`.
 *
 * @public
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param screenName - Screen name to set.
 */ function setCurrentScreen(analyticsInstance, screenName, options) {
    analyticsInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModularInstance"])(analyticsInstance);
    setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options).catch((e)=>logger.error(e));
}
/**
 * Retrieves a unique Google Analytics identifier for the web client.
 * See {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id | client_id}.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */ async function getGoogleAnalyticsClientId(analyticsInstance) {
    analyticsInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModularInstance"])(analyticsInstance);
    return internalGetGoogleAnalyticsClientId(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId]);
}
/**
 * Use gtag `config` command to set `user_id`.
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param id - User ID to set.
 */ function setUserId(analyticsInstance, id, options) {
    analyticsInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModularInstance"])(analyticsInstance);
    setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options).catch((e)=>logger.error(e));
}
/**
 * Use gtag `config` command to set all params specified.
 *
 * @public
 */ function setUserProperties(analyticsInstance, properties, options) {
    analyticsInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModularInstance"])(analyticsInstance);
    setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options).catch((e)=>logger.error(e));
}
/**
 * Sets whether Google Analytics collection is enabled for this app on this device.
 * Sets global `window['ga-disable-analyticsId'] = true;`
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param enabled - If true, enables collection, if false, disables it.
 */ function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
    analyticsInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModularInstance"])(analyticsInstance);
    setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled).catch((e)=>logger.error(e));
}
/**
 * Adds data that will be set on every event logged from the SDK, including automatic ones.
 * With gtag's "set" command, the values passed persist on the current page and are passed with
 * all subsequent events.
 * @public
 * @param customParams - Any custom params the user may pass to gtag.js.
 */ function setDefaultEventParameters(customParams) {
    // Check if reference to existing gtag function on window object exists
    if (wrappedGtagFunction) {
        wrappedGtagFunction("set" /* GtagCommand.SET */ , customParams);
    } else {
        _setDefaultEventParametersForInit(customParams);
    }
}
/**
 * Sends a Google Analytics event with given `eventParams`. This method
 * automatically associates this logged event with this Firebase web
 * app instance on this device.
 * List of official event parameters can be found in the gtag.js
 * reference documentation:
 * {@link https://developers.google.com/gtagjs/reference/ga4-events
 * | the GA4 reference documentation}.
 *
 * @public
 */ function logEvent(analyticsInstance, eventName, eventParams, options) {
    analyticsInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$util$40$1$2e$13$2e$0$2f$node_modules$2f40$firebase$2f$util$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModularInstance"])(analyticsInstance);
    logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch((e)=>logger.error(e));
}
/**
 * Sets the applicable end user consent state for this web app across all gtag references once
 * Firebase Analytics is initialized.
 *
 * Use the {@link ConsentSettings} to specify individual consent type values. By default consent
 * types are set to "granted".
 * @public
 * @param consentSettings - Maps the applicable end user consent state for gtag.js.
 */ function setConsent(consentSettings) {
    // Check if reference to existing gtag function on window object exists
    if (wrappedGtagFunction) {
        wrappedGtagFunction("consent" /* GtagCommand.CONSENT */ , 'update', consentSettings);
    } else {
        _setConsentDefaultForInit(consentSettings);
    }
}
const name = "@firebase/analytics";
const version = "0.10.18";
/**
 * The Firebase Analytics Web SDK.
 * This SDK does not work in a Node.js environment.
 *
 * @packageDocumentation
 */ function registerAnalytics() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_registerComponent"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"](ANALYTICS_TYPE, (container, param)=>{
        let { options: analyticsOptions } = param;
        // getImmediate for FirebaseApp will always succeed
        const app = container.getProvider('app').getImmediate();
        const installations = container.getProvider('installations-internal').getImmediate();
        return factory(app, installations, analyticsOptions);
    }, "PUBLIC" /* ComponentType.PUBLIC */ ));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_registerComponent"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$component$40$0$2e$7$2e$0$2f$node_modules$2f40$firebase$2f$component$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]('analytics-internal', internalFactory, "PRIVATE" /* ComponentType.PRIVATE */ ));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerVersion"])(name, version);
    // BUILD_TARGET will be replaced by values like esm, cjs, etc during the compilation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f40$firebase$2b$app$40$0$2e$14$2e$3$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerVersion"])(name, version, 'esm2020');
    function internalFactory(container) {
        try {
            const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
            return {
                logEvent: (eventName, eventParams, options)=>logEvent(analytics, eventName, eventParams, options)
            };
        } catch (e) {
            throw ERROR_FACTORY.create("interop-component-reg-failed" /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */ , {
                reason: e
            });
        }
    }
}
registerAnalytics();
;
 //# sourceMappingURL=index.esm.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+webchannel-wrapper@1.0.5/node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Integer",
    ()=>Integer,
    "Md5",
    ()=>Md5,
    "default",
    ()=>bloom_blob_es2018
]);
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
var bloom_blob_es2018 = {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Integer;
var Md5;
(function() {
    var h; /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ 
    function k(d, a) {
        function c() {}
        c.prototype = a.prototype;
        d.F = a.prototype;
        d.prototype = new c;
        d.prototype.constructor = d;
        d.D = function(f, e, g) {
            for(var b = Array(arguments.length - 2), r = 2; r < arguments.length; r++)b[r - 2] = arguments[r];
            return a.prototype[e].apply(f, b);
        };
    }
    function l() {
        this.blockSize = -1;
    }
    function m() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = Array(4);
        this.C = Array(this.blockSize);
        this.o = this.h = 0;
        this.u();
    }
    k(m, l);
    m.prototype.u = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.o = this.h = 0;
    };
    function n(d, a, c) {
        c || (c = 0);
        const f = Array(16);
        if (typeof a === "string") for(var e = 0; e < 16; ++e)f[e] = a.charCodeAt(c++) | a.charCodeAt(c++) << 8 | a.charCodeAt(c++) << 16 | a.charCodeAt(c++) << 24;
        else for(e = 0; e < 16; ++e)f[e] = a[c++] | a[c++] << 8 | a[c++] << 16 | a[c++] << 24;
        a = d.g[0];
        c = d.g[1];
        e = d.g[2];
        let g = d.g[3], b;
        b = a + (g ^ c & (e ^ g)) + f[0] + 3614090360 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + f[1] + 3905402710 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + f[2] + 606105819 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + f[3] + 3250441966 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (g ^ c & (e ^ g)) + f[4] + 4118548399 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + f[5] + 1200080426 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + f[6] + 2821735955 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + f[7] + 4249261313 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (g ^ c & (e ^ g)) + f[8] + 1770035416 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + f[9] + 2336552879 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + f[10] + 4294925233 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + f[11] + 2304563134 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (g ^ c & (e ^ g)) + f[12] + 1804603682 & 4294967295;
        a = c + (b << 7 & 4294967295 | b >>> 25);
        b = g + (e ^ a & (c ^ e)) + f[13] + 4254626195 & 4294967295;
        g = a + (b << 12 & 4294967295 | b >>> 20);
        b = e + (c ^ g & (a ^ c)) + f[14] + 2792965006 & 4294967295;
        e = g + (b << 17 & 4294967295 | b >>> 15);
        b = c + (a ^ e & (g ^ a)) + f[15] + 1236535329 & 4294967295;
        c = e + (b << 22 & 4294967295 | b >>> 10);
        b = a + (e ^ g & (c ^ e)) + f[1] + 4129170786 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + f[6] + 3225465664 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + f[11] + 643717713 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + f[0] + 3921069994 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (e ^ g & (c ^ e)) + f[5] + 3593408605 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + f[10] + 38016083 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + f[15] + 3634488961 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + f[4] + 3889429448 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (e ^ g & (c ^ e)) + f[9] + 568446438 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + f[14] + 3275163606 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + f[3] + 4107603335 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + f[8] + 1163531501 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (e ^ g & (c ^ e)) + f[13] + 2850285829 & 4294967295;
        a = c + (b << 5 & 4294967295 | b >>> 27);
        b = g + (c ^ e & (a ^ c)) + f[2] + 4243563512 & 4294967295;
        g = a + (b << 9 & 4294967295 | b >>> 23);
        b = e + (a ^ c & (g ^ a)) + f[7] + 1735328473 & 4294967295;
        e = g + (b << 14 & 4294967295 | b >>> 18);
        b = c + (g ^ a & (e ^ g)) + f[12] + 2368359562 & 4294967295;
        c = e + (b << 20 & 4294967295 | b >>> 12);
        b = a + (c ^ e ^ g) + f[5] + 4294588738 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + f[8] + 2272392833 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + f[11] + 1839030562 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + f[14] + 4259657740 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (c ^ e ^ g) + f[1] + 2763975236 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + f[4] + 1272893353 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + f[7] + 4139469664 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + f[10] + 3200236656 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (c ^ e ^ g) + f[13] + 681279174 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + f[0] + 3936430074 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + f[3] + 3572445317 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + f[6] + 76029189 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (c ^ e ^ g) + f[9] + 3654602809 & 4294967295;
        a = c + (b << 4 & 4294967295 | b >>> 28);
        b = g + (a ^ c ^ e) + f[12] + 3873151461 & 4294967295;
        g = a + (b << 11 & 4294967295 | b >>> 21);
        b = e + (g ^ a ^ c) + f[15] + 530742520 & 4294967295;
        e = g + (b << 16 & 4294967295 | b >>> 16);
        b = c + (e ^ g ^ a) + f[2] + 3299628645 & 4294967295;
        c = e + (b << 23 & 4294967295 | b >>> 9);
        b = a + (e ^ (c | ~g)) + f[0] + 4096336452 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + f[7] + 1126891415 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + f[14] + 2878612391 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + f[5] + 4237533241 & 4294967295;
        c = e + (b << 21 & 4294967295 | b >>> 11);
        b = a + (e ^ (c | ~g)) + f[12] + 1700485571 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + f[3] + 2399980690 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + f[10] + 4293915773 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + f[1] + 2240044497 & 4294967295;
        c = e + (b << 21 & 4294967295 | b >>> 11);
        b = a + (e ^ (c | ~g)) + f[8] + 1873313359 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + f[15] + 4264355552 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + f[6] + 2734768916 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + f[13] + 1309151649 & 4294967295;
        c = e + (b << 21 & 4294967295 | b >>> 11);
        b = a + (e ^ (c | ~g)) + f[4] + 4149444226 & 4294967295;
        a = c + (b << 6 & 4294967295 | b >>> 26);
        b = g + (c ^ (a | ~e)) + f[11] + 3174756917 & 4294967295;
        g = a + (b << 10 & 4294967295 | b >>> 22);
        b = e + (a ^ (g | ~c)) + f[2] + 718787259 & 4294967295;
        e = g + (b << 15 & 4294967295 | b >>> 17);
        b = c + (g ^ (e | ~a)) + f[9] + 3951481745 & 4294967295;
        d.g[0] = d.g[0] + a & 4294967295;
        d.g[1] = d.g[1] + (e + (b << 21 & 4294967295 | b >>> 11)) & 4294967295;
        d.g[2] = d.g[2] + e & 4294967295;
        d.g[3] = d.g[3] + g & 4294967295;
    }
    m.prototype.v = function(d, a) {
        a === void 0 && (a = d.length);
        const c = a - this.blockSize, f = this.C;
        let e = this.h, g = 0;
        for(; g < a;){
            if (e == 0) for(; g <= c;)n(this, d, g), g += this.blockSize;
            if (typeof d === "string") for(; g < a;){
                if (f[e++] = d.charCodeAt(g++), e == this.blockSize) {
                    n(this, f);
                    e = 0;
                    break;
                }
            }
            else for(; g < a;)if (f[e++] = d[g++], e == this.blockSize) {
                n(this, f);
                e = 0;
                break;
            }
        }
        this.h = e;
        this.o += a;
    };
    m.prototype.A = function() {
        var d = Array((this.h < 56 ? this.blockSize : this.blockSize * 2) - this.h);
        d[0] = 128;
        for(var a = 1; a < d.length - 8; ++a)d[a] = 0;
        a = this.o * 8;
        for(var c = d.length - 8; c < d.length; ++c)d[c] = a & 255, a /= 256;
        this.v(d);
        d = Array(16);
        a = 0;
        for(c = 0; c < 4; ++c)for(let f = 0; f < 32; f += 8)d[a++] = this.g[c] >>> f & 255;
        return d;
    };
    function p(d, a) {
        var c = q;
        return Object.prototype.hasOwnProperty.call(c, d) ? c[d] : c[d] = a(d);
    }
    function t(d, a) {
        this.h = a;
        const c = [];
        let f = !0;
        for(let e = d.length - 1; e >= 0; e--){
            const g = d[e] | 0;
            f && g == a || (c[e] = g, f = !1);
        }
        this.g = c;
    }
    var q = {};
    function u(d) {
        return -128 <= d && d < 128 ? p(d, function(a) {
            return new t([
                a | 0
            ], a < 0 ? -1 : 0);
        }) : new t([
            d | 0
        ], d < 0 ? -1 : 0);
    }
    function v(d) {
        if (isNaN(d) || !isFinite(d)) return w;
        if (d < 0) return x(v(-d));
        const a = [];
        let c = 1;
        for(let f = 0; d >= c; f++)a[f] = d / c | 0, c *= 4294967296;
        return new t(a, 0);
    }
    function y(d, a) {
        if (d.length == 0) throw Error("number format error: empty string");
        a = a || 10;
        if (a < 2 || 36 < a) throw Error("radix out of range: " + a);
        if (d.charAt(0) == "-") return x(y(d.substring(1), a));
        if (d.indexOf("-") >= 0) throw Error('number format error: interior "-" character');
        const c = v(Math.pow(a, 8));
        let f = w;
        for(let g = 0; g < d.length; g += 8){
            var e = Math.min(8, d.length - g);
            const b = parseInt(d.substring(g, g + e), a);
            e < 8 ? (e = v(Math.pow(a, e)), f = f.j(e).add(v(b))) : (f = f.j(c), f = f.add(v(b)));
        }
        return f;
    }
    var w = u(0), z = u(1), A = u(16777216);
    h = t.prototype;
    h.m = function() {
        if (B(this)) return -x(this).m();
        let d = 0, a = 1;
        for(let c = 0; c < this.g.length; c++){
            const f = this.i(c);
            d += (f >= 0 ? f : 4294967296 + f) * a;
            a *= 4294967296;
        }
        return d;
    };
    h.toString = function(d) {
        d = d || 10;
        if (d < 2 || 36 < d) throw Error("radix out of range: " + d);
        if (C(this)) return "0";
        if (B(this)) return "-" + x(this).toString(d);
        const a = v(Math.pow(d, 6));
        var c = this;
        let f = "";
        for(;;){
            const e = D(c, a).g;
            c = F(c, e.j(a));
            let g = ((c.g.length > 0 ? c.g[0] : c.h) >>> 0).toString(d);
            c = e;
            if (C(c)) return g + f;
            for(; g.length < 6;)g = "0" + g;
            f = g + f;
        }
    };
    h.i = function(d) {
        return d < 0 ? 0 : d < this.g.length ? this.g[d] : this.h;
    };
    function C(d) {
        if (d.h != 0) return !1;
        for(let a = 0; a < d.g.length; a++)if (d.g[a] != 0) return !1;
        return !0;
    }
    function B(d) {
        return d.h == -1;
    }
    h.l = function(d) {
        d = F(this, d);
        return B(d) ? -1 : C(d) ? 0 : 1;
    };
    function x(d) {
        const a = d.g.length, c = [];
        for(let f = 0; f < a; f++)c[f] = ~d.g[f];
        return new t(c, ~d.h).add(z);
    }
    h.abs = function() {
        return B(this) ? x(this) : this;
    };
    h.add = function(d) {
        const a = Math.max(this.g.length, d.g.length), c = [];
        let f = 0;
        for(let e = 0; e <= a; e++){
            let g = f + (this.i(e) & 65535) + (d.i(e) & 65535), b = (g >>> 16) + (this.i(e) >>> 16) + (d.i(e) >>> 16);
            f = b >>> 16;
            g &= 65535;
            b &= 65535;
            c[e] = b << 16 | g;
        }
        return new t(c, c[c.length - 1] & -2147483648 ? -1 : 0);
    };
    function F(d, a) {
        return d.add(x(a));
    }
    h.j = function(d) {
        if (C(this) || C(d)) return w;
        if (B(this)) return B(d) ? x(this).j(x(d)) : x(x(this).j(d));
        if (B(d)) return x(this.j(x(d)));
        if (this.l(A) < 0 && d.l(A) < 0) return v(this.m() * d.m());
        const a = this.g.length + d.g.length, c = [];
        for(var f = 0; f < 2 * a; f++)c[f] = 0;
        for(f = 0; f < this.g.length; f++)for(let e = 0; e < d.g.length; e++){
            const g = this.i(f) >>> 16, b = this.i(f) & 65535, r = d.i(e) >>> 16, E = d.i(e) & 65535;
            c[2 * f + 2 * e] += b * E;
            G(c, 2 * f + 2 * e);
            c[2 * f + 2 * e + 1] += g * E;
            G(c, 2 * f + 2 * e + 1);
            c[2 * f + 2 * e + 1] += b * r;
            G(c, 2 * f + 2 * e + 1);
            c[2 * f + 2 * e + 2] += g * r;
            G(c, 2 * f + 2 * e + 2);
        }
        for(d = 0; d < a; d++)c[d] = c[2 * d + 1] << 16 | c[2 * d];
        for(d = a; d < 2 * a; d++)c[d] = 0;
        return new t(c, 0);
    };
    function G(d, a) {
        for(; (d[a] & 65535) != d[a];)d[a + 1] += d[a] >>> 16, d[a] &= 65535, a++;
    }
    function H(d, a) {
        this.g = d;
        this.h = a;
    }
    function D(d, a) {
        if (C(a)) throw Error("division by zero");
        if (C(d)) return new H(w, w);
        if (B(d)) return a = D(x(d), a), new H(x(a.g), x(a.h));
        if (B(a)) return a = D(d, x(a)), new H(x(a.g), a.h);
        if (d.g.length > 30) {
            if (B(d) || B(a)) throw Error("slowDivide_ only works with positive integers.");
            for(var c = z, f = a; f.l(d) <= 0;)c = I(c), f = I(f);
            var e = J(c, 1), g = J(f, 1);
            f = J(f, 2);
            for(c = J(c, 2); !C(f);){
                var b = g.add(f);
                b.l(d) <= 0 && (e = e.add(c), g = b);
                f = J(f, 1);
                c = J(c, 1);
            }
            a = F(d, e.j(a));
            return new H(e, a);
        }
        for(e = w; d.l(a) >= 0;){
            c = Math.max(1, Math.floor(d.m() / a.m()));
            f = Math.ceil(Math.log(c) / Math.LN2);
            f = f <= 48 ? 1 : Math.pow(2, f - 48);
            g = v(c);
            for(b = g.j(a); B(b) || b.l(d) > 0;)c -= f, g = v(c), b = g.j(a);
            C(g) && (g = z);
            e = e.add(g);
            d = F(d, b);
        }
        return new H(e, d);
    }
    h.B = function(d) {
        return D(this, d).h;
    };
    h.and = function(d) {
        const a = Math.max(this.g.length, d.g.length), c = [];
        for(let f = 0; f < a; f++)c[f] = this.i(f) & d.i(f);
        return new t(c, this.h & d.h);
    };
    h.or = function(d) {
        const a = Math.max(this.g.length, d.g.length), c = [];
        for(let f = 0; f < a; f++)c[f] = this.i(f) | d.i(f);
        return new t(c, this.h | d.h);
    };
    h.xor = function(d) {
        const a = Math.max(this.g.length, d.g.length), c = [];
        for(let f = 0; f < a; f++)c[f] = this.i(f) ^ d.i(f);
        return new t(c, this.h ^ d.h);
    };
    function I(d) {
        const a = d.g.length + 1, c = [];
        for(let f = 0; f < a; f++)c[f] = d.i(f) << 1 | d.i(f - 1) >>> 31;
        return new t(c, d.h);
    }
    function J(d, a) {
        const c = a >> 5;
        a %= 32;
        const f = d.g.length - c, e = [];
        for(let g = 0; g < f; g++)e[g] = a > 0 ? d.i(g + c) >>> a | d.i(g + c + 1) << 32 - a : d.i(g + c);
        return new t(e, d.h);
    }
    m.prototype.digest = m.prototype.A;
    m.prototype.reset = m.prototype.u;
    m.prototype.update = m.prototype.v;
    Md5 = bloom_blob_es2018.Md5 = m;
    t.prototype.add = t.prototype.add;
    t.prototype.multiply = t.prototype.j;
    t.prototype.modulo = t.prototype.B;
    t.prototype.compare = t.prototype.l;
    t.prototype.toNumber = t.prototype.m;
    t.prototype.toString = t.prototype.toString;
    t.prototype.getBits = t.prototype.i;
    t.fromNumber = v;
    t.fromString = y;
    Integer = bloom_blob_es2018.Integer = t;
}).apply(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
;
 //# sourceMappingURL=bloom_blob_es2018.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/@firebase+webchannel-wrapper@1.0.5/node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCode",
    ()=>ErrorCode,
    "Event",
    ()=>Event,
    "EventType",
    ()=>EventType,
    "FetchXmlHttpFactory",
    ()=>FetchXmlHttpFactory,
    "Stat",
    ()=>Stat,
    "WebChannel",
    ()=>WebChannel,
    "XhrIo",
    ()=>XhrIo,
    "createWebChannelTransport",
    ()=>createWebChannelTransport,
    "default",
    ()=>webchannel_blob_es2018,
    "getStatEventTarget",
    ()=>getStatEventTarget
]);
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
var webchannel_blob_es2018 = {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var XhrIo;
var FetchXmlHttpFactory;
var WebChannel;
var EventType;
var ErrorCode;
var Stat;
var Event;
var getStatEventTarget;
var createWebChannelTransport;
(function() {
    var h, aa = Object.defineProperty;
    function ba(a) {
        a = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof commonjsGlobal && commonjsGlobal
        ];
        for(var b = 0; b < a.length; ++b){
            var c = a[b];
            if (c && c.Math == Math) return c;
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this);
    function da(a, b) {
        if (b) a: {
            var c = ca;
            a = a.split(".");
            for(var d = 0; d < a.length - 1; d++){
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && b != null && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            });
        }
    }
    da("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose");
    });
    da("Array.prototype.values", function(a) {
        return a ? a : function() {
            return this[Symbol.iterator]();
        };
    });
    da("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [], d;
            for(d in b)Object.prototype.hasOwnProperty.call(b, d) && c.push([
                d,
                b[d]
            ]);
            return c;
        };
    }); /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ 
    var ea = ea || {}, l = this || self;
    function n(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function";
    }
    function fa(a, b, c) {
        return a.call.apply(a.bind, arguments);
    }
    function p(a, b, c) {
        p = fa;
        return p.apply(null, arguments);
    }
    function ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
        };
    }
    function t(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Z = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Ob = function(d, e, f) {
            for(var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++)g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g);
        };
    }
    var ia = typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function" ? (a)=>a && AsyncContext.Snapshot.wrap(a) : (a)=>a;
    function ja(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for(let d = 0; d < b; d++)c[d] = a[d];
            return c;
        }
        return [];
    }
    function ka(a, b) {
        for(let d = 1; d < arguments.length; d++){
            const e = arguments[d];
            var c = typeof e;
            c = c != "object" ? c : e ? Array.isArray(e) ? "array" : c : "null";
            if (c == "array" || c == "object" && typeof e.length == "number") {
                c = a.length || 0;
                const f = e.length || 0;
                a.length = c + f;
                for(let g = 0; g < f; g++)a[c + g] = e[g];
            } else a.push(e);
        }
    }
    class la {
        get() {
            let a;
            this.h > 0 ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
            return a;
        }
        constructor(a, b){
            this.i = a;
            this.j = b;
            this.h = 0;
            this.g = null;
        }
    }
    function ma(a) {
        l.setTimeout(()=>{
            throw a;
        }, 0);
    }
    function na() {
        var a = oa;
        let b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
        return b;
    }
    class pa {
        add(a, b) {
            const c = qa.get();
            c.set(a, b);
            this.h ? this.h.next = c : this.g = c;
            this.h = c;
        }
        constructor(){
            this.h = this.g = null;
        }
    }
    var qa = new la(()=>new ra, (a)=>a.reset());
    class ra {
        set(a, b) {
            this.h = a;
            this.g = b;
            this.next = null;
        }
        reset() {
            this.next = this.g = this.h = null;
        }
        constructor(){
            this.next = this.g = this.h = null;
        }
    }
    let u, v = !1, oa = new pa, ta = ()=>{
        const a = Promise.resolve(void 0);
        u = ()=>{
            a.then(sa);
        };
    };
    function sa() {
        for(var a; a = na();){
            try {
                a.h.call(a.g);
            } catch (c) {
                ma(c);
            }
            var b = qa;
            b.j(a);
            b.h < 100 && (b.h++, a.next = b.g, b.g = a);
        }
        v = !1;
    }
    function w() {
        this.u = this.u;
        this.C = this.C;
    }
    w.prototype.u = !1;
    w.prototype.dispose = function() {
        this.u || (this.u = !0, this.N());
    };
    w.prototype[Symbol.dispose] = function() {
        this.dispose();
    };
    w.prototype.N = function() {
        if (this.C) for(; this.C.length;)this.C.shift()();
    };
    function x(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1;
    }
    x.prototype.h = function() {
        this.defaultPrevented = !0;
    };
    var ua = function() {
        if (!l.addEventListener || !Object.defineProperty) return !1;
        var a = !1, b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0;
            }
        });
        try {
            const c = ()=>{};
            l.addEventListener("test", c, b);
            l.removeEventListener("test", c, b);
        } catch (c) {}
        return a;
    }();
    function y(a) {
        return /^[\s\xa0]*$/.test(a);
    }
    function z(a, b) {
        x.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        a && this.init(a, b);
    }
    t(z, x);
    z.prototype.init = function(a, b) {
        const c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        b = a.relatedTarget;
        b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = a.pointerType;
        this.state = a.state;
        this.i = a;
        a.defaultPrevented && z.Z.h.call(this);
    };
    z.prototype.h = function() {
        z.Z.h.call(this);
        const a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
    };
    var B = "closure_listenable_" + (Math.random() * 1E6 | 0);
    var va = 0;
    function wa(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ha = e;
        this.key = ++va;
        this.da = this.fa = !1;
    }
    function xa(a) {
        a.da = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ha = null;
    }
    function ya(a, b, c) {
        for(const d in a)b.call(c, a[d], d, a);
    }
    function Aa(a, b) {
        for(const c in a)b.call(void 0, a[c], c, a);
    }
    function Ba(a) {
        const b = {};
        for(const c in a)b[c] = a[c];
        return b;
    }
    const Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function Da(a, b) {
        let c, d;
        for(let e = 1; e < arguments.length; e++){
            d = arguments[e];
            for(c in d)a[c] = d[c];
            for(let f = 0; f < Ca.length; f++)c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
    }
    function Ea(a) {
        this.src = a;
        this.g = {};
        this.h = 0;
    }
    Ea.prototype.add = function(a, b, c, d, e) {
        const f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        const g = Fa(a, b, d, e);
        g > -1 ? (b = a[g], c || (b.fa = !1)) : (b = new wa(b, this.src, f, !!d, e), b.fa = c, a.push(b));
        return b;
    };
    function Ga(a, b) {
        const c = b.type;
        if (c in a.g) {
            var d = a.g[c], e = Array.prototype.indexOf.call(d, b, void 0), f;
            (f = e >= 0) && Array.prototype.splice.call(d, e, 1);
            f && (xa(b), a.g[c].length == 0 && (delete a.g[c], a.h--));
        }
    }
    function Fa(a, b, c, d) {
        for(let e = 0; e < a.length; ++e){
            const f = a[e];
            if (!f.da && f.listener == b && f.capture == !!c && f.ha == d) return e;
        }
        return -1;
    }
    var Ha = "closure_lm_" + (Math.random() * 1E6 | 0), Ia = {};
    function Ka(a, b, c, d, e) {
        if (d && d.once) return La(a, b, c, d, e);
        if (Array.isArray(b)) {
            for(let f = 0; f < b.length; f++)Ka(a, b[f], c, d, e);
            return null;
        }
        c = Ma(c);
        return a && a[B] ? a.J(b, c, n(d) ? !!d.capture : !!d, e) : Na(a, b, c, !1, d, e);
    }
    function Na(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        const g = n(e) ? !!e.capture : !!e;
        let k = Oa(a);
        k || (a[Ha] = k = new Ea(a));
        c = k.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = Pa();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) ua || (e = g), e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Qa(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        return c;
    }
    function Pa() {
        function a(c) {
            return b.call(a.src, a.listener, c);
        }
        const b = Ra;
        return a;
    }
    function La(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for(let f = 0; f < b.length; f++)La(a, b[f], c, d, e);
            return null;
        }
        c = Ma(c);
        return a && a[B] ? a.K(b, c, n(d) ? !!d.capture : !!d, e) : Na(a, b, c, !0, d, e);
    }
    function Sa(a, b, c, d, e) {
        if (Array.isArray(b)) for(var f = 0; f < b.length; f++)Sa(a, b[f], c, d, e);
        else (d = n(d) ? !!d.capture : !!d, c = Ma(c), a && a[B]) ? (a = a.i, f = String(b).toString(), f in a.g && (b = a.g[f], c = Fa(b, c, d, e), c > -1 && (xa(b[c]), Array.prototype.splice.call(b, c, 1), b.length == 0 && (delete a.g[f], a.h--)))) : a && (a = Oa(a)) && (b = a.g[b.toString()], a = -1, b && (a = Fa(b, c, d, e)), (c = a > -1 ? b[a] : null) && Ta(c));
    }
    function Ta(a) {
        if (typeof a !== "number" && a && !a.da) {
            var b = a.src;
            if (b && b[B]) Ga(b.i, a);
            else {
                var c = a.type, d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Qa(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                (c = Oa(b)) ? (Ga(c, a), c.h == 0 && (c.src = null, b[Ha] = null)) : xa(a);
            }
        }
    }
    function Qa(a) {
        return a in Ia ? Ia[a] : Ia[a] = "on" + a;
    }
    function Ra(a, b) {
        if (a.da) a = !0;
        else {
            b = new z(b, this);
            const c = a.listener, d = a.ha || a.src;
            a.fa && Ta(a);
            a = c.call(d, b);
        }
        return a;
    }
    function Oa(a) {
        a = a[Ha];
        return a instanceof Ea ? a : null;
    }
    var Ua = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);
    function Ma(a) {
        if (typeof a === "function") return a;
        a[Ua] || (a[Ua] = function(b) {
            return a.handleEvent(b);
        });
        return a[Ua];
    }
    function C() {
        w.call(this);
        this.i = new Ea(this);
        this.M = this;
        this.G = null;
    }
    t(C, w);
    C.prototype[B] = !0;
    C.prototype.removeEventListener = function(a, b, c, d) {
        Sa(this, a, b, c, d);
    };
    function D(a, b) {
        var c, d = a.G;
        if (d) for(c = []; d; d = d.G)c.push(d);
        a = a.M;
        d = b.type || b;
        if (typeof b === "string") b = new x(b, a);
        else if (b instanceof x) b.target = b.target || a;
        else {
            var e = b;
            b = new x(d, a);
            Da(b, e);
        }
        e = !0;
        let f, g;
        if (c) for(g = c.length - 1; g >= 0; g--)f = b.g = c[g], e = Va(f, d, !0, b) && e;
        f = b.g = a;
        e = Va(f, d, !0, b) && e;
        e = Va(f, d, !1, b) && e;
        if (c) for(g = 0; g < c.length; g++)f = b.g = c[g], e = Va(f, d, !1, b) && e;
    }
    C.prototype.N = function() {
        C.Z.N.call(this);
        if (this.i) {
            var a = this.i;
            for(const c in a.g){
                const d = a.g[c];
                for(let e = 0; e < d.length; e++)xa(d[e]);
                delete a.g[c];
                a.h--;
            }
        }
        this.G = null;
    };
    C.prototype.J = function(a, b, c, d) {
        return this.i.add(String(a), b, !1, c, d);
    };
    C.prototype.K = function(a, b, c, d) {
        return this.i.add(String(a), b, !0, c, d);
    };
    function Va(a, b, c, d) {
        b = a.i.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        let e = !0;
        for(let f = 0; f < b.length; ++f){
            const g = b[f];
            if (g && !g.da && g.capture == c) {
                const k = g.listener, q = g.ha || g.src;
                g.fa && Ga(a.i, g);
                e = k.call(q, d) !== !1 && e;
            }
        }
        return e && !d.defaultPrevented;
    }
    function Wa(a, b) {
        if (typeof a !== "function") if (a && typeof a.handleEvent == "function") a = p(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return Number(b) > 2147483647 ? -1 : l.setTimeout(a, b || 0);
    }
    function Xa(a) {
        a.g = Wa(()=>{
            a.g = null;
            a.i && (a.i = !1, Xa(a));
        }, a.l);
        const b = a.h;
        a.h = null;
        a.m.apply(null, b);
    }
    class Ya extends w {
        j(a) {
            this.h = arguments;
            this.g ? this.i = !0 : Xa(this);
        }
        N() {
            super.N();
            this.g && (l.clearTimeout(this.g), this.g = null, this.i = !1, this.h = null);
        }
        constructor(a, b){
            super();
            this.m = a;
            this.l = b;
            this.h = null;
            this.i = !1;
            this.g = null;
        }
    }
    function E(a) {
        w.call(this);
        this.h = a;
        this.g = {};
    }
    t(E, w);
    var Za = [];
    function $a(a) {
        ya(a.g, function(b, c) {
            this.g.hasOwnProperty(c) && Ta(b);
        }, a);
        a.g = {};
    }
    E.prototype.N = function() {
        E.Z.N.call(this);
        $a(this);
    };
    E.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var ab = l.JSON.stringify;
    var cb = l.JSON.parse;
    var db = class {
        stringify(a) {
            return l.JSON.stringify(a, void 0);
        }
        parse(a) {
            return l.JSON.parse(a, void 0);
        }
    };
    function eb() {}
    function fb() {}
    var H = {
        OPEN: "a",
        hb: "b",
        ERROR: "c",
        tb: "d"
    };
    function gb() {
        x.call(this, "d");
    }
    t(gb, x);
    function hb() {
        x.call(this, "c");
    }
    t(hb, x);
    var I = {}, ib = null;
    function jb() {
        return ib = ib || new C;
    }
    I.Ia = "serverreachability";
    function kb(a) {
        x.call(this, I.Ia, a);
    }
    t(kb, x);
    function lb(a) {
        const b = jb();
        D(b, new kb(b));
    }
    I.STAT_EVENT = "statevent";
    function mb(a, b) {
        x.call(this, I.STAT_EVENT, a);
        this.stat = b;
    }
    t(mb, x);
    function J(a) {
        const b = jb();
        D(b, new mb(b, a));
    }
    I.Ja = "timingevent";
    function nb(a, b) {
        x.call(this, I.Ja, a);
        this.size = b;
    }
    t(nb, x);
    function ob(a, b) {
        if (typeof a !== "function") throw Error("Fn must not be null and must be a function");
        return l.setTimeout(function() {
            a();
        }, b);
    }
    function pb() {
        this.g = !0;
    }
    pb.prototype.ua = function() {
        this.g = !1;
    };
    function qb(a, b, c, d, e, f) {
        a.info(function() {
            if (a.g) if (f) {
                var g = "";
                var k = f.split("&");
                for(let m = 0; m < k.length; m++){
                    var q = k[m].split("=");
                    if (q.length > 1) {
                        const r = q[0];
                        q = q[1];
                        const A = r.split("_");
                        g = A.length >= 2 && A[1] == "type" ? g + (r + "=" + q + "&") : g + (r + "=redacted&");
                    }
                }
            } else g = null;
            else g = f;
            return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g;
        });
    }
    function rb(a, b, c, d, e, f, g) {
        a.info(function() {
            return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g;
        });
    }
    function K(a, b, c, d) {
        a.info(function() {
            return "XMLHTTP TEXT (" + b + "): " + sb(a, c) + (d ? " " + d : "");
        });
    }
    function tb(a, b) {
        a.info(function() {
            return "TIMEOUT: " + b;
        });
    }
    pb.prototype.info = function() {};
    function sb(a, b) {
        if (!a.g) return b;
        if (!b) return null;
        try {
            const f = JSON.parse(b);
            if (f) {
                for(a = 0; a < f.length; a++)if (Array.isArray(f[a])) {
                    var c = f[a];
                    if (!(c.length < 2)) {
                        var d = c[1];
                        if (Array.isArray(d) && !(d.length < 1)) {
                            var e = d[0];
                            if (e != "noop" && e != "stop" && e != "close") for(let g = 1; g < d.length; g++)d[g] = "";
                        }
                    }
                }
            }
            return ab(f);
        } catch (f) {
            return b;
        }
    }
    var ub = {
        NO_ERROR: 0,
        cb: 1,
        qb: 2,
        pb: 3,
        kb: 4,
        ob: 5,
        rb: 6,
        Ga: 7,
        TIMEOUT: 8,
        ub: 9
    };
    var vb = {
        ib: "complete",
        Fb: "success",
        ERROR: "error",
        Ga: "abort",
        xb: "ready",
        yb: "readystatechange",
        TIMEOUT: "timeout",
        sb: "incrementaldata",
        wb: "progress",
        lb: "downloadprogress",
        Nb: "uploadprogress"
    };
    var wb;
    function xb() {}
    t(xb, eb);
    xb.prototype.g = function() {
        return new XMLHttpRequest;
    };
    wb = new xb;
    function L(a) {
        return encodeURIComponent(String(a));
    }
    function yb(a) {
        var b = 1;
        a = a.split(":");
        const c = [];
        for(; b > 0 && a.length;)c.push(a.shift()), b--;
        a.length && c.push(a.join(":"));
        return c;
    }
    function N(a, b, c, d) {
        this.j = a;
        this.i = b;
        this.l = c;
        this.S = d || 1;
        this.V = new E(this);
        this.H = 45E3;
        this.J = null;
        this.o = !1;
        this.u = this.B = this.A = this.M = this.F = this.T = this.D = null;
        this.G = [];
        this.g = null;
        this.C = 0;
        this.m = this.v = null;
        this.X = -1;
        this.K = !1;
        this.P = 0;
        this.O = null;
        this.W = this.L = this.U = this.R = !1;
        this.h = new zb;
    }
    function zb() {
        this.i = null;
        this.g = "";
        this.h = !1;
    }
    var Ab = {}, Bb = {};
    function Cb(a, b, c) {
        a.M = 1;
        a.A = Db(O(b));
        a.u = c;
        a.R = !0;
        Eb(a, null);
    }
    function Eb(a, b) {
        a.F = Date.now();
        Fb(a);
        a.B = O(a.A);
        var c = a.B, d = a.S;
        Array.isArray(d) || (d = [
            String(d)
        ]);
        Gb(c.i, "t", d);
        a.C = 0;
        c = a.j.L;
        a.h = new zb;
        a.g = Hb(a.j, c ? b : null, !a.u);
        a.P > 0 && (a.O = new Ya(p(a.Y, a, a.g), a.P));
        b = a.V;
        c = a.g;
        d = a.ba;
        var e = "readystatechange";
        Array.isArray(e) || (e && (Za[0] = e.toString()), e = Za);
        for(let f = 0; f < e.length; f++){
            const g = Ka(c, e[f], d || b.handleEvent, !1, b.h || b);
            if (!g) break;
            b.g[g.key] = g;
        }
        b = a.J ? Ba(a.J) : {};
        a.u ? (a.v || (a.v = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.g.ea(a.B, a.v, a.u, b)) : (a.v = "GET", a.g.ea(a.B, a.v, null, b));
        lb();
        qb(a.i, a.v, a.B, a.l, a.S, a.u);
    }
    N.prototype.ba = function(a) {
        a = a.target;
        const b = this.O;
        b && P(a) == 3 ? b.j() : this.Y(a);
    };
    N.prototype.Y = function(a) {
        try {
            if (a == this.g) a: {
                const k = P(this.g), q = this.g.ya(), m = this.g.ca();
                if (!(k < 3) && (k != 3 || this.g && (this.h.h || this.g.la() || Ib(this.g)))) {
                    this.K || k != 4 || q == 7 || (q == 8 || m <= 0 ? lb(3) : lb(2));
                    Jb(this);
                    var b = this.g.ca();
                    this.X = b;
                    var c = Kb(this);
                    this.o = b == 200;
                    rb(this.i, this.v, this.B, this.l, this.S, k, b);
                    if (this.o) {
                        if (this.U && !this.L) {
                            b: {
                                if (this.g) {
                                    var d, e = this.g;
                                    if ((d = e.g ? e.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !y(d)) {
                                        var f = d;
                                        break b;
                                    }
                                }
                                f = null;
                            }
                            if (a = f) K(this.i, this.l, a, "Initial handshake response via X-HTTP-Initial-Response"), this.L = !0, Lb(this, a);
                            else {
                                this.o = !1;
                                this.m = 3;
                                J(12);
                                Q(this);
                                Mb(this);
                                break a;
                            }
                        }
                        if (this.R) {
                            a = !0;
                            let r;
                            for(; !this.K && this.C < c.length;)if (r = Nb(this, c), r == Bb) {
                                k == 4 && (this.m = 4, J(14), a = !1);
                                K(this.i, this.l, null, "[Incomplete Response]");
                                break;
                            } else if (r == Ab) {
                                this.m = 4;
                                J(15);
                                K(this.i, this.l, c, "[Invalid Chunk]");
                                a = !1;
                                break;
                            } else K(this.i, this.l, r, null), Lb(this, r);
                            Ob(this) && this.C != 0 && (this.h.g = this.h.g.slice(this.C), this.C = 0);
                            k != 4 || c.length != 0 || this.h.h || (this.m = 1, J(16), a = !1);
                            this.o = this.o && a;
                            if (!a) K(this.i, this.l, c, "[Invalid Chunked Response]"), Q(this), Mb(this);
                            else if (c.length > 0 && !this.W) {
                                this.W = !0;
                                var g = this.j;
                                g.g == this && g.aa && !g.P && (g.j.info("Great, no buffering proxy detected. Bytes received: " + c.length), Pb(g), g.P = !0, J(11));
                            }
                        } else K(this.i, this.l, c, null), Lb(this, c);
                        k == 4 && Q(this);
                        this.o && !this.K && (k == 4 ? Qb(this.j, this) : (this.o = !1, Fb(this)));
                    } else Rb(this.g), b == 400 && c.indexOf("Unknown SID") > 0 ? (this.m = 3, J(12)) : (this.m = 0, J(13)), Q(this), Mb(this);
                }
            }
        } catch (k) {} finally{}
    };
    function Kb(a) {
        if (!Ob(a)) return a.g.la();
        const b = Ib(a.g);
        if (b === "") return "";
        let c = "";
        const d = b.length, e = P(a.g) == 4;
        if (!a.h.i) {
            if (typeof TextDecoder === "undefined") return Q(a), Mb(a), "";
            a.h.i = new l.TextDecoder;
        }
        for(let f = 0; f < d; f++)a.h.h = !0, c += a.h.i.decode(b[f], {
            stream: !(e && f == d - 1)
        });
        b.length = 0;
        a.h.g += c;
        a.C = 0;
        return a.h.g;
    }
    function Ob(a) {
        return a.g ? a.v == "GET" && a.M != 2 && a.j.Aa : !1;
    }
    function Nb(a, b) {
        var c = a.C, d = b.indexOf("\n", c);
        if (d == -1) return Bb;
        c = Number(b.substring(c, d));
        if (isNaN(c)) return Ab;
        d += 1;
        if (d + c > b.length) return Bb;
        b = b.slice(d, d + c);
        a.C = d + c;
        return b;
    }
    N.prototype.cancel = function() {
        this.K = !0;
        Q(this);
    };
    function Fb(a) {
        a.T = Date.now() + a.H;
        Sb(a, a.H);
    }
    function Sb(a, b) {
        if (a.D != null) throw Error("WatchDog timer not null");
        a.D = ob(p(a.aa, a), b);
    }
    function Jb(a) {
        a.D && (l.clearTimeout(a.D), a.D = null);
    }
    N.prototype.aa = function() {
        this.D = null;
        const a = Date.now();
        a - this.T >= 0 ? (tb(this.i, this.B), this.M != 2 && (lb(), J(17)), Q(this), this.m = 2, Mb(this)) : Sb(this, this.T - a);
    };
    function Mb(a) {
        a.j.I == 0 || a.K || Qb(a.j, a);
    }
    function Q(a) {
        Jb(a);
        var b = a.O;
        b && typeof b.dispose == "function" && b.dispose();
        a.O = null;
        $a(a.V);
        a.g && (b = a.g, a.g = null, b.abort(), b.dispose());
    }
    function Lb(a, b) {
        try {
            var c = a.j;
            if (c.I != 0 && (c.g == a || Tb(c.h, a))) {
                if (!a.L && Tb(c.h, a) && c.I == 3) {
                    try {
                        var d = c.Ba.g.parse(b);
                    } catch (m) {
                        d = null;
                    }
                    if (Array.isArray(d) && d.length == 3) {
                        var e = d;
                        if (e[0] == 0) a: {
                            if (!c.v) {
                                if (c.g) if (c.g.F + 3E3 < a.F) Ub(c), Vb(c);
                                else break a;
                                Wb(c);
                                J(18);
                            }
                        }
                        else c.xa = e[1], 0 < c.xa - c.K && e[2] < 37500 && c.F && c.A == 0 && !c.C && (c.C = ob(p(c.Va, c), 6E3));
                        Xb(c.h) <= 1 && c.ta && (c.ta = void 0);
                    } else R(c, 11);
                } else if ((a.L || c.g == a) && Ub(c), !y(b)) for(e = c.Ba.g.parse(b), b = 0; b < e.length; b++){
                    let m = e[b];
                    const r = m[0];
                    if (!(r <= c.K)) if (c.K = r, m = m[1], c.I == 2) if (m[0] == "c") {
                        c.M = m[1];
                        c.ba = m[2];
                        const A = m[3];
                        A != null && (c.ka = A, c.j.info("VER=" + c.ka));
                        const M = m[4];
                        M != null && (c.za = M, c.j.info("SVER=" + c.za));
                        const F = m[5];
                        F != null && typeof F === "number" && F > 0 && (d = 1.5 * F, c.O = d, c.j.info("backChannelRequestTimeoutMs_=" + d));
                        d = c;
                        const G = a.g;
                        if (G) {
                            const za = G.g ? G.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                            if (za) {
                                var f = d.h;
                                f.g || za.indexOf("spdy") == -1 && za.indexOf("quic") == -1 && za.indexOf("h2") == -1 || (f.j = f.l, f.g = new Set, f.h && (Yb(f, f.h), f.h = null));
                            }
                            if (d.G) {
                                const bb = G.g ? G.g.getResponseHeader("X-HTTP-Session-Id") : null;
                                bb && (d.wa = bb, S(d.J, d.G, bb));
                            }
                        }
                        c.I = 3;
                        c.l && c.l.ra();
                        c.aa && (c.T = Date.now() - a.F, c.j.info("Handshake RTT: " + c.T + "ms"));
                        d = c;
                        var g = a;
                        d.na = Zb(d, d.L ? d.ba : null, d.W);
                        if (g.L) {
                            $b(d.h, g);
                            var k = g, q = d.O;
                            q && (k.H = q);
                            k.D && (Jb(k), Fb(k));
                            d.g = g;
                        } else ac(d);
                        c.i.length > 0 && bc(c);
                    } else m[0] != "stop" && m[0] != "close" || R(c, 7);
                    else c.I == 3 && (m[0] == "stop" || m[0] == "close" ? m[0] == "stop" ? R(c, 7) : cc(c) : m[0] != "noop" && c.l && c.l.qa(m), c.A = 0);
                }
            }
            lb(4);
        } catch (m) {}
    }
    var dc = class {
        constructor(a, b){
            this.g = a;
            this.map = b;
        }
    };
    function ec(a) {
        this.l = a || 10;
        l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = a.length > 0 && (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")) : a = !!(l.chrome && l.chrome.loadTimes && l.chrome.loadTimes() && l.chrome.loadTimes().wasFetchedViaSpdy);
        this.j = a ? this.l : 1;
        this.g = null;
        this.j > 1 && (this.g = new Set);
        this.h = null;
        this.i = [];
    }
    function fc(a) {
        return a.h ? !0 : a.g ? a.g.size >= a.j : !1;
    }
    function Xb(a) {
        return a.h ? 1 : a.g ? a.g.size : 0;
    }
    function Tb(a, b) {
        return a.h ? a.h == b : a.g ? a.g.has(b) : !1;
    }
    function Yb(a, b) {
        a.g ? a.g.add(b) : a.h = b;
    }
    function $b(a, b) {
        a.h && a.h == b ? a.h = null : a.g && a.g.has(b) && a.g.delete(b);
    }
    ec.prototype.cancel = function() {
        this.i = hc(this);
        if (this.h) this.h.cancel(), this.h = null;
        else if (this.g && this.g.size !== 0) {
            for (const a of this.g.values())a.cancel();
            this.g.clear();
        }
    };
    function hc(a) {
        if (a.h != null) return a.i.concat(a.h.G);
        if (a.g != null && a.g.size !== 0) {
            let b = a.i;
            for (const c of a.g.values())b = b.concat(c.G);
            return b;
        }
        return ja(a.i);
    }
    var ic = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    function jc(a, b) {
        if (a) {
            a = a.split("&");
            for(let c = 0; c < a.length; c++){
                const d = a[c].indexOf("=");
                let e, f = null;
                d >= 0 ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
                b(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
            }
        }
    }
    function T(a) {
        this.g = this.o = this.j = "";
        this.u = null;
        this.m = this.h = "";
        this.l = !1;
        let b;
        a instanceof T ? (this.l = a.l, kc(this, a.j), this.o = a.o, this.g = a.g, lc(this, a.u), this.h = a.h, mc(this, nc(a.i)), this.m = a.m) : a && (b = String(a).match(ic)) ? (this.l = !1, kc(this, b[1] || "", !0), this.o = oc(b[2] || ""), this.g = oc(b[3] || "", !0), lc(this, b[4]), this.h = oc(b[5] || "", !0), mc(this, b[6] || "", !0), this.m = oc(b[7] || "")) : (this.l = !1, this.i = new pc(null, this.l));
    }
    T.prototype.toString = function() {
        const a = [];
        var b = this.j;
        b && a.push(qc(b, rc, !0), ":");
        var c = this.g;
        if (c || b == "file") a.push("//"), (b = this.o) && a.push(qc(b, rc, !0), "@"), a.push(L(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.u, c != null && a.push(":", String(c));
        if (c = this.h) this.g && c.charAt(0) != "/" && a.push("/"), a.push(qc(c, c.charAt(0) == "/" ? sc : tc, !0));
        (c = this.i.toString()) && a.push("?", c);
        (c = this.m) && a.push("#", qc(c, uc));
        return a.join("");
    };
    T.prototype.resolve = function(a) {
        const b = O(this);
        let c = !!a.j;
        c ? kc(b, a.j) : c = !!a.o;
        c ? b.o = a.o : c = !!a.g;
        c ? b.g = a.g : c = a.u != null;
        var d = a.h;
        if (c) lc(b, a.u);
        else if (c = !!a.h) {
            if (d.charAt(0) != "/") if (this.g && !this.h) d = "/" + d;
            else {
                var e = b.h.lastIndexOf("/");
                e != -1 && (d = b.h.slice(0, e + 1) + d);
            }
            e = d;
            if (e == ".." || e == ".") d = "";
            else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
                d = e.lastIndexOf("/", 0) == 0;
                e = e.split("/");
                const f = [];
                for(let g = 0; g < e.length;){
                    const k = e[g++];
                    k == "." ? d && g == e.length && f.push("") : k == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0);
                }
                d = f.join("/");
            } else d = e;
        }
        c ? b.h = d : c = a.i.toString() !== "";
        c ? mc(b, nc(a.i)) : c = !!a.m;
        c && (b.m = a.m);
        return b;
    };
    function O(a) {
        return new T(a);
    }
    function kc(a, b, c) {
        a.j = c ? oc(b, !0) : b;
        a.j && (a.j = a.j.replace(/:$/, ""));
    }
    function lc(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
            a.u = b;
        } else a.u = null;
    }
    function mc(a, b, c) {
        b instanceof pc ? (a.i = b, vc(a.i, a.l)) : (c || (b = qc(b, wc)), a.i = new pc(b, a.l));
    }
    function S(a, b, c) {
        a.i.set(b, c);
    }
    function Db(a) {
        S(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36));
        return a;
    }
    function oc(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    }
    function qc(a, b, c) {
        return typeof a === "string" ? (a = encodeURI(a).replace(b, xc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    }
    function xc(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    }
    var rc = /[#\/\?@]/g, tc = /[#\?:]/g, sc = /[#\?]/g, wc = /[#\?@]/g, uc = /#/g;
    function pc(a, b) {
        this.h = this.g = null;
        this.i = a || null;
        this.j = !!b;
    }
    function U(a) {
        a.g || (a.g = new Map, a.h = 0, a.i && jc(a.i, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
    }
    h = pc.prototype;
    h.add = function(a, b) {
        U(this);
        this.i = null;
        a = V(this, a);
        let c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this;
    };
    function yc(a, b) {
        U(a);
        b = V(a, b);
        a.g.has(b) && (a.i = null, a.h -= a.g.get(b).length, a.g.delete(b));
    }
    function zc(a, b) {
        U(a);
        b = V(a, b);
        return a.g.has(b);
    }
    h.forEach = function(a, b) {
        U(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this);
            }, this);
        }, this);
    };
    function Ac(a, b) {
        U(a);
        let c = [];
        if (typeof b === "string") zc(a, b) && (c = c.concat(a.g.get(V(a, b))));
        else for(a = Array.from(a.g.values()), b = 0; b < a.length; b++)c = c.concat(a[b]);
        return c;
    }
    h.set = function(a, b) {
        U(this);
        this.i = null;
        a = V(this, a);
        zc(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [
            b
        ]);
        this.h += 1;
        return this;
    };
    h.get = function(a, b) {
        if (!a) return b;
        a = Ac(this, a);
        return a.length > 0 ? String(a[0]) : b;
    };
    function Gb(a, b, c) {
        yc(a, b);
        c.length > 0 && (a.i = null, a.g.set(V(a, b), ja(c)), a.h += c.length);
    }
    h.toString = function() {
        if (this.i) return this.i;
        if (!this.g) return "";
        const a = [], b = Array.from(this.g.keys());
        for(let d = 0; d < b.length; d++){
            var c = b[d];
            const e = L(c);
            c = Ac(this, c);
            for(let f = 0; f < c.length; f++){
                let g = e;
                c[f] !== "" && (g += "=" + L(c[f]));
                a.push(g);
            }
        }
        return this.i = a.join("&");
    };
    function nc(a) {
        const b = new pc;
        b.i = a.i;
        a.g && (b.g = new Map(a.g), b.h = a.h);
        return b;
    }
    function V(a, b) {
        b = String(b);
        a.j && (b = b.toLowerCase());
        return b;
    }
    function vc(a, b) {
        b && !a.j && (U(a), a.i = null, a.g.forEach(function(c, d) {
            const e = d.toLowerCase();
            d != e && (yc(this, d), Gb(this, e, c));
        }, a));
        a.j = b;
    }
    function Bc(a, b) {
        const c = new pb;
        if (l.Image) {
            const d = new Image;
            d.onload = ha(W, c, "TestLoadImage: loaded", !0, b, d);
            d.onerror = ha(W, c, "TestLoadImage: error", !1, b, d);
            d.onabort = ha(W, c, "TestLoadImage: abort", !1, b, d);
            d.ontimeout = ha(W, c, "TestLoadImage: timeout", !1, b, d);
            l.setTimeout(function() {
                if (d.ontimeout) d.ontimeout();
            }, 1E4);
            d.src = a;
        } else b(!1);
    }
    function Cc(a, b) {
        const c = new pb, d = new AbortController, e = setTimeout(()=>{
            d.abort();
            W(c, "TestPingServer: timeout", !1, b);
        }, 1E4);
        fetch(a, {
            signal: d.signal
        }).then((f)=>{
            clearTimeout(e);
            f.ok ? W(c, "TestPingServer: ok", !0, b) : W(c, "TestPingServer: server error", !1, b);
        }).catch(()=>{
            clearTimeout(e);
            W(c, "TestPingServer: error", !1, b);
        });
    }
    function W(a, b, c, d, e) {
        try {
            e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c);
        } catch (f) {}
    }
    function Dc() {
        this.g = new db;
    }
    function Ec(a) {
        this.i = a.Sb || null;
        this.h = a.ab || !1;
    }
    t(Ec, eb);
    Ec.prototype.g = function() {
        return new Fc(this.i, this.h);
    };
    function Fc(a, b) {
        C.call(this);
        this.H = a;
        this.o = b;
        this.m = void 0;
        this.status = this.readyState = 0;
        this.responseType = this.responseText = this.response = this.statusText = "";
        this.onreadystatechange = null;
        this.A = new Headers;
        this.h = null;
        this.F = "GET";
        this.D = "";
        this.g = !1;
        this.B = this.j = this.l = null;
        this.v = new AbortController;
    }
    t(Fc, C);
    h = Fc.prototype;
    h.open = function(a, b) {
        if (this.readyState != 0) throw this.abort(), Error("Error reopening a connection");
        this.F = a;
        this.D = b;
        this.readyState = 1;
        Gc(this);
    };
    h.send = function(a) {
        if (this.readyState != 1) throw this.abort(), Error("need to call open() first. ");
        if (this.v.signal.aborted) throw this.abort(), Error("Request was aborted.");
        this.g = !0;
        const b = {
            headers: this.A,
            method: this.F,
            credentials: this.m,
            cache: void 0,
            signal: this.v.signal
        };
        a && (b.body = a);
        (this.H || l).fetch(new Request(this.D, b)).then(this.Pa.bind(this), this.ga.bind(this));
    };
    h.abort = function() {
        this.response = this.responseText = "";
        this.A = new Headers;
        this.status = 0;
        this.v.abort();
        this.j && this.j.cancel("Request was aborted.").catch(()=>{});
        this.readyState >= 1 && this.g && this.readyState != 4 && (this.g = !1, Hc(this));
        this.readyState = 0;
    };
    h.Pa = function(a) {
        if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, Gc(this)), this.g && (this.readyState = 3, Gc(this), this.g))) if (this.responseType === "arraybuffer") a.arrayBuffer().then(this.Na.bind(this), this.ga.bind(this));
        else if (typeof l.ReadableStream !== "undefined" && "body" in a) {
            this.j = a.body.getReader();
            if (this.o) {
                if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
                this.response = [];
            } else this.response = this.responseText = "", this.B = new TextDecoder;
            Ic(this);
        } else a.text().then(this.Oa.bind(this), this.ga.bind(this));
    };
    function Ic(a) {
        a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a));
    }
    h.Ma = function(a) {
        if (this.g) {
            if (this.o && a.value) this.response.push(a.value);
            else if (!this.o) {
                var b = a.value ? a.value : new Uint8Array(0);
                if (b = this.B.decode(b, {
                    stream: !a.done
                })) this.response = this.responseText += b;
            }
            a.done ? Hc(this) : Gc(this);
            this.readyState == 3 && Ic(this);
        }
    };
    h.Oa = function(a) {
        this.g && (this.response = this.responseText = a, Hc(this));
    };
    h.Na = function(a) {
        this.g && (this.response = a, Hc(this));
    };
    h.ga = function() {
        this.g && Hc(this);
    };
    function Hc(a) {
        a.readyState = 4;
        a.l = null;
        a.j = null;
        a.B = null;
        Gc(a);
    }
    h.setRequestHeader = function(a, b) {
        this.A.append(a, b);
    };
    h.getResponseHeader = function(a) {
        return this.h ? this.h.get(a.toLowerCase()) || "" : "";
    };
    h.getAllResponseHeaders = function() {
        if (!this.h) return "";
        const a = [], b = this.h.entries();
        for(var c = b.next(); !c.done;)c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();
        return a.join("\r\n");
    };
    function Gc(a) {
        a.onreadystatechange && a.onreadystatechange.call(a);
    }
    Object.defineProperty(Fc.prototype, "withCredentials", {
        get: function() {
            return this.m === "include";
        },
        set: function(a) {
            this.m = a ? "include" : "same-origin";
        }
    });
    function Jc(a) {
        let b = "";
        ya(a, function(c, d) {
            b += d;
            b += ":";
            b += c;
            b += "\r\n";
        });
        return b;
    }
    function Kc(a, b, c) {
        a: {
            for(d in c){
                var d = !1;
                break a;
            }
            d = !0;
        }
        d || (c = Jc(c), typeof a === "string" ? c != null && L(c) : S(a, b, c));
    }
    function X(a) {
        C.call(this);
        this.headers = new Map;
        this.L = a || null;
        this.h = !1;
        this.g = null;
        this.D = "";
        this.o = 0;
        this.l = "";
        this.j = this.B = this.v = this.A = !1;
        this.m = null;
        this.F = "";
        this.H = !1;
    }
    t(X, C);
    var Lc = /^https?$/i, Mc = [
        "POST",
        "PUT"
    ];
    h = X.prototype;
    h.Fa = function(a) {
        this.H = a;
    };
    h.ea = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.D = a;
        this.l = "";
        this.o = 0;
        this.A = !1;
        this.h = !0;
        this.g = this.L ? this.L.g() : wb.g();
        this.g.onreadystatechange = ia(p(this.Ca, this));
        try {
            this.B = !0, this.g.open(b, String(a), !0), this.B = !1;
        } catch (f) {
            Nc(this, f);
            return;
        }
        a = c || "";
        c = new Map(this.headers);
        if (d) if (Object.getPrototypeOf(d) === Object.prototype) for(var e in d)c.set(e, d[e]);
        else if (typeof d.keys === "function" && typeof d.get === "function") for (const f of d.keys())c.set(f, d.get(f));
        else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find((f)=>"content-type" == f.toLowerCase());
        e = l.FormData && a instanceof l.FormData;
        !(Array.prototype.indexOf.call(Mc, b, void 0) >= 0) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        for (const [f, g] of c)this.g.setRequestHeader(f, g);
        this.F && (this.g.responseType = this.F);
        "withCredentials" in this.g && this.g.withCredentials !== this.H && (this.g.withCredentials = this.H);
        try {
            this.m && (clearTimeout(this.m), this.m = null), this.v = !0, this.g.send(a), this.v = !1;
        } catch (f) {
            Nc(this, f);
        }
    };
    function Nc(a, b) {
        a.h = !1;
        a.g && (a.j = !0, a.g.abort(), a.j = !1);
        a.l = b;
        a.o = 5;
        Oc(a);
        Pc(a);
    }
    function Oc(a) {
        a.A || (a.A = !0, D(a, "complete"), D(a, "error"));
    }
    h.abort = function(a) {
        this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.o = a || 7, D(this, "complete"), D(this, "abort"), Pc(this));
    };
    h.N = function() {
        this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Pc(this, !0));
        X.Z.N.call(this);
    };
    h.Ca = function() {
        this.u || (this.B || this.v || this.j ? Qc(this) : this.Xa());
    };
    h.Xa = function() {
        Qc(this);
    };
    function Qc(a) {
        if (a.h && typeof ea != "undefined") {
            if (a.v && P(a) == 4) setTimeout(a.Ca.bind(a), 0);
            else if (D(a, "readystatechange"), P(a) == 4) {
                a.h = !1;
                try {
                    const f = a.ca();
                    a: switch(f){
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var b = !0;
                            break a;
                        default:
                            b = !1;
                    }
                    var c;
                    if (!(c = b)) {
                        var d;
                        if (d = f === 0) {
                            let g = String(a.D).match(ic)[1] || null;
                            !g && l.self && l.self.location && (g = l.self.location.protocol.slice(0, -1));
                            d = !Lc.test(g ? g.toLowerCase() : "");
                        }
                        c = d;
                    }
                    if (c) D(a, "complete"), D(a, "success");
                    else {
                        a.o = 6;
                        try {
                            var e = P(a) > 2 ? a.g.statusText : "";
                        } catch (g) {
                            e = "";
                        }
                        a.l = e + " [" + a.ca() + "]";
                        Oc(a);
                    }
                } finally{
                    Pc(a);
                }
            }
        }
    }
    function Pc(a, b) {
        if (a.g) {
            a.m && (clearTimeout(a.m), a.m = null);
            const c = a.g;
            a.g = null;
            b || D(a, "ready");
            try {
                c.onreadystatechange = null;
            } catch (d) {}
        }
    }
    h.isActive = function() {
        return !!this.g;
    };
    function P(a) {
        return a.g ? a.g.readyState : 0;
    }
    h.ca = function() {
        try {
            return P(this) > 2 ? this.g.status : -1;
        } catch (a) {
            return -1;
        }
    };
    h.la = function() {
        try {
            return this.g ? this.g.responseText : "";
        } catch (a) {
            return "";
        }
    };
    h.La = function(a) {
        if (this.g) {
            var b = this.g.responseText;
            a && b.indexOf(a) == 0 && (b = b.substring(a.length));
            return cb(b);
        }
    };
    function Ib(a) {
        try {
            if (!a.g) return null;
            if ("response" in a.g) return a.g.response;
            switch(a.F){
                case "":
                case "text":
                    return a.g.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in a.g) return a.g.mozResponseArrayBuffer;
            }
            return null;
        } catch (b) {
            return null;
        }
    }
    function Rb(a) {
        const b = {};
        a = (a.g && P(a) >= 2 ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
        for(let d = 0; d < a.length; d++){
            if (y(a[d])) continue;
            var c = yb(a[d]);
            const e = c[0];
            c = c[1];
            if (typeof c !== "string") continue;
            c = c.trim();
            const f = b[e] || [];
            b[e] = f;
            f.push(c);
        }
        Aa(b, function(d) {
            return d.join(", ");
        });
    }
    h.ya = function() {
        return this.o;
    };
    h.Ha = function() {
        return typeof this.l === "string" ? this.l : String(this.l);
    };
    function Rc(a, b, c) {
        return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
    }
    function Sc(a) {
        this.za = 0;
        this.i = [];
        this.j = new pb;
        this.ba = this.na = this.J = this.W = this.g = this.wa = this.G = this.H = this.u = this.U = this.o = null;
        this.Ya = this.V = 0;
        this.Sa = Rc("failFast", !1, a);
        this.F = this.C = this.v = this.m = this.l = null;
        this.X = !0;
        this.xa = this.K = -1;
        this.Y = this.A = this.D = 0;
        this.Qa = Rc("baseRetryDelayMs", 5E3, a);
        this.Za = Rc("retryDelaySeedMs", 1E4, a);
        this.Ta = Rc("forwardChannelMaxRetries", 2, a);
        this.va = Rc("forwardChannelRequestTimeoutMs", 2E4, a);
        this.ma = a && a.xmlHttpFactory || void 0;
        this.Ua = a && a.Rb || void 0;
        this.Aa = a && a.useFetchStreams || !1;
        this.O = void 0;
        this.L = a && a.supportsCrossDomainXhr || !1;
        this.M = "";
        this.h = new ec(a && a.concurrentRequestLimit);
        this.Ba = new Dc;
        this.S = a && a.fastHandshake || !1;
        this.R = a && a.encodeInitMessageHeaders || !1;
        this.S && this.R && (this.R = !1);
        this.Ra = a && a.Pb || !1;
        a && a.ua && this.j.ua();
        a && a.forceLongPolling && (this.X = !1);
        this.aa = !this.S && this.X && a && a.detectBufferingProxy || !1;
        this.ia = void 0;
        a && a.longPollingTimeout && a.longPollingTimeout > 0 && (this.ia = a.longPollingTimeout);
        this.ta = void 0;
        this.T = 0;
        this.P = !1;
        this.ja = this.B = null;
    }
    h = Sc.prototype;
    h.ka = 8;
    h.I = 1;
    h.connect = function(a, b, c, d) {
        J(0);
        this.W = a;
        this.H = b || {};
        c && d !== void 0 && (this.H.OSID = c, this.H.OAID = d);
        this.F = this.X;
        this.J = Zb(this, null, this.W);
        bc(this);
    };
    function cc(a) {
        Tc(a);
        if (a.I == 3) {
            var b = a.V++, c = O(a.J);
            S(c, "SID", a.M);
            S(c, "RID", b);
            S(c, "TYPE", "terminate");
            Uc(a, c);
            b = new N(a, a.j, b);
            b.M = 2;
            b.A = Db(O(c));
            c = !1;
            if (l.navigator && l.navigator.sendBeacon) try {
                c = l.navigator.sendBeacon(b.A.toString(), "");
            } catch (d) {}
            !c && l.Image && ((new Image).src = b.A, c = !0);
            c || (b.g = Hb(b.j, null), b.g.ea(b.A));
            b.F = Date.now();
            Fb(b);
        }
        Vc(a);
    }
    function Vb(a) {
        a.g && (Pb(a), a.g.cancel(), a.g = null);
    }
    function Tc(a) {
        Vb(a);
        a.v && (l.clearTimeout(a.v), a.v = null);
        Ub(a);
        a.h.cancel();
        a.m && (typeof a.m === "number" && l.clearTimeout(a.m), a.m = null);
    }
    function bc(a) {
        if (!fc(a.h) && !a.m) {
            a.m = !0;
            var b = a.Ea;
            u || ta();
            v || (u(), v = !0);
            oa.add(b, a);
            a.D = 0;
        }
    }
    function Wc(a, b) {
        if (Xb(a.h) >= a.h.j - (a.m ? 1 : 0)) return !1;
        if (a.m) return a.i = b.G.concat(a.i), !0;
        if (a.I == 1 || a.I == 2 || a.D >= (a.Sa ? 0 : a.Ta)) return !1;
        a.m = ob(p(a.Ea, a, b), Xc(a, a.D));
        a.D++;
        return !0;
    }
    h.Ea = function(a) {
        if (this.m) if (this.m = null, this.I == 1) {
            if (!a) {
                this.V = Math.floor(Math.random() * 1E5);
                a = this.V++;
                const e = new N(this, this.j, a);
                let f = this.o;
                this.U && (f ? (f = Ba(f), Da(f, this.U)) : f = this.U);
                this.u !== null || this.R || (e.J = f, f = null);
                if (this.S) a: {
                    var b = 0;
                    for(var c = 0; c < this.i.length; c++){
                        b: {
                            var d = this.i[c];
                            if ("__data__" in d.map && (d = d.map.__data__, typeof d === "string")) {
                                d = d.length;
                                break b;
                            }
                            d = void 0;
                        }
                        if (d === void 0) break;
                        b += d;
                        if (b > 4096) {
                            b = c;
                            break a;
                        }
                        if (b === 4096 || c === this.i.length - 1) {
                            b = c + 1;
                            break a;
                        }
                    }
                    b = 1E3;
                }
                else b = 1E3;
                b = Yc(this, e, b);
                c = O(this.J);
                S(c, "RID", a);
                S(c, "CVER", 22);
                this.G && S(c, "X-HTTP-Session-Id", this.G);
                Uc(this, c);
                f && (this.R ? b = "headers=" + L(Jc(f)) + "&" + b : this.u && Kc(c, this.u, f));
                Yb(this.h, e);
                this.Ra && S(c, "TYPE", "init");
                this.S ? (S(c, "$req", b), S(c, "SID", "null"), e.U = !0, Cb(e, c, null)) : Cb(e, c, b);
                this.I = 2;
            }
        } else this.I == 3 && (a ? Zc(this, a) : this.i.length == 0 || fc(this.h) || Zc(this));
    };
    function Zc(a, b) {
        var c;
        b ? c = b.l : c = a.V++;
        const d = O(a.J);
        S(d, "SID", a.M);
        S(d, "RID", c);
        S(d, "AID", a.K);
        Uc(a, d);
        a.u && a.o && Kc(d, a.u, a.o);
        c = new N(a, a.j, c, a.D + 1);
        a.u === null && (c.J = a.o);
        b && (a.i = b.G.concat(a.i));
        b = Yc(a, c, 1E3);
        c.H = Math.round(a.va * .5) + Math.round(a.va * .5 * Math.random());
        Yb(a.h, c);
        Cb(c, d, b);
    }
    function Uc(a, b) {
        a.H && ya(a.H, function(c, d) {
            S(b, d, c);
        });
        a.l && ya({}, function(c, d) {
            S(b, d, c);
        });
    }
    function Yc(a, b, c) {
        c = Math.min(a.i.length, c);
        const d = a.l ? p(a.l.Ka, a.l, a) : null;
        a: {
            var e = a.i;
            let k = -1;
            for(;;){
                const q = [
                    "count=" + c
                ];
                k == -1 ? c > 0 ? (k = e[0].g, q.push("ofs=" + k)) : k = 0 : q.push("ofs=" + k);
                let m = !0;
                for(let r = 0; r < c; r++){
                    var f = e[r].g;
                    const A = e[r].map;
                    f -= k;
                    if (f < 0) k = Math.max(0, e[r].g - 100), m = !1;
                    else try {
                        f = "req" + f + "_" || "";
                        try {
                            var g = A instanceof Map ? A : Object.entries(A);
                            for (const [M, F] of g){
                                let G = F;
                                n(F) && (G = ab(F));
                                q.push(f + M + "=" + encodeURIComponent(G));
                            }
                        } catch (M) {
                            throw q.push(f + "type=" + encodeURIComponent("_badmap")), M;
                        }
                    } catch (M) {
                        d && d(A);
                    }
                }
                if (m) {
                    g = q.join("&");
                    break a;
                }
            }
            g = void 0;
        }
        a = a.i.splice(0, c);
        b.G = a;
        return g;
    }
    function ac(a) {
        if (!a.g && !a.v) {
            a.Y = 1;
            var b = a.Da;
            u || ta();
            v || (u(), v = !0);
            oa.add(b, a);
            a.A = 0;
        }
    }
    function Wb(a) {
        if (a.g || a.v || a.A >= 3) return !1;
        a.Y++;
        a.v = ob(p(a.Da, a), Xc(a, a.A));
        a.A++;
        return !0;
    }
    h.Da = function() {
        this.v = null;
        $c(this);
        if (this.aa && !(this.P || this.g == null || this.T <= 0)) {
            var a = 4 * this.T;
            this.j.info("BP detection timer enabled: " + a);
            this.B = ob(p(this.Wa, this), a);
        }
    };
    h.Wa = function() {
        this.B && (this.B = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = !1, this.P = !0, J(10), Vb(this), $c(this));
    };
    function Pb(a) {
        a.B != null && (l.clearTimeout(a.B), a.B = null);
    }
    function $c(a) {
        a.g = new N(a, a.j, "rpc", a.Y);
        a.u === null && (a.g.J = a.o);
        a.g.P = 0;
        var b = O(a.na);
        S(b, "RID", "rpc");
        S(b, "SID", a.M);
        S(b, "AID", a.K);
        S(b, "CI", a.F ? "0" : "1");
        !a.F && a.ia && S(b, "TO", a.ia);
        S(b, "TYPE", "xmlhttp");
        Uc(a, b);
        a.u && a.o && Kc(b, a.u, a.o);
        a.O && (a.g.H = a.O);
        var c = a.g;
        a = a.ba;
        c.M = 1;
        c.A = Db(O(b));
        c.u = null;
        c.R = !0;
        Eb(c, a);
    }
    h.Va = function() {
        this.C != null && (this.C = null, Vb(this), Wb(this), J(19));
    };
    function Ub(a) {
        a.C != null && (l.clearTimeout(a.C), a.C = null);
    }
    function Qb(a, b) {
        var c = null;
        if (a.g == b) {
            Ub(a);
            Pb(a);
            a.g = null;
            var d = 2;
        } else if (Tb(a.h, b)) c = b.G, $b(a.h, b), d = 1;
        else return;
        if (a.I != 0) {
            if (b.o) if (d == 1) {
                c = b.u ? b.u.length : 0;
                b = Date.now() - b.F;
                var e = a.D;
                d = jb();
                D(d, new nb(d, c));
                bc(a);
            } else ac(a);
            else if (e = b.m, e == 3 || e == 0 && b.X > 0 || !(d == 1 && Wc(a, b) || d == 2 && Wb(a))) switch(c && c.length > 0 && (b = a.h, b.i = b.i.concat(c)), e){
                case 1:
                    R(a, 5);
                    break;
                case 4:
                    R(a, 10);
                    break;
                case 3:
                    R(a, 6);
                    break;
                default:
                    R(a, 2);
            }
        }
    }
    function Xc(a, b) {
        let c = a.Qa + Math.floor(Math.random() * a.Za);
        a.isActive() || (c *= 2);
        return c * b;
    }
    function R(a, b) {
        a.j.info("Error code " + b);
        if (b == 2) {
            var c = p(a.bb, a), d = a.Ua;
            const e = !d;
            d = new T(d || "//www.google.com/images/cleardot.gif");
            l.location && l.location.protocol == "http" || kc(d, "https");
            Db(d);
            e ? Bc(d.toString(), c) : Cc(d.toString(), c);
        } else J(2);
        a.I = 0;
        a.l && a.l.pa(b);
        Vc(a);
        Tc(a);
    }
    h.bb = function(a) {
        a ? (this.j.info("Successfully pinged google.com"), J(2)) : (this.j.info("Failed to ping google.com"), J(1));
    };
    function Vc(a) {
        a.I = 0;
        a.ja = [];
        if (a.l) {
            const b = hc(a.h);
            if (b.length != 0 || a.i.length != 0) ka(a.ja, b), ka(a.ja, a.i), a.h.i.length = 0, ja(a.i), a.i.length = 0;
            a.l.oa();
        }
    }
    function Zb(a, b, c) {
        var d = c instanceof T ? O(c) : new T(c);
        if (d.g != "") b && (d.g = b + "." + d.g), lc(d, d.u);
        else {
            var e = l.location;
            d = e.protocol;
            b = b ? b + "." + e.hostname : e.hostname;
            e = +e.port;
            const f = new T(null);
            d && kc(f, d);
            b && (f.g = b);
            e && lc(f, e);
            c && (f.h = c);
            d = f;
        }
        c = a.G;
        b = a.wa;
        c && b && S(d, c, b);
        S(d, "VER", a.ka);
        Uc(a, d);
        return d;
    }
    function Hb(a, b, c) {
        if (b && !a.L) throw Error("Can't create secondary domain capable XhrIo object.");
        b = a.Aa && !a.ma ? new X(new Ec({
            ab: c
        })) : new X(a.ma);
        b.Fa(a.L);
        return b;
    }
    h.isActive = function() {
        return !!this.l && this.l.isActive(this);
    };
    function ad() {}
    h = ad.prototype;
    h.ra = function() {};
    h.qa = function() {};
    h.pa = function() {};
    h.oa = function() {};
    h.isActive = function() {
        return !0;
    };
    h.Ka = function() {};
    function bd() {}
    bd.prototype.g = function(a, b) {
        return new Y(a, b);
    };
    function Y(a, b) {
        C.call(this);
        this.g = new Sc(b);
        this.l = a;
        this.h = b && b.messageUrlParams || null;
        a = b && b.messageHeaders || null;
        b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
            "X-Client-Protocol": "webchannel"
        });
        this.g.o = a;
        a = b && b.initMessageHeaders || null;
        b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
            "X-WebChannel-Content-Type": b.messageContentType
        });
        b && b.sa && (a ? a["X-WebChannel-Client-Profile"] = b.sa : a = {
            "X-WebChannel-Client-Profile": b.sa
        });
        this.g.U = a;
        (a = b && b.Qb) && !y(a) && (this.g.u = a);
        this.A = b && b.supportsCrossDomainXhr || !1;
        this.v = b && b.sendRawJson || !1;
        (b = b && b.httpSessionIdParam) && !y(b) && (this.g.G = b, a = this.h, a !== null && b in a && (a = this.h, b in a && delete a[b]));
        this.j = new Z(this);
    }
    t(Y, C);
    Y.prototype.m = function() {
        this.g.l = this.j;
        this.A && (this.g.L = !0);
        this.g.connect(this.l, this.h || void 0);
    };
    Y.prototype.close = function() {
        cc(this.g);
    };
    Y.prototype.o = function(a) {
        var b = this.g;
        if (typeof a === "string") {
            var c = {};
            c.__data__ = a;
            a = c;
        } else this.v && (c = {}, c.__data__ = ab(a), a = c);
        b.i.push(new dc(b.Ya++, a));
        b.I == 3 && bc(b);
    };
    Y.prototype.N = function() {
        this.g.l = null;
        delete this.j;
        cc(this.g);
        delete this.g;
        Y.Z.N.call(this);
    };
    function cd(a) {
        gb.call(this);
        a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
        var b = a.__sm__;
        if (b) {
            a: {
                for(const c in b){
                    a = c;
                    break a;
                }
                a = void 0;
            }
            if (this.i = a) a = this.i, b = b !== null && a in b ? b[a] : void 0;
            this.data = b;
        } else this.data = a;
    }
    t(cd, gb);
    function dd() {
        hb.call(this);
        this.status = 1;
    }
    t(dd, hb);
    function Z(a) {
        this.g = a;
    }
    t(Z, ad);
    Z.prototype.ra = function() {
        D(this.g, "a");
    };
    Z.prototype.qa = function(a) {
        D(this.g, new cd(a));
    };
    Z.prototype.pa = function(a) {
        D(this.g, new dd());
    };
    Z.prototype.oa = function() {
        D(this.g, "b");
    };
    bd.prototype.createWebChannel = bd.prototype.g;
    Y.prototype.send = Y.prototype.o;
    Y.prototype.open = Y.prototype.m;
    Y.prototype.close = Y.prototype.close;
    createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
        return new bd;
    };
    getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
        return jb();
    };
    Event = webchannel_blob_es2018.Event = I;
    Stat = webchannel_blob_es2018.Stat = {
        jb: 0,
        mb: 1,
        nb: 2,
        Hb: 3,
        Mb: 4,
        Jb: 5,
        Kb: 6,
        Ib: 7,
        Gb: 8,
        Lb: 9,
        PROXY: 10,
        NOPROXY: 11,
        Eb: 12,
        Ab: 13,
        Bb: 14,
        zb: 15,
        Cb: 16,
        Db: 17,
        fb: 18,
        eb: 19,
        gb: 20
    };
    ub.NO_ERROR = 0;
    ub.TIMEOUT = 8;
    ub.HTTP_ERROR = 6;
    ErrorCode = webchannel_blob_es2018.ErrorCode = ub;
    vb.COMPLETE = "complete";
    EventType = webchannel_blob_es2018.EventType = vb;
    fb.EventType = H;
    H.OPEN = "a";
    H.CLOSE = "b";
    H.ERROR = "c";
    H.MESSAGE = "d";
    C.prototype.listen = C.prototype.J;
    WebChannel = webchannel_blob_es2018.WebChannel = fb;
    FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Ec;
    X.prototype.listenOnce = X.prototype.K;
    X.prototype.getLastError = X.prototype.Ha;
    X.prototype.getLastErrorCode = X.prototype.ya;
    X.prototype.getStatus = X.prototype.ca;
    X.prototype.getResponseJson = X.prototype.La;
    X.prototype.getResponseText = X.prototype.la;
    X.prototype.send = X.prototype.ea;
    X.prototype.setWithCredentials = X.prototype.Fa;
    XhrIo = webchannel_blob_es2018.XhrIo = X;
}).apply(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
;
 //# sourceMappingURL=webchannel_blob_es2018.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : "TURBOPACK unreachable";
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else //TURBOPACK unreachable
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMON_MIME_TYPES",
    ()=>COMMON_MIME_TYPES,
    "toFileWithPath",
    ()=>toFileWithPath
]);
const COMMON_MIME_TYPES = new Map([
    // https://github.com/guzzle/psr7/blob/2d9260799e713f1c475d3c5fdc3d6561ff7441b2/src/MimeType.php
    [
        '1km',
        'application/vnd.1000minds.decision-model+xml'
    ],
    [
        '3dml',
        'text/vnd.in3d.3dml'
    ],
    [
        '3ds',
        'image/x-3ds'
    ],
    [
        '3g2',
        'video/3gpp2'
    ],
    [
        '3gp',
        'video/3gp'
    ],
    [
        '3gpp',
        'video/3gpp'
    ],
    [
        '3mf',
        'model/3mf'
    ],
    [
        '7z',
        'application/x-7z-compressed'
    ],
    [
        '7zip',
        'application/x-7z-compressed'
    ],
    [
        '123',
        'application/vnd.lotus-1-2-3'
    ],
    [
        'aab',
        'application/x-authorware-bin'
    ],
    [
        'aac',
        'audio/x-acc'
    ],
    [
        'aam',
        'application/x-authorware-map'
    ],
    [
        'aas',
        'application/x-authorware-seg'
    ],
    [
        'abw',
        'application/x-abiword'
    ],
    [
        'ac',
        'application/vnd.nokia.n-gage.ac+xml'
    ],
    [
        'ac3',
        'audio/ac3'
    ],
    [
        'acc',
        'application/vnd.americandynamics.acc'
    ],
    [
        'ace',
        'application/x-ace-compressed'
    ],
    [
        'acu',
        'application/vnd.acucobol'
    ],
    [
        'acutc',
        'application/vnd.acucorp'
    ],
    [
        'adp',
        'audio/adpcm'
    ],
    [
        'aep',
        'application/vnd.audiograph'
    ],
    [
        'afm',
        'application/x-font-type1'
    ],
    [
        'afp',
        'application/vnd.ibm.modcap'
    ],
    [
        'ahead',
        'application/vnd.ahead.space'
    ],
    [
        'ai',
        'application/pdf'
    ],
    [
        'aif',
        'audio/x-aiff'
    ],
    [
        'aifc',
        'audio/x-aiff'
    ],
    [
        'aiff',
        'audio/x-aiff'
    ],
    [
        'air',
        'application/vnd.adobe.air-application-installer-package+zip'
    ],
    [
        'ait',
        'application/vnd.dvb.ait'
    ],
    [
        'ami',
        'application/vnd.amiga.ami'
    ],
    [
        'amr',
        'audio/amr'
    ],
    [
        'apk',
        'application/vnd.android.package-archive'
    ],
    [
        'apng',
        'image/apng'
    ],
    [
        'appcache',
        'text/cache-manifest'
    ],
    [
        'application',
        'application/x-ms-application'
    ],
    [
        'apr',
        'application/vnd.lotus-approach'
    ],
    [
        'arc',
        'application/x-freearc'
    ],
    [
        'arj',
        'application/x-arj'
    ],
    [
        'asc',
        'application/pgp-signature'
    ],
    [
        'asf',
        'video/x-ms-asf'
    ],
    [
        'asm',
        'text/x-asm'
    ],
    [
        'aso',
        'application/vnd.accpac.simply.aso'
    ],
    [
        'asx',
        'video/x-ms-asf'
    ],
    [
        'atc',
        'application/vnd.acucorp'
    ],
    [
        'atom',
        'application/atom+xml'
    ],
    [
        'atomcat',
        'application/atomcat+xml'
    ],
    [
        'atomdeleted',
        'application/atomdeleted+xml'
    ],
    [
        'atomsvc',
        'application/atomsvc+xml'
    ],
    [
        'atx',
        'application/vnd.antix.game-component'
    ],
    [
        'au',
        'audio/x-au'
    ],
    [
        'avi',
        'video/x-msvideo'
    ],
    [
        'avif',
        'image/avif'
    ],
    [
        'aw',
        'application/applixware'
    ],
    [
        'azf',
        'application/vnd.airzip.filesecure.azf'
    ],
    [
        'azs',
        'application/vnd.airzip.filesecure.azs'
    ],
    [
        'azv',
        'image/vnd.airzip.accelerator.azv'
    ],
    [
        'azw',
        'application/vnd.amazon.ebook'
    ],
    [
        'b16',
        'image/vnd.pco.b16'
    ],
    [
        'bat',
        'application/x-msdownload'
    ],
    [
        'bcpio',
        'application/x-bcpio'
    ],
    [
        'bdf',
        'application/x-font-bdf'
    ],
    [
        'bdm',
        'application/vnd.syncml.dm+wbxml'
    ],
    [
        'bdoc',
        'application/x-bdoc'
    ],
    [
        'bed',
        'application/vnd.realvnc.bed'
    ],
    [
        'bh2',
        'application/vnd.fujitsu.oasysprs'
    ],
    [
        'bin',
        'application/octet-stream'
    ],
    [
        'blb',
        'application/x-blorb'
    ],
    [
        'blorb',
        'application/x-blorb'
    ],
    [
        'bmi',
        'application/vnd.bmi'
    ],
    [
        'bmml',
        'application/vnd.balsamiq.bmml+xml'
    ],
    [
        'bmp',
        'image/bmp'
    ],
    [
        'book',
        'application/vnd.framemaker'
    ],
    [
        'box',
        'application/vnd.previewsystems.box'
    ],
    [
        'boz',
        'application/x-bzip2'
    ],
    [
        'bpk',
        'application/octet-stream'
    ],
    [
        'bpmn',
        'application/octet-stream'
    ],
    [
        'bsp',
        'model/vnd.valve.source.compiled-map'
    ],
    [
        'btif',
        'image/prs.btif'
    ],
    [
        'buffer',
        'application/octet-stream'
    ],
    [
        'bz',
        'application/x-bzip'
    ],
    [
        'bz2',
        'application/x-bzip2'
    ],
    [
        'c',
        'text/x-c'
    ],
    [
        'c4d',
        'application/vnd.clonk.c4group'
    ],
    [
        'c4f',
        'application/vnd.clonk.c4group'
    ],
    [
        'c4g',
        'application/vnd.clonk.c4group'
    ],
    [
        'c4p',
        'application/vnd.clonk.c4group'
    ],
    [
        'c4u',
        'application/vnd.clonk.c4group'
    ],
    [
        'c11amc',
        'application/vnd.cluetrust.cartomobile-config'
    ],
    [
        'c11amz',
        'application/vnd.cluetrust.cartomobile-config-pkg'
    ],
    [
        'cab',
        'application/vnd.ms-cab-compressed'
    ],
    [
        'caf',
        'audio/x-caf'
    ],
    [
        'cap',
        'application/vnd.tcpdump.pcap'
    ],
    [
        'car',
        'application/vnd.curl.car'
    ],
    [
        'cat',
        'application/vnd.ms-pki.seccat'
    ],
    [
        'cb7',
        'application/x-cbr'
    ],
    [
        'cba',
        'application/x-cbr'
    ],
    [
        'cbr',
        'application/x-cbr'
    ],
    [
        'cbt',
        'application/x-cbr'
    ],
    [
        'cbz',
        'application/x-cbr'
    ],
    [
        'cc',
        'text/x-c'
    ],
    [
        'cco',
        'application/x-cocoa'
    ],
    [
        'cct',
        'application/x-director'
    ],
    [
        'ccxml',
        'application/ccxml+xml'
    ],
    [
        'cdbcmsg',
        'application/vnd.contact.cmsg'
    ],
    [
        'cda',
        'application/x-cdf'
    ],
    [
        'cdf',
        'application/x-netcdf'
    ],
    [
        'cdfx',
        'application/cdfx+xml'
    ],
    [
        'cdkey',
        'application/vnd.mediastation.cdkey'
    ],
    [
        'cdmia',
        'application/cdmi-capability'
    ],
    [
        'cdmic',
        'application/cdmi-container'
    ],
    [
        'cdmid',
        'application/cdmi-domain'
    ],
    [
        'cdmio',
        'application/cdmi-object'
    ],
    [
        'cdmiq',
        'application/cdmi-queue'
    ],
    [
        'cdr',
        'application/cdr'
    ],
    [
        'cdx',
        'chemical/x-cdx'
    ],
    [
        'cdxml',
        'application/vnd.chemdraw+xml'
    ],
    [
        'cdy',
        'application/vnd.cinderella'
    ],
    [
        'cer',
        'application/pkix-cert'
    ],
    [
        'cfs',
        'application/x-cfs-compressed'
    ],
    [
        'cgm',
        'image/cgm'
    ],
    [
        'chat',
        'application/x-chat'
    ],
    [
        'chm',
        'application/vnd.ms-htmlhelp'
    ],
    [
        'chrt',
        'application/vnd.kde.kchart'
    ],
    [
        'cif',
        'chemical/x-cif'
    ],
    [
        'cii',
        'application/vnd.anser-web-certificate-issue-initiation'
    ],
    [
        'cil',
        'application/vnd.ms-artgalry'
    ],
    [
        'cjs',
        'application/node'
    ],
    [
        'cla',
        'application/vnd.claymore'
    ],
    [
        'class',
        'application/octet-stream'
    ],
    [
        'clkk',
        'application/vnd.crick.clicker.keyboard'
    ],
    [
        'clkp',
        'application/vnd.crick.clicker.palette'
    ],
    [
        'clkt',
        'application/vnd.crick.clicker.template'
    ],
    [
        'clkw',
        'application/vnd.crick.clicker.wordbank'
    ],
    [
        'clkx',
        'application/vnd.crick.clicker'
    ],
    [
        'clp',
        'application/x-msclip'
    ],
    [
        'cmc',
        'application/vnd.cosmocaller'
    ],
    [
        'cmdf',
        'chemical/x-cmdf'
    ],
    [
        'cml',
        'chemical/x-cml'
    ],
    [
        'cmp',
        'application/vnd.yellowriver-custom-menu'
    ],
    [
        'cmx',
        'image/x-cmx'
    ],
    [
        'cod',
        'application/vnd.rim.cod'
    ],
    [
        'coffee',
        'text/coffeescript'
    ],
    [
        'com',
        'application/x-msdownload'
    ],
    [
        'conf',
        'text/plain'
    ],
    [
        'cpio',
        'application/x-cpio'
    ],
    [
        'cpp',
        'text/x-c'
    ],
    [
        'cpt',
        'application/mac-compactpro'
    ],
    [
        'crd',
        'application/x-mscardfile'
    ],
    [
        'crl',
        'application/pkix-crl'
    ],
    [
        'crt',
        'application/x-x509-ca-cert'
    ],
    [
        'crx',
        'application/x-chrome-extension'
    ],
    [
        'cryptonote',
        'application/vnd.rig.cryptonote'
    ],
    [
        'csh',
        'application/x-csh'
    ],
    [
        'csl',
        'application/vnd.citationstyles.style+xml'
    ],
    [
        'csml',
        'chemical/x-csml'
    ],
    [
        'csp',
        'application/vnd.commonspace'
    ],
    [
        'csr',
        'application/octet-stream'
    ],
    [
        'css',
        'text/css'
    ],
    [
        'cst',
        'application/x-director'
    ],
    [
        'csv',
        'text/csv'
    ],
    [
        'cu',
        'application/cu-seeme'
    ],
    [
        'curl',
        'text/vnd.curl'
    ],
    [
        'cww',
        'application/prs.cww'
    ],
    [
        'cxt',
        'application/x-director'
    ],
    [
        'cxx',
        'text/x-c'
    ],
    [
        'dae',
        'model/vnd.collada+xml'
    ],
    [
        'daf',
        'application/vnd.mobius.daf'
    ],
    [
        'dart',
        'application/vnd.dart'
    ],
    [
        'dataless',
        'application/vnd.fdsn.seed'
    ],
    [
        'davmount',
        'application/davmount+xml'
    ],
    [
        'dbf',
        'application/vnd.dbf'
    ],
    [
        'dbk',
        'application/docbook+xml'
    ],
    [
        'dcr',
        'application/x-director'
    ],
    [
        'dcurl',
        'text/vnd.curl.dcurl'
    ],
    [
        'dd2',
        'application/vnd.oma.dd2+xml'
    ],
    [
        'ddd',
        'application/vnd.fujixerox.ddd'
    ],
    [
        'ddf',
        'application/vnd.syncml.dmddf+xml'
    ],
    [
        'dds',
        'image/vnd.ms-dds'
    ],
    [
        'deb',
        'application/x-debian-package'
    ],
    [
        'def',
        'text/plain'
    ],
    [
        'deploy',
        'application/octet-stream'
    ],
    [
        'der',
        'application/x-x509-ca-cert'
    ],
    [
        'dfac',
        'application/vnd.dreamfactory'
    ],
    [
        'dgc',
        'application/x-dgc-compressed'
    ],
    [
        'dic',
        'text/x-c'
    ],
    [
        'dir',
        'application/x-director'
    ],
    [
        'dis',
        'application/vnd.mobius.dis'
    ],
    [
        'disposition-notification',
        'message/disposition-notification'
    ],
    [
        'dist',
        'application/octet-stream'
    ],
    [
        'distz',
        'application/octet-stream'
    ],
    [
        'djv',
        'image/vnd.djvu'
    ],
    [
        'djvu',
        'image/vnd.djvu'
    ],
    [
        'dll',
        'application/octet-stream'
    ],
    [
        'dmg',
        'application/x-apple-diskimage'
    ],
    [
        'dmn',
        'application/octet-stream'
    ],
    [
        'dmp',
        'application/vnd.tcpdump.pcap'
    ],
    [
        'dms',
        'application/octet-stream'
    ],
    [
        'dna',
        'application/vnd.dna'
    ],
    [
        'doc',
        'application/msword'
    ],
    [
        'docm',
        'application/vnd.ms-word.template.macroEnabled.12'
    ],
    [
        'docx',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ],
    [
        'dot',
        'application/msword'
    ],
    [
        'dotm',
        'application/vnd.ms-word.template.macroEnabled.12'
    ],
    [
        'dotx',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.template'
    ],
    [
        'dp',
        'application/vnd.osgi.dp'
    ],
    [
        'dpg',
        'application/vnd.dpgraph'
    ],
    [
        'dra',
        'audio/vnd.dra'
    ],
    [
        'drle',
        'image/dicom-rle'
    ],
    [
        'dsc',
        'text/prs.lines.tag'
    ],
    [
        'dssc',
        'application/dssc+der'
    ],
    [
        'dtb',
        'application/x-dtbook+xml'
    ],
    [
        'dtd',
        'application/xml-dtd'
    ],
    [
        'dts',
        'audio/vnd.dts'
    ],
    [
        'dtshd',
        'audio/vnd.dts.hd'
    ],
    [
        'dump',
        'application/octet-stream'
    ],
    [
        'dvb',
        'video/vnd.dvb.file'
    ],
    [
        'dvi',
        'application/x-dvi'
    ],
    [
        'dwd',
        'application/atsc-dwd+xml'
    ],
    [
        'dwf',
        'model/vnd.dwf'
    ],
    [
        'dwg',
        'image/vnd.dwg'
    ],
    [
        'dxf',
        'image/vnd.dxf'
    ],
    [
        'dxp',
        'application/vnd.spotfire.dxp'
    ],
    [
        'dxr',
        'application/x-director'
    ],
    [
        'ear',
        'application/java-archive'
    ],
    [
        'ecelp4800',
        'audio/vnd.nuera.ecelp4800'
    ],
    [
        'ecelp7470',
        'audio/vnd.nuera.ecelp7470'
    ],
    [
        'ecelp9600',
        'audio/vnd.nuera.ecelp9600'
    ],
    [
        'ecma',
        'application/ecmascript'
    ],
    [
        'edm',
        'application/vnd.novadigm.edm'
    ],
    [
        'edx',
        'application/vnd.novadigm.edx'
    ],
    [
        'efif',
        'application/vnd.picsel'
    ],
    [
        'ei6',
        'application/vnd.pg.osasli'
    ],
    [
        'elc',
        'application/octet-stream'
    ],
    [
        'emf',
        'image/emf'
    ],
    [
        'eml',
        'message/rfc822'
    ],
    [
        'emma',
        'application/emma+xml'
    ],
    [
        'emotionml',
        'application/emotionml+xml'
    ],
    [
        'emz',
        'application/x-msmetafile'
    ],
    [
        'eol',
        'audio/vnd.digital-winds'
    ],
    [
        'eot',
        'application/vnd.ms-fontobject'
    ],
    [
        'eps',
        'application/postscript'
    ],
    [
        'epub',
        'application/epub+zip'
    ],
    [
        'es',
        'application/ecmascript'
    ],
    [
        'es3',
        'application/vnd.eszigno3+xml'
    ],
    [
        'esa',
        'application/vnd.osgi.subsystem'
    ],
    [
        'esf',
        'application/vnd.epson.esf'
    ],
    [
        'et3',
        'application/vnd.eszigno3+xml'
    ],
    [
        'etx',
        'text/x-setext'
    ],
    [
        'eva',
        'application/x-eva'
    ],
    [
        'evy',
        'application/x-envoy'
    ],
    [
        'exe',
        'application/octet-stream'
    ],
    [
        'exi',
        'application/exi'
    ],
    [
        'exp',
        'application/express'
    ],
    [
        'exr',
        'image/aces'
    ],
    [
        'ext',
        'application/vnd.novadigm.ext'
    ],
    [
        'ez',
        'application/andrew-inset'
    ],
    [
        'ez2',
        'application/vnd.ezpix-album'
    ],
    [
        'ez3',
        'application/vnd.ezpix-package'
    ],
    [
        'f',
        'text/x-fortran'
    ],
    [
        'f4v',
        'video/mp4'
    ],
    [
        'f77',
        'text/x-fortran'
    ],
    [
        'f90',
        'text/x-fortran'
    ],
    [
        'fbs',
        'image/vnd.fastbidsheet'
    ],
    [
        'fcdt',
        'application/vnd.adobe.formscentral.fcdt'
    ],
    [
        'fcs',
        'application/vnd.isac.fcs'
    ],
    [
        'fdf',
        'application/vnd.fdf'
    ],
    [
        'fdt',
        'application/fdt+xml'
    ],
    [
        'fe_launch',
        'application/vnd.denovo.fcselayout-link'
    ],
    [
        'fg5',
        'application/vnd.fujitsu.oasysgp'
    ],
    [
        'fgd',
        'application/x-director'
    ],
    [
        'fh',
        'image/x-freehand'
    ],
    [
        'fh4',
        'image/x-freehand'
    ],
    [
        'fh5',
        'image/x-freehand'
    ],
    [
        'fh7',
        'image/x-freehand'
    ],
    [
        'fhc',
        'image/x-freehand'
    ],
    [
        'fig',
        'application/x-xfig'
    ],
    [
        'fits',
        'image/fits'
    ],
    [
        'flac',
        'audio/x-flac'
    ],
    [
        'fli',
        'video/x-fli'
    ],
    [
        'flo',
        'application/vnd.micrografx.flo'
    ],
    [
        'flv',
        'video/x-flv'
    ],
    [
        'flw',
        'application/vnd.kde.kivio'
    ],
    [
        'flx',
        'text/vnd.fmi.flexstor'
    ],
    [
        'fly',
        'text/vnd.fly'
    ],
    [
        'fm',
        'application/vnd.framemaker'
    ],
    [
        'fnc',
        'application/vnd.frogans.fnc'
    ],
    [
        'fo',
        'application/vnd.software602.filler.form+xml'
    ],
    [
        'for',
        'text/x-fortran'
    ],
    [
        'fpx',
        'image/vnd.fpx'
    ],
    [
        'frame',
        'application/vnd.framemaker'
    ],
    [
        'fsc',
        'application/vnd.fsc.weblaunch'
    ],
    [
        'fst',
        'image/vnd.fst'
    ],
    [
        'ftc',
        'application/vnd.fluxtime.clip'
    ],
    [
        'fti',
        'application/vnd.anser-web-funds-transfer-initiation'
    ],
    [
        'fvt',
        'video/vnd.fvt'
    ],
    [
        'fxp',
        'application/vnd.adobe.fxp'
    ],
    [
        'fxpl',
        'application/vnd.adobe.fxp'
    ],
    [
        'fzs',
        'application/vnd.fuzzysheet'
    ],
    [
        'g2w',
        'application/vnd.geoplan'
    ],
    [
        'g3',
        'image/g3fax'
    ],
    [
        'g3w',
        'application/vnd.geospace'
    ],
    [
        'gac',
        'application/vnd.groove-account'
    ],
    [
        'gam',
        'application/x-tads'
    ],
    [
        'gbr',
        'application/rpki-ghostbusters'
    ],
    [
        'gca',
        'application/x-gca-compressed'
    ],
    [
        'gdl',
        'model/vnd.gdl'
    ],
    [
        'gdoc',
        'application/vnd.google-apps.document'
    ],
    [
        'geo',
        'application/vnd.dynageo'
    ],
    [
        'geojson',
        'application/geo+json'
    ],
    [
        'gex',
        'application/vnd.geometry-explorer'
    ],
    [
        'ggb',
        'application/vnd.geogebra.file'
    ],
    [
        'ggt',
        'application/vnd.geogebra.tool'
    ],
    [
        'ghf',
        'application/vnd.groove-help'
    ],
    [
        'gif',
        'image/gif'
    ],
    [
        'gim',
        'application/vnd.groove-identity-message'
    ],
    [
        'glb',
        'model/gltf-binary'
    ],
    [
        'gltf',
        'model/gltf+json'
    ],
    [
        'gml',
        'application/gml+xml'
    ],
    [
        'gmx',
        'application/vnd.gmx'
    ],
    [
        'gnumeric',
        'application/x-gnumeric'
    ],
    [
        'gpg',
        'application/gpg-keys'
    ],
    [
        'gph',
        'application/vnd.flographit'
    ],
    [
        'gpx',
        'application/gpx+xml'
    ],
    [
        'gqf',
        'application/vnd.grafeq'
    ],
    [
        'gqs',
        'application/vnd.grafeq'
    ],
    [
        'gram',
        'application/srgs'
    ],
    [
        'gramps',
        'application/x-gramps-xml'
    ],
    [
        'gre',
        'application/vnd.geometry-explorer'
    ],
    [
        'grv',
        'application/vnd.groove-injector'
    ],
    [
        'grxml',
        'application/srgs+xml'
    ],
    [
        'gsf',
        'application/x-font-ghostscript'
    ],
    [
        'gsheet',
        'application/vnd.google-apps.spreadsheet'
    ],
    [
        'gslides',
        'application/vnd.google-apps.presentation'
    ],
    [
        'gtar',
        'application/x-gtar'
    ],
    [
        'gtm',
        'application/vnd.groove-tool-message'
    ],
    [
        'gtw',
        'model/vnd.gtw'
    ],
    [
        'gv',
        'text/vnd.graphviz'
    ],
    [
        'gxf',
        'application/gxf'
    ],
    [
        'gxt',
        'application/vnd.geonext'
    ],
    [
        'gz',
        'application/gzip'
    ],
    [
        'gzip',
        'application/gzip'
    ],
    [
        'h',
        'text/x-c'
    ],
    [
        'h261',
        'video/h261'
    ],
    [
        'h263',
        'video/h263'
    ],
    [
        'h264',
        'video/h264'
    ],
    [
        'hal',
        'application/vnd.hal+xml'
    ],
    [
        'hbci',
        'application/vnd.hbci'
    ],
    [
        'hbs',
        'text/x-handlebars-template'
    ],
    [
        'hdd',
        'application/x-virtualbox-hdd'
    ],
    [
        'hdf',
        'application/x-hdf'
    ],
    [
        'heic',
        'image/heic'
    ],
    [
        'heics',
        'image/heic-sequence'
    ],
    [
        'heif',
        'image/heif'
    ],
    [
        'heifs',
        'image/heif-sequence'
    ],
    [
        'hej2',
        'image/hej2k'
    ],
    [
        'held',
        'application/atsc-held+xml'
    ],
    [
        'hh',
        'text/x-c'
    ],
    [
        'hjson',
        'application/hjson'
    ],
    [
        'hlp',
        'application/winhlp'
    ],
    [
        'hpgl',
        'application/vnd.hp-hpgl'
    ],
    [
        'hpid',
        'application/vnd.hp-hpid'
    ],
    [
        'hps',
        'application/vnd.hp-hps'
    ],
    [
        'hqx',
        'application/mac-binhex40'
    ],
    [
        'hsj2',
        'image/hsj2'
    ],
    [
        'htc',
        'text/x-component'
    ],
    [
        'htke',
        'application/vnd.kenameaapp'
    ],
    [
        'htm',
        'text/html'
    ],
    [
        'html',
        'text/html'
    ],
    [
        'hvd',
        'application/vnd.yamaha.hv-dic'
    ],
    [
        'hvp',
        'application/vnd.yamaha.hv-voice'
    ],
    [
        'hvs',
        'application/vnd.yamaha.hv-script'
    ],
    [
        'i2g',
        'application/vnd.intergeo'
    ],
    [
        'icc',
        'application/vnd.iccprofile'
    ],
    [
        'ice',
        'x-conference/x-cooltalk'
    ],
    [
        'icm',
        'application/vnd.iccprofile'
    ],
    [
        'ico',
        'image/x-icon'
    ],
    [
        'ics',
        'text/calendar'
    ],
    [
        'ief',
        'image/ief'
    ],
    [
        'ifb',
        'text/calendar'
    ],
    [
        'ifm',
        'application/vnd.shana.informed.formdata'
    ],
    [
        'iges',
        'model/iges'
    ],
    [
        'igl',
        'application/vnd.igloader'
    ],
    [
        'igm',
        'application/vnd.insors.igm'
    ],
    [
        'igs',
        'model/iges'
    ],
    [
        'igx',
        'application/vnd.micrografx.igx'
    ],
    [
        'iif',
        'application/vnd.shana.informed.interchange'
    ],
    [
        'img',
        'application/octet-stream'
    ],
    [
        'imp',
        'application/vnd.accpac.simply.imp'
    ],
    [
        'ims',
        'application/vnd.ms-ims'
    ],
    [
        'in',
        'text/plain'
    ],
    [
        'ini',
        'text/plain'
    ],
    [
        'ink',
        'application/inkml+xml'
    ],
    [
        'inkml',
        'application/inkml+xml'
    ],
    [
        'install',
        'application/x-install-instructions'
    ],
    [
        'iota',
        'application/vnd.astraea-software.iota'
    ],
    [
        'ipfix',
        'application/ipfix'
    ],
    [
        'ipk',
        'application/vnd.shana.informed.package'
    ],
    [
        'irm',
        'application/vnd.ibm.rights-management'
    ],
    [
        'irp',
        'application/vnd.irepository.package+xml'
    ],
    [
        'iso',
        'application/x-iso9660-image'
    ],
    [
        'itp',
        'application/vnd.shana.informed.formtemplate'
    ],
    [
        'its',
        'application/its+xml'
    ],
    [
        'ivp',
        'application/vnd.immervision-ivp'
    ],
    [
        'ivu',
        'application/vnd.immervision-ivu'
    ],
    [
        'jad',
        'text/vnd.sun.j2me.app-descriptor'
    ],
    [
        'jade',
        'text/jade'
    ],
    [
        'jam',
        'application/vnd.jam'
    ],
    [
        'jar',
        'application/java-archive'
    ],
    [
        'jardiff',
        'application/x-java-archive-diff'
    ],
    [
        'java',
        'text/x-java-source'
    ],
    [
        'jhc',
        'image/jphc'
    ],
    [
        'jisp',
        'application/vnd.jisp'
    ],
    [
        'jls',
        'image/jls'
    ],
    [
        'jlt',
        'application/vnd.hp-jlyt'
    ],
    [
        'jng',
        'image/x-jng'
    ],
    [
        'jnlp',
        'application/x-java-jnlp-file'
    ],
    [
        'joda',
        'application/vnd.joost.joda-archive'
    ],
    [
        'jp2',
        'image/jp2'
    ],
    [
        'jpe',
        'image/jpeg'
    ],
    [
        'jpeg',
        'image/jpeg'
    ],
    [
        'jpf',
        'image/jpx'
    ],
    [
        'jpg',
        'image/jpeg'
    ],
    [
        'jpg2',
        'image/jp2'
    ],
    [
        'jpgm',
        'video/jpm'
    ],
    [
        'jpgv',
        'video/jpeg'
    ],
    [
        'jph',
        'image/jph'
    ],
    [
        'jpm',
        'video/jpm'
    ],
    [
        'jpx',
        'image/jpx'
    ],
    [
        'js',
        'application/javascript'
    ],
    [
        'json',
        'application/json'
    ],
    [
        'json5',
        'application/json5'
    ],
    [
        'jsonld',
        'application/ld+json'
    ],
    // https://jsonlines.org/
    [
        'jsonl',
        'application/jsonl'
    ],
    [
        'jsonml',
        'application/jsonml+json'
    ],
    [
        'jsx',
        'text/jsx'
    ],
    [
        'jxr',
        'image/jxr'
    ],
    [
        'jxra',
        'image/jxra'
    ],
    [
        'jxrs',
        'image/jxrs'
    ],
    [
        'jxs',
        'image/jxs'
    ],
    [
        'jxsc',
        'image/jxsc'
    ],
    [
        'jxsi',
        'image/jxsi'
    ],
    [
        'jxss',
        'image/jxss'
    ],
    [
        'kar',
        'audio/midi'
    ],
    [
        'karbon',
        'application/vnd.kde.karbon'
    ],
    [
        'kdb',
        'application/octet-stream'
    ],
    [
        'kdbx',
        'application/x-keepass2'
    ],
    [
        'key',
        'application/x-iwork-keynote-sffkey'
    ],
    [
        'kfo',
        'application/vnd.kde.kformula'
    ],
    [
        'kia',
        'application/vnd.kidspiration'
    ],
    [
        'kml',
        'application/vnd.google-earth.kml+xml'
    ],
    [
        'kmz',
        'application/vnd.google-earth.kmz'
    ],
    [
        'kne',
        'application/vnd.kinar'
    ],
    [
        'knp',
        'application/vnd.kinar'
    ],
    [
        'kon',
        'application/vnd.kde.kontour'
    ],
    [
        'kpr',
        'application/vnd.kde.kpresenter'
    ],
    [
        'kpt',
        'application/vnd.kde.kpresenter'
    ],
    [
        'kpxx',
        'application/vnd.ds-keypoint'
    ],
    [
        'ksp',
        'application/vnd.kde.kspread'
    ],
    [
        'ktr',
        'application/vnd.kahootz'
    ],
    [
        'ktx',
        'image/ktx'
    ],
    [
        'ktx2',
        'image/ktx2'
    ],
    [
        'ktz',
        'application/vnd.kahootz'
    ],
    [
        'kwd',
        'application/vnd.kde.kword'
    ],
    [
        'kwt',
        'application/vnd.kde.kword'
    ],
    [
        'lasxml',
        'application/vnd.las.las+xml'
    ],
    [
        'latex',
        'application/x-latex'
    ],
    [
        'lbd',
        'application/vnd.llamagraphics.life-balance.desktop'
    ],
    [
        'lbe',
        'application/vnd.llamagraphics.life-balance.exchange+xml'
    ],
    [
        'les',
        'application/vnd.hhe.lesson-player'
    ],
    [
        'less',
        'text/less'
    ],
    [
        'lgr',
        'application/lgr+xml'
    ],
    [
        'lha',
        'application/octet-stream'
    ],
    [
        'link66',
        'application/vnd.route66.link66+xml'
    ],
    [
        'list',
        'text/plain'
    ],
    [
        'list3820',
        'application/vnd.ibm.modcap'
    ],
    [
        'listafp',
        'application/vnd.ibm.modcap'
    ],
    [
        'litcoffee',
        'text/coffeescript'
    ],
    [
        'lnk',
        'application/x-ms-shortcut'
    ],
    [
        'log',
        'text/plain'
    ],
    [
        'lostxml',
        'application/lost+xml'
    ],
    [
        'lrf',
        'application/octet-stream'
    ],
    [
        'lrm',
        'application/vnd.ms-lrm'
    ],
    [
        'ltf',
        'application/vnd.frogans.ltf'
    ],
    [
        'lua',
        'text/x-lua'
    ],
    [
        'luac',
        'application/x-lua-bytecode'
    ],
    [
        'lvp',
        'audio/vnd.lucent.voice'
    ],
    [
        'lwp',
        'application/vnd.lotus-wordpro'
    ],
    [
        'lzh',
        'application/octet-stream'
    ],
    [
        'm1v',
        'video/mpeg'
    ],
    [
        'm2a',
        'audio/mpeg'
    ],
    [
        'm2v',
        'video/mpeg'
    ],
    [
        'm3a',
        'audio/mpeg'
    ],
    [
        'm3u',
        'text/plain'
    ],
    [
        'm3u8',
        'application/vnd.apple.mpegurl'
    ],
    [
        'm4a',
        'audio/x-m4a'
    ],
    [
        'm4p',
        'application/mp4'
    ],
    [
        'm4s',
        'video/iso.segment'
    ],
    [
        'm4u',
        'application/vnd.mpegurl'
    ],
    [
        'm4v',
        'video/x-m4v'
    ],
    [
        'm13',
        'application/x-msmediaview'
    ],
    [
        'm14',
        'application/x-msmediaview'
    ],
    [
        'm21',
        'application/mp21'
    ],
    [
        'ma',
        'application/mathematica'
    ],
    [
        'mads',
        'application/mads+xml'
    ],
    [
        'maei',
        'application/mmt-aei+xml'
    ],
    [
        'mag',
        'application/vnd.ecowin.chart'
    ],
    [
        'maker',
        'application/vnd.framemaker'
    ],
    [
        'man',
        'text/troff'
    ],
    [
        'manifest',
        'text/cache-manifest'
    ],
    [
        'map',
        'application/json'
    ],
    [
        'mar',
        'application/octet-stream'
    ],
    [
        'markdown',
        'text/markdown'
    ],
    [
        'mathml',
        'application/mathml+xml'
    ],
    [
        'mb',
        'application/mathematica'
    ],
    [
        'mbk',
        'application/vnd.mobius.mbk'
    ],
    [
        'mbox',
        'application/mbox'
    ],
    [
        'mc1',
        'application/vnd.medcalcdata'
    ],
    [
        'mcd',
        'application/vnd.mcd'
    ],
    [
        'mcurl',
        'text/vnd.curl.mcurl'
    ],
    [
        'md',
        'text/markdown'
    ],
    [
        'mdb',
        'application/x-msaccess'
    ],
    [
        'mdi',
        'image/vnd.ms-modi'
    ],
    [
        'mdx',
        'text/mdx'
    ],
    [
        'me',
        'text/troff'
    ],
    [
        'mesh',
        'model/mesh'
    ],
    [
        'meta4',
        'application/metalink4+xml'
    ],
    [
        'metalink',
        'application/metalink+xml'
    ],
    [
        'mets',
        'application/mets+xml'
    ],
    [
        'mfm',
        'application/vnd.mfmp'
    ],
    [
        'mft',
        'application/rpki-manifest'
    ],
    [
        'mgp',
        'application/vnd.osgeo.mapguide.package'
    ],
    [
        'mgz',
        'application/vnd.proteus.magazine'
    ],
    [
        'mid',
        'audio/midi'
    ],
    [
        'midi',
        'audio/midi'
    ],
    [
        'mie',
        'application/x-mie'
    ],
    [
        'mif',
        'application/vnd.mif'
    ],
    [
        'mime',
        'message/rfc822'
    ],
    [
        'mj2',
        'video/mj2'
    ],
    [
        'mjp2',
        'video/mj2'
    ],
    [
        'mjs',
        'application/javascript'
    ],
    [
        'mk3d',
        'video/x-matroska'
    ],
    [
        'mka',
        'audio/x-matroska'
    ],
    [
        'mkd',
        'text/x-markdown'
    ],
    [
        'mks',
        'video/x-matroska'
    ],
    [
        'mkv',
        'video/x-matroska'
    ],
    [
        'mlp',
        'application/vnd.dolby.mlp'
    ],
    [
        'mmd',
        'application/vnd.chipnuts.karaoke-mmd'
    ],
    [
        'mmf',
        'application/vnd.smaf'
    ],
    [
        'mml',
        'text/mathml'
    ],
    [
        'mmr',
        'image/vnd.fujixerox.edmics-mmr'
    ],
    [
        'mng',
        'video/x-mng'
    ],
    [
        'mny',
        'application/x-msmoney'
    ],
    [
        'mobi',
        'application/x-mobipocket-ebook'
    ],
    [
        'mods',
        'application/mods+xml'
    ],
    [
        'mov',
        'video/quicktime'
    ],
    [
        'movie',
        'video/x-sgi-movie'
    ],
    [
        'mp2',
        'audio/mpeg'
    ],
    [
        'mp2a',
        'audio/mpeg'
    ],
    [
        'mp3',
        'audio/mpeg'
    ],
    [
        'mp4',
        'video/mp4'
    ],
    [
        'mp4a',
        'audio/mp4'
    ],
    [
        'mp4s',
        'application/mp4'
    ],
    [
        'mp4v',
        'video/mp4'
    ],
    [
        'mp21',
        'application/mp21'
    ],
    [
        'mpc',
        'application/vnd.mophun.certificate'
    ],
    [
        'mpd',
        'application/dash+xml'
    ],
    [
        'mpe',
        'video/mpeg'
    ],
    [
        'mpeg',
        'video/mpeg'
    ],
    [
        'mpg',
        'video/mpeg'
    ],
    [
        'mpg4',
        'video/mp4'
    ],
    [
        'mpga',
        'audio/mpeg'
    ],
    [
        'mpkg',
        'application/vnd.apple.installer+xml'
    ],
    [
        'mpm',
        'application/vnd.blueice.multipass'
    ],
    [
        'mpn',
        'application/vnd.mophun.application'
    ],
    [
        'mpp',
        'application/vnd.ms-project'
    ],
    [
        'mpt',
        'application/vnd.ms-project'
    ],
    [
        'mpy',
        'application/vnd.ibm.minipay'
    ],
    [
        'mqy',
        'application/vnd.mobius.mqy'
    ],
    [
        'mrc',
        'application/marc'
    ],
    [
        'mrcx',
        'application/marcxml+xml'
    ],
    [
        'ms',
        'text/troff'
    ],
    [
        'mscml',
        'application/mediaservercontrol+xml'
    ],
    [
        'mseed',
        'application/vnd.fdsn.mseed'
    ],
    [
        'mseq',
        'application/vnd.mseq'
    ],
    [
        'msf',
        'application/vnd.epson.msf'
    ],
    [
        'msg',
        'application/vnd.ms-outlook'
    ],
    [
        'msh',
        'model/mesh'
    ],
    [
        'msi',
        'application/x-msdownload'
    ],
    [
        'msl',
        'application/vnd.mobius.msl'
    ],
    [
        'msm',
        'application/octet-stream'
    ],
    [
        'msp',
        'application/octet-stream'
    ],
    [
        'msty',
        'application/vnd.muvee.style'
    ],
    [
        'mtl',
        'model/mtl'
    ],
    [
        'mts',
        'model/vnd.mts'
    ],
    [
        'mus',
        'application/vnd.musician'
    ],
    [
        'musd',
        'application/mmt-usd+xml'
    ],
    [
        'musicxml',
        'application/vnd.recordare.musicxml+xml'
    ],
    [
        'mvb',
        'application/x-msmediaview'
    ],
    [
        'mvt',
        'application/vnd.mapbox-vector-tile'
    ],
    [
        'mwf',
        'application/vnd.mfer'
    ],
    [
        'mxf',
        'application/mxf'
    ],
    [
        'mxl',
        'application/vnd.recordare.musicxml'
    ],
    [
        'mxmf',
        'audio/mobile-xmf'
    ],
    [
        'mxml',
        'application/xv+xml'
    ],
    [
        'mxs',
        'application/vnd.triscape.mxs'
    ],
    [
        'mxu',
        'video/vnd.mpegurl'
    ],
    [
        'n-gage',
        'application/vnd.nokia.n-gage.symbian.install'
    ],
    [
        'n3',
        'text/n3'
    ],
    [
        'nb',
        'application/mathematica'
    ],
    [
        'nbp',
        'application/vnd.wolfram.player'
    ],
    [
        'nc',
        'application/x-netcdf'
    ],
    [
        'ncx',
        'application/x-dtbncx+xml'
    ],
    [
        'nfo',
        'text/x-nfo'
    ],
    [
        'ngdat',
        'application/vnd.nokia.n-gage.data'
    ],
    [
        'nitf',
        'application/vnd.nitf'
    ],
    [
        'nlu',
        'application/vnd.neurolanguage.nlu'
    ],
    [
        'nml',
        'application/vnd.enliven'
    ],
    [
        'nnd',
        'application/vnd.noblenet-directory'
    ],
    [
        'nns',
        'application/vnd.noblenet-sealer'
    ],
    [
        'nnw',
        'application/vnd.noblenet-web'
    ],
    [
        'npx',
        'image/vnd.net-fpx'
    ],
    [
        'nq',
        'application/n-quads'
    ],
    [
        'nsc',
        'application/x-conference'
    ],
    [
        'nsf',
        'application/vnd.lotus-notes'
    ],
    [
        'nt',
        'application/n-triples'
    ],
    [
        'ntf',
        'application/vnd.nitf'
    ],
    [
        'numbers',
        'application/x-iwork-numbers-sffnumbers'
    ],
    [
        'nzb',
        'application/x-nzb'
    ],
    [
        'oa2',
        'application/vnd.fujitsu.oasys2'
    ],
    [
        'oa3',
        'application/vnd.fujitsu.oasys3'
    ],
    [
        'oas',
        'application/vnd.fujitsu.oasys'
    ],
    [
        'obd',
        'application/x-msbinder'
    ],
    [
        'obgx',
        'application/vnd.openblox.game+xml'
    ],
    [
        'obj',
        'model/obj'
    ],
    [
        'oda',
        'application/oda'
    ],
    [
        'odb',
        'application/vnd.oasis.opendocument.database'
    ],
    [
        'odc',
        'application/vnd.oasis.opendocument.chart'
    ],
    [
        'odf',
        'application/vnd.oasis.opendocument.formula'
    ],
    [
        'odft',
        'application/vnd.oasis.opendocument.formula-template'
    ],
    [
        'odg',
        'application/vnd.oasis.opendocument.graphics'
    ],
    [
        'odi',
        'application/vnd.oasis.opendocument.image'
    ],
    [
        'odm',
        'application/vnd.oasis.opendocument.text-master'
    ],
    [
        'odp',
        'application/vnd.oasis.opendocument.presentation'
    ],
    [
        'ods',
        'application/vnd.oasis.opendocument.spreadsheet'
    ],
    [
        'odt',
        'application/vnd.oasis.opendocument.text'
    ],
    [
        'oga',
        'audio/ogg'
    ],
    [
        'ogex',
        'model/vnd.opengex'
    ],
    [
        'ogg',
        'audio/ogg'
    ],
    [
        'ogv',
        'video/ogg'
    ],
    [
        'ogx',
        'application/ogg'
    ],
    [
        'omdoc',
        'application/omdoc+xml'
    ],
    [
        'onepkg',
        'application/onenote'
    ],
    [
        'onetmp',
        'application/onenote'
    ],
    [
        'onetoc',
        'application/onenote'
    ],
    [
        'onetoc2',
        'application/onenote'
    ],
    [
        'opf',
        'application/oebps-package+xml'
    ],
    [
        'opml',
        'text/x-opml'
    ],
    [
        'oprc',
        'application/vnd.palm'
    ],
    [
        'opus',
        'audio/ogg'
    ],
    [
        'org',
        'text/x-org'
    ],
    [
        'osf',
        'application/vnd.yamaha.openscoreformat'
    ],
    [
        'osfpvg',
        'application/vnd.yamaha.openscoreformat.osfpvg+xml'
    ],
    [
        'osm',
        'application/vnd.openstreetmap.data+xml'
    ],
    [
        'otc',
        'application/vnd.oasis.opendocument.chart-template'
    ],
    [
        'otf',
        'font/otf'
    ],
    [
        'otg',
        'application/vnd.oasis.opendocument.graphics-template'
    ],
    [
        'oth',
        'application/vnd.oasis.opendocument.text-web'
    ],
    [
        'oti',
        'application/vnd.oasis.opendocument.image-template'
    ],
    [
        'otp',
        'application/vnd.oasis.opendocument.presentation-template'
    ],
    [
        'ots',
        'application/vnd.oasis.opendocument.spreadsheet-template'
    ],
    [
        'ott',
        'application/vnd.oasis.opendocument.text-template'
    ],
    [
        'ova',
        'application/x-virtualbox-ova'
    ],
    [
        'ovf',
        'application/x-virtualbox-ovf'
    ],
    [
        'owl',
        'application/rdf+xml'
    ],
    [
        'oxps',
        'application/oxps'
    ],
    [
        'oxt',
        'application/vnd.openofficeorg.extension'
    ],
    [
        'p',
        'text/x-pascal'
    ],
    [
        'p7a',
        'application/x-pkcs7-signature'
    ],
    [
        'p7b',
        'application/x-pkcs7-certificates'
    ],
    [
        'p7c',
        'application/pkcs7-mime'
    ],
    [
        'p7m',
        'application/pkcs7-mime'
    ],
    [
        'p7r',
        'application/x-pkcs7-certreqresp'
    ],
    [
        'p7s',
        'application/pkcs7-signature'
    ],
    [
        'p8',
        'application/pkcs8'
    ],
    [
        'p10',
        'application/x-pkcs10'
    ],
    [
        'p12',
        'application/x-pkcs12'
    ],
    [
        'pac',
        'application/x-ns-proxy-autoconfig'
    ],
    [
        'pages',
        'application/x-iwork-pages-sffpages'
    ],
    [
        'pas',
        'text/x-pascal'
    ],
    [
        'paw',
        'application/vnd.pawaafile'
    ],
    [
        'pbd',
        'application/vnd.powerbuilder6'
    ],
    [
        'pbm',
        'image/x-portable-bitmap'
    ],
    [
        'pcap',
        'application/vnd.tcpdump.pcap'
    ],
    [
        'pcf',
        'application/x-font-pcf'
    ],
    [
        'pcl',
        'application/vnd.hp-pcl'
    ],
    [
        'pclxl',
        'application/vnd.hp-pclxl'
    ],
    [
        'pct',
        'image/x-pict'
    ],
    [
        'pcurl',
        'application/vnd.curl.pcurl'
    ],
    [
        'pcx',
        'image/x-pcx'
    ],
    [
        'pdb',
        'application/x-pilot'
    ],
    [
        'pde',
        'text/x-processing'
    ],
    [
        'pdf',
        'application/pdf'
    ],
    [
        'pem',
        'application/x-x509-user-cert'
    ],
    [
        'pfa',
        'application/x-font-type1'
    ],
    [
        'pfb',
        'application/x-font-type1'
    ],
    [
        'pfm',
        'application/x-font-type1'
    ],
    [
        'pfr',
        'application/font-tdpfr'
    ],
    [
        'pfx',
        'application/x-pkcs12'
    ],
    [
        'pgm',
        'image/x-portable-graymap'
    ],
    [
        'pgn',
        'application/x-chess-pgn'
    ],
    [
        'pgp',
        'application/pgp'
    ],
    [
        'php',
        'application/x-httpd-php'
    ],
    [
        'php3',
        'application/x-httpd-php'
    ],
    [
        'php4',
        'application/x-httpd-php'
    ],
    [
        'phps',
        'application/x-httpd-php-source'
    ],
    [
        'phtml',
        'application/x-httpd-php'
    ],
    [
        'pic',
        'image/x-pict'
    ],
    [
        'pkg',
        'application/octet-stream'
    ],
    [
        'pki',
        'application/pkixcmp'
    ],
    [
        'pkipath',
        'application/pkix-pkipath'
    ],
    [
        'pkpass',
        'application/vnd.apple.pkpass'
    ],
    [
        'pl',
        'application/x-perl'
    ],
    [
        'plb',
        'application/vnd.3gpp.pic-bw-large'
    ],
    [
        'plc',
        'application/vnd.mobius.plc'
    ],
    [
        'plf',
        'application/vnd.pocketlearn'
    ],
    [
        'pls',
        'application/pls+xml'
    ],
    [
        'pm',
        'application/x-perl'
    ],
    [
        'pml',
        'application/vnd.ctc-posml'
    ],
    [
        'png',
        'image/png'
    ],
    [
        'pnm',
        'image/x-portable-anymap'
    ],
    [
        'portpkg',
        'application/vnd.macports.portpkg'
    ],
    [
        'pot',
        'application/vnd.ms-powerpoint'
    ],
    [
        'potm',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12'
    ],
    [
        'potx',
        'application/vnd.openxmlformats-officedocument.presentationml.template'
    ],
    [
        'ppa',
        'application/vnd.ms-powerpoint'
    ],
    [
        'ppam',
        'application/vnd.ms-powerpoint.addin.macroEnabled.12'
    ],
    [
        'ppd',
        'application/vnd.cups-ppd'
    ],
    [
        'ppm',
        'image/x-portable-pixmap'
    ],
    [
        'pps',
        'application/vnd.ms-powerpoint'
    ],
    [
        'ppsm',
        'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
    ],
    [
        'ppsx',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow'
    ],
    [
        'ppt',
        'application/powerpoint'
    ],
    [
        'pptm',
        'application/vnd.ms-powerpoint.presentation.macroEnabled.12'
    ],
    [
        'pptx',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ],
    [
        'pqa',
        'application/vnd.palm'
    ],
    [
        'prc',
        'application/x-pilot'
    ],
    [
        'pre',
        'application/vnd.lotus-freelance'
    ],
    [
        'prf',
        'application/pics-rules'
    ],
    [
        'provx',
        'application/provenance+xml'
    ],
    [
        'ps',
        'application/postscript'
    ],
    [
        'psb',
        'application/vnd.3gpp.pic-bw-small'
    ],
    [
        'psd',
        'application/x-photoshop'
    ],
    [
        'psf',
        'application/x-font-linux-psf'
    ],
    [
        'pskcxml',
        'application/pskc+xml'
    ],
    [
        'pti',
        'image/prs.pti'
    ],
    [
        'ptid',
        'application/vnd.pvi.ptid1'
    ],
    [
        'pub',
        'application/x-mspublisher'
    ],
    [
        'pvb',
        'application/vnd.3gpp.pic-bw-var'
    ],
    [
        'pwn',
        'application/vnd.3m.post-it-notes'
    ],
    [
        'pya',
        'audio/vnd.ms-playready.media.pya'
    ],
    [
        'pyv',
        'video/vnd.ms-playready.media.pyv'
    ],
    [
        'qam',
        'application/vnd.epson.quickanime'
    ],
    [
        'qbo',
        'application/vnd.intu.qbo'
    ],
    [
        'qfx',
        'application/vnd.intu.qfx'
    ],
    [
        'qps',
        'application/vnd.publishare-delta-tree'
    ],
    [
        'qt',
        'video/quicktime'
    ],
    [
        'qwd',
        'application/vnd.quark.quarkxpress'
    ],
    [
        'qwt',
        'application/vnd.quark.quarkxpress'
    ],
    [
        'qxb',
        'application/vnd.quark.quarkxpress'
    ],
    [
        'qxd',
        'application/vnd.quark.quarkxpress'
    ],
    [
        'qxl',
        'application/vnd.quark.quarkxpress'
    ],
    [
        'qxt',
        'application/vnd.quark.quarkxpress'
    ],
    [
        'ra',
        'audio/x-realaudio'
    ],
    [
        'ram',
        'audio/x-pn-realaudio'
    ],
    [
        'raml',
        'application/raml+yaml'
    ],
    [
        'rapd',
        'application/route-apd+xml'
    ],
    [
        'rar',
        'application/x-rar'
    ],
    [
        'ras',
        'image/x-cmu-raster'
    ],
    [
        'rcprofile',
        'application/vnd.ipunplugged.rcprofile'
    ],
    [
        'rdf',
        'application/rdf+xml'
    ],
    [
        'rdz',
        'application/vnd.data-vision.rdz'
    ],
    [
        'relo',
        'application/p2p-overlay+xml'
    ],
    [
        'rep',
        'application/vnd.businessobjects'
    ],
    [
        'res',
        'application/x-dtbresource+xml'
    ],
    [
        'rgb',
        'image/x-rgb'
    ],
    [
        'rif',
        'application/reginfo+xml'
    ],
    [
        'rip',
        'audio/vnd.rip'
    ],
    [
        'ris',
        'application/x-research-info-systems'
    ],
    [
        'rl',
        'application/resource-lists+xml'
    ],
    [
        'rlc',
        'image/vnd.fujixerox.edmics-rlc'
    ],
    [
        'rld',
        'application/resource-lists-diff+xml'
    ],
    [
        'rm',
        'audio/x-pn-realaudio'
    ],
    [
        'rmi',
        'audio/midi'
    ],
    [
        'rmp',
        'audio/x-pn-realaudio-plugin'
    ],
    [
        'rms',
        'application/vnd.jcp.javame.midlet-rms'
    ],
    [
        'rmvb',
        'application/vnd.rn-realmedia-vbr'
    ],
    [
        'rnc',
        'application/relax-ng-compact-syntax'
    ],
    [
        'rng',
        'application/xml'
    ],
    [
        'roa',
        'application/rpki-roa'
    ],
    [
        'roff',
        'text/troff'
    ],
    [
        'rp9',
        'application/vnd.cloanto.rp9'
    ],
    [
        'rpm',
        'audio/x-pn-realaudio-plugin'
    ],
    [
        'rpss',
        'application/vnd.nokia.radio-presets'
    ],
    [
        'rpst',
        'application/vnd.nokia.radio-preset'
    ],
    [
        'rq',
        'application/sparql-query'
    ],
    [
        'rs',
        'application/rls-services+xml'
    ],
    [
        'rsa',
        'application/x-pkcs7'
    ],
    [
        'rsat',
        'application/atsc-rsat+xml'
    ],
    [
        'rsd',
        'application/rsd+xml'
    ],
    [
        'rsheet',
        'application/urc-ressheet+xml'
    ],
    [
        'rss',
        'application/rss+xml'
    ],
    [
        'rtf',
        'text/rtf'
    ],
    [
        'rtx',
        'text/richtext'
    ],
    [
        'run',
        'application/x-makeself'
    ],
    [
        'rusd',
        'application/route-usd+xml'
    ],
    [
        'rv',
        'video/vnd.rn-realvideo'
    ],
    [
        's',
        'text/x-asm'
    ],
    [
        's3m',
        'audio/s3m'
    ],
    [
        'saf',
        'application/vnd.yamaha.smaf-audio'
    ],
    [
        'sass',
        'text/x-sass'
    ],
    [
        'sbml',
        'application/sbml+xml'
    ],
    [
        'sc',
        'application/vnd.ibm.secure-container'
    ],
    [
        'scd',
        'application/x-msschedule'
    ],
    [
        'scm',
        'application/vnd.lotus-screencam'
    ],
    [
        'scq',
        'application/scvp-cv-request'
    ],
    [
        'scs',
        'application/scvp-cv-response'
    ],
    [
        'scss',
        'text/x-scss'
    ],
    [
        'scurl',
        'text/vnd.curl.scurl'
    ],
    [
        'sda',
        'application/vnd.stardivision.draw'
    ],
    [
        'sdc',
        'application/vnd.stardivision.calc'
    ],
    [
        'sdd',
        'application/vnd.stardivision.impress'
    ],
    [
        'sdkd',
        'application/vnd.solent.sdkm+xml'
    ],
    [
        'sdkm',
        'application/vnd.solent.sdkm+xml'
    ],
    [
        'sdp',
        'application/sdp'
    ],
    [
        'sdw',
        'application/vnd.stardivision.writer'
    ],
    [
        'sea',
        'application/octet-stream'
    ],
    [
        'see',
        'application/vnd.seemail'
    ],
    [
        'seed',
        'application/vnd.fdsn.seed'
    ],
    [
        'sema',
        'application/vnd.sema'
    ],
    [
        'semd',
        'application/vnd.semd'
    ],
    [
        'semf',
        'application/vnd.semf'
    ],
    [
        'senmlx',
        'application/senml+xml'
    ],
    [
        'sensmlx',
        'application/sensml+xml'
    ],
    [
        'ser',
        'application/java-serialized-object'
    ],
    [
        'setpay',
        'application/set-payment-initiation'
    ],
    [
        'setreg',
        'application/set-registration-initiation'
    ],
    [
        'sfd-hdstx',
        'application/vnd.hydrostatix.sof-data'
    ],
    [
        'sfs',
        'application/vnd.spotfire.sfs'
    ],
    [
        'sfv',
        'text/x-sfv'
    ],
    [
        'sgi',
        'image/sgi'
    ],
    [
        'sgl',
        'application/vnd.stardivision.writer-global'
    ],
    [
        'sgm',
        'text/sgml'
    ],
    [
        'sgml',
        'text/sgml'
    ],
    [
        'sh',
        'application/x-sh'
    ],
    [
        'shar',
        'application/x-shar'
    ],
    [
        'shex',
        'text/shex'
    ],
    [
        'shf',
        'application/shf+xml'
    ],
    [
        'shtml',
        'text/html'
    ],
    [
        'sid',
        'image/x-mrsid-image'
    ],
    [
        'sieve',
        'application/sieve'
    ],
    [
        'sig',
        'application/pgp-signature'
    ],
    [
        'sil',
        'audio/silk'
    ],
    [
        'silo',
        'model/mesh'
    ],
    [
        'sis',
        'application/vnd.symbian.install'
    ],
    [
        'sisx',
        'application/vnd.symbian.install'
    ],
    [
        'sit',
        'application/x-stuffit'
    ],
    [
        'sitx',
        'application/x-stuffitx'
    ],
    [
        'siv',
        'application/sieve'
    ],
    [
        'skd',
        'application/vnd.koan'
    ],
    [
        'skm',
        'application/vnd.koan'
    ],
    [
        'skp',
        'application/vnd.koan'
    ],
    [
        'skt',
        'application/vnd.koan'
    ],
    [
        'sldm',
        'application/vnd.ms-powerpoint.slide.macroenabled.12'
    ],
    [
        'sldx',
        'application/vnd.openxmlformats-officedocument.presentationml.slide'
    ],
    [
        'slim',
        'text/slim'
    ],
    [
        'slm',
        'text/slim'
    ],
    [
        'sls',
        'application/route-s-tsid+xml'
    ],
    [
        'slt',
        'application/vnd.epson.salt'
    ],
    [
        'sm',
        'application/vnd.stepmania.stepchart'
    ],
    [
        'smf',
        'application/vnd.stardivision.math'
    ],
    [
        'smi',
        'application/smil'
    ],
    [
        'smil',
        'application/smil'
    ],
    [
        'smv',
        'video/x-smv'
    ],
    [
        'smzip',
        'application/vnd.stepmania.package'
    ],
    [
        'snd',
        'audio/basic'
    ],
    [
        'snf',
        'application/x-font-snf'
    ],
    [
        'so',
        'application/octet-stream'
    ],
    [
        'spc',
        'application/x-pkcs7-certificates'
    ],
    [
        'spdx',
        'text/spdx'
    ],
    [
        'spf',
        'application/vnd.yamaha.smaf-phrase'
    ],
    [
        'spl',
        'application/x-futuresplash'
    ],
    [
        'spot',
        'text/vnd.in3d.spot'
    ],
    [
        'spp',
        'application/scvp-vp-response'
    ],
    [
        'spq',
        'application/scvp-vp-request'
    ],
    [
        'spx',
        'audio/ogg'
    ],
    [
        'sql',
        'application/x-sql'
    ],
    [
        'src',
        'application/x-wais-source'
    ],
    [
        'srt',
        'application/x-subrip'
    ],
    [
        'sru',
        'application/sru+xml'
    ],
    [
        'srx',
        'application/sparql-results+xml'
    ],
    [
        'ssdl',
        'application/ssdl+xml'
    ],
    [
        'sse',
        'application/vnd.kodak-descriptor'
    ],
    [
        'ssf',
        'application/vnd.epson.ssf'
    ],
    [
        'ssml',
        'application/ssml+xml'
    ],
    [
        'sst',
        'application/octet-stream'
    ],
    [
        'st',
        'application/vnd.sailingtracker.track'
    ],
    [
        'stc',
        'application/vnd.sun.xml.calc.template'
    ],
    [
        'std',
        'application/vnd.sun.xml.draw.template'
    ],
    [
        'stf',
        'application/vnd.wt.stf'
    ],
    [
        'sti',
        'application/vnd.sun.xml.impress.template'
    ],
    [
        'stk',
        'application/hyperstudio'
    ],
    [
        'stl',
        'model/stl'
    ],
    [
        'stpx',
        'model/step+xml'
    ],
    [
        'stpxz',
        'model/step-xml+zip'
    ],
    [
        'stpz',
        'model/step+zip'
    ],
    [
        'str',
        'application/vnd.pg.format'
    ],
    [
        'stw',
        'application/vnd.sun.xml.writer.template'
    ],
    [
        'styl',
        'text/stylus'
    ],
    [
        'stylus',
        'text/stylus'
    ],
    [
        'sub',
        'text/vnd.dvb.subtitle'
    ],
    [
        'sus',
        'application/vnd.sus-calendar'
    ],
    [
        'susp',
        'application/vnd.sus-calendar'
    ],
    [
        'sv4cpio',
        'application/x-sv4cpio'
    ],
    [
        'sv4crc',
        'application/x-sv4crc'
    ],
    [
        'svc',
        'application/vnd.dvb.service'
    ],
    [
        'svd',
        'application/vnd.svd'
    ],
    [
        'svg',
        'image/svg+xml'
    ],
    [
        'svgz',
        'image/svg+xml'
    ],
    [
        'swa',
        'application/x-director'
    ],
    [
        'swf',
        'application/x-shockwave-flash'
    ],
    [
        'swi',
        'application/vnd.aristanetworks.swi'
    ],
    [
        'swidtag',
        'application/swid+xml'
    ],
    [
        'sxc',
        'application/vnd.sun.xml.calc'
    ],
    [
        'sxd',
        'application/vnd.sun.xml.draw'
    ],
    [
        'sxg',
        'application/vnd.sun.xml.writer.global'
    ],
    [
        'sxi',
        'application/vnd.sun.xml.impress'
    ],
    [
        'sxm',
        'application/vnd.sun.xml.math'
    ],
    [
        'sxw',
        'application/vnd.sun.xml.writer'
    ],
    [
        't',
        'text/troff'
    ],
    [
        't3',
        'application/x-t3vm-image'
    ],
    [
        't38',
        'image/t38'
    ],
    [
        'taglet',
        'application/vnd.mynfc'
    ],
    [
        'tao',
        'application/vnd.tao.intent-module-archive'
    ],
    [
        'tap',
        'image/vnd.tencent.tap'
    ],
    [
        'tar',
        'application/x-tar'
    ],
    [
        'tcap',
        'application/vnd.3gpp2.tcap'
    ],
    [
        'tcl',
        'application/x-tcl'
    ],
    [
        'td',
        'application/urc-targetdesc+xml'
    ],
    [
        'teacher',
        'application/vnd.smart.teacher'
    ],
    [
        'tei',
        'application/tei+xml'
    ],
    [
        'teicorpus',
        'application/tei+xml'
    ],
    [
        'tex',
        'application/x-tex'
    ],
    [
        'texi',
        'application/x-texinfo'
    ],
    [
        'texinfo',
        'application/x-texinfo'
    ],
    [
        'text',
        'text/plain'
    ],
    [
        'tfi',
        'application/thraud+xml'
    ],
    [
        'tfm',
        'application/x-tex-tfm'
    ],
    [
        'tfx',
        'image/tiff-fx'
    ],
    [
        'tga',
        'image/x-tga'
    ],
    [
        'tgz',
        'application/x-tar'
    ],
    [
        'thmx',
        'application/vnd.ms-officetheme'
    ],
    [
        'tif',
        'image/tiff'
    ],
    [
        'tiff',
        'image/tiff'
    ],
    [
        'tk',
        'application/x-tcl'
    ],
    [
        'tmo',
        'application/vnd.tmobile-livetv'
    ],
    [
        'toml',
        'application/toml'
    ],
    [
        'torrent',
        'application/x-bittorrent'
    ],
    [
        'tpl',
        'application/vnd.groove-tool-template'
    ],
    [
        'tpt',
        'application/vnd.trid.tpt'
    ],
    [
        'tr',
        'text/troff'
    ],
    [
        'tra',
        'application/vnd.trueapp'
    ],
    [
        'trig',
        'application/trig'
    ],
    [
        'trm',
        'application/x-msterminal'
    ],
    [
        'ts',
        'video/mp2t'
    ],
    [
        'tsd',
        'application/timestamped-data'
    ],
    [
        'tsv',
        'text/tab-separated-values'
    ],
    [
        'ttc',
        'font/collection'
    ],
    [
        'ttf',
        'font/ttf'
    ],
    [
        'ttl',
        'text/turtle'
    ],
    [
        'ttml',
        'application/ttml+xml'
    ],
    [
        'twd',
        'application/vnd.simtech-mindmapper'
    ],
    [
        'twds',
        'application/vnd.simtech-mindmapper'
    ],
    [
        'txd',
        'application/vnd.genomatix.tuxedo'
    ],
    [
        'txf',
        'application/vnd.mobius.txf'
    ],
    [
        'txt',
        'text/plain'
    ],
    [
        'u8dsn',
        'message/global-delivery-status'
    ],
    [
        'u8hdr',
        'message/global-headers'
    ],
    [
        'u8mdn',
        'message/global-disposition-notification'
    ],
    [
        'u8msg',
        'message/global'
    ],
    [
        'u32',
        'application/x-authorware-bin'
    ],
    [
        'ubj',
        'application/ubjson'
    ],
    [
        'udeb',
        'application/x-debian-package'
    ],
    [
        'ufd',
        'application/vnd.ufdl'
    ],
    [
        'ufdl',
        'application/vnd.ufdl'
    ],
    [
        'ulx',
        'application/x-glulx'
    ],
    [
        'umj',
        'application/vnd.umajin'
    ],
    [
        'unityweb',
        'application/vnd.unity'
    ],
    [
        'uoml',
        'application/vnd.uoml+xml'
    ],
    [
        'uri',
        'text/uri-list'
    ],
    [
        'uris',
        'text/uri-list'
    ],
    [
        'urls',
        'text/uri-list'
    ],
    [
        'usdz',
        'model/vnd.usdz+zip'
    ],
    [
        'ustar',
        'application/x-ustar'
    ],
    [
        'utz',
        'application/vnd.uiq.theme'
    ],
    [
        'uu',
        'text/x-uuencode'
    ],
    [
        'uva',
        'audio/vnd.dece.audio'
    ],
    [
        'uvd',
        'application/vnd.dece.data'
    ],
    [
        'uvf',
        'application/vnd.dece.data'
    ],
    [
        'uvg',
        'image/vnd.dece.graphic'
    ],
    [
        'uvh',
        'video/vnd.dece.hd'
    ],
    [
        'uvi',
        'image/vnd.dece.graphic'
    ],
    [
        'uvm',
        'video/vnd.dece.mobile'
    ],
    [
        'uvp',
        'video/vnd.dece.pd'
    ],
    [
        'uvs',
        'video/vnd.dece.sd'
    ],
    [
        'uvt',
        'application/vnd.dece.ttml+xml'
    ],
    [
        'uvu',
        'video/vnd.uvvu.mp4'
    ],
    [
        'uvv',
        'video/vnd.dece.video'
    ],
    [
        'uvva',
        'audio/vnd.dece.audio'
    ],
    [
        'uvvd',
        'application/vnd.dece.data'
    ],
    [
        'uvvf',
        'application/vnd.dece.data'
    ],
    [
        'uvvg',
        'image/vnd.dece.graphic'
    ],
    [
        'uvvh',
        'video/vnd.dece.hd'
    ],
    [
        'uvvi',
        'image/vnd.dece.graphic'
    ],
    [
        'uvvm',
        'video/vnd.dece.mobile'
    ],
    [
        'uvvp',
        'video/vnd.dece.pd'
    ],
    [
        'uvvs',
        'video/vnd.dece.sd'
    ],
    [
        'uvvt',
        'application/vnd.dece.ttml+xml'
    ],
    [
        'uvvu',
        'video/vnd.uvvu.mp4'
    ],
    [
        'uvvv',
        'video/vnd.dece.video'
    ],
    [
        'uvvx',
        'application/vnd.dece.unspecified'
    ],
    [
        'uvvz',
        'application/vnd.dece.zip'
    ],
    [
        'uvx',
        'application/vnd.dece.unspecified'
    ],
    [
        'uvz',
        'application/vnd.dece.zip'
    ],
    [
        'vbox',
        'application/x-virtualbox-vbox'
    ],
    [
        'vbox-extpack',
        'application/x-virtualbox-vbox-extpack'
    ],
    [
        'vcard',
        'text/vcard'
    ],
    [
        'vcd',
        'application/x-cdlink'
    ],
    [
        'vcf',
        'text/x-vcard'
    ],
    [
        'vcg',
        'application/vnd.groove-vcard'
    ],
    [
        'vcs',
        'text/x-vcalendar'
    ],
    [
        'vcx',
        'application/vnd.vcx'
    ],
    [
        'vdi',
        'application/x-virtualbox-vdi'
    ],
    [
        'vds',
        'model/vnd.sap.vds'
    ],
    [
        'vhd',
        'application/x-virtualbox-vhd'
    ],
    [
        'vis',
        'application/vnd.visionary'
    ],
    [
        'viv',
        'video/vnd.vivo'
    ],
    [
        'vlc',
        'application/videolan'
    ],
    [
        'vmdk',
        'application/x-virtualbox-vmdk'
    ],
    [
        'vob',
        'video/x-ms-vob'
    ],
    [
        'vor',
        'application/vnd.stardivision.writer'
    ],
    [
        'vox',
        'application/x-authorware-bin'
    ],
    [
        'vrml',
        'model/vrml'
    ],
    [
        'vsd',
        'application/vnd.visio'
    ],
    [
        'vsf',
        'application/vnd.vsf'
    ],
    [
        'vss',
        'application/vnd.visio'
    ],
    [
        'vst',
        'application/vnd.visio'
    ],
    [
        'vsw',
        'application/vnd.visio'
    ],
    [
        'vtf',
        'image/vnd.valve.source.texture'
    ],
    [
        'vtt',
        'text/vtt'
    ],
    [
        'vtu',
        'model/vnd.vtu'
    ],
    [
        'vxml',
        'application/voicexml+xml'
    ],
    [
        'w3d',
        'application/x-director'
    ],
    [
        'wad',
        'application/x-doom'
    ],
    [
        'wadl',
        'application/vnd.sun.wadl+xml'
    ],
    [
        'war',
        'application/java-archive'
    ],
    [
        'wasm',
        'application/wasm'
    ],
    [
        'wav',
        'audio/x-wav'
    ],
    [
        'wax',
        'audio/x-ms-wax'
    ],
    [
        'wbmp',
        'image/vnd.wap.wbmp'
    ],
    [
        'wbs',
        'application/vnd.criticaltools.wbs+xml'
    ],
    [
        'wbxml',
        'application/wbxml'
    ],
    [
        'wcm',
        'application/vnd.ms-works'
    ],
    [
        'wdb',
        'application/vnd.ms-works'
    ],
    [
        'wdp',
        'image/vnd.ms-photo'
    ],
    [
        'weba',
        'audio/webm'
    ],
    [
        'webapp',
        'application/x-web-app-manifest+json'
    ],
    [
        'webm',
        'video/webm'
    ],
    [
        'webmanifest',
        'application/manifest+json'
    ],
    [
        'webp',
        'image/webp'
    ],
    [
        'wg',
        'application/vnd.pmi.widget'
    ],
    [
        'wgt',
        'application/widget'
    ],
    [
        'wks',
        'application/vnd.ms-works'
    ],
    [
        'wm',
        'video/x-ms-wm'
    ],
    [
        'wma',
        'audio/x-ms-wma'
    ],
    [
        'wmd',
        'application/x-ms-wmd'
    ],
    [
        'wmf',
        'image/wmf'
    ],
    [
        'wml',
        'text/vnd.wap.wml'
    ],
    [
        'wmlc',
        'application/wmlc'
    ],
    [
        'wmls',
        'text/vnd.wap.wmlscript'
    ],
    [
        'wmlsc',
        'application/vnd.wap.wmlscriptc'
    ],
    [
        'wmv',
        'video/x-ms-wmv'
    ],
    [
        'wmx',
        'video/x-ms-wmx'
    ],
    [
        'wmz',
        'application/x-msmetafile'
    ],
    [
        'woff',
        'font/woff'
    ],
    [
        'woff2',
        'font/woff2'
    ],
    [
        'word',
        'application/msword'
    ],
    [
        'wpd',
        'application/vnd.wordperfect'
    ],
    [
        'wpl',
        'application/vnd.ms-wpl'
    ],
    [
        'wps',
        'application/vnd.ms-works'
    ],
    [
        'wqd',
        'application/vnd.wqd'
    ],
    [
        'wri',
        'application/x-mswrite'
    ],
    [
        'wrl',
        'model/vrml'
    ],
    [
        'wsc',
        'message/vnd.wfa.wsc'
    ],
    [
        'wsdl',
        'application/wsdl+xml'
    ],
    [
        'wspolicy',
        'application/wspolicy+xml'
    ],
    [
        'wtb',
        'application/vnd.webturbo'
    ],
    [
        'wvx',
        'video/x-ms-wvx'
    ],
    [
        'x3d',
        'model/x3d+xml'
    ],
    [
        'x3db',
        'model/x3d+fastinfoset'
    ],
    [
        'x3dbz',
        'model/x3d+binary'
    ],
    [
        'x3dv',
        'model/x3d-vrml'
    ],
    [
        'x3dvz',
        'model/x3d+vrml'
    ],
    [
        'x3dz',
        'model/x3d+xml'
    ],
    [
        'x32',
        'application/x-authorware-bin'
    ],
    [
        'x_b',
        'model/vnd.parasolid.transmit.binary'
    ],
    [
        'x_t',
        'model/vnd.parasolid.transmit.text'
    ],
    [
        'xaml',
        'application/xaml+xml'
    ],
    [
        'xap',
        'application/x-silverlight-app'
    ],
    [
        'xar',
        'application/vnd.xara'
    ],
    [
        'xav',
        'application/xcap-att+xml'
    ],
    [
        'xbap',
        'application/x-ms-xbap'
    ],
    [
        'xbd',
        'application/vnd.fujixerox.docuworks.binder'
    ],
    [
        'xbm',
        'image/x-xbitmap'
    ],
    [
        'xca',
        'application/xcap-caps+xml'
    ],
    [
        'xcs',
        'application/calendar+xml'
    ],
    [
        'xdf',
        'application/xcap-diff+xml'
    ],
    [
        'xdm',
        'application/vnd.syncml.dm+xml'
    ],
    [
        'xdp',
        'application/vnd.adobe.xdp+xml'
    ],
    [
        'xdssc',
        'application/dssc+xml'
    ],
    [
        'xdw',
        'application/vnd.fujixerox.docuworks'
    ],
    [
        'xel',
        'application/xcap-el+xml'
    ],
    [
        'xenc',
        'application/xenc+xml'
    ],
    [
        'xer',
        'application/patch-ops-error+xml'
    ],
    [
        'xfdf',
        'application/vnd.adobe.xfdf'
    ],
    [
        'xfdl',
        'application/vnd.xfdl'
    ],
    [
        'xht',
        'application/xhtml+xml'
    ],
    [
        'xhtml',
        'application/xhtml+xml'
    ],
    [
        'xhvml',
        'application/xv+xml'
    ],
    [
        'xif',
        'image/vnd.xiff'
    ],
    [
        'xl',
        'application/excel'
    ],
    [
        'xla',
        'application/vnd.ms-excel'
    ],
    [
        'xlam',
        'application/vnd.ms-excel.addin.macroEnabled.12'
    ],
    [
        'xlc',
        'application/vnd.ms-excel'
    ],
    [
        'xlf',
        'application/xliff+xml'
    ],
    [
        'xlm',
        'application/vnd.ms-excel'
    ],
    [
        'xls',
        'application/vnd.ms-excel'
    ],
    [
        'xlsb',
        'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    ],
    [
        'xlsm',
        'application/vnd.ms-excel.sheet.macroEnabled.12'
    ],
    [
        'xlsx',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ],
    [
        'xlt',
        'application/vnd.ms-excel'
    ],
    [
        'xltm',
        'application/vnd.ms-excel.template.macroEnabled.12'
    ],
    [
        'xltx',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.template'
    ],
    [
        'xlw',
        'application/vnd.ms-excel'
    ],
    [
        'xm',
        'audio/xm'
    ],
    [
        'xml',
        'application/xml'
    ],
    [
        'xns',
        'application/xcap-ns+xml'
    ],
    [
        'xo',
        'application/vnd.olpc-sugar'
    ],
    [
        'xop',
        'application/xop+xml'
    ],
    [
        'xpi',
        'application/x-xpinstall'
    ],
    [
        'xpl',
        'application/xproc+xml'
    ],
    [
        'xpm',
        'image/x-xpixmap'
    ],
    [
        'xpr',
        'application/vnd.is-xpr'
    ],
    [
        'xps',
        'application/vnd.ms-xpsdocument'
    ],
    [
        'xpw',
        'application/vnd.intercon.formnet'
    ],
    [
        'xpx',
        'application/vnd.intercon.formnet'
    ],
    [
        'xsd',
        'application/xml'
    ],
    [
        'xsl',
        'application/xml'
    ],
    [
        'xslt',
        'application/xslt+xml'
    ],
    [
        'xsm',
        'application/vnd.syncml+xml'
    ],
    [
        'xspf',
        'application/xspf+xml'
    ],
    [
        'xul',
        'application/vnd.mozilla.xul+xml'
    ],
    [
        'xvm',
        'application/xv+xml'
    ],
    [
        'xvml',
        'application/xv+xml'
    ],
    [
        'xwd',
        'image/x-xwindowdump'
    ],
    [
        'xyz',
        'chemical/x-xyz'
    ],
    [
        'xz',
        'application/x-xz'
    ],
    [
        'yaml',
        'text/yaml'
    ],
    [
        'yang',
        'application/yang'
    ],
    [
        'yin',
        'application/yin+xml'
    ],
    [
        'yml',
        'text/yaml'
    ],
    [
        'ymp',
        'text/x-suse-ymp'
    ],
    [
        'z',
        'application/x-compress'
    ],
    [
        'z1',
        'application/x-zmachine'
    ],
    [
        'z2',
        'application/x-zmachine'
    ],
    [
        'z3',
        'application/x-zmachine'
    ],
    [
        'z4',
        'application/x-zmachine'
    ],
    [
        'z5',
        'application/x-zmachine'
    ],
    [
        'z6',
        'application/x-zmachine'
    ],
    [
        'z7',
        'application/x-zmachine'
    ],
    [
        'z8',
        'application/x-zmachine'
    ],
    [
        'zaz',
        'application/vnd.zzazz.deck+xml'
    ],
    [
        'zip',
        'application/zip'
    ],
    [
        'zir',
        'application/vnd.zul'
    ],
    [
        'zirz',
        'application/vnd.zul'
    ],
    [
        'zmm',
        'application/vnd.handheld-entertainment+xml'
    ],
    [
        'zsh',
        'text/x-scriptzsh'
    ]
]);
function toFileWithPath(file, path, h) {
    const f = withMimeType(file);
    const { webkitRelativePath } = file;
    const p = typeof path === 'string' ? path : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0 ? webkitRelativePath : "./".concat(file.name);
    if (typeof f.path !== 'string') {
        setObjProp(f, 'path', p);
    }
    if (h !== undefined) {
        Object.defineProperty(f, 'handle', {
            value: h,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    // Always populate a relative path so that even electron apps have access to a relativePath value
    setObjProp(f, 'relativePath', p);
    return f;
}
function withMimeType(file) {
    const { name } = file;
    const hasExtension = name && name.lastIndexOf('.') !== -1;
    if (hasExtension && !file.type) {
        const ext = name.split('.').pop().toLowerCase();
        const type = COMMON_MIME_TYPES.get(ext);
        if (type) {
            Object.defineProperty(file, 'type', {
                value: type,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
    }
    return file;
}
function setObjProp(f, key, value) {
    Object.defineProperty(f, key, {
        value,
        writable: false,
        configurable: false,
        enumerable: true
    });
} //# sourceMappingURL=file.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromEvent",
    ()=>fromEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file.js [app-client] (ecmascript)");
;
;
const FILES_TO_IGNORE = [
    // Thumbnail cache files for macOS and Windows
    '.DS_Store',
    'Thumbs.db' // Windows
];
function fromEvent(evt) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
        if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {
            return getDataTransferFiles(evt.dataTransfer, evt.type);
        } else if (isChangeEvt(evt)) {
            return getInputFiles(evt);
        } else if (Array.isArray(evt) && evt.every((item)=>'getFile' in item && typeof item.getFile === 'function')) {
            return getFsHandleFiles(evt);
        }
        return [];
    });
}
function isDataTransfer(value) {
    return isObject(value);
}
function isChangeEvt(value) {
    return isObject(value) && isObject(value.target);
}
function isObject(v) {
    return typeof v === 'object' && v !== null;
}
function getInputFiles(evt) {
    return fromList(evt.target.files).map((file)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFileWithPath"])(file));
}
// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
function getFsHandleFiles(handles) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
        const files = yield Promise.all(handles.map((h)=>h.getFile()));
        return files.map((file)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFileWithPath"])(file));
    });
}
function getDataTransferFiles(dt, type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
        // IE11 does not support dataTransfer.items
        // See https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/items#Browser_compatibility
        if (dt.items) {
            const items = fromList(dt.items).filter((item)=>item.kind === 'file');
            // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
            // only 'dragstart' and 'drop' has access to the data (source node)
            if (type !== 'drop') {
                return items;
            }
            const files = yield Promise.all(items.map(toFilePromises));
            return noIgnoredFiles(flatten(files));
        }
        return noIgnoredFiles(fromList(dt.files).map((file)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFileWithPath"])(file)));
    });
}
function noIgnoredFiles(files) {
    return files.filter((file)=>FILES_TO_IGNORE.indexOf(file.name) === -1);
}
// IE11 does not support Array.from()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
// https://developer.mozilla.org/en-US/docs/Web/API/FileList
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
function fromList(items) {
    if (items === null) {
        return [];
    }
    const files = [];
    // tslint:disable: prefer-for-of
    for(let i = 0; i < items.length; i++){
        const file = items[i];
        files.push(file);
    }
    return files;
}
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
function toFilePromises(item) {
    if (typeof item.webkitGetAsEntry !== 'function') {
        return fromDataTransferItem(item);
    }
    const entry = item.webkitGetAsEntry();
    // Safari supports dropping an image node from a different window and can be retrieved using
    // the DataTransferItem.getAsFile() API
    // NOTE: FileSystemEntry.file() throws if trying to get the file
    if (entry && entry.isDirectory) {
        return fromDirEntry(entry);
    }
    return fromDataTransferItem(item, entry);
}
function flatten(items) {
    return items.reduce((acc, files)=>[
            ...acc,
            ...Array.isArray(files) ? flatten(files) : [
                files
            ]
        ], []);
}
function fromDataTransferItem(item, entry) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
        var _a;
        // Check if we're in a secure context; due to a bug in Chrome (as far as we know)
        // the browser crashes when calling this API (yet to be confirmed as a consistent behaviour).
        //
        // See:
        // - https://issues.chromium.org/issues/40186242
        // - https://github.com/react-dropzone/react-dropzone/issues/1397
        if (globalThis.isSecureContext && typeof item.getAsFileSystemHandle === 'function') {
            const h = yield item.getAsFileSystemHandle();
            if (h === null) {
                throw new Error("".concat(item, " is not a File"));
            }
            // It seems that the handle can be `undefined` (see https://github.com/react-dropzone/file-selector/issues/120),
            // so we check if it isn't; if it is, the code path continues to the next API (`getAsFile`).
            if (h !== undefined) {
                const file = yield h.getFile();
                file.handle = h;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFileWithPath"])(file);
            }
        }
        const file = item.getAsFile();
        if (!file) {
            throw new Error("".concat(item, " is not a File"));
        }
        const fwp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFileWithPath"])(file, (_a = entry === null || entry === void 0 ? void 0 : entry.fullPath) !== null && _a !== void 0 ? _a : undefined);
        return fwp;
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
function fromEntry(entry) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
        return entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry);
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
function fromDirEntry(entry) {
    const reader = entry.createReader();
    return new Promise((resolve, reject)=>{
        const entries = [];
        function readEntries() {
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
            reader.readEntries((batch)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
                    if (!batch.length) {
                        // Done reading directory
                        try {
                            const files = yield Promise.all(entries);
                            resolve(files);
                        } catch (err) {
                            reject(err);
                        }
                    } else {
                        const items = Promise.all(batch.map(fromEntry));
                        entries.push(items);
                        // Continue reading
                        readEntries();
                    }
                }), (err)=>{
                reject(err);
            });
        }
        readEntries();
    });
}
// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
function fromFileEntry(entry) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$tslib$40$2$2e$8$2e$1$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            entry.file((file)=>{
                const fwp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFileWithPath"])(file, entry.fullPath);
                resolve(fwp);
            }, (err)=>{
                reject(err);
            });
        });
    });
} //# sourceMappingURL=file-selector.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/attr-accept@2.2.5/node_modules/attr-accept/dist/es/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = function(file, acceptedFiles) {
    if (file && acceptedFiles) {
        var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
        if (acceptedFilesArray.length === 0) {
            return true;
        }
        var fileName = file.name || '';
        var mimeType = (file.type || '').toLowerCase();
        var baseMimeType = mimeType.replace(/\/.*$/, '');
        return acceptedFilesArray.some(function(type) {
            var validType = type.trim().toLowerCase();
            if (validType.charAt(0) === '.') {
                return fileName.toLowerCase().endsWith(validType);
            } else if (validType.endsWith('/*')) {
                // This is something like a image/* mime type
                return baseMimeType === validType.replace(/\/.*$/, '');
            }
            return mimeType === validType;
        });
    }
    return true;
};
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-dropzone@14.3.8_react@19.1.0/node_modules/react-dropzone/dist/es/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorCode",
    ()=>ErrorCode,
    "FILE_INVALID_TYPE",
    ()=>FILE_INVALID_TYPE,
    "FILE_TOO_LARGE",
    ()=>FILE_TOO_LARGE,
    "FILE_TOO_SMALL",
    ()=>FILE_TOO_SMALL,
    "TOO_MANY_FILES",
    ()=>TOO_MANY_FILES,
    "TOO_MANY_FILES_REJECTION",
    ()=>TOO_MANY_FILES_REJECTION,
    "acceptPropAsAcceptAttr",
    ()=>acceptPropAsAcceptAttr,
    "allFilesAccepted",
    ()=>allFilesAccepted,
    "canUseFileSystemAccessAPI",
    ()=>canUseFileSystemAccessAPI,
    "composeEventHandlers",
    ()=>composeEventHandlers,
    "fileAccepted",
    ()=>fileAccepted,
    "fileMatchSize",
    ()=>fileMatchSize,
    "getInvalidTypeRejectionErr",
    ()=>getInvalidTypeRejectionErr,
    "getTooLargeRejectionErr",
    ()=>getTooLargeRejectionErr,
    "getTooSmallRejectionErr",
    ()=>getTooSmallRejectionErr,
    "isAbort",
    ()=>isAbort,
    "isEvtWithFiles",
    ()=>isEvtWithFiles,
    "isExt",
    ()=>isExt,
    "isIeOrEdge",
    ()=>isIeOrEdge,
    "isKindFile",
    ()=>isKindFile,
    "isMIMEType",
    ()=>isMIMEType,
    "isPropagationStopped",
    ()=>isPropagationStopped,
    "isSecurityError",
    ()=>isSecurityError,
    "onDocumentDragOver",
    ()=>onDocumentDragOver,
    "pickerOptionsFromAccept",
    ()=>pickerOptionsFromAccept
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$attr$2d$accept$40$2$2e$2$2e$5$2f$node_modules$2f$attr$2d$accept$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/attr-accept@2.2.5/node_modules/attr-accept/dist/es/index.js [app-client] (ecmascript)");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
;
var accepts = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$attr$2d$accept$40$2$2e$2$2e$5$2f$node_modules$2f$attr$2d$accept$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "function" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$attr$2d$accept$40$2$2e$2$2e$5$2f$node_modules$2f$attr$2d$accept$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$attr$2d$accept$40$2$2e$2$2e$5$2f$node_modules$2f$attr$2d$accept$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].default; // Error codes
var FILE_INVALID_TYPE = "file-invalid-type";
var FILE_TOO_LARGE = "file-too-large";
var FILE_TOO_SMALL = "file-too-small";
var TOO_MANY_FILES = "too-many-files";
var ErrorCode = {
    FileInvalidType: FILE_INVALID_TYPE,
    FileTooLarge: FILE_TOO_LARGE,
    FileTooSmall: FILE_TOO_SMALL,
    TooManyFiles: TOO_MANY_FILES
};
var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr() {
    var accept = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var acceptArr = accept.split(",");
    var msg = acceptArr.length > 1 ? "one of ".concat(acceptArr.join(", ")) : acceptArr[0];
    return {
        code: FILE_INVALID_TYPE,
        message: "File type must be ".concat(msg)
    };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
    return {
        code: FILE_TOO_LARGE,
        message: "File is larger than ".concat(maxSize, " ").concat(maxSize === 1 ? "byte" : "bytes")
    };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
    return {
        code: FILE_TOO_SMALL,
        message: "File is smaller than ".concat(minSize, " ").concat(minSize === 1 ? "byte" : "bytes")
    };
};
var TOO_MANY_FILES_REJECTION = {
    code: TOO_MANY_FILES,
    message: "Too many files"
};
function fileAccepted(file, accept) {
    var isAcceptable = file.type === "application/x-moz-file" || accepts(file, accept);
    return [
        isAcceptable,
        isAcceptable ? null : getInvalidTypeRejectionErr(accept)
    ];
}
function fileMatchSize(file, minSize, maxSize) {
    if (isDefined(file.size)) {
        if (isDefined(minSize) && isDefined(maxSize)) {
            if (file.size > maxSize) return [
                false,
                getTooLargeRejectionErr(maxSize)
            ];
            if (file.size < minSize) return [
                false,
                getTooSmallRejectionErr(minSize)
            ];
        } else if (isDefined(minSize) && file.size < minSize) return [
            false,
            getTooSmallRejectionErr(minSize)
        ];
        else if (isDefined(maxSize) && file.size > maxSize) return [
            false,
            getTooLargeRejectionErr(maxSize)
        ];
    }
    return [
        true,
        null
    ];
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function allFilesAccepted(_ref) {
    var files = _ref.files, accept = _ref.accept, minSize = _ref.minSize, maxSize = _ref.maxSize, multiple = _ref.multiple, maxFiles = _ref.maxFiles, validator = _ref.validator;
    if (!multiple && files.length > 1 || multiple && maxFiles >= 1 && files.length > maxFiles) {
        return false;
    }
    return files.every(function(file) {
        var _fileAccepted = fileAccepted(file, accept), _fileAccepted2 = _slicedToArray(_fileAccepted, 1), accepted = _fileAccepted2[0];
        var _fileMatchSize = fileMatchSize(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1), sizeMatch = _fileMatchSize2[0];
        var customErrors = validator ? validator(file) : null;
        return accepted && sizeMatch && !customErrors;
    });
} // React's synthetic events has event.isPropagationStopped,
function isPropagationStopped(event) {
    if (typeof event.isPropagationStopped === "function") {
        return event.isPropagationStopped();
    } else if (typeof event.cancelBubble !== "undefined") {
        return event.cancelBubble;
    }
    return false;
}
function isEvtWithFiles(event) {
    if (!event.dataTransfer) {
        return !!event.target && !!event.target.files;
    } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
    // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file
    return Array.prototype.some.call(event.dataTransfer.types, function(type) {
        return type === "Files" || type === "application/x-moz-file";
    });
}
function isKindFile(item) {
    return _typeof(item) === "object" && item !== null && item.kind === "file";
} // allow the entire document to be a drag target
function onDocumentDragOver(event) {
    event.preventDefault();
}
function isIe(userAgent) {
    return userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1;
}
function isEdge(userAgent) {
    return userAgent.indexOf("Edge/") !== -1;
}
function isIeOrEdge() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
    return isIe(userAgent) || isEdge(userAgent);
}
function composeEventHandlers() {
    for(var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++){
        fns[_key] = arguments[_key];
    }
    return function(event) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
            args[_key2 - 1] = arguments[_key2];
        }
        return fns.some(function(fn) {
            if (!isPropagationStopped(event) && fn) {
                fn.apply(void 0, [
                    event
                ].concat(args));
            }
            return isPropagationStopped(event);
        });
    };
}
function canUseFileSystemAccessAPI() {
    return "showOpenFilePicker" in window;
}
function pickerOptionsFromAccept(accept) {
    if (isDefined(accept)) {
        var acceptForPicker = Object.entries(accept).filter(function(_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2), mimeType = _ref3[0], ext = _ref3[1];
            var ok = true;
            if (!isMIMEType(mimeType)) {
                console.warn("Skipped \"".concat(mimeType, "\" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types."));
                ok = false;
            }
            if (!Array.isArray(ext) || !ext.every(isExt)) {
                console.warn("Skipped \"".concat(mimeType, "\" because an invalid file extension was provided."));
                ok = false;
            }
            return ok;
        }).reduce(function(agg, _ref4) {
            var _ref5 = _slicedToArray(_ref4, 2), mimeType = _ref5[0], ext = _ref5[1];
            return _objectSpread(_objectSpread({}, agg), {}, _defineProperty({}, mimeType, ext));
        }, {});
        return [
            {
                // description is required due to https://crbug.com/1264708
                description: "Files",
                accept: acceptForPicker
            }
        ];
    }
    return accept;
}
function acceptPropAsAcceptAttr(accept) {
    if (isDefined(accept)) {
        return Object.entries(accept).reduce(function(a, _ref6) {
            var _ref7 = _slicedToArray(_ref6, 2), mimeType = _ref7[0], ext = _ref7[1];
            return [].concat(_toConsumableArray(a), [
                mimeType
            ], _toConsumableArray(ext));
        }, []) // Silently discard invalid entries as pickerOptionsFromAccept warns about these
        .filter(function(v) {
            return isMIMEType(v) || isExt(v);
        }).join(",");
    }
    return undefined;
}
function isAbort(v) {
    return v instanceof DOMException && (v.name === "AbortError" || v.code === v.ABORT_ERR);
}
function isSecurityError(v) {
    return v instanceof DOMException && (v.name === "SecurityError" || v.code === v.SECURITY_ERR);
}
function isMIMEType(v) {
    return v === "audio/*" || v === "video/*" || v === "image/*" || v === "text/*" || v === "application/*" || /\w+\/[-+.\w]+/g.test(v);
}
function isExt(v) {
    return /^.*\.[\w]+$/.test(v);
} /**
 * @typedef {Object.<string, string[]>} AcceptProp
 */  /**
 * @typedef {object} FileError
 * @property {string} message
 * @property {ErrorCode|string} code
 */  /**
 * @typedef {"file-invalid-type"|"file-too-large"|"file-too-small"|"too-many-files"} ErrorCode
 */ 
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-dropzone@14.3.8_react@19.1.0/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDropzone",
    ()=>useDropzone
]);
/* eslint prefer-template: 0 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/file-selector@2.1.2/node_modules/file-selector/dist/es2015/file-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/react-dropzone@14.3.8_react@19.1.0/node_modules/react-dropzone/dist/es/utils/index.js [app-client] (ecmascript)");
var _excluded = [
    "children"
], _excluded2 = [
    "open"
], _excluded3 = [
    "refKey",
    "role",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onClick",
    "onDragEnter",
    "onDragOver",
    "onDragLeave",
    "onDrop"
], _excluded4 = [
    "refKey",
    "onChange",
    "onClick"
];
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
;
;
;
/**
 * Convenience wrapper component for the `useDropzone` hook
 *
 * ```jsx
 * <Dropzone>
 *   {({getRootProps, getInputProps}) => (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag 'n' drop some files here, or click to select files</p>
 *     </div>
 *   )}
 * </Dropzone>
 * ```
 */ var Dropzone = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(_ref, ref) {
    var children = _ref.children, params = _objectWithoutProperties(_ref, _excluded);
    var _useDropzone = useDropzone(params), open = _useDropzone.open, props = _objectWithoutProperties(_useDropzone, _excluded2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "Dropzone.useImperativeHandle": function() {
            return {
                open: open
            };
        }
    }["Dropzone.useImperativeHandle"], [
        open
    ]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children(_objectSpread(_objectSpread({}, props), {}, {
        open: open
    })));
});
Dropzone.displayName = "Dropzone"; // Add default props for react-docgen
var defaultProps = {
    disabled: false,
    getFilesFromEvent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$file$2d$selector$40$2$2e$1$2e$2$2f$node_modules$2f$file$2d$selector$2f$dist$2f$es2015$2f$file$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromEvent"],
    maxSize: Infinity,
    minSize: 0,
    multiple: true,
    maxFiles: 0,
    preventDropOnDocument: true,
    noClick: false,
    noKeyboard: false,
    noDrag: false,
    noDragEventsBubbling: false,
    validator: null,
    useFsAccessApi: false,
    autoFocus: false
};
Dropzone.defaultProps = defaultProps;
Dropzone.propTypes = {
    /**
   * Render function that exposes the dropzone state and prop getter fns
   *
   * @param {object} params
   * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
   * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
   * @param {Function} params.open Open the native file selection dialog
   * @param {boolean} params.isFocused Dropzone area is in focus
   * @param {boolean} params.isFileDialogActive File dialog is opened
   * @param {boolean} params.isDragActive Active drag is in progress
   * @param {boolean} params.isDragAccept Dragged files are accepted
   * @param {boolean} params.isDragReject Some dragged files are rejected
   * @param {File[]} params.acceptedFiles Accepted files
   * @param {FileRejection[]} params.fileRejections Rejected files and why they were rejected
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Set accepted file types.
   * Checkout https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker types option for more information.
   * Keep in mind that mime type determination is not reliable across platforms. CSV files,
   * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
   * Windows. In some cases there might not be a mime type set at all (https://github.com/react-dropzone/react-dropzone/issues/276).
   */ accept: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].objectOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string)),
    /**
   * Allow drag 'n' drop (or selection from the file dialog) of multiple files
   */ multiple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If false, allow dropped items to take over the current browser window
   */ preventDropOnDocument: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If true, disables click to open the native file selection dialog
   */ noClick: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If true, disables SPACE/ENTER to open the native file selection dialog.
   * Note that it also stops tracking the focus state.
   */ noKeyboard: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If true, disables drag 'n' drop
   */ noDrag: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If true, stops drag event propagation to parents
   */ noDragEventsBubbling: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Minimum file size (in bytes)
   */ minSize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Maximum file size (in bytes)
   */ maxSize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Maximum accepted number of files
   * The default value is 0 which means there is no limitation to how many files are accepted.
   */ maxFiles: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * Enable/disable the dropzone
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Use this to provide a custom file aggregator
   *
   * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
   */ getFilesFromEvent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when closing the file dialog with no selection
   */ onFileDialogCancel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when opening the file dialog
   */ onFileDialogOpen: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Set to true to use the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
   * to open the file picker instead of using an `<input type="file">` click event.
   */ useFsAccessApi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Set to true to focus the root element on render
   */ autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * Cb for when the `dragenter` event occurs.
   *
   * @param {DragEvent} event
   */ onDragEnter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when the `dragleave` event occurs
   *
   * @param {DragEvent} event
   */ onDragLeave: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when the `dragover` event occurs
   *
   * @param {DragEvent} event
   */ onDragOver: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when the `drop` event occurs.
   * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
   *
   * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
   * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
   * If `multiple` is set to false and additional files are dropped,
   * all files besides the first will be rejected.
   * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
   *
   * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
   * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
   *
   * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
   * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
   *
   * ```js
   * function onDrop(acceptedFiles) {
   *   const req = request.post('/upload')
   *   acceptedFiles.forEach(file => {
   *     req.attach(file.name, file)
   *   })
   *   req.end(callback)
   * }
   * ```
   *
   * @param {File[]} acceptedFiles
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
   */ onDrop: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are accepted, this callback is not invoked.
   *
   * @param {File[]} files
   * @param {(DragEvent|Event)} event
   */ onDropAccepted: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when the `drop` event occurs.
   * Note that if no files are rejected, this callback is not invoked.
   *
   * @param {FileRejection[]} fileRejections
   * @param {(DragEvent|Event)} event
   */ onDropRejected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Cb for when there's some error from any of the promises.
   *
   * @param {Error} error
   */ onError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * Custom validation function. It must return null if there's no errors.
   * @param {File} file
   * @returns {FileError|FileError[]|null}
   */ validator: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$prop$2d$types$40$15$2e$8$2e$1$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].func
};
const __TURBOPACK__default__export__ = Dropzone;
/**
 * A function that is invoked for the `dragenter`,
 * `dragover` and `dragleave` events.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dragCb
 * @param {DragEvent} event
 */ /**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are not files (such as link, text, etc.).
 *
 * @callback dropCb
 * @param {File[]} acceptedFiles List of accepted files
 * @param {FileRejection[]} fileRejections List of rejected files and why they were rejected
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */ /**
 * A function that is invoked for the `drop` or input change event.
 * It is not invoked if the items are files (such as link, text, etc.).
 *
 * @callback dropAcceptedCb
 * @param {File[]} files List of accepted files that meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */ /**
 * A function that is invoked for the `drop` or input change event.
 *
 * @callback dropRejectedCb
 * @param {File[]} files List of rejected files that do not meet the given criteria
 * (`accept`, `multiple`, `minSize`, `maxSize`)
 * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
 */ /**
 * A function that is used aggregate files,
 * in a asynchronous fashion, from drag or input change events.
 *
 * @callback getFilesFromEvent
 * @param {(DragEvent|Event|Array<FileSystemFileHandle>)} event A drag event or input change event (if files were selected via the file dialog)
 * @returns {(File[]|Promise<File[]>)}
 */ /**
 * An object with the current dropzone state.
 *
 * @typedef {object} DropzoneState
 * @property {boolean} isFocused Dropzone area is in focus
 * @property {boolean} isFileDialogActive File dialog is opened
 * @property {boolean} isDragActive Active drag is in progress
 * @property {boolean} isDragAccept Dragged files are accepted
 * @property {boolean} isDragReject Some dragged files are rejected
 * @property {File[]} acceptedFiles Accepted files
 * @property {FileRejection[]} fileRejections Rejected files and why they were rejected
 */ /**
 * An object with the dropzone methods.
 *
 * @typedef {object} DropzoneMethods
 * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
 * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
 * @property {Function} open Open the native file selection dialog
 */ var initialState = {
    isFocused: false,
    isFileDialogActive: false,
    isDragActive: false,
    isDragAccept: false,
    isDragReject: false,
    acceptedFiles: [],
    fileRejections: []
};
function useDropzone() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _defaultProps$props = _objectSpread(_objectSpread({}, defaultProps), props), accept = _defaultProps$props.accept, disabled = _defaultProps$props.disabled, getFilesFromEvent = _defaultProps$props.getFilesFromEvent, maxSize = _defaultProps$props.maxSize, minSize = _defaultProps$props.minSize, multiple = _defaultProps$props.multiple, maxFiles = _defaultProps$props.maxFiles, onDragEnter = _defaultProps$props.onDragEnter, onDragLeave = _defaultProps$props.onDragLeave, onDragOver = _defaultProps$props.onDragOver, onDrop = _defaultProps$props.onDrop, onDropAccepted = _defaultProps$props.onDropAccepted, onDropRejected = _defaultProps$props.onDropRejected, onFileDialogCancel = _defaultProps$props.onFileDialogCancel, onFileDialogOpen = _defaultProps$props.onFileDialogOpen, useFsAccessApi = _defaultProps$props.useFsAccessApi, autoFocus = _defaultProps$props.autoFocus, preventDropOnDocument = _defaultProps$props.preventDropOnDocument, noClick = _defaultProps$props.noClick, noKeyboard = _defaultProps$props.noKeyboard, noDrag = _defaultProps$props.noDrag, noDragEventsBubbling = _defaultProps$props.noDragEventsBubbling, onError = _defaultProps$props.onError, validator = _defaultProps$props.validator;
    var acceptAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropzone.useMemo[acceptAttr]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["acceptPropAsAcceptAttr"])(accept);
        }
    }["useDropzone.useMemo[acceptAttr]"], [
        accept
    ]);
    var pickerTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropzone.useMemo[pickerTypes]": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickerOptionsFromAccept"])(accept);
        }
    }["useDropzone.useMemo[pickerTypes]"], [
        accept
    ]);
    var onFileDialogOpenCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropzone.useMemo[onFileDialogOpenCb]": function() {
            return typeof onFileDialogOpen === "function" ? onFileDialogOpen : noop;
        }
    }["useDropzone.useMemo[onFileDialogOpenCb]"], [
        onFileDialogOpen
    ]);
    var onFileDialogCancelCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropzone.useMemo[onFileDialogCancelCb]": function() {
            return typeof onFileDialogCancel === "function" ? onFileDialogCancel : noop;
        }
    }["useDropzone.useMemo[onFileDialogCancelCb]"], [
        onFileDialogCancel
    ]);
    /**
   * @constant
   * @type {React.MutableRefObject<HTMLElement>}
   */ var rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, initialState), _useReducer2 = _slicedToArray(_useReducer, 2), state = _useReducer2[0], dispatch = _useReducer2[1];
    var isFocused = state.isFocused, isFileDialogActive = state.isFileDialogActive;
    var fsAccessApiWorksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(typeof window !== "undefined" && window.isSecureContext && useFsAccessApi && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseFileSystemAccessAPI"])()); // Update file dialog active state when the window is focused on
    var onWindowFocus = function onWindowFocus() {
        // Execute the timeout only if the file dialog is opened in the browser
        if (!fsAccessApiWorksRef.current && isFileDialogActive) {
            setTimeout(function() {
                if (inputRef.current) {
                    var files = inputRef.current.files;
                    if (!files.length) {
                        dispatch({
                            type: "closeDialog"
                        });
                        onFileDialogCancelCb();
                    }
                }
            }, 300);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDropzone.useEffect": function() {
            window.addEventListener("focus", onWindowFocus, false);
            return ({
                "useDropzone.useEffect": function() {
                    window.removeEventListener("focus", onWindowFocus, false);
                }
            })["useDropzone.useEffect"];
        }
    }["useDropzone.useEffect"], [
        inputRef,
        isFileDialogActive,
        onFileDialogCancelCb,
        fsAccessApiWorksRef
    ]);
    var dragTargetsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    var onDocumentDrop = function onDocumentDrop(event) {
        if (rootRef.current && rootRef.current.contains(event.target)) {
            // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
            return;
        }
        event.preventDefault();
        dragTargetsRef.current = [];
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDropzone.useEffect": function() {
            if (preventDropOnDocument) {
                document.addEventListener("dragover", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDocumentDragOver"], false);
                document.addEventListener("drop", onDocumentDrop, false);
            }
            return ({
                "useDropzone.useEffect": function() {
                    if (preventDropOnDocument) {
                        document.removeEventListener("dragover", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDocumentDragOver"]);
                        document.removeEventListener("drop", onDocumentDrop);
                    }
                }
            })["useDropzone.useEffect"];
        }
    }["useDropzone.useEffect"], [
        rootRef,
        preventDropOnDocument
    ]); // Auto focus the root when autoFocus is true
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDropzone.useEffect": function() {
            if (!disabled && autoFocus && rootRef.current) {
                rootRef.current.focus();
            }
            return ({
                "useDropzone.useEffect": function() {}
            })["useDropzone.useEffect"];
        }
    }["useDropzone.useEffect"], [
        rootRef,
        autoFocus,
        disabled
    ]);
    var onErrCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onErrCb]": function(e) {
            if (onError) {
                onError(e);
            } else {
                // Let the user know something's gone wrong if they haven't provided the onError cb.
                console.error(e);
            }
        }
    }["useDropzone.useCallback[onErrCb]"], [
        onError
    ]);
    var onDragEnterCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onDragEnterCb]": function(event) {
            event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done
            event.persist();
            stopPropagation(event);
            dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [
                event.target
            ]);
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvtWithFiles"])(event)) {
                Promise.resolve(getFilesFromEvent(event)).then({
                    "useDropzone.useCallback[onDragEnterCb]": function(files) {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPropagationStopped"])(event) && !noDragEventsBubbling) {
                            return;
                        }
                        var fileCount = files.length;
                        var isDragAccept = fileCount > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allFilesAccepted"])({
                            files: files,
                            accept: acceptAttr,
                            minSize: minSize,
                            maxSize: maxSize,
                            multiple: multiple,
                            maxFiles: maxFiles,
                            validator: validator
                        });
                        var isDragReject = fileCount > 0 && !isDragAccept;
                        dispatch({
                            isDragAccept: isDragAccept,
                            isDragReject: isDragReject,
                            isDragActive: true,
                            type: "setDraggedFiles"
                        });
                        if (onDragEnter) {
                            onDragEnter(event);
                        }
                    }
                }["useDropzone.useCallback[onDragEnterCb]"]).catch({
                    "useDropzone.useCallback[onDragEnterCb]": function(e) {
                        return onErrCb(e);
                    }
                }["useDropzone.useCallback[onDragEnterCb]"]);
            }
        }
    }["useDropzone.useCallback[onDragEnterCb]"], [
        getFilesFromEvent,
        onDragEnter,
        onErrCb,
        noDragEventsBubbling,
        acceptAttr,
        minSize,
        maxSize,
        multiple,
        maxFiles,
        validator
    ]);
    var onDragOverCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onDragOverCb]": function(event) {
            event.preventDefault();
            event.persist();
            stopPropagation(event);
            var hasFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvtWithFiles"])(event);
            if (hasFiles && event.dataTransfer) {
                try {
                    event.dataTransfer.dropEffect = "copy";
                } catch (_unused) {}
            /* eslint-disable-line no-empty */ }
            if (hasFiles && onDragOver) {
                onDragOver(event);
            }
            return false;
        }
    }["useDropzone.useCallback[onDragOverCb]"], [
        onDragOver,
        noDragEventsBubbling
    ]);
    var onDragLeaveCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onDragLeaveCb]": function(event) {
            event.preventDefault();
            event.persist();
            stopPropagation(event); // Only deactivate once the dropzone and all children have been left
            var targets = dragTargetsRef.current.filter({
                "useDropzone.useCallback[onDragLeaveCb].targets": function(target) {
                    return rootRef.current && rootRef.current.contains(target);
                }
            }["useDropzone.useCallback[onDragLeaveCb].targets"]); // Make sure to remove a target present multiple times only once
            // (Firefox may fire dragenter/dragleave multiple times on the same element)
            var targetIdx = targets.indexOf(event.target);
            if (targetIdx !== -1) {
                targets.splice(targetIdx, 1);
            }
            dragTargetsRef.current = targets;
            if (targets.length > 0) {
                return;
            }
            dispatch({
                type: "setDraggedFiles",
                isDragActive: false,
                isDragAccept: false,
                isDragReject: false
            });
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvtWithFiles"])(event) && onDragLeave) {
                onDragLeave(event);
            }
        }
    }["useDropzone.useCallback[onDragLeaveCb]"], [
        rootRef,
        onDragLeave,
        noDragEventsBubbling
    ]);
    var setFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[setFiles]": function(files, event) {
            var acceptedFiles = [];
            var fileRejections = [];
            files.forEach({
                "useDropzone.useCallback[setFiles]": function(file) {
                    var _fileAccepted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileAccepted"])(file, acceptAttr), _fileAccepted2 = _slicedToArray(_fileAccepted, 2), accepted = _fileAccepted2[0], acceptError = _fileAccepted2[1];
                    var _fileMatchSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileMatchSize"])(file, minSize, maxSize), _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2), sizeMatch = _fileMatchSize2[0], sizeError = _fileMatchSize2[1];
                    var customErrors = validator ? validator(file) : null;
                    if (accepted && sizeMatch && !customErrors) {
                        acceptedFiles.push(file);
                    } else {
                        var errors = [
                            acceptError,
                            sizeError
                        ];
                        if (customErrors) {
                            errors = errors.concat(customErrors);
                        }
                        fileRejections.push({
                            file: file,
                            errors: errors.filter({
                                "useDropzone.useCallback[setFiles]": function(e) {
                                    return e;
                                }
                            }["useDropzone.useCallback[setFiles]"])
                        });
                    }
                }
            }["useDropzone.useCallback[setFiles]"]);
            if (!multiple && acceptedFiles.length > 1 || multiple && maxFiles >= 1 && acceptedFiles.length > maxFiles) {
                // Reject everything and empty accepted files
                acceptedFiles.forEach({
                    "useDropzone.useCallback[setFiles]": function(file) {
                        fileRejections.push({
                            file: file,
                            errors: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOO_MANY_FILES_REJECTION"]
                            ]
                        });
                    }
                }["useDropzone.useCallback[setFiles]"]);
                acceptedFiles.splice(0);
            }
            dispatch({
                acceptedFiles: acceptedFiles,
                fileRejections: fileRejections,
                isDragReject: fileRejections.length > 0,
                type: "setFiles"
            });
            if (onDrop) {
                onDrop(acceptedFiles, fileRejections, event);
            }
            if (fileRejections.length > 0 && onDropRejected) {
                onDropRejected(fileRejections, event);
            }
            if (acceptedFiles.length > 0 && onDropAccepted) {
                onDropAccepted(acceptedFiles, event);
            }
        }
    }["useDropzone.useCallback[setFiles]"], [
        dispatch,
        multiple,
        acceptAttr,
        minSize,
        maxSize,
        maxFiles,
        onDrop,
        onDropAccepted,
        onDropRejected,
        validator
    ]);
    var onDropCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onDropCb]": function(event) {
            event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done
            event.persist();
            stopPropagation(event);
            dragTargetsRef.current = [];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvtWithFiles"])(event)) {
                Promise.resolve(getFilesFromEvent(event)).then({
                    "useDropzone.useCallback[onDropCb]": function(files) {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPropagationStopped"])(event) && !noDragEventsBubbling) {
                            return;
                        }
                        setFiles(files, event);
                    }
                }["useDropzone.useCallback[onDropCb]"]).catch({
                    "useDropzone.useCallback[onDropCb]": function(e) {
                        return onErrCb(e);
                    }
                }["useDropzone.useCallback[onDropCb]"]);
            }
            dispatch({
                type: "reset"
            });
        }
    }["useDropzone.useCallback[onDropCb]"], [
        getFilesFromEvent,
        setFiles,
        onErrCb,
        noDragEventsBubbling
    ]); // Fn for opening the file dialog programmatically
    var openFileDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[openFileDialog]": function() {
            // No point to use FS access APIs if context is not secure
            // https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts#feature_detection
            if (fsAccessApiWorksRef.current) {
                dispatch({
                    type: "openDialog"
                });
                onFileDialogOpenCb(); // https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
                var opts = {
                    multiple: multiple,
                    types: pickerTypes
                };
                window.showOpenFilePicker(opts).then({
                    "useDropzone.useCallback[openFileDialog]": function(handles) {
                        return getFilesFromEvent(handles);
                    }
                }["useDropzone.useCallback[openFileDialog]"]).then({
                    "useDropzone.useCallback[openFileDialog]": function(files) {
                        setFiles(files, null);
                        dispatch({
                            type: "closeDialog"
                        });
                    }
                }["useDropzone.useCallback[openFileDialog]"]).catch({
                    "useDropzone.useCallback[openFileDialog]": function(e) {
                        // AbortError means the user canceled
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAbort"])(e)) {
                            onFileDialogCancelCb(e);
                            dispatch({
                                type: "closeDialog"
                            });
                        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSecurityError"])(e)) {
                            fsAccessApiWorksRef.current = false; // CORS, so cannot use this API
                            // Try using the input
                            if (inputRef.current) {
                                inputRef.current.value = null;
                                inputRef.current.click();
                            } else {
                                onErrCb(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."));
                            }
                        } else {
                            onErrCb(e);
                        }
                    }
                }["useDropzone.useCallback[openFileDialog]"]);
                return;
            }
            if (inputRef.current) {
                dispatch({
                    type: "openDialog"
                });
                onFileDialogOpenCb();
                inputRef.current.value = null;
                inputRef.current.click();
            }
        }
    }["useDropzone.useCallback[openFileDialog]"], [
        dispatch,
        onFileDialogOpenCb,
        onFileDialogCancelCb,
        useFsAccessApi,
        setFiles,
        onErrCb,
        pickerTypes,
        multiple
    ]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone
    var onKeyDownCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onKeyDownCb]": function(event) {
            // Ignore keyboard events bubbling up the DOM tree
            if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
                return;
            }
            if (event.key === " " || event.key === "Enter" || event.keyCode === 32 || event.keyCode === 13) {
                event.preventDefault();
                openFileDialog();
            }
        }
    }["useDropzone.useCallback[onKeyDownCb]"], [
        rootRef,
        openFileDialog
    ]); // Update focus state for the dropzone
    var onFocusCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onFocusCb]": function() {
            dispatch({
                type: "focus"
            });
        }
    }["useDropzone.useCallback[onFocusCb]"], []);
    var onBlurCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onBlurCb]": function() {
            dispatch({
                type: "blur"
            });
        }
    }["useDropzone.useCallback[onBlurCb]"], []); // Cb to open the file dialog when click occurs on the dropzone
    var onClickCb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onClickCb]": function() {
            if (noClick) {
                return;
            } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
            // to ensure React can handle state changes
            // See: https://github.com/react-dropzone/react-dropzone/issues/450
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIeOrEdge"])()) {
                setTimeout(openFileDialog, 0);
            } else {
                openFileDialog();
            }
        }
    }["useDropzone.useCallback[onClickCb]"], [
        noClick,
        openFileDialog
    ]);
    var composeHandler = function composeHandler(fn) {
        return disabled ? null : fn;
    };
    var composeKeyboardHandler = function composeKeyboardHandler(fn) {
        return noKeyboard ? null : composeHandler(fn);
    };
    var composeDragHandler = function composeDragHandler(fn) {
        return noDrag ? null : composeHandler(fn);
    };
    var stopPropagation = function stopPropagation(event) {
        if (noDragEventsBubbling) {
            event.stopPropagation();
        }
    };
    var getRootProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropzone.useMemo[getRootProps]": function() {
            return ({
                "useDropzone.useMemo[getRootProps]": function() {
                    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, role = _ref2.role, onKeyDown = _ref2.onKeyDown, onFocus = _ref2.onFocus, onBlur = _ref2.onBlur, onClick = _ref2.onClick, onDragEnter = _ref2.onDragEnter, onDragOver = _ref2.onDragOver, onDragLeave = _ref2.onDragLeave, onDrop = _ref2.onDrop, rest = _objectWithoutProperties(_ref2, _excluded3);
                    return _objectSpread(_objectSpread(_defineProperty({
                        onKeyDown: composeKeyboardHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onKeyDown, onKeyDownCb)),
                        onFocus: composeKeyboardHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onFocus, onFocusCb)),
                        onBlur: composeKeyboardHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onBlur, onBlurCb)),
                        onClick: composeHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onClick, onClickCb)),
                        onDragEnter: composeDragHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onDragEnter, onDragEnterCb)),
                        onDragOver: composeDragHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onDragOver, onDragOverCb)),
                        onDragLeave: composeDragHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onDragLeave, onDragLeaveCb)),
                        onDrop: composeDragHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onDrop, onDropCb)),
                        role: typeof role === "string" && role !== "" ? role : "presentation"
                    }, refKey, rootRef), !disabled && !noKeyboard ? {
                        tabIndex: 0
                    } : {}), rest);
                }
            })["useDropzone.useMemo[getRootProps]"];
        }
    }["useDropzone.useMemo[getRootProps]"], [
        rootRef,
        onKeyDownCb,
        onFocusCb,
        onBlurCb,
        onClickCb,
        onDragEnterCb,
        onDragOverCb,
        onDragLeaveCb,
        onDropCb,
        noKeyboard,
        noDrag,
        disabled
    ]);
    var onInputElementClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDropzone.useCallback[onInputElementClick]": function(event) {
            event.stopPropagation();
        }
    }["useDropzone.useCallback[onInputElementClick]"], []);
    var getInputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropzone.useMemo[getInputProps]": function() {
            return ({
                "useDropzone.useMemo[getInputProps]": function() {
                    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, onChange = _ref3.onChange, onClick = _ref3.onClick, rest = _objectWithoutProperties(_ref3, _excluded4);
                    var inputProps = _defineProperty({
                        accept: acceptAttr,
                        multiple: multiple,
                        type: "file",
                        style: {
                            border: 0,
                            clip: "rect(0, 0, 0, 0)",
                            clipPath: "inset(50%)",
                            height: "1px",
                            margin: "0 -1px -1px 0",
                            overflow: "hidden",
                            padding: 0,
                            position: "absolute",
                            width: "1px",
                            whiteSpace: "nowrap"
                        },
                        onChange: composeHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onChange, onDropCb)),
                        onClick: composeHandler((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$react$2d$dropzone$40$14$2e$3$2e$8_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(onClick, onInputElementClick)),
                        tabIndex: -1
                    }, refKey, inputRef);
                    return _objectSpread(_objectSpread({}, inputProps), rest);
                }
            })["useDropzone.useMemo[getInputProps]"];
        }
    }["useDropzone.useMemo[getInputProps]"], [
        inputRef,
        accept,
        multiple,
        onDropCb,
        disabled
    ]);
    return _objectSpread(_objectSpread({}, state), {}, {
        isFocused: isFocused && !disabled,
        getRootProps: getRootProps,
        getInputProps: getInputProps,
        rootRef: rootRef,
        inputRef: inputRef,
        open: composeHandler(openFileDialog)
    });
}
/**
 * @param {DropzoneState} state
 * @param {{type: string} & DropzoneState} action
 * @returns {DropzoneState}
 */ function reducer(state, action) {
    /* istanbul ignore next */ switch(action.type){
        case "focus":
            return _objectSpread(_objectSpread({}, state), {}, {
                isFocused: true
            });
        case "blur":
            return _objectSpread(_objectSpread({}, state), {}, {
                isFocused: false
            });
        case "openDialog":
            return _objectSpread(_objectSpread({}, initialState), {}, {
                isFileDialogActive: true
            });
        case "closeDialog":
            return _objectSpread(_objectSpread({}, state), {}, {
                isFileDialogActive: false
            });
        case "setDraggedFiles":
            return _objectSpread(_objectSpread({}, state), {}, {
                isDragActive: action.isDragActive,
                isDragAccept: action.isDragAccept,
                isDragReject: action.isDragReject
            });
        case "setFiles":
            return _objectSpread(_objectSpread({}, state), {}, {
                acceptedFiles: action.acceptedFiles,
                fileRejections: action.fileRejections,
                isDragReject: action.isDragReject
            });
        case "reset":
            return _objectSpread({}, initialState);
        default:
            return state;
    }
}
function noop() {}
;
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/next@15.5.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
        let { className, ...props } = param;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide-".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))), "lucide-".concat(iconName), className),
            ...props
        });
    });
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
 //# sourceMappingURL=file-text.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileSpreadsheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M8 13h2",
            key: "yr2amv"
        }
    ],
    [
        "path",
        {
            d: "M14 13h2",
            key: "un5t4a"
        }
    ],
    [
        "path",
        {
            d: "M8 17h2",
            key: "2yhykz"
        }
    ],
    [
        "path",
        {
            d: "M14 17h2",
            key: "10kma7"
        }
    ]
];
const FileSpreadsheet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-spreadsheet", __iconNode);
;
 //# sourceMappingURL=file-spreadsheet.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileSpreadsheet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript)");
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Archive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "20",
            height: "5",
            x: "2",
            y: "3",
            rx: "1",
            key: "1wp1u1"
        }
    ],
    [
        "path",
        {
            d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
            key: "1s80jp"
        }
    ],
    [
        "path",
        {
            d: "M10 12h4",
            key: "a56b0p"
        }
    ]
];
const Archive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("archive", __iconNode);
;
 //# sourceMappingURL=archive.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Archive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript)");
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>File
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ]
];
const File = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file", __iconNode);
;
 //# sourceMappingURL=file.js.map
}),
"[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "File",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$cloud$2d$for$2d$nothing$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/cloud-for-nothing/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=a730a__pnpm_167bec10._.js.map