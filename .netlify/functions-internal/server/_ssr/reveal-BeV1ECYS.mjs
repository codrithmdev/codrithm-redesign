import { r as __toESM } from "../_runtime.mjs";
import { I as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { s as motion, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reveal-BeV1ECYS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var DURATION_NORMAL = .5;
var DURATION_SLOW = .8;
var DURATION_REVEAL = .9;
var EASE_STANDARD = [
	.22,
	1,
	.36,
	1
];
var EASE_IN_OUT = [
	.65,
	0,
	.35,
	1
];
var STAGGER_SMALL = .05;
var STAGGER_NORMAL = .08;
/** Shared viewport config: fire once, ~20% of the element visible. */
var VIEWPORT = {
	once: true,
	amount: .2
};
var VIEWPORT_LOOSE = {
	once: true,
	amount: .1
};
var ease$1 = [...EASE_STANDARD];
[...EASE_IN_OUT];
var tNormal = {
	duration: DURATION_NORMAL,
	ease: ease$1
};
var tSlow = {
	duration: DURATION_SLOW,
	ease: ease$1
};
var tReveal = {
	duration: DURATION_REVEAL,
	ease: ease$1
};
var tHover = {
	duration: .28,
	ease: ease$1
};
var ease = [
	.22,
	1,
	.36,
	1
];
/** Distances shrink on small screens so nothing overflows horizontally. */
var makeVariants = (name, compact = false) => {
	const y = compact ? 24 : 50;
	const x = compact ? 0 : 40;
	switch (name) {
		case "fade": return {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: tSlow
			}
		};
		case "fadeLeft": return {
			hidden: {
				opacity: 0,
				x: -x,
				y: compact ? y * .6 : 0
			},
			visible: {
				opacity: 1,
				x: 0,
				y: 0,
				transition: tSlow
			}
		};
		case "fadeRight": return {
			hidden: {
				opacity: 0,
				x,
				y: compact ? y * .6 : 0
			},
			visible: {
				opacity: 1,
				x: 0,
				y: 0,
				transition: tSlow
			}
		};
		case "scaleReveal": return {
			hidden: {
				opacity: 0,
				scale: .96,
				y: y * .4
			},
			visible: {
				opacity: 1,
				scale: 1,
				y: 0,
				transition: tReveal
			}
		};
		case "imageReveal": return {
			hidden: {
				opacity: 0,
				scale: 1.06,
				y: y * .5
			},
			visible: {
				opacity: 1,
				scale: 1,
				y: 0,
				transition: {
					...tReveal,
					duration: 1.1
				}
			}
		};
		default: return {
			hidden: {
				opacity: 0,
				y
			},
			visible: {
				opacity: 1,
				y: 0,
				transition: tReveal
			}
		};
	}
};
var staggerParent = (stagger = STAGGER_NORMAL, delay = 0) => ({
	hidden: {},
	visible: { transition: {
		staggerChildren: stagger,
		delayChildren: delay
	} }
});
var staggerChild = {
	hidden: {
		opacity: 0,
		y: 30
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: tReveal
	}
};
var staggerChildSmall = {
	hidden: {
		opacity: 0,
		y: 12
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: tNormal
	}
};
/** Hero heading: line-by-line rise. */
var headingLine = {
	hidden: {
		opacity: 0,
		y: 60
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .95,
			ease
		}
	}
};
var headingWord = {
	hidden: {
		opacity: 0,
		y: 40
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .85,
			ease
		}
	}
};
var mobileMenuItem = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: tNormal
	},
	exit: {
		opacity: 0,
		y: 12,
		transition: { duration: .2 }
	}
};
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: 767px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
/**
* Single source of truth for "how much motion is allowed here".
* - reduced: user asked for less motion → no parallax, no looping float
* - compact: small screens → shorter travel, no horizontal movement
*/
function useMotionPrefs() {
	const reduced = useReducedMotion() ?? false;
	const isMobile = useIsMobile();
	return {
		reduced,
		isMobile,
		compact: reduced || isMobile,
		allowFloat: !reduced,
		allowParallax: !reduced && !isMobile,
		allowCursor: !reduced && !isMobile
	};
}
/**
* Scroll reveal primitive. Fires once, respects reduced motion + mobile.
*/
function Reveal({ children, variant = "fadeUp", delay = 0, className, as = "div", amount, ...rest }) {
	const { compact, reduced } = useMotionPrefs();
	const Comp = motion[as];
	const variants = makeVariants(reduced ? "fade" : variant, compact);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className: cn(className),
		variants,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			...VIEWPORT,
			amount: amount ?? VIEWPORT.amount
		},
		transition: { delay },
		...rest,
		children
	});
}
//#endregion
export { VIEWPORT_LOOSE as a, headingWord as c, staggerChildSmall as d, staggerParent as f, useMotionPrefs as h, VIEWPORT as i, mobileMenuItem as l, tNormal as m, STAGGER_NORMAL as n, cn as o, tHover as p, STAGGER_SMALL as r, headingLine as s, Reveal as t, staggerChild as u };
