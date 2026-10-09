import { r as __toESM } from "../_runtime.mjs";
import { n as internalDestinations, r as navigationItems } from "./site-B4eAQvM9.mjs";
import { I as require_react, _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "../_slug-15lpU3qi.mjs";
import { a as useScroll, c as AnimatePresence, o as useMotionValueEvent, s as motion } from "../_libs/framer-motion+[...].mjs";
import { l as mobileMenuItem, m as tNormal, o as cn, t as Reveal } from "./reveal-BeV1ECYS.mjs";
import { t as Route$8 } from "./contact-CAxMIdml.mjs";
import { n as Stagger, r as StaggerItem, t as Logo } from "./stagger-Ds8zeSOp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BeWuteS3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BtvRlpAN.css";
var columns = [{
	title: "Explore",
	links: navigationItems
}, {
	title: "Legal",
	links: [{
		label: "Privacy",
		to: internalDestinations.privacy
	}]
}];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.4fr_2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "fadeUp",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted-foreground",
						children: "Codrithm develops websites, custom software, and AI automation tools while supporting a community of people learning and building with technology."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-10 sm:grid-cols-2",
					stagger: .08,
					children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
						small: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-muted-foreground uppercase",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: link.to,
								className: "group relative inline-block text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground",
								children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-[var(--ease-standard)] group-hover:scale-x-100" })]
							}) }, link.label))
						})]
					}, col.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs tracking-widest text-muted-foreground uppercase sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Codrithm"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Built for people who build" })]
			})]
		})
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const menuButtonRef = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));
	const closeMenu = (restoreFocus = false) => {
		setOpen(false);
		if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
	};
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKeyDown = (event) => {
			if (event.key === "Escape") closeMenu(true);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [open]);
	const isCurrentRoute = (to) => to === internalDestinations.home ? pathname === to : pathname.startsWith(to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			opacity: 0,
			y: -24
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-[var(--ease-standard)]", scrolled ? "border-b border-border bg-background/70 py-2 backdrop-blur-xl" : "border-b border-transparent py-4"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: internalDestinations.home,
						className: "shrink-0",
						"aria-label": "Codrithm home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							"aria-current": isCurrentRoute(item.to) ? "page" : void 0,
							className: cn("group relative inline-block px-3 py-2 text-sm transition-colors duration-300 hover:text-foreground", isCurrentRoute(item.to) ? "text-foreground" : "text-muted-foreground"),
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-1 left-3 h-px w-[calc(100%-1.5rem)] origin-left bg-primary transition-transform duration-300 ease-[var(--ease-standard)] group-hover:scale-x-100", isCurrentRoute(item.to) ? "scale-x-100" : "scale-x-0") })]
						}) }, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: internalDestinations.contact,
							search: { type: "project" },
							className: "hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex",
							children: "Start a Project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: menuButtonRef,
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							"aria-controls": "mobile-navigation",
							onClick: () => setOpen((v) => !v),
							className: "relative flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90 lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "absolute h-px w-5 bg-primary-foreground",
								animate: open ? {
									rotate: 45,
									y: 0
								} : {
									rotate: 0,
									y: -4
								},
								transition: tNormal
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "absolute h-px w-5 bg-primary-foreground",
								animate: open ? {
									rotate: -45,
									y: 0
								} : {
									rotate: 0,
									y: 4
								},
								transition: tNormal
							})]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: .45,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
				id: "mobile-navigation",
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6",
				initial: "hidden",
				animate: "visible",
				exit: "exit",
				variants: { visible: { transition: { staggerChildren: .08 } } },
				children: [navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					variants: mobileMenuItem,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"aria-current": isCurrentRoute(item.to) ? "page" : void 0,
						onClick: () => closeMenu(),
						className: cn("block py-2.5 text-lg transition-colors hover:text-foreground", isCurrentRoute(item.to) ? "text-foreground" : "text-muted-foreground"),
						children: item.label
					})
				}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					variants: mobileMenuItem,
					className: "pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: internalDestinations.contact,
						search: { type: "project" },
						onClick: () => closeMenu(),
						className: "inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90",
						children: "Start a Project"
					})
				})]
			})
		}, "mobile-menu") })]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Codrithm — Software, automation, and a community that builds" },
			{
				name: "description",
				content: "Codrithm builds practical software, automation, and websites while supporting a technology community that learns and builds together."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/codrithm-favicon.png?v=2",
				type: "image/png",
				sizes: "180x180"
			},
			{
				rel: "shortcut icon",
				href: "/codrithm-favicon.png?v=2",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/codrithm-favicon.png?v=2",
				sizes: "180x180"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "fixed top-4 left-4 z-[100] -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform focus:translate-y-0",
				children: "Skip to content"
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main-content",
			tabIndex: -1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
var $$splitComponentImporter$5 = () => import("./routes-DO1zvGkb.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Codrithm — Software that makes work easier" },
		{
			name: "description",
			content: "Codrithm builds business websites, custom applications, and AI-powered workflows around specific problems."
		},
		{
			property: "og:title",
			content: "Codrithm — Software that makes work easier"
		},
		{
			property: "og:description",
			content: "Business websites, custom applications, and AI-powered workflows from Codrithm."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-7OU7kznl.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | Codrithm" }, {
		name: "description",
		content: "How Codrithm connects practical software work with a technology community."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./community-Dm3CE3xg.mjs");
var Route$3 = createFileRoute("/community")({
	head: () => ({ meta: [{ title: "Community | Codrithm" }, {
		name: "description",
		content: "Codrithm's technology community for practical learning, collaboration, and connection."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./privacy-jntzo3UB.mjs");
var Route$2 = createFileRoute("/privacy")({
	head: () => ({ meta: [{ title: "Privacy | Codrithm" }, {
		name: "description",
		content: "Current privacy information for the Codrithm website."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-u4rguNEQ.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services | Codrithm" }, {
		name: "description",
		content: "Practical software, automation, AI, and website development services from Codrithm."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projects-2xQwQEB8.mjs");
var Route = createFileRoute("/projects/")({
	head: () => ({ meta: [{ title: "Projects | Codrithm" }, {
		name: "description",
		content: "Approved Codrithm projects, clearly labeled by type and current status."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var CommunityRoute = Route$3.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$8.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var PrivacyRoute = Route$2.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$6
});
var ServicesRoute = Route$1.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$6
});
var ProjectsIndexRoute = Route.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CommunityRoute,
	ContactRoute,
	PrivacyRoute,
	ServicesRoute,
	ProjectsSlugRoute: Route$7.update({
		id: "/projects/$slug",
		path: "/projects/$slug",
		getParentRoute: () => Route$6
	}),
	ProjectsIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
