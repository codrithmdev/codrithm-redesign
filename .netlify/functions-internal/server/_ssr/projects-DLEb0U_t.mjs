import { n as projects } from "./projects-Cjfi-7DJ.mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DLEb0U_t.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const publishableProjects = projects.filter((project) => project.publishable);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		eyebrow: "Projects",
		title: "Work, shared accurately.",
		description: "Project details are published only when their classification, contribution, current status, and supporting material are approved.",
		children: publishableProjects.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "surface-card max-w-2xl rounded-2xl p-6 text-sm leading-6 text-muted-foreground sm:p-8",
			children: "Approved project case studies will appear here when they are ready to share."
		})
	});
}
//#endregion
export { ProjectsPage as component };
