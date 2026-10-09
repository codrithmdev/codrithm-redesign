import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as serviceSlugs } from "./services-DwCL1mA1.mjs";
import { n as objectType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CAxMIdml.js
var $$splitComponentImporter = () => import("./contact-_T-gjU6b.mjs");
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
		content: "Start a project, partnership, or general inquiry with Codrithm."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
