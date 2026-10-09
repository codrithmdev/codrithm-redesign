import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./reveal-DJJ7iISp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-DLwgyuLZ.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			variant: "fadeUp",
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-[0.18em] text-primary uppercase",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg",
					children: description
				})
			]
		}), children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children
		})]
	});
}
//#endregion
export { PageShell as t };
