import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { services, type ServiceSlug } from "@/content/services";

const commonProblems: Record<ServiceSlug, string> = {
  "ai-automation":
    "Useful when information is copied between systems, follow-ups are manual, or routine steps slow a team down.",
  "software-development":
    "Useful when an off-the-shelf tool does not fit the way your team actually works.",
  "ai-ml":
    "Useful when text, documents, or data need structured assistance and a feasibility review supports the approach.",
  "websites-wordpress":
    "Useful when a website is difficult to update, unclear to visitors, or no longer reflects the business.",
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Codrithm" },
      {
        name: "description",
        content:
          "Practical software, automation, AI, and website development services from Codrithm.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const publicServices = services.filter((service) => service.publishable);

  return (
    <PageShell
      eyebrow="Services"
      title="Technology built around the work at hand."
      description="We discuss the problem first, then define a useful scope for websites, applications, automation, and AI-assisted features."
    >
      <section aria-labelledby="service-list-heading">
        <h2 id="service-list-heading" className="font-display text-2xl sm:text-3xl">
          What we can help build
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {publicServices.map((service) => (
            <article
              key={service.slug}
              className="surface-card flex min-h-80 flex-col rounded-2xl p-6 sm:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Service
              </p>
              <h3 className="font-display mt-3 text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {service.shortDescription}
              </p>
              <p className="mt-5 text-sm leading-6 text-foreground/85">
                {commonProblems[service.slug]}
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    {capability}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ type: "project", service: service.slug }}
                className="group mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-primary hover:text-primary/80"
              >
                Discuss this service{" "}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section
        className="surface-card mt-14 rounded-2xl p-6 sm:p-8"
        aria-labelledby="approach-heading"
      >
        <h2 id="approach-heading" className="font-display text-2xl">
          A clear development approach
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
          We begin with the current process and the outcome you need. Before development begins, we
          agree on the useful features, priorities, delivery plan, and how progress will be
          reviewed.
        </p>
        <Link
          to="/contact"
          search={{ type: "project" }}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90"
        >
          Start a project conversation <ArrowRight className="size-4" aria-hidden />
        </Link>
      </section>
    </PageShell>
  );
}
