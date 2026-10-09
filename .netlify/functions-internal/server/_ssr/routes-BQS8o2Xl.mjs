import { r as __toESM } from "../_runtime.mjs";
import { n as projects } from "./projects-Cjfi-7DJ.mjs";
import { I as require_react, g as Link, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useScroll, c as AnimatePresence, i as useMotionValue, n as useSpring, r as useTransform, s as motion } from "../_libs/framer-motion+[...].mjs";
import { a as VIEWPORT_LOOSE, c as headingWord, h as useMotionPrefs, i as VIEWPORT, o as cn, p as tHover, s as headingLine, t as Reveal } from "./reveal-BeV1ECYS.mjs";
import { n as services } from "./services-DwCL1mA1.mjs";
import { n as Stagger, r as StaggerItem, t as Logo } from "./stagger-Ds8zeSOp.mjs";
import { a as Bell, c as Package, d as Sparkles, f as Users, i as BarChart3, l as Plus, n as ArrowRight, o as ChevronDown, r as ArrowUpRight, s as Megaphone, t as Activity, u as Settings } from "./icons-d-ZqtYhg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BQS8o2Xl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sun_arc_default = "/assets/sun-arc-BihVBNz1.jpg";
var stages = [
	"Understand",
	"Scope",
	"Build",
	"Review"
];
var workflow = [
	"Requirements",
	"Interface",
	"Integration"
];
var bars = [
	42,
	24,
	16,
	26,
	25,
	28,
	11,
	9,
	33,
	18,
	14,
	26,
	29,
	17
];
var ease$2 = [
	.22,
	1,
	.36,
	1
];
var container = {
	hidden: {},
	visible: { transition: {
		staggerChildren: .07,
		delayChildren: .15
	} }
};
var item = {
	hidden: {
		opacity: 0,
		y: 14
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: ease$2
		}
	}
};
var sparkline = "M0 22 L14 16 L28 24 L42 9 L56 18 L70 6 L84 14 L98 3";
function DashboardMockup() {
	const { reduced } = useMotionPrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: container,
		initial: "hidden",
		whileInView: "visible",
		viewport: VIEWPORT_LOOSE,
		className: "surface-card relative overflow-hidden rounded-2xl backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			variants: item,
			className: "flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
					compact: true,
					className: "text-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-5 text-xs text-muted-foreground md:flex",
					children: [
						{
							icon: BarChart3,
							label: "Brief"
						},
						{
							icon: Package,
							label: "Build"
						},
						{
							icon: Users,
							label: "Review"
						},
						{
							icon: Megaphone,
							label: "Share"
						},
						{
							icon: Settings,
							label: "Settings"
						}
					].map(({ icon: Icon, label }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: i === 2 ? "flex items-center gap-1.5 text-foreground" : "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), label]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						variants: {
							hidden: {
								opacity: 0,
								scale: .95
							},
							visible: {
								opacity: 1,
								scale: 1
							}
						},
						className: "size-7 rounded-full bg-[image:var(--gradient-solar)]"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: item,
					className: "mb-5 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg sm:text-xl",
						children: "Project workspace"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-elevated px-3 py-1.5 text-xs text-muted-foreground",
						children: "Illustrative view"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
					children: stages.map((stage, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: item,
						className: "rounded-xl border border-border bg-elevated/50 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[10px] tracking-widest text-muted-foreground uppercase",
								children: ["Step ", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-success",
								children: "In progress"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base sm:text-lg",
								children: stage
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 98 28",
								className: "h-6 w-16 overflow-visible",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
									d: sparkline,
									fill: "none",
									stroke: "var(--primary)",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									variants: {
										hidden: {
											pathLength: reduced ? 1 : 0,
											opacity: 0
										},
										visible: {
											pathLength: 1,
											opacity: 1,
											transition: {
												duration: 1.1,
												ease: ease$2
											}
										}
									}
								})
							})]
						})]
					}, stage))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: item,
						className: "rounded-xl border border-border bg-elevated/40 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "A clear path from idea to handover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "A decorative workflow illustration, not a live product dashboard."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-4",
								children: workflow.map((name, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Planned"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1 overflow-hidden rounded-full bg-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "h-full origin-left rounded-full bg-[image:var(--gradient-solar)]",
											style: { width: `${[
												72,
												54,
												38
											][i]}%` },
											variants: {
												hidden: { scaleX: reduced ? 1 : 0 },
												visible: {
													scaleX: 1,
													transition: {
														duration: 1,
														ease: ease$2,
														delay: .2 + i * .12
													}
												}
											}
										})
									})]
								}, name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-end gap-1 border-t border-border pt-3 text-xs text-muted-foreground",
								children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: item,
						className: "rounded-xl border border-border bg-elevated/40 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "Workflow signals"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex h-36 items-end gap-1.5",
								children: bars.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "flex-1 origin-bottom rounded-t-sm",
									style: {
										height: `${h * 2}%`,
										background: i % 2 === 0 ? "var(--gradient-solar)" : "color-mix(in oklab, var(--primary) 35%, transparent)"
									},
									variants: {
										hidden: {
											scaleY: reduced ? 1 : 0,
											opacity: reduced ? 1 : 0
										},
										visible: {
											scaleY: 1,
											opacity: 1,
											transition: {
												duration: .7,
												ease: ease$2,
												delay: .2 + i * .04
											}
										}
									}
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between border-t border-border pt-3 text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Illustrative" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: ["Project view ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })]
								})]
							})
						]
					})]
				})
			]
		})]
	});
}
/**
* Very low-amplitude mouse follow. Decorative elements only.
*/
function MouseDrift({ children, className, amount = 5 }) {
	const { allowCursor } = useMotionPrefs();
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const x = useSpring(mx, {
		stiffness: 40,
		damping: 20,
		mass: .8
	});
	const y = useSpring(my, {
		stiffness: 40,
		damping: 20,
		mass: .8
	});
	(0, import_react.useEffect)(() => {
		if (!allowCursor) return;
		const onMove = (e) => {
			const nx = (e.clientX / window.innerWidth - .5) * 2;
			const ny = (e.clientY / window.innerHeight - .5) * 2;
			mx.set(nx * amount);
			my.set(ny * amount);
		};
		window.addEventListener("mousemove", onMove, { passive: true });
		return () => window.removeEventListener("mousemove", onMove);
	}, [
		allowCursor,
		amount,
		mx,
		my
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn(className),
		...allowCursor ? { style: {
			x,
			y
		} } : {},
		children
	});
}
var ease$1 = [
	.22,
	1,
	.36,
	1
];
/** Page-load choreography (seconds). */
var T = {
	eyebrow: .1,
	heading: .15,
	paragraph: .25,
	buttons: .35,
	visual: .45
};
var lines = ["We build software", "that makes work easier."];
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { compact, allowParallax } = useMotionPrefs();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const sunY = useTransform(scrollYProgress, [0, 1], [0, 90]);
	const sunScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
	const rise = (delay) => ({
		initial: {
			opacity: 0,
			y: compact ? 24 : 40
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .85,
			ease: ease$1,
			delay
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "relative overflow-hidden pt-32 pb-0 lg:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 top-[62%] -z-10 h-[78vh] sm:top-[33%]",
				initial: {
					opacity: 0,
					scale: 1.08
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: 1.6,
					ease: ease$1,
					delay: .35
				},
				...allowParallax ? { style: {
					y: sunY,
					scale: sunScale
				} } : {},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MouseDrift, {
					amount: 6,
					className: "h-full w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: sun_arc_default,
						alt: "",
						width: 1920,
						height: 1088,
						className: "h-full w-full scale-110 object-contain object-top opacity-95 [filter:hue-rotate(105deg)_saturate(1.18)] [mask-image:linear-gradient(to_bottom,transparent,black_14%)]"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-7xl px-5 text-center lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...rise(T.eyebrow),
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/community",
							className: "group inline-flex items-center gap-2 rounded-full border border-border bg-elevated/60 py-1 pr-4 pl-1 text-sm backdrop-blur-sm transition-colors hover:border-primary/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground",
									children: "Community"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground transition-colors group-hover:text-foreground",
									children: "Learn · Build · Connect"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 text-muted-foreground transition-transform duration-300 ease-[var(--ease-standard)] group-hover:translate-x-1" })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						className: "font-display mx-auto mt-8 max-w-4xl text-[2.6rem] leading-[1.05] font-medium sm:text-6xl lg:text-7xl",
						initial: false,
						animate: "visible",
						variants: { visible: { transition: {
							staggerChildren: .08,
							delayChildren: T.heading
						} } },
						children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden pb-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "block",
								variants: headingLine,
								children: line
							})
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...rise(T.paragraph),
						className: "mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: "From business websites to custom applications and AI-powered workflows, Codrithm helps turn specific problems into working software."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...rise(T.buttons),
						className: "mt-9 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-elevated/60 px-7 py-3.5 text-base font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
							children: "Explore Our Work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							search: { type: "project" },
							className: "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
							children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						...rise(T.buttons + .08),
						className: "mx-auto mt-6 max-w-xl text-sm text-muted-foreground",
						children: "Beyond client work, we're building a community where students and developers learn, connect, and work on practical ideas."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-16 w-full max-w-6xl px-5 lg:mt-24 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .96,
							y: compact ? 30 : 60
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						transition: {
							duration: 1.1,
							ease: ease$1,
							delay: T.visual
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMockup, {})
					})
				})
			})
		]
	});
}
var communityCollaborations = [];
function LogoMarquee() {
	const { reduced } = useMotionPrefs();
	const [paused, setPaused] = (0, import_react.useState)(false);
	const brands = communityCollaborations.filter((collaboration) => collaboration.publishable);
	if (brands.length === 0) return null;
	const row = [...brands, ...brands];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "fade",
			className: "text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Community collaborations"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]",
			onMouseEnter: () => setPaused(true),
			onMouseLeave: () => setPaused(false),
			onFocusCapture: () => setPaused(true),
			onBlurCapture: (event) => {
				if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "flex w-max gap-16 pr-16",
				animate: reduced || paused ? { x: "0%" } : { x: ["0%", "-50%"] },
				transition: {
					duration: 32,
					ease: "linear",
					repeat: Infinity
				},
				children: row.map((collaboration, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-semibold tracking-tight text-muted-foreground/60 transition-colors duration-300 hover:text-foreground",
					children: collaboration.name
				}, `${collaboration.name}-${i}`))
			})
		})]
	});
}
function SectionHeading({ title, highlight, subtitle, className }) {
	const words = title.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-auto max-w-2xl text-center", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
			className: "font-display text-3xl leading-tight sm:text-4xl lg:text-5xl",
			initial: "hidden",
			whileInView: "visible",
			viewport: VIEWPORT,
			variants: { visible: { transition: { staggerChildren: .06 } } },
			children: [words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block overflow-hidden pb-1 align-bottom",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "inline-block pr-[0.28em]",
					variants: headingWord,
					children: w
				})
			}, `${w}-${i}`)), highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block overflow-hidden pb-1 align-bottom",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "text-gradient inline-block opacity-70",
					variants: headingWord,
					children: highlight
				})
			})]
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "fadeUp",
			delay: .1,
			className: "mt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: subtitle
			})
		})]
	});
}
var icons = {
	"ai-automation": Sparkles,
	"software-development": Package,
	"ai-ml": Activity,
	"websites-wordpress": Users
};
function BentoSection() {
	const { reduced } = useMotionPrefs();
	const publishedServices = services.filter((service) => service.publishable);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		className: "mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "What We",
			highlight: "Build",
			subtitle: "We develop websites, software, and automation tools around the work people actually need to get done."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "mt-16 grid gap-4 md:grid-cols-2",
			stagger: .08,
			children: publishedServices.map((service) => {
				const Icon = icons[service.slug];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					whileHover: reduced ? {} : {
						y: -4,
						scale: 1.005
					},
					transition: tHover,
					className: "surface-card group flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-border-strong sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-widest text-muted-foreground uppercase",
								children: "Service"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-8 text-2xl",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-6 text-muted-foreground",
							children: service.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2",
							children: service.capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 size-1.5 shrink-0 rounded-full bg-primary",
									"aria-hidden": true
								}), capability]
							}, capability))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary",
							children: ["Explore services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4 transition-transform group-hover/link:translate-x-1",
								"aria-hidden": true
							})]
						})
					]
				}) }, service.slug);
			})
		})]
	});
}
var themes = [
	{
		title: "Learn",
		description: "Practical sessions, workshops, and knowledge sharing.",
		icon: Sparkles
	},
	{
		title: "Build",
		description: "Projects, experimentation, and collaborative learning.",
		icon: Activity
	},
	{
		title: "Connect",
		description: "Opportunities to meet peers, mentors, and professionals.",
		icon: Users
	}
];
function Pricing() {
	const { reduced } = useMotionPrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "community",
		className: "mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "More Than Client",
				highlight: "Work",
				subtitle: "Codrithm is also a technology community bringing students, developers, and industry professionals together through learning sessions, projects, and collaborations."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "mt-16 grid gap-6 lg:grid-cols-3",
				stagger: .08,
				children: themes.map((theme, index) => {
					const Icon = theme.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						whileHover: reduced ? {} : { y: -4 },
						transition: tHover,
						className: cn("surface-card flex h-full flex-col rounded-2xl p-8 transition-colors duration-300 hover:border-border-strong", index === 1 && "border-primary/60 shadow-[var(--shadow-glow)]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-7 text-3xl",
								children: theme.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: theme.description
							})
						]
					}) }, theme.title);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/community",
					className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:bg-primary/90",
					children: ["Explore Our Community", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						"aria-hidden": true
					})]
				})
			})
		]
	});
}
var items = [
	{
		q: "What types of projects does Codrithm work on?",
		a: "We focus on AI automation, custom software, AI and machine learning applications, and business websites, including WordPress."
	},
	{
		q: "Can you improve an existing website or application?",
		a: "Yes. Depending on the project, we can review an existing system and discuss improvements, integrations, or additional features."
	},
	{
		q: "Do you work with WordPress?",
		a: "Yes. WordPress development and improvements are part of our website services."
	},
	{
		q: "How is project pricing decided?",
		a: "Pricing depends on the scope, complexity, integrations, and delivery requirements. We discuss these before providing an estimate."
	},
	{
		q: "Can you automate our existing business processes?",
		a: "We can review your current workflow and identify which steps may be suitable for automation."
	},
	{
		q: "Is Codrithm also a technology community?",
		a: "Yes. Alongside our development work, Codrithm runs a community focused on learning, collaboration, and professional growth."
	}
];
var ease = [
	.22,
	1,
	.36,
	1
];
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-3xl px-5 py-24 lg:px-8 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Questions, answered",
			subtitle: "Practical details before you start a project."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "mt-14 space-y-3",
			stagger: .06,
			children: items.map((item, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card overflow-hidden rounded-xl transition-colors duration-300 hover:border-border-strong",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						"aria-expanded": isOpen,
						className: "flex w-full items-center justify-between gap-6 bg-primary px-6 py-5 text-left text-primary-foreground transition-colors hover:bg-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base sm:text-lg",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							animate: { rotate: isOpen ? 45 : 0 },
							transition: {
								duration: .45,
								ease
							},
							className: "grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .45,
								ease
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									y: -5,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								exit: {
									y: -5,
									opacity: 0
								},
								transition: {
									duration: .4,
									ease
								},
								className: "px-6 pb-6 text-sm text-muted-foreground",
								children: item.a
							})
						}, "content")
					})]
				}) }, item.q);
			})
		})]
	});
}
/** Subtle depth: element drifts a few px against the page scroll. */
function Parallax({ children, className, distance = 20 }) {
	const ref = (0, import_react.useRef)(null);
	const { allowParallax } = useMotionPrefs();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
	const y = useSpring(raw, {
		stiffness: 80,
		damping: 26,
		mass: .5
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn(className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			...allowParallax ? { style: { y } } : {},
			children
		})
	});
}
function CtaSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "scaleReveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -bottom-24 h-56 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "fadeUp",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display max-w-md text-3xl leading-tight sm:text-4xl",
							children: "Have something you need to build?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-muted-foreground",
							children: "Tell us what you're working on, what you're trying to solve, and where you need help."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "fadeUp",
						delay: .12,
						className: "mt-8 flex flex-wrap items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							search: { type: "project" },
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:bg-primary/90",
							children: ["Discuss Your Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/community",
							className: "text-sm font-medium text-foreground transition-colors hover:text-primary",
							children: "Explore Our Community"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "fadeRight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
							distance: 10,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									scale: .97
								},
								whileInView: {
									opacity: 1,
									scale: 1
								},
								viewport: {
									once: true,
									amount: .2
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
								className: "lg:translate-x-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMockup, {})
							})
						})
					})]
				})]
			})
		})
	});
}
var steps = [
	{
		number: "01",
		title: "Understand the Problem",
		body: "We start by understanding what you're trying to build, how the current process works, and what's getting in the way."
	},
	{
		number: "02",
		title: "Define the Scope",
		body: "We agree on the features, priorities, timeline, and expected deliverables before development begins."
	},
	{
		number: "03",
		title: "Build and Review",
		body: "We develop in stages, share progress, and review the work against agreed requirements."
	},
	{
		number: "04",
		title: "Deliver and Support",
		body: "We test, hand over the project, and agree on any maintenance or ongoing support needed."
	}
];
function HowWeWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "How We",
			highlight: "Work",
			subtitle: "A straightforward way to take an idea from problem to practical next step."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2",
			stagger: .08,
			children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, {
				className: "bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					variant: "fadeUp",
					className: "h-full p-7 sm:p-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm text-primary",
							children: step.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-7 text-2xl",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-sm leading-6 text-muted-foreground",
							children: step.body
						})
					]
				})
			}, step.number))
		})]
	});
}
var kindLabels = {
	internal: "Internal product",
	client: "Client project",
	community: "Community project",
	prototype: "Prototype"
};
function SelectedWork() {
	const publishedProjects = projects.filter((project) => project.publishable);
	if (publishedProjects.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Selected",
			highlight: "Work",
			subtitle: "A look at the products and technical projects we've worked on."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			stagger: .08,
			children: publishedProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "surface-card flex h-full flex-col overflow-hidden rounded-2xl",
				children: [project.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image.src,
					alt: project.image.alt,
					loading: "lazy",
					className: "aspect-[16/10] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4 text-xs tracking-widest text-muted-foreground uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: kindLabels[project.kind] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.status.replaceAll("-", " ") })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-5 text-2xl",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-6 text-muted-foreground",
							children: project.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-muted-foreground",
							children: project.technologies.join(" · ")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects/$slug",
							params: { slug: project.slug },
							className: "mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary",
							children: ["View project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": true
							})]
						})
					]
				})]
			}) }, project.slug))
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowWeWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaSection, {})
		]
	});
}
//#endregion
export { Index as component };
