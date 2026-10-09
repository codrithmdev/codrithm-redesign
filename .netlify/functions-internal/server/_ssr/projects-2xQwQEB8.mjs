import { n as projects } from "./projects-Cjfi-7DJ.mjs";
import { g as Link, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
import { n as ArrowRight } from "./icons-d-ZqtYhg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-2xQwQEB8.js
var import_jsx_runtime = require_jsx_runtime();
var labels = {
	client: "Client project",
	internal: "Internal product",
	community: "Community project",
	prototype: "Demonstration"
};
function ProjectsPage() {
	const publishableProjects = projects.filter((project) => project.publishable);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Projects",
		title: "Work, shared accurately.",
		description: "A selection of products and technical work that has been approved for public viewing. Each project is labeled by its role and current status.",
		children: publishableProjects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-card max-w-2xl rounded-2xl p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Project evidence is being prepared."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: "We only publish work when its description, classification, status, and supporting material have been confirmed. In the meantime, you can tell us what you need to build."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					search: { type: "project" },
					className: "mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80",
					children: ["Discuss a project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						"aria-hidden": true
					})]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2",
			children: publishableProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "surface-card overflow-hidden rounded-2xl",
				children: [project.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image.src,
					alt: project.image.alt,
					className: "aspect-[16/9] w-full object-cover",
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-semibold tracking-[0.16em] text-primary uppercase",
							children: [
								labels[project.kind],
								" · ",
								project.status
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-3 text-2xl",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-6 text-muted-foreground",
							children: project.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs text-muted-foreground",
							children: project.technologies.join(" · ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: project.slug },
							className: "mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80",
							children: ["View project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": true
							})]
						})
					]
				})]
			}, project.slug))
		})
	});
}
//#endregion
export { ProjectsPage as component };
