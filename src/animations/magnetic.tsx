import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMotionPrefs } from "./useMotionPrefs";

/**
 * Very low-amplitude mouse follow. Decorative elements only.
 */
export function MouseDrift({
  children,
  className,
  amount = 5,
}: {
  children: ReactNode;
  className?: string | undefined;
  amount?: number;
}) {
  const { allowCursor } = useMotionPrefs();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 40, damping: 20, mass: 0.8 });
  const y = useSpring(my, { stiffness: 40, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (!allowCursor) return;
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(nx * amount);
      my.set(ny * amount);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [allowCursor, amount, mx, my]);

  return (
    <motion.div className={cn(className)} {...(allowCursor ? { style: { x, y } } : {})}>
      {children}
    </motion.div>
  );
}
