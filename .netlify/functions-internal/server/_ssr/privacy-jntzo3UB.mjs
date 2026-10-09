import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-jntzo3UB.js
var import_jsx_runtime = require_jsx_runtime();
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Privacy",
		title: "A clear account of what this site does today.",
		description: "This page reflects the current website implementation. It will be updated before any contact form or nonessential tracking is activated.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card max-w-3xl rounded-2xl p-6 text-sm leading-6 text-muted-foreground sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-foreground",
					children: "Current website behaviour"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: "The site currently provides public information about Codrithm and its services. The contact interface does not send or store submitted information because a receiving provider has not been configured."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-10 text-2xl text-foreground",
					children: "Before data collection begins"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: "Codrithm needs owner approval for the contact provider, recipient, retention period, access controls, consent wording, and a contact address for privacy questions. Those details will be published before form submission or nonessential analytics are enabled."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-10 text-2xl text-foreground",
					children: "What still needs confirmation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4",
					children: "Cookie usage, hosting and service-provider practices, any analytics, and data-retention periods require confirmation from the site owner. This page does not make claims about practices that have not been verified."
				})
			]
		})
	});
}
//#endregion
export { PrivacyPage as component };
