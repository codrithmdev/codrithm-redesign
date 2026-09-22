import { motion } from "framer-motion";
import { Reveal } from "@/animations/reveal";
import { Parallax } from "@/animations/parallax";
import { DashboardMockup } from "./DashboardMockup";
import { AnimatedButton } from "./AnimatedButton";

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
      <Reveal variant="scaleReveal">
        <div className="surface-card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-56 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_70%)]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal variant="fadeUp">
                <h2 className="font-display max-w-sm text-3xl leading-tight sm:text-4xl">
                  Start your next chapter with Codrithm.
                </h2>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  Learn in public, build with others, and turn consistent practice into real momentum.
                </p>
              </Reveal>

              <Reveal variant="fadeUp" delay={0.12}>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-border-strong bg-elevated/70 p-1.5 backdrop-blur-sm transition-colors duration-300 focus-within:border-primary/60"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter email here"
                    className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <AnimatedButton type="submit" withArrow={false} size="md">
                    Get Started
                  </AnimatedButton>
                </form>
              </Reveal>
            </div>

            <Reveal variant="fadeRight">
              <Parallax distance={16}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:translate-x-6"
                >
                  <DashboardMockup />
                </motion.div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
