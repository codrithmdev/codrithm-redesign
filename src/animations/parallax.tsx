import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMotionPrefs } from "./useMotionPrefs";

type ParallaxProps = {
  children: ReactNode;
  className?: string | undefined;
  /** Total travel in px across the scroll range. */
  distance?: number;
};

/** Subtle depth: element drifts a few px against the page scroll. */
export function Parallax({ children, className, distance = 20 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { allowParallax } = useMotionPrefs();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 80, damping: 26, mass: 0.5 });

  return (
    <div ref={ref} className={cn(className)}>
      <motion.div {...(allowParallax ? { style: { y } } : {})}>{children}</motion.div>
    </div>
  );
}
