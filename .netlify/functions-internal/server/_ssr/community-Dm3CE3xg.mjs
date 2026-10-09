import { t as approvedExternalUrls } from "./site-B4eAQvM9.mjs";
import { g as Link, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageShell } from "./PageShell-CyiN5KzD.mjs";
import { d as Sparkles, f as Users, t as Activity } from "./icons-d-ZqtYhg.mjs";
import { n as communityCollaborations, r as communityEvents, t as communityActivities } from "./community-BW05m-F1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-Dm3CE3xg.js
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		title: "Learn",
		description: "Practical sessions, workshops, and knowledge sharing for people developing technology skills.",
		icon: Sparkles
	},
	{
		title: "Build",
		description: "Projects, experimentation, and collaborative learning around useful ideas.",
		icon: Activity
	},
	{
		title: "Connect",
		description: "Ways to meet peers, mentors, and professionals with shared interests.",
		icon: Users
	}
];
function CommunityPage() {
	const activities = communityActivities.filter((item) => item.publishable);
	const events = communityEvents.filter((item) => item.publishable);
	const collaborations = communityCollaborations.filter((item) => item.publishable);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		eyebrow: "Community",
		title: "A place to learn, build, and connect.",
		description: "Alongside client work, Codrithm brings students, developers, and industry professionals together through practical learning and collaboration.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid gap-4 md:grid-cols-3",
				"aria-label": "Community themes",
				children: pillars.map(({ title, description, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "surface-card rounded-2xl p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5 text-primary",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-6 text-2xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: description
						})
					]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityList, {
				title: "Events and workshops",
				items: events,
				empty: "Approved event and workshop details will be shared here when they are ready."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityList, {
				title: "Community activities",
				items: activities,
				empty: "Activity information will be added as it is verified for public sharing."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityList, {
				title: "Partnerships and collaborations",
				items: collaborations,
				empty: "Collaboration information is shown only with approval from the organizations involved."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "surface-card mt-14 rounded-2xl p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Join the community"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-6 text-muted-foreground",
						children: "A verified joining destination has not yet been configured. You can contact Codrithm to ask about community opportunities."
					}),
					approvedExternalUrls.communityJoin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: approvedExternalUrls.communityJoin,
						className: "mt-7 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Join Community"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						search: { type: "general" },
						className: "mt-7 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Ask about the community"
					})
				]
			})
		]
	});
}
function CommunityList({ title, items, empty }) {
	const id = title.replaceAll(" ", "-").toLowerCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-14",
		"aria-labelledby": id,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			id,
			className: "font-display text-2xl",
			children: title
		}), items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid gap-4 md:grid-cols-2",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "surface-card rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: item.title ?? item.name
				}), item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-6 text-muted-foreground",
					children: item.description
				})]
			}, item.title ?? item.name))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm leading-6 text-muted-foreground",
			children: empty
		})]
	});
}
//#endregion
export { CommunityPage as component };
