import { HeroHeading, SplitHeading } from "./motion";
import { PillButton, SectionLabel } from "./ui";

export function AboutHero() {
  return (
    <section id="home" className="relative overflow-hidden hero-wash pb-16 pt-40 md:pt-48">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          data-reveal=""
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" /> ABOUT CODRITHM
        </div>
        <HeroHeading
          lines={["Built on curiosity.", "Driven by creation."]}
          className="font-display text-[clamp(2.6rem,8.4vw,8.5rem)] font-semibold"
        />
        <p
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
          data-hero-after=""
        >
          Codrithm brings together technology and creative services with a community built around
          learning, collaboration and creating together.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-hero-cta="">
          <PillButton route="/contact" variant="ink">
            Start a Project
          </PillButton>
          <PillButton to="story" variant="ghost">
            Our Story
          </PillButton>
        </div>
      </div>
    </section>
  );
}

export function AboutStory() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-5 py-28 md:py-40">
      <SectionLabel n="01">Our story</SectionLabel>
      <SplitHeading
        lines={["Growth happens by creating —", "not just consuming."]}
        mutedLast
        className="mt-10 font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
      />
      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16" data-stagger="">
        <div>
          <span className="eyebrow text-muted-foreground">What we believe</span>
          <p className="mt-4 text-lg leading-relaxed">
            We believe creating is central to learning. Talks and tutorials offer a starting point;
            putting ideas into practice helps us understand, improve and grow.
          </p>
        </div>
        <div>
          <span className="eyebrow text-muted-foreground">Two sides, one purpose</span>
          <p className="mt-4 text-lg leading-relaxed">
            That belief connects our services and our community. We work on technology and creative
            solutions — from automation and software to websites and branding — and bring people
            together to learn, collaborate and build.
          </p>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    t: "Practical innovation",
    d: "We explore new ideas with a practical purpose: solving problems and making things better.",
  },
  {
    t: "Quality & thoughtful execution",
    d: "Care in the details — from the first sketch to the final release.",
  },
  {
    t: "Collaboration",
    d: "We bring different skills and perspectives together, sharing ideas and building alongside one another.",
  },
  { t: "Continuous learning", d: "Every project teaches us something, and we pass it on." },
];

export function AboutValues() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-28 md:py-40">
        <SectionLabel n="02">What drives us</SectionLabel>
        <SplitHeading
          lines={["The principles", "behind the work."]}
          className="mt-10 font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-stagger="">
          {VALUES.map((v, i) => (
            <article
              key={v.t}
              className="group flex min-h-64 flex-col justify-between rounded-3xl border border-ink-foreground/10 p-7 transition-colors duration-500 hover:bg-mint hover:text-ink"
            >
              <span className="font-mono text-xs text-mint group-hover:text-ink">0{i + 1}</span>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">{v.t}</h3>
                <p className="mt-3 text-sm opacity-70">{v.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section id="contact" className="hero-wash">
      <div className="mx-auto max-w-7xl px-5 py-28 md:py-40">
        <SectionLabel n="04">Let's talk</SectionLabel>
        <SplitHeading
          lines={["Have something in mind?", "Let's build it."]}
          mutedLast
          className="mt-10 font-display text-[clamp(2.4rem,7vw,7rem)] font-semibold"
        />
        <div className="mt-12 flex flex-wrap gap-3" data-reveal="">
          <PillButton route="/contact" variant="ink">
            Start a Project
          </PillButton>
          <PillButton route="/community" variant="ghost">
            Explore Community
          </PillButton>
        </div>
      </div>
    </section>
  );
}
