import type { Transition } from "framer-motion";
import {
  DURATION_FAST,
  DURATION_NORMAL,
  DURATION_REVEAL,
  DURATION_SLOW,
  EASE_IN_OUT,
  EASE_STANDARD,
} from "./tokens";

const ease = [...EASE_STANDARD] as [number, number, number, number];
const easeInOut = [...EASE_IN_OUT] as [number, number, number, number];

export const tFast: Transition = { duration: DURATION_FAST, ease };
export const tNormal: Transition = { duration: DURATION_NORMAL, ease };
export const tSlow: Transition = { duration: DURATION_SLOW, ease };
export const tReveal: Transition = { duration: DURATION_REVEAL, ease };

export const tHover: Transition = { duration: 0.28, ease };
export const tPress: Transition = { duration: 0.12, ease };

export const floatTransition = (duration: number): Transition => ({
  duration,
  ease: easeInOut,
  repeat: Infinity,
  repeatType: "mirror",
});

export const springSoft: Transition = { type: "spring", stiffness: 60, damping: 18, mass: 0.6 };
