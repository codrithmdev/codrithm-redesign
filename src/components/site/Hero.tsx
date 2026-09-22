import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import sunArc from "@/assets/sun-arc.jpg";
import { AnimatedButton } from "./AnimatedButton";
import { DashboardMockup } from "./DashboardMockup";
import { MouseDrift } from "@/animations/magnetic";
import { headingLine } from "@/animations/variants";
import { useMotionPrefs } from "@/animations/useMotionPrefs";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Page-load choreography (seconds). */
const T = {
  eyebrow: 0.1,
  heading: 0.15,
  paragraph: 0.25,
  buttons: 0.35,
  visual: 0.45,
};

const lines = ["Where Coders", "Make History."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { compact, allowParallax } = useMotionPrefs();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: compact ? 24 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease, delay },
  });

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-32 pb-0 lg:pt-40">
      {/* solar backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[62%] -z-10 h-[78vh] sm:top-[33%]"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.35 }}
        {...(allowParallax ? { style: { y: sunY, scale: sunScale } } : {})}
      >
        <MouseDrift amount={6} className="h-full w-full">
          <img
            src={sunArc}
            alt=""
            width={1920}
            height={1088}
            className="h-full w-full scale-110 object-contain object-top opacity-95 [filter:hue-rotate(105deg)_saturate(1.18)] [mask-image:linear-gradient(to_bottom,transparent,black_14%)]"
          />
        </MouseDrift>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>

      <div className="mx-auto w-full max-w-7xl px-5 text-center lg:px-8">
        <motion.div {...rise(T.eyebrow)} className="flex justify-center">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-elevated/60 py-1 pr-4 pl-1 text-sm backdrop-blur-sm transition-colors hover:border-primary/50"
          >
            <span className="rounded-full bg-[image:var(--gradient-solar)] px-3 py-1 text-xs font-medium text-primary-foreground">
              Codrithm
            </span>
            <span className="text-muted-foreground transition-colors group-hover:text-foreground">
              Learn · Build · Connect
            </span>
            <ArrowRight className="size-3.5 text-muted-foreground transition-transform duration-300 ease-[var(--ease-standard)] group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.h1
          className="font-display mx-auto mt-8 max-w-4xl text-[2.6rem] leading-[1.05] font-medium sm:text-6xl lg:text-7xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: T.heading } } }}
        >
          {lines.map((line) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span className="block" variants={headingLine}>
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          {...rise(T.paragraph)}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          A student-driven technology community helping emerging developers grow through practical
          skills, peer mentorship, and collaborative innovation.
        </motion.p>

        <motion.div {...rise(T.buttons)} className="mt-9 flex flex-wrap justify-center gap-3">
          <AnimatedButton variant="outline" size="lg">
            Explore our work
          </AnimatedButton>
          <AnimatedButton size="lg">Work with us</AnimatedButton>
        </motion.div>
      </div>

      {/* hero visual: masked upward reveal */}
      <div className="mx-auto mt-16 w-full max-w-6xl px-5 lg:mt-24 lg:px-8">
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: compact ? 30 : 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: T.visual }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
