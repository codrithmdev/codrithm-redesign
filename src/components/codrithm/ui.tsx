import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { scrollToId } from "./motion";

type Variant = "ink" | "electric" | "ghost" | "mint";
const styles: Record<Variant, string> = {
  ink: "bg-ink text-ink-foreground",
  electric: "bg-electric text-primary-foreground",
  mint: "bg-mint text-ink",
  ghost: "border border-foreground/15 text-foreground hover:border-foreground/40",
};
const dot: Record<Variant, string> = {
  ink: "bg-ink-foreground text-ink",
  electric: "bg-primary-foreground text-electric",
  mint: "bg-ink text-mint",
  ghost: "bg-foreground text-background",
};

/** Pill button with circular arrow — arrow slides out/in on hover. */
export function PillButton({
  children,
  variant = "ink",
  to,
  href,
  route,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  to?: string;
  href?: string;
  /** App page path (client-side navigation). */
  route?: "/contact" | "/services" | "/community" | "/about";
  className?: string;
}) {
  const inner = (
    <>
      <span className="relative overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(.7,0,.2,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      <span
        className={`relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full ${dot[variant]}`}
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6" />
        <ArrowUpRight className="absolute h-4 w-4 -translate-x-6 translate-y-6 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </>
  );
  const cls = `group inline-flex items-center gap-4 rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-[transform,background] duration-300 active:scale-[0.97] ${styles[variant]} ${className}`;
  if (route)
    return (
      <Link
        to={route}
        className={`${cls} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2`}
      >
        {inner}
      </Link>
    );
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  return (
    <button type="button" onClick={() => to && scrollToId(to)} className={cls}>
      {inner}
    </button>
  );
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 eyebrow" data-reveal="">
      <span className="h-2 w-2 rounded-full bg-electric" />
      <span>{n}</span>
      <span className="h-px w-10 bg-foreground/20" />
      <span>{children}</span>
    </div>
  );
}
