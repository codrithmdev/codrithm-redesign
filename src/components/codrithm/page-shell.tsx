import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useSiteMotion, SplitHeading } from "./motion";
import { Nav } from "./sections";
import { SectionLabel } from "./ui";

/** Minimal Phase 1 page shell — reuses the site nav, typography and reveal motion. */
export function PageShell({
  label,
  code,
  lines,
  intro,
  children,
}: {
  label: string;
  code: string;
  lines: string[];
  intro: string;
  children?: ReactNode;
}) {
  useSiteMotion();
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="hero-wash relative px-5 pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n={code}>{label}</SectionLabel>
          <SplitHeading
            as="h1"
            now
            lines={lines}
            className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-semibold"
          />
          <p className="mt-8 max-w-xl text-lg text-muted-foreground" data-reveal="">
            {intro}
          </p>
          {children && <div className="mt-14">{children}</div>}
        </div>
      </section>
    </main>
  );
}

export function BackHome() {
  return (
    <Link
      to="/"
      className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
    >
      ← Back to home
    </Link>
  );
}
