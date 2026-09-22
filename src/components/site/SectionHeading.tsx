import { motion } from "framer-motion";
import { Reveal } from "@/animations/reveal";
import { headingWord } from "@/animations/variants";
import { VIEWPORT } from "@/animations/tokens";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  highlight,
  subtitle,
  className,
}: {
  title: string;
  highlight?: string | undefined;
  subtitle?: string | undefined;
  className?: string | undefined;
}) {
  const words = title.split(" ");

  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <motion.h2
        className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span className="inline-block pr-[0.28em]" variants={headingWord}>
              {w}
            </motion.span>
          </span>
        ))}
        {highlight && (
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className="text-gradient inline-block opacity-70"
              variants={headingWord}
            >
              {highlight}
            </motion.span>
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <Reveal variant="fadeUp" delay={0.1} className="mt-5">
          <p className="text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
