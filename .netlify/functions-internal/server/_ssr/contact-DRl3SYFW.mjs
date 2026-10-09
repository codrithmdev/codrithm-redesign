import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
import { t as Route } from "./contact-A_DKbyFF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DRl3SYFW.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { type, service } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Contact",
		title: "Start with the problem you want to solve.",
		description: `You are exploring ${type === "project" ? "a project" : type === "partnership" ? "a partnership" : "a question"}${service ? ` related to ${service.replaceAll("-", " ")}` : ""}.`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "surface-card max-w-2xl rounded-2xl p-6 sm:p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-6 text-muted-foreground",
				children: "A secure contact form will be added only after Codrithm confirms the receiving destination and privacy handling. This page does not collect or submit information yet."
			})
		})
	});
}
//#endregion
export { ContactPage as component };
