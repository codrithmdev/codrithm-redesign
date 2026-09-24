import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/animations/reveal";
import { cn } from "@/lib/utils";

const quotes = [
  {
    quote:
      "Codrithm made learning feel possible. I stopped watching alone and started building with people who understood the journey.",
    name: "Community member",
    role: "Emerging developer",
  },
  {
    quote:
      "The most valuable part is the encouragement to turn small practice into real projects we can share proudly.",
    name: "Session participant",
    role: "Student builder",
  },
  {
    quote:
      "It is a space where questions are welcomed and progress is celebrated, even when you are still finding your direction.",
    name: "Codrithm member",
    role: "Community learner",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const go = (d: number) => setState(([i]) => [(i + d + quotes.length) % quotes.length, d]);
  const active = quotes[index]!;

  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-24 text-center lg:px-8 lg:py-32">
      <Reveal variant="scaleReveal">
        <div className="surface-card relative overflow-hidden rounded-2xl px-6 py-14 sm:px-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_70%)]" />

          <div className="relative min-h-[13rem] sm:min-h-[11rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -48 }}
                transition={{ duration: 0.7, ease }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="font-display text-xl leading-snug sm:text-2xl">“{active.quote}”</p>
                <footer className="mt-7 text-sm text-muted-foreground">
                  <span className="text-foreground">{active.name}</span> — {active.role}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="relative mt-10 flex items-center justify-center gap-4">
            <motion.button
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90"
            >
              <ArrowLeft className="size-4" />
            </motion.button>

            <div className="flex items-center gap-2">
              {quotes.map((q, i) => (
                <button
                  key={q.name}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setState([i, i > index ? 1 : -1])}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500 ease-[var(--ease-standard)]",
                    i === index ? "w-7 bg-primary" : "w-1.5 bg-primary hover:bg-primary",
                  )}
                />
              ))}
            </div>

            <motion.button
              aria-label="Next testimonial"
              onClick={() => go(1)}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90"
            >
              <ArrowRight className="size-4" />
            </motion.button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
