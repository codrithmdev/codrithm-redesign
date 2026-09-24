import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { tHover } from "@/animations/transitions";
import { useMotionPrefs } from "@/animations/useMotionPrefs";
import { cn } from "@/lib/utils";

const baseFeatures = [
  "Community learning sessions",
  "Peer-led discussion spaces",
  "Project and event updates",
  "A welcoming learning network",
  "Opportunities to collaborate",
];

const plans = [
  { price: "Learn", name: "Start your journey", features: baseFeatures, featured: false },
  {
    price: "Build",
    name: "Create with others",
    features: [...baseFeatures, "Hands-on collaborative projects"],
    featured: true,
  },
  { price: "Connect", name: "Partner with Codrithm", features: baseFeatures, featured: false },
];

export function Pricing() {
  const { reduced } = useMotionPrefs();

  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        title="A community for"
        highlight="every stage"
        subtitle="Whether you are starting out, building confidence, or looking to collaborate, there is a place for you here."
      />

      <Stagger className="mt-16 grid gap-6 lg:grid-cols-3" stagger={0.08}>
        {plans.map((plan) => (
          <StaggerItem key={plan.name}>
            <motion.div
              whileHover={reduced ? {} : { y: -4 }}
              transition={tHover}
              className={cn(
                "surface-card flex h-full flex-col rounded-2xl p-8 transition-colors duration-300 hover:border-border-strong",
                plan.featured && "border-primary/60 shadow-[var(--shadow-glow)]",
              )}
            >
              <p className="font-display text-4xl">
                {plan.price}
              </p>
              <p className="mt-3 text-lg">{plan.name}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                A supportive path into practical technology skills, genuine connections, and work you can be proud of.
              </p>

              <motion.button
                whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                transition={tHover}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-colors duration-300 hover:bg-primary/90"
              >
                Join Codrithm
                <ArrowRight className="size-4 transition-transform duration-200 ease-[var(--ease-standard)] group-hover:translate-x-1" />
              </motion.button>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="grid size-5 shrink-0 place-items-center rounded-md bg-[image:var(--gradient-solar)] text-primary-foreground">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
