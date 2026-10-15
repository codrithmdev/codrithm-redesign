import { ArrowUpRight } from "lucide-react";
import { HeroHeading, SplitHeading } from "./motion";
import { PillButton, SectionLabel } from "./ui";
import { LINKEDIN } from "./sections";

/** Community page hero — reuses the homepage character reveal. */
export function CommunityHero() {
  return (
    <section id="home" className="relative overflow-hidden hero-wash pb-16 pt-40 md:pt-48">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          data-reveal=""
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" /> CODRITHM COMMUNITY
        </div>
        <HeroHeading
          lines={["We don't just learn tech.", "We build what's next."]}
          className="font-display text-[clamp(2.6rem,8.4vw,8.5rem)] font-semibold"
        />
        <p
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
          data-hero-after=""
        >
          Find your people. Share what you know. Build what you imagine.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-hero-cta="">
          <PillButton href={LINKEDIN} variant="mint" className="sm:min-w-56 sm:justify-between">
            Join the Community
          </PillButton>
          <PillButton to="events" variant="ghost">
            See Events
          </PillButton>
        </div>
      </div>
    </section>
  );
}

const ACTIVITIES = [
  { t: "Workshops", d: "Practical, hands-on sessions over passive content." },
  { t: "Events", d: "Talks and sessions on AI, developer tools and real-world building." },
  { t: "Projects", d: "Turn every idea into something you can ship and show." },
  { t: "Career development", d: "Career direction and personal branding for what comes next." },
  { t: "Collaborations", d: "Students, developers, designers — one table." },
];

export function CommunityActivities() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:py-40">
      <SectionLabel n="01">What we do together</SectionLabel>
      <SplitHeading
        lines={["Learn. Build.", "Collaborate. Grow."]}
        mutedLast
        className="mt-10 font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
      />
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" data-stagger="">
        {ACTIVITIES.map((a, i) => (
          <article
            key={a.t}
            className="group flex min-h-64 flex-col justify-between rounded-3xl bg-secondary p-7 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground"
          >
            <span className="font-mono text-xs text-muted-foreground group-hover:text-mint">
              0{i + 1}
            </span>
            <div>
              <h3 className="text-2xl font-medium tracking-tight">{a.t}</h3>
              <p className="mt-3 text-sm opacity-70">{a.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CommunityCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-28 md:py-40">
        <SplitHeading
          lines={["Your next big idea", "starts with people."]}
          className="font-display text-[clamp(2.6rem,8vw,8rem)] font-semibold"
        />
        <div
          className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          data-reveal=""
        >
          <p className="max-w-md text-lg text-ink-foreground/60">
            Join Codrithm on LinkedIn to hear about upcoming workshops, events and Codrithm Spark.
          </p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="group relative grid h-40 w-40 shrink-0 place-items-center rounded-full bg-mint text-ink transition-transform duration-500 hover:scale-110 md:h-52 md:w-52"
          >
            <span className="text-center font-display text-2xl font-semibold leading-none">
              Join
              <br />
              Codrithm
            </span>
            <ArrowUpRight className="absolute right-8 top-8 h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
          </a>
        </div>
        <div className="mt-24 select-none overflow-hidden">
          <div className="font-display text-[16vw] font-semibold leading-[0.8] text-ink-foreground/[0.06] md:text-[15vw]">
            Community
          </div>
        </div>
      </div>
    </section>
  );
}
