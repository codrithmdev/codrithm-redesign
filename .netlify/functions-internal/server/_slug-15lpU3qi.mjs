import { t as getPublishableProject } from "./_ssr/projects-Cjfi-7DJ.mjs";
import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-15lpU3qi.js
var $$splitComponentImporter = () => import("./_slug-D-rBu6jK.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = getPublishableProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
