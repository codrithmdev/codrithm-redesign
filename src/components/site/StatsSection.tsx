import { Counter } from "@/animations/counter";
import { Stagger, StaggerItem } from "@/animations/stagger";

const stats = [
  { to: 600, suffix: "+", label: "Community followers" },
  { to: 7, suffix: "+", label: "Core team members" },
  { to: 100, suffix: "+", label: "Active community members" },
  { to: 10, suffix: "+", label: "Learning sessions and events" },
];

export function StatsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StaggerItem key={s.label} className="bg-background p-8 text-center">
            <p className="font-display text-4xl lg:text-5xl">
              <span className="text-gradient">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} duration={1.6} />
              </span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
