import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as motion } from "../_libs/framer-motion+[...].mjs";
import { _ as useMotionPrefs, d as staggerChild, f as staggerChildSmall, i as VIEWPORT, n as STAGGER_NORMAL, o as cn, p as staggerParent, r as STAGGER_SMALL } from "./reveal-DJJ7iISp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stagger-DYgV05BB.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("font-display relative inline-flex h-9 max-w-full shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap text-xl font-semibold tracking-tight", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/codrithm-mark.png",
			alt: "",
			width: 32,
			height: 32,
			className: "size-8 shrink-0 rounded-full object-cover",
			style: {
				width: 32,
				height: 32
			}
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: "CODRITHM"
		})]
	});
}
function Stagger({ children, className, stagger = STAGGER_NORMAL, delay = 0, amount, ...rest }) {
	const { compact } = useMotionPrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn(className),
		variants: staggerParent(compact ? STAGGER_SMALL : stagger, delay),
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			...VIEWPORT,
			amount: amount ?? VIEWPORT.amount
		},
		...rest,
		children
	});
}
function StaggerItem({ children, className, small, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn(className),
		variants: small ? staggerChildSmall : staggerChild,
		...rest,
		children
	});
}
//#endregion
export { Stagger as n, StaggerItem as r, Logo as t };
