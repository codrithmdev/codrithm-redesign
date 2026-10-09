import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/animations/reveal";

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
      <Reveal variant="scaleReveal">
        <div className="surface-card relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-56 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_25%,transparent),transparent_70%)]" />
          <div className="relative max-w-2xl">
            <Reveal variant="fadeUp">
              <h2 className="font-display max-w-md text-3xl leading-tight sm:text-4xl">
                Have something you need to build?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Tell us what you&apos;re working on, what you&apos;re trying to solve, and where you
                need help.
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
        </div>
      </Reveal>
    </section>
  );
}
