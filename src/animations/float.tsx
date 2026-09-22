import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { floatTransition } from "./transitions";
import { useMotionPrefs } from "./useMotionPrefs";

/** Slow, near-imperceptible drift for decorative elements. */
export function Float({
  children,
  className,
  y = 8,
  duration = 5,
  delay = 0,
  rotate = 0,
}: {
  children: ReactNode;
  className?: string | undefined;
  y?: number;
  duration?: number;
  delay?: number;
  rotate?: number;
}) {
  const { allowFloat } = useMotionPrefs();
  if (!allowFloat) return <div className={cn(className)}>{children}</div>;

  return (
    <motion.div
      className={cn(className)}
      animate={rotate ? { y: [0, -y, 0], rotate: [0, rotate, 0] } : { y: [0, -y, 0] }}
      transition={{ ...floatTransition(duration), delay }}
    >
      {children}
    </motion.div>
  );
}
