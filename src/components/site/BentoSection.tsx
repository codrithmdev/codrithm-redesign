import { motion } from "framer-motion";
import { Activity, Sparkles, TrendingUp, Users } from "lucide-react";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { Float } from "@/animations/float";
import { Counter } from "@/animations/counter";
import { tHover } from "@/animations/transitions";
import { useMotionPrefs } from "@/animations/useMotionPrefs";
import { cn } from "@/lib/utils";

function Card({
  title,
  body,
  className,
  children,
}: {
  title: string;
  body: string;
  className?: string | undefined;
  children?: React.ReactNode;
}) {
  const { reduced } = useMotionPrefs();
  return (
    <StaggerItem className={className}>
      <motion.article
        whileHover={reduced ? {} : { y: -4, scale: 1.005 }}
        transition={tHover}
        className="surface-card group relative h-full overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-border-strong"
      >
        <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <h3 className="font-display text-xl">{title}</h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">{body}</p>
        {children}
      </motion.article>
    </StaggerItem>
  );
}

export function BentoSection() {
  return (
      <section id="about" className="mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
      <Stagger className="grid gap-4 lg:grid-cols-3">
        <Card title="Ethical values" body="Integrity guides how we learn, build, and work together.">
          <div className="mt-6 space-y-2">
            {[
              { id: "VALUE 01", label: "Respect every learner", active: true },
              { id: "VALUE 02", label: "Share what you discover", active: false },
              { id: "VALUE 03", label: "Build with purpose", active: false },
            ].map((r) => (
              <div
                key={r.id}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-xs transition-transform duration-300 ease-[var(--ease-standard)] group-hover:translate-x-1",
                  r.active
                    ? "bg-[image:var(--gradient-solar)] text-primary-foreground"
                    : "border border-border bg-elevated/60 text-muted-foreground",
                )}
              >
                <Activity className="size-3.5 shrink-0" />
                <span className="font-medium">{r.id}</span>
                <span className="truncate">{r.label}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Community" body="A growing network of students and builders.">
          <div className="mt-6 rounded-xl border border-border bg-elevated/60 p-4">
            <div className="flex items-center justify-between text-[10px] tracking-widest text-muted-foreground uppercase">
              <span>Active members</span>
              <span className="text-success">↗ Growing</span>
            </div>
            <div className="mt-2 flex items-end justify-between">
              <span className="font-display text-2xl">
                <Counter to={100} suffix="+" duration={1.6} />
              </span>
              <Users className="size-5 text-primary" />
            </div>
          </div>
        </Card>

        <Card
          title="Collaborate"
          body="Turn early ideas into meaningful projects with people who care."
          className="lg:row-span-2"
        >
          <div className="relative mt-8 flex h-56 items-center justify-center lg:h-[22rem]">
            <div className="absolute inset-x-8 top-0 h-2/3 bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--primary)_75%,transparent),transparent)] [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)] opacity-70" />
            <Float y={7} duration={5.5}>
              <div className="relative grid size-20 place-items-center rounded-2xl border border-border-strong bg-elevated shadow-[var(--shadow-glow)]">
                <Sparkles className="size-8 text-foreground" />
              </div>
            </Float>
          </div>
        </Card>

        <Card
          title="Learn in practice"
          body="Every session, question, and project can become a step forward."
          className="lg:col-span-2"
        >
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 text-sm">
              {["Workshops", "Projects", "Mentorship", "Community", "Opportunities"].map((l, i) => (
                <div
                  key={l}
                  className={cn(
                    "rounded-lg border border-border bg-elevated/40 px-3 py-2 transition-colors duration-300",
                    i === 0 ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="relative grid place-items-center">
              <Float y={6} duration={6} rotate={2}>
                <Sparkles className="size-16 text-foreground/80" />
              </Float>
              <Float y={10} duration={4.5} delay={0.4} className="absolute top-2 right-6">
                <TrendingUp className="size-6 text-primary" />
              </Float>
            </div>
          </div>
        </Card>
      </Stagger>
    </section>
  );
}
