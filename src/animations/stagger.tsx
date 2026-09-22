import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { staggerChild, staggerChildSmall, staggerParent } from "./variants";
import { STAGGER_NORMAL, STAGGER_SMALL, VIEWPORT } from "./tokens";
import { useMotionPrefs } from "./useMotionPrefs";

type StaggerProps = {
  children: ReactNode;
  className?: string | undefined;
  stagger?: number;
  delay?: number;
  amount?: number;
} & Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "children">;

export function Stagger({
  children,
  className,
  stagger = STAGGER_NORMAL,
  delay = 0,
  amount,
  ...rest
}: StaggerProps) {
  const { compact } = useMotionPrefs();
  return (
    <motion.div
      className={cn(className)}
      variants={staggerParent(compact ? STAGGER_SMALL : stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, amount: amount ?? VIEWPORT.amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string | undefined;
  small?: boolean;
} & Omit<HTMLMotionProps<"div">, "variants" | "children">;

export function StaggerItem({ children, className, small, ...rest }: ItemProps) {
  return (
    <motion.div className={cn(className)} variants={small ? staggerChildSmall : staggerChild} {...rest}>
      {children}
    </motion.div>
  );
}
