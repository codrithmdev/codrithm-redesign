import { g as Link, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
import { n as ArrowRight } from "./icons-d-ZqtYhg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-7OU7kznl.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "About Codrithm",
		title: "Technology work with community roots.",
		description: "Codrithm brings together practical software work and a community where people can learn, collaborate, and build experience.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "What Codrithm is",
					children: "Codrithm is growing from a technology community into a team that also develops websites, custom software, AI automation, and practical AI features."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "What we build",
					children: "We work on the systems people use to get work done: business websites, applications, internal tools, integrations, and workflows that reduce repetitive manual steps."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Why the community exists",
					children: "Learning technology is more useful when people can share knowledge, try ideas together, and meet others working through similar challenges."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "How the two connect",
					children: "Community work creates space for learning and practical experience. Client work is approached with clear scope, honest communication, and attention to the problem being solved."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "surface-card mt-14 rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Our working approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-sm leading-6 text-muted-foreground",
					children: "We start by understanding the current situation, agree on what is useful to build, share work in stages, and review it against the agreed requirements. Team profiles and history will be added only when the information is approved for publication."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80",
						children: ["Explore services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/community",
						className: "inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80",
						children: ["Explore the community ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					})]
				})
			]
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "surface-card rounded-2xl p-6 sm:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm leading-6 text-muted-foreground",
			children
		})]
	});
}
//#endregion
export { AboutPage as component };
