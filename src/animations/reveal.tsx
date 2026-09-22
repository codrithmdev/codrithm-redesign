import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { makeVariants, type RevealVariant } from "./variants";
import { VIEWPORT } from "./tokens";
import { useMotionPrefs } from "./useMotionPrefs";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string | undefined;
  as?: "div" | "section" | "span" | "li" | "h2" | "p";
  amount?: number;
} & Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "children">;

/**
 * Scroll reveal primitive. Fires once, respects reduced motion + mobile.
 */
export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  as = "div",
  amount,
  ...rest
}: RevealProps) {
  const { compact, reduced } = useMotionPrefs();
  const Comp = motion[as] as typeof motion.div;
  const variants = makeVariants(reduced ? "fade" : variant, compact);

  return (
    <Comp
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, amount: amount ?? VIEWPORT.amount }}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
