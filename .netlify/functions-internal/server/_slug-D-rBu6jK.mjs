import { n as internalDestinations } from "./_ssr/site-B4eAQvM9.mjs";
import { g as Link, v as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-15lpU3qi.mjs";
import { t as PageShell } from "./_ssr/PageShell-CyiN5KzD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-D-rBu6jK.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailPage() {
	const { project } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: `${project.kind} project`,
		title: project.title,
		description: project.summary,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card max-w-2xl rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: ["Current status: ", project.status]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-6 text-muted-foreground",
					children: "Detailed project information is published only after its supporting material is approved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: internalDestinations.projects,
					className: "mt-8 inline-flex text-sm font-medium text-primary hover:text-primary/80",
					children: "Back to projects"
				})
			]
		})
	});
}
//#endregion
export { ProjectDetailPage as component };
