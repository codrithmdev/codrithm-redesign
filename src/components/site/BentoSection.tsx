import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Package, Sparkles, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { tHover } from "@/animations/transitions";
import { useMotionPrefs } from "@/animations/useMotionPrefs";
import { services, type ServiceSlug } from "@/content/services";

const icons: Record<ServiceSlug, typeof Activity> = {
  "ai-automation": Sparkles,
  "software-development": Package,
  "ai-ml": Activity,
  "websites-wordpress": Users,
};

export function BentoSection() {
  const { reduced } = useMotionPrefs();
  const publishedServices = services.filter((service) => service.publishable);

  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        title="What We"
        highlight="Build"
        subtitle="We develop websites, software, and automation tools around the work people actually need to get done."
      />

      <Stagger className="mt-16 grid gap-4 md:grid-cols-2" stagger={0.08}>
        {publishedServices.map((service) => {
          const Icon = icons[service.slug];
          return (
            <StaggerItem key={service.slug}>
              <motion.article
                whileHover={reduced ? {} : { y: -4, scale: 1.005 }}
                transition={tHover}
                className="surface-card group flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-border-strong sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <span className="text-xs tracking-widest text-muted-foreground uppercase">
                    Service
                  </span>
                </div>
                <h3 className="font-display mt-8 text-2xl">{service.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  {service.shortDescription}
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  Explore services
                  <ArrowRight
                    className="size-4 transition-transform group-hover/link:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
