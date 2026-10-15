import { useEffect } from "react";

/** Smooth scroll (Lenis) + scroll animations (GSAP ScrollTrigger) driven by data attributes. */
export function useSiteMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      document.documentElement.classList.add("js-motion");

      let lenis: InstanceType<typeof Lenis> | null = null;
      const tick = (t: number) => lenis?.raf(t * 1000);
      if (!reduce) {
        lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        (window as unknown as { __lenis?: unknown }).__lenis = lenis;
      }

      const ctx = gsap.context(() => {
        if (reduce) {
          document.documentElement.classList.remove("hero-pending");
          return;
        }
        // Word-by-word headline reveal
        document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
          const words = el.querySelectorAll("[data-word]");
          gsap.from(words, {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.06,
            ...(el.hasAttribute("data-now")
              ? {}
              : { scrollTrigger: { trigger: el, start: "top 85%" } }),
            delay: el.hasAttribute("data-now") ? 0.15 : 0,
          });
        });
        // Hero: character-by-character entrance (runs once on load)
        const heroLines = document.querySelectorAll<HTMLElement>("[data-hero-line]");
        if (heroLines.length) {
          const tl = gsap.timeline({ delay: 0.15 });
          document.documentElement.classList.remove("hero-pending");
          heroLines.forEach((line, i) => {
            const chars = line.querySelectorAll("[data-hero-char]");
            tl.from(
              chars,
              { y: 55, opacity: 0, duration: 0.75, stagger: 0.028, ease: "power3.out" },
              i === 0 ? 0 : "-=0.45",
            );
          });
          tl.from(
            "[data-hero-after]",
            { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5",
          );
          tl.from(
            "[data-hero-cta] > *",
            { y: 24, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" },
            "-=0.6",
          );
        }
        // Fade-up reveal, staggered within groups
        document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
          gsap.from(group.children, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: group, start: "top 85%" },
          });
        });
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
        // Image clip reveal
        document.querySelectorAll<HTMLElement>("[data-clip]").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(18% 12% 18% 12% round 32px)" },
            {
              clipPath: "inset(0% 0% 0% 0% round 24px)",
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 90%", end: "top 30%", scrub: true },
            },
          );
        });
        // Parallax
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const amt = Number(el.dataset["parallax"] || 15);
          gsap.fromTo(
            el,
            { yPercent: -amt },
            {
              yPercent: amt,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, scrub: true },
            },
          );
        });
        // Horizontal drift text
        document.querySelectorAll<HTMLElement>("[data-drift]").forEach((el) => {
          const amt = Number(el.dataset["drift"] || -20);
          gsap.fromTo(
            el,
            { xPercent: 0 },
            { xPercent: amt, ease: "none", scrollTrigger: { trigger: el, scrub: true } },
          );
        });
      });

      cleanup = () => {
        ctx.revert();
        gsap.ticker.remove(tick);
        lenis?.destroy();
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (
    window as unknown as { __lenis?: { scrollTo: (e: Element | number, o: object) => void } }
  ).__lenis;
  const header = document.querySelector("header");
  const offset = id === "home" ? 0 : -((header?.getBoundingClientRect().height ?? 72) + 16);
  const top = id === "home" ? 0 : el.getBoundingClientRect().top + window.scrollY + offset;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (lenis && !reduce) lenis.scrollTo(id === "home" ? 0 : el, { offset });
  else window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}

/** Headline split into masked words for reveal. */
export function SplitHeading({
  lines,
  className = "",
  as: Tag = "h2",
  now = false,
  mutedLast = false,
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
  now?: boolean;
  mutedLast?: boolean;
}) {
  return (
    <Tag className={className} data-split="" {...(now ? { "data-now": "" } : {})}>
      {lines.map((line, li) => (
        <span
          key={li}
          className={`block ${mutedLast && li === lines.length - 1 ? "text-muted-foreground/60" : ""}`}
        >
          {line.split(" ").map((w, wi) => (
            <span key={wi} className="inline-block overflow-hidden pb-[0.08em] align-top">
              <span data-word="" className="inline-block">
                {w}&nbsp;
              </span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}

/** Hero headline split into characters (decorative, aria-hidden) with an sr-only full text. */
export function HeroHeading({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <h1 className={className} data-hero-heading="">
      <span className="sr-only">{lines.join(" ")}</span>
      {lines.map((line, li) => (
        <span
          key={li}
          aria-hidden="true"
          data-hero-line=""
          className={`block ${li === lines.length - 1 ? "text-muted-foreground/60" : ""}`}
        >
          {line.split(" ").map((w, wi, arr) => (
            <span key={wi}>
              <span className="inline-block whitespace-nowrap pb-[0.08em] align-top">
                {Array.from(w).map((c, ci) => (
                  <span
                    key={ci}
                    data-hero-char=""
                    className="gsap_split_letter inline-block will-change-transform"
                  >
                    {c}
                  </span>
                ))}
              </span>
              {wi < arr.length - 1 ? " " : null}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
