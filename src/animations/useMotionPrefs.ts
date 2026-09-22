import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Single source of truth for "how much motion is allowed here".
 * - reduced: user asked for less motion → no parallax, no looping float
 * - compact: small screens → shorter travel, no horizontal movement
 */
export function useMotionPrefs() {
  const reduced = useReducedMotion() ?? false;
  const isMobile = useIsMobile();

  return {
    reduced,
    isMobile,
    compact: reduced || isMobile,
    allowFloat: !reduced,
    allowParallax: !reduced && !isMobile,
    allowCursor: !reduced && !isMobile,
  };
}
