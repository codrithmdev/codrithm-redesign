import type React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { tHover, tPress } from "@/animations/transitions";
import { useMotionPrefs } from "@/animations/useMotionPrefs";

const buttonStyles = cva(
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
  {
    variants: {
      variant: {
        solar:
          "bg-[image:var(--gradient-solar)] text-primary-foreground glow-ring hover:brightness-110",
        outline:
          "border border-border-strong bg-elevated/60 text-foreground backdrop-blur-sm hover:border-primary/60 hover:bg-elevated",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3.5 text-base",
      },
    },
    defaultVariants: { variant: "solar", size: "md" },
  },
);

type Props = HTMLMotionProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    withArrow?: boolean;
  };

export function AnimatedButton({
  className,
  variant,
  size,
  withArrow = true,
  children,
  ...rest
}: Props) {
  const { reduced } = useMotionPrefs();

  return (
    <motion.button
      className={cn(buttonStyles({ variant, size }), className)}
      whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
      whileTap={reduced ? {} : { scale: 0.98, y: 0 }}
      transition={tHover}
      {...rest}
    >
      <span>{children as React.ReactNode}</span>
      {withArrow && (
        <motion.span
          className="inline-flex"
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          initial="rest"
          whileHover="hover"
          animate="rest"
          transition={tPress}
          aria-hidden
        >
          <ArrowRight className="size-4 transition-transform duration-200 ease-[var(--ease-standard)] group-hover:translate-x-1" />
        </motion.span>
      )}
    </motion.button>
  );
}
