import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Menu, X } from "lucide-react";
import { PillButton, SectionLabel } from "./ui";
import { HeroHeading, SplitHeading, scrollToId } from "./motion";
import { NAV, SERVICES, navKey, type NavItem } from "./site";
import ev1 from "@/assets/ev1.jpg";
import ev2 from "@/assets/ev2.jpg";
import spark from "@/assets/spark.jpg";

export const LINKEDIN = "https://linkedin.com/company/codrithmdev";

function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <img
      src="/brand/codrithm-logo-wordmark.png"
      alt="Codrithm"
      width={129}
      height={28}
      className={`${className} w-auto object-contain`}
    />
  );
}

/* ---------------- NAV ---------------- */
export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const active = navKey(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      setScrolled(window.scrollY > 40);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", on, { passive: true });
    return () => {
      window.removeEventListener("scroll", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Measure the sliding indicator
  useLayoutEffect(() => {
    const measure = () => {
      const btn = active
        ? navRef.current?.querySelector<HTMLElement>(`[data-nav="${active}"]`)
        : null;
      setPill(btn ? { left: btn.offsetLeft, width: btn.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // Mobile menu: scroll lock, Escape, focus management
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } })
      .__lenis;
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    const first = menuRef.current?.querySelector<HTMLElement>("button, a");
    setTimeout(() => first?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && menuRef.current) {
        const f = Array.from(menuRef.current.querySelectorAll<HTMLElement>("button, a"));
        const a = f[0],
          z = f[f.length - 1];
        if (!a || !z) return;
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          z.focus();
        } else if (!e.shiftKey && document.activeElement === z) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      lenis?.start();
      window.removeEventListener("keydown", onKey);
      toggleRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  // Retained homepage anchors: deep links / back-forward with hashes
  useEffect(() => {
    if (!isHome) return;
    const onHash = () => {
      const h = location.hash.slice(1);
      if (h && document.getElementById(h)) scrollToId(h);
    };
    window.addEventListener("popstate", onHash);
    if (location.hash) setTimeout(onHash, 400);
    return () => window.removeEventListener("popstate", onHash);
  }, [isHome]);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const go = (e: React.MouseEvent, item: NavItem) => {
    if (item.to === "/" && isHome) {
      // already home: smooth-scroll to top instead of a no-op navigation
      e.preventDefault();
      const wasOpen = open;
      setOpen(false);
      if (location.hash) history.pushState(null, "", location.pathname);
      window.setTimeout(() => scrollToId("home"), wasOpen ? 80 : 0);
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/75 py-3 backdrop-blur-xl" : "py-5"}`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            to="/"
            onClick={(e) => go(e, { label: "Home", to: "/" })}
            aria-label="Codrithm home"
            className="justify-self-start rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <Logo />
          </Link>
          <nav
            ref={navRef}
            aria-label="Main"
            className="relative hidden rounded-full border border-foreground/5 bg-background/70 p-1.5 backdrop-blur-xl lg:flex"
          >
            {pill && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-1.5 rounded-full bg-background shadow-sm ring-1 ring-foreground/5 transition-[left,width] duration-500 ease-[cubic-bezier(.65,0,.25,1)] motion-reduce:transition-none"
                style={{ left: pill.left, width: pill.width }}
              />
            )}
            {NAV.map((n) => {
              const on = active === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  data-nav={n.to}
                  aria-current={on ? "page" : undefined}
                  onClick={(e) => go(e, n)}
                  className={`relative z-10 rounded-full px-4 py-2 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric ${on ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center justify-self-end gap-2">
            <PillButton href={LINKEDIN} className="hidden sm:inline-flex">
              Join Community
            </PillButton>
            <button
              ref={toggleRef}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full bg-ink text-ink-foreground transition-transform duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[55] bg-ink/40 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-ink text-ink-foreground transition-[clip-path] duration-700 ease-[cubic-bezier(.7,0,.2,1)] motion-reduce:transition-none lg:hidden ${open ? "[clip-path:circle(150%_at_100%_0)]" : "pointer-events-none [clip-path:circle(0%_at_100%_0)]"}`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-mint text-ink transition-transform duration-300 hover:rotate-90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:hover:rotate-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-col px-5 pb-10 pt-6">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={(e) => go(e, n)}
              aria-current={active === n.to ? "page" : undefined}
              style={{ transitionDelay: open ? `${150 + i * 50}ms` : "0ms" }}
              className={`flex items-baseline justify-between border-b border-ink-foreground/10 py-3 text-left font-display text-[clamp(2.25rem,11vw,3rem)] transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:text-mint focus-visible:outline-none motion-reduce:transition-none ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${active === n.to ? "text-mint" : "hover:text-mint"}`}
            >
              {n.label}
              <span className="font-mono text-xs text-mint">0{i + 1}</span>
            </Link>
          ))}
          <div
            className={`mt-8 transition-all duration-700 motion-reduce:transition-none ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: open ? `${150 + NAV.length * 50}ms` : "0ms" }}
          >
            <PillButton href={LINKEDIN} variant="mint">
              Join Community
            </PillButton>
          </div>
        </nav>
      </div>
    </>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-wash pb-16 pt-40 md:pt-48">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          data-reveal=""
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" /> CODRITHM —
          TECHNOLOGY &amp; CREATIVE SOLUTIONS
        </div>
        <HeroHeading
          lines={["Ideas into impact.", "Technology into reality."]}
          className="font-display text-[clamp(2.6rem,8.4vw,8.5rem)] font-semibold"
        />
        <p
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg"
          data-hero-after=""
        >
          We build intelligent software, digital experiences, and distinctive brands that help
          ambitious ideas move forward.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-hero-cta="">
          <PillButton
            route="/contact"
            variant="electric"
            className="sm:min-w-60 sm:justify-between"
          >
            Start a Project
          </PillButton>
          <PillButton route="/services" variant="ghost">
            Explore Services
          </PillButton>
        </div>
      </div>
      <div className="mt-24 overflow-hidden border-y border-foreground/5 py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-display text-3xl text-foreground/20 md:text-5xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Learn", "Build", "Collaborate", "Grow", "Ship", "Share"].map((w) => (
              <span key={w + k} className="flex items-center gap-12">
                {w} <span className="h-3 w-3 rounded-full bg-mint" />
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT (concise preview) ---------------- */
export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:py-40">
      <SectionLabel n="02">About Codrithm</SectionLabel>
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <SplitHeading
          lines={["Built on curiosity.", "Driven by creation."]}
          mutedLast
          className="font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
        />
        <div data-reveal="" className="lg:mt-3">
          <p className="max-w-md text-lg text-muted-foreground">
            Codrithm brings together technology and creative services with a community built around
            learning, collaboration and creating together.
          </p>
          <PillButton route="/about" variant="ghost" className="mt-8">
            More about us
          </PillButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT WE DO ---------------- */
const SERVICE_COPY: Record<(typeof SERVICES)[number]["slug"], string> = {
  "ai-automation":
    "Intelligent workflows and connected systems that simplify operations and reduce repetitive work.",
  "software-development":
    "Custom applications and digital products built around real business needs.",
  "ai-machine-learning":
    "Practical AI-powered applications, intelligent features, and data-driven solutions.",
  "websites-wordpress":
    "Modern business websites, WordPress solutions, and engaging digital experiences.",
  "graphic-design-branding":
    "Distinctive identities, compelling visuals, and creative assets that communicate your brand.",
};
export function WhatWeDo() {
  return (
    <section id="services" className="bg-ink py-28 text-ink-foreground md:py-40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="eyebrow !text-ink-foreground/50" data-reveal="">
          01 — What we do
        </div>
        <SplitHeading
          lines={["Five ways we", "make things happen."]}
          className="mt-8 font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
        />
        <div className="mt-16 grid gap-4 md:grid-cols-6" data-stagger="">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              aria-label={`${s.name} — view service`}
              className={`group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-3xl border border-ink-foreground/10 p-8 transition-colors duration-500 hover:border-transparent focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-4 focus-visible:ring-offset-ink active:scale-[0.99] ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
            >
              <span className="absolute inset-0 translate-y-full rounded-3xl bg-mint transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0" />
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs text-ink-foreground/50 transition-colors group-hover:text-ink group-focus-visible:text-ink">
                  0{i + 1}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-ink-foreground/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-mint group-focus-visible:rotate-45 group-focus-visible:bg-ink group-focus-visible:text-mint">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="relative transition-colors duration-500 group-hover:text-ink group-focus-visible:text-ink">
                <h3 className="font-display text-3xl font-semibold md:text-4xl">{s.name}</h3>
                <p className="mt-3 max-w-sm text-ink-foreground/60 transition-colors group-hover:text-ink/70 group-focus-visible:text-ink/70">
                  {SERVICE_COPY[s.slug]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
const EVENTS = [
  { t: "From Classroom Project to Production-Ready AI Systems", c: "AI Engineering", img: ev1 },
  {
    t: "Beyond Prompting: How to Build Reliable AI Workflows and Agents",
    c: "AI Agents",
    img: ev2,
  },
  { t: "Microsoft Learn & Copilot Workshop", c: "Workshop", img: null },
  { t: "GitHub Session", c: "Developer Tools", img: null },
  { t: "Kickstart Your Journey with Smart Career Direction", c: "Career", img: null },
  { t: "LinkedIn Optimization", c: "Personal Branding", img: null },
];
export function Events() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-5 py-28 md:py-40">
      <SectionLabel n="03">Featured events</SectionLabel>
      <SplitHeading
        lines={["Learning is good.", "Experience is better."]}
        mutedLast
        className="mt-10 font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
      />
      <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2">
        {EVENTS.map((e, i) => (
          <article key={e.t} className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`} data-reveal="">
            <div data-clip="" className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink">
              {e.img ? (
                <img
                  src={e.img}
                  alt=""
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full scale-110 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-100"
                />
              ) : (
                <div className="flex h-full w-full items-end bg-[radial-gradient(70%_70%_at_80%_20%,var(--electric),transparent_70%)] p-8 transition-transform duration-[1.2s] group-hover:scale-105">
                  <span className="font-display text-[clamp(3rem,9vw,7rem)] font-semibold text-ink-foreground/10">
                    0{i + 1}
                  </span>
                </div>
              )}
              <span className="absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur">
                {e.c}
              </span>
              <span className="absolute bottom-5 right-5 inline-flex translate-y-4 items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-medium text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View Event <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between gap-6">
              <h3 className="text-xl font-medium leading-snug tracking-tight md:text-2xl">{e.t}</h3>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SPARK ---------------- */
export function Spark() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ink-foreground md:py-40">
      <div className="absolute inset-0 opacity-50">
        <img
          src={spark}
          alt=""
          loading="lazy"
          width={1600}
          height={912}
          data-parallax="10"
          className="h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-center gap-3" data-reveal="">
          <span className="rounded-full bg-mint px-4 py-1.5 text-xs font-medium text-ink">
            Flagship · In person
          </span>
          <span className="rounded-full border border-ink-foreground/20 px-4 py-1.5 text-xs">
            October 31, 2026
          </span>
        </div>
        <div className="mt-10 overflow-hidden">
          <div
            data-drift="-12"
            className="whitespace-nowrap font-display text-[clamp(4rem,17vw,16rem)] font-semibold"
          >
            Codrithm Spark
          </div>
          <div
            data-drift="10"
            className="whitespace-nowrap pl-[20vw] font-display text-[clamp(4rem,17vw,16rem)] font-semibold text-outline text-mint"
          >
            2026 — Spark
          </div>
        </div>
        <p className="mt-12 max-w-xl text-lg text-ink-foreground/70" data-reveal="">
          An in-person experience focused on practical technology, career development, creativity,
          and meaningful networking.
        </p>
        <p className="mt-6 eyebrow !text-ink-foreground/50" data-reveal="">
          Registration details coming soon
        </p>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
type Project = { title: string; tags: string[]; image?: string };
const PROJECTS: Project[] = [];
export function Projects() {
  const slots = PROJECTS.length ? PROJECTS : Array.from({ length: 3 }, () => null);
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-28 md:py-40">
      <SectionLabel n="03">Selected work</SectionLabel>
      <SplitHeading
        lines={["Ideas are good.", "Building is better."]}
        mutedLast
        className="mt-10 font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
      />
      <div className="mt-16 grid gap-4 md:grid-cols-3" data-stagger="">
        {slots.map((p, i) => (
          <article
            key={i}
            className={`group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-3xl p-7 ${i === 1 ? "bg-electric text-primary-foreground" : "bg-secondary"}`}
          >
            {p?.image && (
              <img
                src={p.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            )}
            <div className="relative flex flex-wrap gap-2">
              {(p?.tags ?? ["Community build"]).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-current/20 px-3 py-1 text-xs opacity-80"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="relative">
              <div className="font-display text-8xl font-semibold opacity-15 transition-transform duration-700 group-hover:-translate-y-3">
                0{i + 1}
              </div>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">
                {p?.title ?? "Your project here"}
              </h3>
              <p className="mt-2 text-sm opacity-70">
                {p ? "" : "Member projects will be showcased here soon."}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- COMMUNITY PREVIEW ---------------- */
export function CommunityPreview() {
  return (
    <section id="community" className="bg-ink py-28 text-ink-foreground md:py-40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="eyebrow !text-ink-foreground/50" data-reveal="">
          04 — Community
        </div>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <SplitHeading
            lines={["More than", "what we build."]}
            mutedLast
            className="font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
          />
          <div data-reveal="">
            <p className="max-w-md text-lg text-ink-foreground/60">
              Beyond our work, we're growing a community where people learn, collaborate, and turn
              ideas into action.
            </p>
            <PillButton route="/community" variant="mint" className="mt-8">
              Explore Our Community
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COLLABS ---------------- */
const COLLABS = [
  {
    name: "Inter AI Club — UMT",
    logo: "/brand/collaborators/inter-ai-club.png",
    alt: "Inter AI Club, UMT logo",
  },
  {
    name: "EMMUverse Technologies",
    logo: "/brand/collaborators/emmuverse.png",
    alt: "EMMUverse Technologies logo",
  },
  { name: "DeepCiphers", logo: "/brand/collaborators/deepciphers.png", alt: "DeepCiphers logo" },
];
export function Collabs() {
  return (
    <section className="border-y border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <SplitHeading
          lines={["Great things aren't", "built alone."]}
          className="text-center font-display text-[clamp(2.2rem,5vw,4.75rem)] font-semibold"
        />
        <div className="mt-14 grid md:grid-cols-3" data-stagger="">
          {COLLABS.map((c) => (
            <div
              key={c.name}
              className="group relative flex h-56 flex-col items-center justify-center gap-3 overflow-hidden border-foreground/10 text-center max-md:border-b md:border-r md:last:border-r-0"
            >
              <span className="absolute inset-0 scale-0 rounded-full bg-mint transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-150" />
              <span className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/5 transition-transform duration-500 group-hover:scale-105 md:h-32 md:w-32">
                <img
                  src={c.logo}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="relative eyebrow !text-foreground/70">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
type Member = { name: string; role: string; photo: string; linkedin?: string };
export const TEAM: Member[] = [
  {
    name: "Muhammad Umais",
    role: "Founder",
    photo: "/team/muhammad-umais-adeel.webp",
    linkedin: "https://www.linkedin.com/in/muhammad-umais-adeel/",
  },
  {
    name: "Atiq Umer",
    role: "Co-Founder",
    photo: "/team/atiq-umer.webp",
    linkedin: "https://www.linkedin.com/in/atiq-umer",
  },
  {
    name: "Iqra Asghar",
    role: "Growth Lead",
    photo: "/team/iqra-asghar.webp",
    linkedin: "https://www.linkedin.com/in/iqra-asghar",
  },
  {
    name: "Wajeeha Azeem",
    role: "Operations Lead",
    photo: "/team/wajeeha-azeem.webp",
    linkedin: "https://www.linkedin.com/in/wajeehaazeem",
  },
  {
    name: "Zimran Sohail",
    role: "Technical Associate",
    photo: "/team/zimran-sohail.webp",
    linkedin: "https://www.linkedin.com/in/zimransohail/",
  },
  {
    name: "Aliza Afzal",
    role: "Research Lead",
    photo: "/team/aliza-afzal.webp",
    linkedin: "https://www.linkedin.com/in/alizaafzal/",
  },
  {
    name: "Rabia Ramzan",
    role: "Graphic Lead",
    photo: "/team/rabia-ramzan.webp",
    linkedin: "https://www.linkedin.com/in/rabia-ramzan1/",
  },
];
export function Team({ n = "05" }: { n?: string } = {}) {
  return (
    <section id="team" className="mx-auto max-w-7xl px-5 py-28 md:py-40">
      <SectionLabel n={n}>Team</SectionLabel>
      <SplitHeading
        lines={["The people behind", "the possibilities."]}
        mutedLast
        className="mt-10 font-display text-[clamp(2.4rem,6vw,5.75rem)] font-semibold"
      />
      <div className="mt-16 flex flex-wrap justify-center gap-4" data-stagger="">
        {TEAM.map((m) => (
          <article
            key={m.name}
            className="group w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
          >
            <div className="overflow-hidden rounded-3xl bg-ink transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_-28px_rgba(0,0,0,0.5)]">
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-[filter,scale,transform] duration-[550ms] ease-out group-hover:scale-[1.025] group-hover:grayscale-0 group-focus-within:scale-[1.025] group-focus-within:grayscale-0 [@media(hover:none)]:grayscale-0 motion-reduce:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="min-w-0">
                  <h3 className="font-medium text-ink-foreground">{m.name}</h3>
                  <p className="text-sm text-mint">{m.role}</p>
                </div>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground opacity-85 transition-all duration-200 ease-out group-hover:opacity-100 hover:scale-105 hover:border-mint hover:bg-mint hover:text-ink focus-visible:scale-105 focus-visible:border-mint focus-visible:bg-mint focus-visible:text-ink motion-reduce:transition-none motion-reduce:hover:scale-100"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS (hidden until real reviews) ---------------- */
type Review = { quote: string; name: string; role: string };
const REVIEWS: Review[] = [];
export function Testimonials() {
  if (!REVIEWS.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-5 py-28">
      <div className="grid gap-4 md:grid-cols-3" data-stagger="">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-3xl bg-secondary p-8">
            <blockquote className="text-xl tracking-tight">“{r.quote}”</blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              {r.name} · {r.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA + FOOTER ---------------- */
export function Footer({ showCTA = true }: { showCTA?: boolean }) {
  return (
    <footer
      id={showCTA ? "contact" : undefined}
      className="relative overflow-hidden bg-ink text-ink-foreground"
    >
      <div className={`mx-auto max-w-7xl px-5 pb-10 ${showCTA ? "pt-28 md:pt-40" : ""}`}>
        {showCTA && (
          <>
            <SplitHeading
              lines={["Have something in mind?", "Let's build it."]}
              mutedLast
              className="font-display text-[clamp(2.6rem,8vw,8rem)] font-semibold"
            />
            <div
              className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
              data-reveal=""
            >
              <p className="max-w-md text-lg text-ink-foreground/60">
                Tell us about your project, challenge or idea — we'll take it from there.
              </p>
              <Link
                to="/contact"
                className="group relative grid h-40 w-40 shrink-0 place-items-center rounded-full bg-mint text-ink transition-transform duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-4 focus-visible:ring-offset-ink md:h-52 md:w-52"
              >
                <span className="text-center font-display text-2xl font-semibold leading-none">
                  Start a<br />
                  Project
                </span>
                <ArrowUpRight className="absolute right-8 top-8 h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
              </Link>
            </div>
          </>
        )}

        <div
          className={`${showCTA ? "mt-28 " : ""}grid gap-10 border-t border-ink-foreground/10 pt-12 md:grid-cols-4`}
          data-stagger=""
        >
          <div className="md:col-span-2">
            <Logo className="h-8" />
            <p className="mt-4 max-w-xs text-ink-foreground/60">
              Growth happens by creating — not just consuming.
            </p>
          </div>
          <div>
            <div className="eyebrow !text-ink-foreground/40">Navigate</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-ink-foreground/70 transition-colors hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow !text-ink-foreground/40">Connect</div>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink-foreground/70 transition-colors hover:text-mint"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <p className="mt-3 text-sm text-ink-foreground/40">Reach us via LinkedIn messages.</p>
          </div>
        </div>
        <div className="mt-16 select-none overflow-hidden">
          <div className="font-display text-[22vw] font-semibold leading-[0.8] text-ink-foreground/[0.06] md:text-[19vw]">
            Codrithm
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-between gap-4 text-xs text-ink-foreground/40">
          <span>© {new Date().getFullYear()} Codrithm. All rights reserved.</span>
          <span>Learn · Build · Collaborate · Grow</span>
        </div>
      </div>
    </footer>
  );
}
