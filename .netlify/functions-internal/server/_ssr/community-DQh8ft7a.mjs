import { t as approvedExternalUrls } from "./site-B4eAQvM9.mjs";
import { g as Link, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-DQh8ft7a.js
var import_jsx_runtime = require_jsx_runtime();
function CommunityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Community",
		title: "Learn, build, and connect.",
		description: "Codrithm brings students and emerging developers together for practical learning, collaboration, and shared experience in technology.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card max-w-2xl rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Community information is being prepared with care."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "Events, activities, and collaboration details will be shared here when they have been verified."
				}),
				approvedExternalUrls.communityJoin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: approvedExternalUrls.communityJoin,
					className: "mt-8 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90",
					children: "Join Community"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					search: { type: "general" },
					className: "mt-8 inline-flex text-sm font-medium text-primary hover:text-primary/80",
					children: "Contact Codrithm about the community"
				})
			]
		})
	});
}
//#endregion
export { CommunityPage as component };
