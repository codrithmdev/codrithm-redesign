import { n as internalDestinations } from "./site-B4eAQvM9.mjs";
import { g as Link, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
import { n as services } from "./services-DwCL1mA1.mjs";
import { n as ArrowRight } from "./icons-d-ZqtYhg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DrtM4Hbv.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Services",
		title: "Practical technology for real work.",
		description: "Codrithm helps teams explore websites, applications, automation, and AI features around specific needs. Scope and feasibility are confirmed before work begins.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: services.filter((service) => service.publishable).map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "surface-card flex min-h-64 flex-col rounded-2xl p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: service.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-6 text-muted-foreground",
						children: service.shortDescription
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-2 text-sm text-muted-foreground",
						children: service.capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary",
								"aria-hidden": true
							}), capability]
						}, capability))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: internalDestinations.contact,
						search: {
							type: "project",
							service: service.slug
						},
						className: "group mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-foreground transition-colors hover:text-primary",
						children: ["Discuss this service", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4 transition-transform group-hover:translate-x-1",
							"aria-hidden": true
						})]
					})
				]
			}, service.slug))
		})
	});
}
//#endregion
export { ServicesPage as component };
