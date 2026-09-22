import type { Variants } from "framer-motion";
import { tNormal, tReveal, tSlow } from "./transitions";
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

import { DISTANCE_LARGE, DISTANCE_MEDIUM, STAGGER_NORMAL, STAGGER_SMALL } from "./tokens";

export type RevealVariant =
  | "fadeUp"
  | "fade"
  | "fadeLeft"
  | "fadeRight"
  | "scaleReveal"
  | "imageReveal";

/** Distances shrink on small screens so nothing overflows horizontally. */
export const makeVariants = (name: RevealVariant, compact = false): Variants => {
  const y = compact ? DISTANCE_MEDIUM * 0.8 : DISTANCE_LARGE;
  const x = compact ? 0 : 40;

  switch (name) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: tSlow },
      };
    case "fadeLeft":
      return {
        hidden: { opacity: 0, x: -x, y: compact ? y * 0.6 : 0 },
        visible: { opacity: 1, x: 0, y: 0, transition: tSlow },
      };
    case "fadeRight":
      return {
        hidden: { opacity: 0, x, y: compact ? y * 0.6 : 0 },
        visible: { opacity: 1, x: 0, y: 0, transition: tSlow },
      };
    case "scaleReveal":
      return {
        hidden: { opacity: 0, scale: 0.96, y: y * 0.4 },
        visible: { opacity: 1, scale: 1, y: 0, transition: tReveal },
      };
    case "imageReveal":
      return {
        hidden: { opacity: 0, scale: 1.06, y: y * 0.5 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { ...tReveal, duration: 1.1 } },
      };
    case "fadeUp":
    default:
      return {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: tReveal },
      };
  }
};

export const staggerParent = (stagger = STAGGER_NORMAL, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: DISTANCE_MEDIUM },
  visible: { opacity: 1, y: 0, transition: tReveal },
};

export const staggerChildSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: tNormal },
};

/** Hero heading: line-by-line rise. */
export const headingLine: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease } },
};

export const headingWord: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: tNormal },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

export const STAGGERS = { small: STAGGER_SMALL, normal: STAGGER_NORMAL };
