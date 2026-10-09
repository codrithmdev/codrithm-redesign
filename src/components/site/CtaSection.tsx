import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/animations/reveal";
import { Parallax } from "@/animations/parallax";
import { DashboardMockup } from "./DashboardMockup";

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
      <Reveal variant="scaleReveal">
        <div className="surface-card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-56 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_35%,transparent),transparent_70%)]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal variant="fadeUp">
                <h2 className="font-display max-w-md text-3xl leading-tight sm:text-4xl">
                  Have something you need to build?
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Tell us what you&apos;re working on, what you&apos;re trying to solve, and where
                  you need help.
                </p>
              </Reveal>
              <Reveal
                variant="fadeUp"
                delay={0.12}
                className="mt-8 flex flex-wrap items-center gap-5"
              >
                <Link
                  to="/contact"
                  search={{ type: "project" }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Discuss Your Project
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  to="/community"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  Explore Our Community
                </Link>
              </Reveal>
            </div>
            <Reveal variant="fadeRight">
              <Parallax distance={10}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
