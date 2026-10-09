import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { services } from "@/content/services";
import { internalDestinations } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Codrithm" },
      {
        name: "description",
        content:
          "Explore Codrithm's practical services for automation, software development, AI/ML, and websites.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Practical technology for real work."
      description="Codrithm helps teams explore websites, applications, automation, and AI features around specific needs. Scope and feasibility are confirmed before work begins."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.slug}
            className="surface-card flex min-h-64 flex-col rounded-2xl p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl">{service.title}</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {service.shortDescription}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  {capability}
                </li>
              ))}
            </ul>
            <Link
              to={internalDestinations.contact}
              search={{ type: "project", service: service.slug }}
              className="group mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Discuss this service
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
