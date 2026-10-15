import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HeroHeading, SplitHeading } from "./motion";
import { PillButton, SectionLabel } from "./ui";
import { SERVICES, type Service } from "./site";

const BLURBS: Record<Service["slug"], string> = {
  "ai-automation": "Intelligent workflows and business process automation.",
  "software-development": "Custom applications, integrations, and digital products.",
  "ai-machine-learning": "Practical intelligent solutions and data-driven capabilities.",
  "websites-wordpress": "Modern websites, WordPress development, and digital experiences.",
  "graphic-design-branding": "Brand identities, visual systems, and creative assets.",
};

export function ServicesHero() {
  return (
    <section id="home" className="relative overflow-hidden hero-wash pb-16 pt-40 md:pt-48">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          data-reveal=""
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" /> WHAT WE DO
        </div>
        <HeroHeading
          lines={["Your ideas.", "Our expertise."]}
          className="font-display text-[clamp(2.6rem,8.4vw,8.5rem)] font-semibold"
        />
        <p
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
          data-hero-after=""
        >
          From intelligent automation and software to digital experiences and brand identities, we
          help turn ideas into practical solutions.
        </p>
      </div>
    </section>
  );
}

export function ServicesList() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:py-32">
      <SectionLabel n="01">Five services</SectionLabel>
      <ul className="mt-12 border-t border-foreground/10" data-stagger="">
        {SERVICES.map((s, i) => (
          <li key={s.slug} className="border-b border-foreground/10">
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-3 overflow-hidden px-4 py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric md:grid-cols-[4rem_1fr_minmax(0,22rem)_auto] md:items-center md:gap-x-10 md:py-14"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-mint transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
              />
              <span className="relative pt-2 font-mono text-xs text-muted-foreground transition-colors group-hover:text-ink md:pt-0">
                0{i + 1}
              </span>
              <span className="relative font-display text-[clamp(2rem,6.5vw,5.5rem)] font-semibold transition-[transform,color] duration-500 ease-out group-hover:translate-x-3 group-hover:text-ink motion-reduce:transform-none">
                {s.name}
              </span>
              <span className="relative col-span-3 col-start-1 text-base text-muted-foreground transition-colors group-hover:text-ink md:col-span-1 md:col-start-auto md:text-lg">
                {BLURBS[s.slug]}
              </span>
              <span className="relative col-start-3 row-start-1 grid h-12 w-12 place-items-center rounded-full border border-foreground/15 transition-[transform,background-color,color,border-color] duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-mint md:col-start-auto md:row-start-auto md:h-14 md:w-14">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServicesCTA() {
  return (
    <section className="hero-wash">
      <div className="mx-auto max-w-7xl px-5 py-28 md:py-40">
        <SectionLabel n="02">Let's talk</SectionLabel>
        <SplitHeading
          lines={["Have a challenge", "worth solving?"]}
          mutedLast
          className="mt-10 font-display text-[clamp(2.4rem,7vw,7rem)] font-semibold"
        />
        <div className="mt-12" data-reveal="">
          <PillButton route="/contact" variant="ink">
            Start a Project
          </PillButton>
        </div>
      </div>
    </section>
  );
}
