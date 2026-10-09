//#region node_modules/.nitro/vite/services/ssr/assets/projects-Cjfi-7DJ.js
var projects = [];
function getPublishableProject(slug) {
	return projects.find((project) => project.publishable && project.slug === slug);
}
//#endregion
export { projects as n, getPublishableProject as t };
