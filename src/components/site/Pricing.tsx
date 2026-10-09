import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { tHover } from "@/animations/transitions";
import { useMotionPrefs } from "@/animations/useMotionPrefs";
import { cn } from "@/lib/utils";

const themes = [
  {
    title: "Learn",
    description: "Practical sessions, workshops, and knowledge sharing.",
    icon: Sparkles,
  },
  {
    title: "Build",
    description: "Projects, experimentation, and collaborative learning.",
    icon: Activity,
  },
  {
    title: "Connect",
    description: "Opportunities to meet peers, mentors, and professionals.",
    icon: Users,
  },
];

export function Pricing() {
  const { reduced } = useMotionPrefs();

  return (
    <section id="community" className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        title="More Than Client"
        highlight="Work"
        subtitle="Codrithm is also a technology community bringing students, developers, and industry professionals together through learning sessions, projects, and collaborations."
      />

      <Stagger className="mt-16 grid gap-6 lg:grid-cols-3" stagger={0.08}>
        {themes.map((theme, index) => {
          const Icon = theme.icon;
          return (
            <StaggerItem key={theme.title}>
              <motion.article
                whileHover={reduced ? {} : { y: -4 }}
                transition={tHover}
                className={cn(
                  "surface-card flex h-full flex-col rounded-2xl p-8 transition-colors duration-300 hover:border-border-strong",
                  index === 1 && "border-primary/60 shadow-[var(--shadow-glow)]",
                )}
              >
                <div className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="font-display mt-7 text-3xl">{theme.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{theme.description}</p>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>

      <div className="mt-10 text-center">
        <Link
          to="/community"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Explore Our Community
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
