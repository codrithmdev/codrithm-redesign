import { r as __toESM } from "../_runtime.mjs";
import { I as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as useTransform, i as useSpring, l as motion, n as animate, o as useMotionValue, s as useScroll, t as useInView, u as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { _ as useMotionPrefs, a as VIEWPORT_LOOSE, c as headingLine, g as tPress, i as VIEWPORT, l as headingWord, m as tHover, o as cn, s as floatTransition, t as Reveal } from "./reveal-DJJ7iISp.mjs";
import { n as Stagger, r as StaggerItem, t as Logo } from "./stagger-DYgV05BB.mjs";
import { a as BarChart3, c as ChevronDown, d as Plus, f as Settings, h as Users, i as ArrowUpRight, l as Megaphone, m as TrendingUp, n as ArrowLeft, o as Bell, p as Sparkles, r as ArrowRight, s as Check, t as Activity, u as Package } from "./icons-DQ1CEv9d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-JlRNyxeF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var feature_shield_default = "/assets/feature-shield-B8ebl3ai.jpg";
var feature_charts_default = "/assets/feature-charts-DiRm3nSh.jpg";
var sun_arc_default = "/assets/sun-arc-BihVBNz1.jpg";
var buttonStyles = cva("group relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50", {
	variants: {
		variant: {
			solar: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90",
			outline: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90",
			ghost: "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90"
		},
		size: {
			sm: "px-4 py-2 text-sm",
			md: "px-5 py-2.5 text-sm",
			lg: "px-7 py-3.5 text-base"
		}
	},
	defaultVariants: {
		variant: "solar",
		size: "md"
	}
});
function AnimatedButton({ className, variant, size, withArrow = true, children, ...rest }) {
	const { reduced } = useMotionPrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
		className: cn(buttonStyles({
			variant,
			size
		}), className),
		whileHover: reduced ? {} : {
			scale: 1.02,
			y: -2
		},
		whileTap: reduced ? {} : {
			scale: .98,
			y: 0
		},
		transition: tHover,
		...rest,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), withArrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "inline-flex",
			variants: {
				rest: { x: 0 },
				hover: { x: 4 }
			},
			initial: "rest",
			whileHover: "hover",
			animate: "rest",
			transition: tPress,
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-200 ease-[var(--ease-standard)] group-hover:translate-x-1" })
		})]
	});
}
var metrics = [
	{
		label: "Community",
		value: "600+",
		delta: "Growing",
		up: true
	},
	{
		label: "Team members",
		value: "7+",
		delta: "Together",
		up: true
	},
	{
		label: "Active builders",
		value: "100+",
		delta: "Learning",
		up: true
	},
	{
		label: "Past events",
		value: "10+",
		delta: "Shared",
		up: true
	}
];
var imports = [
	{
		name: "Hands-on learning",
		pct: 78
	},
	{
		name: "Peer mentorship",
		pct: 54
	},
	{
		name: "Community projects",
		pct: 36
	}
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
var ease$3 = [
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
			ease: ease$3
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
							label: "Overview"
						},
						{
							icon: Package,
							label: "Projects"
						},
						{
							icon: Users,
							label: "Members"
						},
						{
							icon: Megaphone,
							label: "Events"
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
						children: "Codrithm Community"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-elevated px-3 py-1.5 text-xs text-muted-foreground",
						children: "Join the community"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
					children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: item,
						className: "rounded-xl border border-border bg-elevated/50 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] tracking-widest text-muted-foreground uppercase",
								children: m.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: m.up ? "text-[10px] text-success" : "text-[10px] text-destructive",
								children: [
									m.up ? "↗" : "↘",
									" ",
									m.delta
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base sm:text-lg",
								children: m.value
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
												ease: ease$3
											}
										}
									}
								})
							})]
						})]
					}, m.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: item,
						className: "rounded-xl border border-border bg-elevated/40 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: "Learning pathways in motion"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Skills grow faster when learning is practical and shared."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-4",
								children: imports.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: row.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "In progress"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1 overflow-hidden rounded-full bg-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											className: "h-full origin-left rounded-full bg-[image:var(--gradient-solar)]",
											style: { width: `${row.pct}%` },
											variants: {
												hidden: { scaleX: reduced ? 1 : 0 },
												visible: {
													scaleX: 1,
													transition: {
														duration: 1,
														ease: ease$3,
														delay: .2 + i * .12
													}
												}
											}
										})
									})]
								}, row.name))
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
								children: "Community activity"
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
												ease: ease$3,
												delay: .2 + i * .04
											}
										}
									}
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between border-t border-border pt-3 text-[10px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Recent months" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: ["This week ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })]
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
var ease$2 = [
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
var lines = ["Where Coders", "Make History."];
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
			ease: ease$2,
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
					ease: ease$2,
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#features",
							className: "group inline-flex items-center gap-2 rounded-full border border-border bg-elevated/60 py-1 pr-4 pl-1 text-sm backdrop-blur-sm transition-colors hover:border-primary/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-[image:var(--gradient-solar)] px-3 py-1 text-xs font-medium text-primary-foreground",
									children: "Codrithm"
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
						initial: "hidden",
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
						children: "A student-driven technology community helping emerging developers grow through practical skills, peer mentorship, and collaborative innovation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...rise(T.buttons),
						className: "mt-9 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
							variant: "outline",
							size: "lg",
							children: "Explore our work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
							size: "lg",
							children: "Work with us"
						})]
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
							ease: ease$2,
							delay: T.visual
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMockup, {})
					})
				})
			})
		]
	});
}
var brands = [
	"SUPERIOR",
	"Inter AI Club",
	"DeepCiphers",
	"NYLP",
	"MSA",
	"CODRITHM"
];
function LogoMarquee() {
	const { reduced } = useMotionPrefs();
	const row = [...brands, ...brands];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 lg:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "fade",
			className: "text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Growing alongside organisations that believe in student potential"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "flex w-max gap-16 pr-16",
				animate: reduced ? {} : { x: ["0%", "-50%"] },
				transition: {
					duration: 32,
					ease: "linear",
					repeat: Infinity
				},
				children: row.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-semibold tracking-tight text-muted-foreground/60 transition-colors duration-300 hover:text-foreground",
					children: b
				}, `${b}-${i}`))
			})
		})]
	});
}
/** Slow, near-imperceptible drift for decorative elements. */
function Float({ children, className, y = 8, duration = 5, delay = 0, rotate = 0 }) {
	const { allowFloat } = useMotionPrefs();
	if (!allowFloat) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(className),
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn(className),
		animate: rotate ? {
			y: [
				0,
				-y,
				0
			],
			rotate: [
				0,
				rotate,
				0
			]
		} : { y: [
			0,
			-y,
			0
		] },
		transition: {
			...floatTransition(duration),
			delay
		},
		children
	});
}
/** Counts up once when it scrolls into view. */
function Counter({ to, from = 0, duration = 1.5, prefix = "", suffix = "", decimals = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .4
	});
	const { reduced } = useMotionPrefs();
	const [value, setValue] = (0, import_react.useState)(from);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduced) {
			setValue(to);
			return;
		}
		const controls = animate(from, to, {
			duration,
			ease: [
				.16,
				1,
				.3,
				1
			],
			onUpdate: (v) => setValue(v)
		});
		return () => controls.stop();
	}, [
		inView,
		from,
		to,
		duration,
		reduced
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			value.toLocaleString("en-US", {
				minimumFractionDigits: decimals,
				maximumFractionDigits: decimals
			}),
			suffix
		]
	});
}
function Card({ title, body, className, children }) {
	const { reduced } = useMotionPrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			whileHover: reduced ? {} : {
				y: -4,
				scale: 1.005
			},
			transition: tHover,
			className: "surface-card group relative h-full overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-border-strong",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xs text-sm text-muted-foreground",
					children: body
				}),
				children
			]
		})
	});
}
function BentoSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
			className: "grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Ethical values",
					body: "Integrity guides how we learn, build, and work together.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-2",
						children: [
							{
								id: "VALUE 01",
								label: "Respect every learner",
								active: true
							},
							{
								id: "VALUE 02",
								label: "Share what you discover",
								active: false
							},
							{
								id: "VALUE 03",
								label: "Build with purpose",
								active: false
							}
						].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex items-center gap-3 rounded-lg px-3 py-2 text-xs transition-transform duration-300 ease-[var(--ease-standard)] group-hover:translate-x-1", r.active ? "bg-[image:var(--gradient-solar)] text-primary-foreground" : "border border-border bg-elevated/60 text-muted-foreground"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-3.5 shrink-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: r.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: r.label
								})
							]
						}, r.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Community",
					body: "A growing network of students and builders.",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-elevated/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-[10px] tracking-widest text-muted-foreground uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Active members" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-success",
								children: "↗ Growing"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: 100,
									suffix: "+",
									duration: 1.6
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-primary" })]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Collaborate",
					body: "Turn early ideas into meaningful projects with people who care.",
					className: "lg:row-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-8 flex h-56 items-center justify-center lg:h-[22rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-8 top-0 h-2/3 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--primary)_75%,transparent),transparent)] [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)] opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
							y: 7,
							duration: 5.5,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative grid size-20 place-items-center rounded-2xl border border-border-strong bg-elevated shadow-[var(--shadow-glow)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-8 text-foreground" })
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					title: "Learn in practice",
					body: "Every session, question, and project can become a step forward.",
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2 text-sm",
							children: [
								"Workshops",
								"Projects",
								"Mentorship",
								"Community",
								"Opportunities"
							].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("rounded-lg border border-border bg-elevated/40 px-3 py-2 transition-colors duration-300", i === 0 ? "text-foreground" : "text-muted-foreground"),
								children: l
							}, l))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid place-items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
								y: 6,
								duration: 6,
								rotate: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-16 text-foreground/80" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Float, {
								y: 10,
								duration: 4.5,
								delay: .4,
								className: "absolute top-2 right-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-6 text-primary" })
							})]
						})]
					})
				})
			]
		})
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
function FeatureSplit({ title, body, note, bullets, image, imageAlt, reversed, overlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reversed && "lg:[&>*:first-child]:order-2"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			variant: reversed ? "fadeRight" : "fadeLeft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display max-w-md text-3xl leading-tight sm:text-4xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-lg text-muted-foreground",
					children: body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-muted-foreground",
					children: note
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
					href: "#pricing",
					whileHover: {
						y: -2,
						scale: 1.02
					},
					whileTap: { scale: .98 },
					className: "group mt-7 inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated/70 px-5 py-2.5 text-sm transition-colors hover:border-primary/60",
					children: ["See Doc", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-200 ease-[var(--ease-standard)] group-hover:translate-x-1" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "mt-8 space-y-3",
					stagger: .08,
					children: bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
						small: true,
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-5 shrink-0 place-items-center rounded-md bg-[image:var(--gradient-solar)] text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3.5",
								strokeWidth: 3
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: b
						})]
					}, b))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: reversed ? "fadeLeft" : "fadeRight",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
				distance: 18,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-card group relative overflow-hidden rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: image,
						alt: imageAlt,
						loading: "lazy",
						width: 1200,
						height: 1200,
						className: "aspect-square w-full object-cover [filter:hue-rotate(105deg)_saturate(1.12)] transition-transform duration-[900ms] ease-[var(--ease-standard)] group-hover:scale-[1.03]",
						initial: { scale: 1.06 },
						whileInView: { scale: 1 },
						viewport: {
							once: true,
							amount: .2
						},
						transition: {
							duration: 1.2,
							ease: [
								.22,
								1,
								.36,
								1
							]
						}
					}), overlay]
				})
			})
		})]
	});
}
var stats = [
	{
		to: 600,
		suffix: "+",
		label: "Community followers"
	},
	{
		to: 7,
		suffix: "+",
		label: "Core team members"
	},
	{
		to: 100,
		suffix: "+",
		label: "Active community members"
	},
	{
		to: 10,
		suffix: "+",
		label: "Learning sessions and events"
	}
];
function StatsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaggerItem, {
				className: "bg-background p-8 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl lg:text-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							to: s.to,
							suffix: s.suffix,
							decimals: s.decimals ?? 0,
							duration: 1.6
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: s.label
				})]
			}, s.label))
		})
	});
}
var baseFeatures = [
	"Community learning sessions",
	"Peer-led discussion spaces",
	"Project and event updates",
	"A welcoming learning network",
	"Opportunities to collaborate"
];
var plans = [
	{
		price: "Learn",
		name: "Start your journey",
		features: baseFeatures,
		featured: false
	},
	{
		price: "Build",
		name: "Create with others",
		features: [...baseFeatures, "Hands-on collaborative projects"],
		featured: true
	},
	{
		price: "Connect",
		name: "Partner with Codrithm",
		features: baseFeatures,
		featured: false
	}
];
function Pricing() {
	const { reduced } = useMotionPrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pricing",
		className: "mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "A community for",
			highlight: "every stage",
			subtitle: "Whether you are starting out, building confidence, or looking to collaborate, there is a place for you here."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "mt-16 grid gap-6 lg:grid-cols-3",
			stagger: .08,
			children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				whileHover: reduced ? {} : { y: -4 },
				transition: tHover,
				className: cn("surface-card flex h-full flex-col rounded-2xl p-8 transition-colors duration-300 hover:border-border-strong", plan.featured && "border-primary/60 shadow-[var(--shadow-glow)]"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl",
						children: plan.price
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg",
						children: plan.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: "A supportive path into practical technology skills, genuine connections, and work you can be proud of."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						whileHover: reduced ? {} : {
							scale: 1.02,
							y: -2
						},
						whileTap: reduced ? {} : { scale: .98 },
						transition: tHover,
						className: "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-colors duration-300 hover:bg-primary/90",
						children: ["Join Codrithm", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-200 ease-[var(--ease-standard)] group-hover:translate-x-1" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3 border-t border-border pt-8",
						children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 shrink-0 place-items-center rounded-md bg-[image:var(--gradient-solar)] text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-3.5",
									strokeWidth: 3
								})
							}), f]
						}, f))
					})
				]
			}) }, plan.name))
		})]
	});
}
var quotes = [
	{
		quote: "Codrithm made learning feel possible. I stopped watching alone and started building with people who understood the journey.",
		name: "Community member",
		role: "Emerging developer"
	},
	{
		quote: "The most valuable part is the encouragement to turn small practice into real projects we can share proudly.",
		name: "Session participant",
		role: "Student builder"
	},
	{
		quote: "It is a space where questions are welcomed and progress is celebrated, even when you are still finding your direction.",
		name: "Codrithm member",
		role: "Community learner"
	}
];
var ease$1 = [
	.22,
	1,
	.36,
	1
];
function Testimonials() {
	const [[index, dir], setState] = (0, import_react.useState)([0, 1]);
	const go = (d) => setState(([i]) => [(i + d + quotes.length) % quotes.length, d]);
	const active = quotes[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-4xl px-5 py-24 text-center lg:px-8 lg:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "scaleReveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card relative overflow-hidden rounded-2xl px-6 py-14 sm:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-[13rem] sm:min-h-[11rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							custom: dir,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
								custom: dir,
								initial: {
									opacity: 0,
									x: dir * 48
								},
								animate: {
									opacity: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									x: dir * -48
								},
								transition: {
									duration: .7,
									ease: ease$1
								},
								className: "absolute inset-0 flex flex-col items-center justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-xl leading-snug sm:text-2xl",
									children: [
										"“",
										active.quote,
										"”"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-7 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: active.name
										}),
										" — ",
										active.role
									]
								})]
							}, index)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-10 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								"aria-label": "Previous testimonial",
								onClick: () => go(-1),
								whileHover: {
									scale: 1.06,
									y: -2
								},
								whileTap: { scale: .94 },
								className: "grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: quotes.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": `Go to testimonial ${i + 1}`,
									onClick: () => setState([i, i > index ? 1 : -1]),
									className: cn("h-1.5 rounded-full transition-all duration-500 ease-[var(--ease-standard)]", i === index ? "w-7 bg-primary" : "w-1.5 bg-primary hover:bg-primary")
								}, q.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								"aria-label": "Next testimonial",
								onClick: () => go(1),
								whileHover: {
									scale: 1.06,
									y: -2
								},
								whileTap: { scale: .94 },
								className: "grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							})
						]
					})
				]
			})
		})
	});
}
var posts = [
	{
		title: "Learning in public",
		image: "/assets/blog-1-CK6SJDdg.jpg",
		excerpt: "Why sharing the process helps emerging developers grow faster."
	},
	{
		title: "Better projects",
		image: "/assets/blog-2-oXQmZFtY.jpg",
		excerpt: "How collaboration turns early ideas into work with real impact."
	},
	{
		title: "The community advantage",
		image: "/assets/blog-3-of-bEXuj.jpg",
		excerpt: "A practical guide to learning with people who want you to succeed."
	}
];
function Blog() {
	const { reduced } = useMotionPrefs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "blog",
		className: "mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			title: "Stories, ideas &",
			highlight: "progress",
			subtitle: "Notes from the people, projects, and conversations shaping the Codrithm community."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "mt-16 grid gap-6 md:grid-cols-3",
			stagger: .08,
			children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaggerItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
				href: "#blog",
				whileHover: reduced ? {} : {
					y: -4,
					scale: 1.01
				},
				transition: tHover,
				className: "group block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[3/4] overflow-hidden rounded-2xl border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: p.title,
						loading: "lazy",
						width: 912,
						height: 1200,
						className: "h-full w-full object-cover [filter:hue-rotate(105deg)_saturate(1.06)] transition-transform duration-[700ms] ease-[var(--ease-standard)] group-hover:scale-[1.04]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-4 right-4 grid size-10 place-items-center rounded-lg bg-background/80 backdrop-blur-sm transition-transform duration-300 ease-[var(--ease-standard)] group-hover:translate-x-1 group-hover:-translate-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl transition-colors duration-300 group-hover:text-primary",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.excerpt
					})]
				})]
			}) }, p.title))
		})]
	});
}
var items = [
	{
		q: "Who can join Codrithm?",
		a: "Students and emerging developers who want to learn practical skills, meet thoughtful peers, and contribute to collaborative projects are welcome."
	},
	{
		q: "Do I need to be an experienced developer?",
		a: "No. Codrithm is built for learners at different stages. Curiosity, consistency, and respect for others matter more than a perfect starting point."
	},
	{
		q: "What happens in a Codrithm session?",
		a: "Sessions can include practical workshops, project reviews, peer learning, mentorship, and conversations with people working in technology."
	},
	{
		q: "Can organisations collaborate with Codrithm?",
		a: "Yes. We welcome meaningful partnerships that create real learning opportunities and help emerging developers gain practical experience."
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
		id: "contact",
		className: "mx-auto w-full max-w-3xl px-5 py-24 lg:px-8 lg:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Questions, answered" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
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
function CtaSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			variant: "scaleReveal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 -bottom-24 h-56 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_70%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						variant: "fadeUp",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display max-w-sm text-3xl leading-tight sm:text-4xl",
							children: "Start your next chapter with Codrithm."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-muted-foreground",
							children: "Learn in public, build with others, and turn consistent practice into real momentum."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "fadeUp",
						delay: .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => e.preventDefault(),
							className: "mt-8 flex max-w-md items-center gap-2 rounded-full border border-border-strong bg-elevated/70 p-1.5 backdrop-blur-sm transition-colors duration-300 focus-within:border-primary/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								placeholder: "Enter email here",
								className: "min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
								type: "submit",
								withArrow: false,
								size: "md",
								children: "Get Started"
							})]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "fadeRight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
							distance: 16,
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
									duration: 1,
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
var bullets = [
	"Hands-on sessions that build practical skill.",
	"Peer mentorship from people growing alongside you.",
	"Collaborative projects with meaningful outcomes."
];
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "features",
				className: "mx-auto w-full max-w-7xl px-5 py-12 lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					title: "Learning with",
					highlight: "Momentum",
					subtitle: "A community designed to make technology learning practical, welcoming, and connected."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 space-y-28 lg:space-y-40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureSplit, {
						title: "Learn by building things that matter",
						body: "Move from tutorials to real projects with sessions, feedback, and opportunities to put your skills into practice.",
						note: "Practical progress, shared with a supportive community.",
						bullets,
						image: feature_shield_default,
						imageAlt: "Abstract blue technology pattern"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureSplit, {
						reversed: true,
						title: "Grow beside people who want you to win",
						body: "Find peers, mentors, and collaborators who make the path into technology feel less isolated.",
						note: "A shared rhythm for learning, shipping, and improving.",
						bullets,
						image: feature_charts_default,
						imageAlt: "Abstract collaborative technology dashboard"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaSection, {})
		]
	});
}
//#endregion
export { Index as component };
