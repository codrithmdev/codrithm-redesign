import type { ReactNode } from "react";
import { Reveal } from "@/animations/reveal";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
      <Reveal variant="fadeUp" className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
        <h1 className="font-display mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </Reveal>
      {children && <div className="mt-14">{children}</div>}
    </div>
  );
}
