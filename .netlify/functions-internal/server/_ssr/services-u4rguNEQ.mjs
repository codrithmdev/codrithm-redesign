import { g as Link, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
import { n as ArrowRight } from "./icons-d-ZqtYhg.mjs";
import { n as services } from "./services-DwCL1mA1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-u4rguNEQ.js
var import_jsx_runtime = require_jsx_runtime();
var commonProblems = {
	"ai-automation": "Useful when information is copied between systems, follow-ups are manual, or routine steps slow a team down.",
	"software-development": "Useful when an off-the-shelf tool does not fit the way your team actually works.",
	"ai-ml": "Useful when text, documents, or data need structured assistance and a feasibility review supports the approach.",
	"websites-wordpress": "Useful when a website is difficult to update, unclear to visitors, or no longer reflects the business."
};
function ServicesPage() {
	const publicServices = services.filter((service) => service.publishable);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "Services",
		title: "Technology built around the work at hand.",
		description: "We discuss the problem first, then define a useful scope for websites, applications, automation, and AI-assisted features.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			"aria-labelledby": "service-list-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "service-list-heading",
				className: "font-display text-2xl sm:text-3xl",
				children: "What we can help build"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 grid gap-4 md:grid-cols-2",
				children: publicServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card flex min-h-80 flex-col rounded-2xl p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
							children: "Service"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-3 text-2xl",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-6 text-muted-foreground",
							children: service.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm leading-6 text-foreground/85",
							children: commonProblems[service.slug]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2",
							children: service.capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary",
									"aria-hidden": true
								}), capability]
							}, capability))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							search: {
								type: "project",
								service: service.slug
							},
							className: "group mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-primary hover:text-primary/80",
							children: [
								"Discuss this service",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4 transition-transform group-hover:translate-x-1",
									"aria-hidden": true
								})
							]
						})
					]
				}, service.slug))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "surface-card mt-14 rounded-2xl p-6 sm:p-8",
			"aria-labelledby": "approach-heading",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "approach-heading",
					className: "font-display text-2xl",
					children: "A clear development approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-3xl text-sm leading-6 text-muted-foreground",
					children: "We begin with the current process and the outcome you need. Before development begins, we agree on the useful features, priorities, delivery plan, and how progress will be reviewed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					search: { type: "project" },
					className: "mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90",
					children: ["Start a project conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						"aria-hidden": true
					})]
				})
			]
		})]
	});
}
//#endregion
export { ServicesPage as component };
