import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as serviceSlugs } from "./services-BSTx4X1D.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B97vQbIX.js
var $$splitComponentImporter = () => import("./contact-v5Ae5JpF.mjs");
var contactTypeSchema = enumType([
	"project",
	"partnership",
	"general"
]);
var contactSearchSchema = objectType({
	type: contactTypeSchema.optional().catch("general").default("general"),
	service: enumType(serviceSlugs).optional().catch(void 0)
});
var Route = createFileRoute("/contact")({
	validateSearch: contactSearchSchema,
	head: () => ({ meta: [{ title: "Contact | Codrithm" }, {
		name: "description",
		content: "Contact Codrithm about a project, partnership, or general question."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
