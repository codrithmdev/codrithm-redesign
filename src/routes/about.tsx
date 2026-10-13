import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { TeamSection } from "@/components/site/TeamSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Codrithm" },
      {
        name: "description",
        content: "How Codrithm connects practical software work with a technology community.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About Codrithm"
      title="Technology work with community roots."
      description="Codrithm brings together practical software work and a community where people can learn, collaborate, and build experience."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Section title="What Codrithm is">
          Codrithm is growing from a technology community into a team that also develops websites,
          custom software, AI automation, and practical AI features.
        </Section>
        <Section title="What we build">
          We work on the systems people use to get work done: business websites, applications,
          internal tools, integrations, and workflows that reduce repetitive manual steps.
        </Section>
        <Section title="Why the community exists">
          Learning technology is more useful when people can share knowledge, try ideas together,
          and meet others working through similar challenges.
        </Section>
        <Section title="How the two connect">
          Community work creates space for learning and practical experience. Client work is
          approached with clear scope, honest communication, and attention to the problem being
          solved.
        </Section>
      </div>
      <section className="surface-card mt-14 rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl">Our working approach</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
          We start by understanding the current situation, agree on what is useful to build, share
          work in stages, and review it against the agreed requirements.
        </p>
        <div className="mt-7 flex flex-wrap gap-5">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Explore services <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Explore the community <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
      <TeamSection />
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <section className="surface-card rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{children}</p>
    </section>
  );
}
