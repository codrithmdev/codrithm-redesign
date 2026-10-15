import { Link, createFileRoute } from "@tanstack/react-router";
import { Activity, Sparkles, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { CommunityEventsSection } from "@/components/site/events/CommunityEventsSection";
import {
  communityActivities,
  communityCollaborations,
  communityEvents,
  type CommunityCollaboration,
} from "@/content/community";
import { approvedExternalUrls } from "@/content/site";

const pillars = [
  {
    title: "Learn",
    description:
      "Practical sessions, workshops, and knowledge sharing for people developing technology skills.",
    icon: Sparkles,
  },
  {
    title: "Build",
    description: "Projects, experimentation, and collaborative learning around useful ideas.",
    icon: Activity,
  },
  {
    title: "Connect",
    description: "Ways to meet peers, mentors, and professionals with shared interests.",
    icon: Users,
  },
];

export const Route = createFileRoute("/community/")({
  head: () => ({
    meta: [
      { title: "Community | Codrithm" },
      {
        name: "description",
        content:
          "Codrithm's technology community for practical learning, collaboration, and connection.",
      },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const activities = communityActivities.filter((item) => item.publishable);
  const events = communityEvents.filter((item) => item.publishable);
  const collaborations = communityCollaborations.filter((item) => item.publishable);

  return (
    <PageShell
      eyebrow="Community"
      title="A place to learn, build, and connect."
      description="Alongside client work, Codrithm brings students, developers, and industry professionals together through practical learning and collaboration."
    >
      <section className="grid gap-4 md:grid-cols-3" aria-label="Community themes">
        {pillars.map(({ title, description, icon: Icon }) => (
          <article key={title} className="surface-card rounded-2xl p-6 sm:p-8">
            <Icon className="size-5 text-primary" aria-hidden />
            <h2 className="font-display mt-6 text-2xl">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
          </article>
        ))}
      </section>
      <CommunityEventsSection events={events} />
      <CommunityList title="Community activities" items={activities} />
      <CollaborationList collaborations={collaborations} />
      <section className="surface-card mt-14 rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl">Join the community</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
          A verified joining destination has not yet been configured. You can contact Codrithm to
          ask about community opportunities.
        </p>
        {approvedExternalUrls.communityJoin ? (
          <a
            href={approvedExternalUrls.communityJoin}
            className="mt-7 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Join Community
          </a>
        ) : (
          <Link
            to="/contact"
            search={{ type: "general" }}
            className="mt-7 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Ask about the community
          </Link>
        )}
      </section>
    </PageShell>
  );
}

function CollaborationList({
  collaborations,
}: {
  collaborations: readonly CommunityCollaboration[];
}) {
  if (collaborations.length === 0) return null;

  return (
    <section className="mt-14" aria-labelledby="collaborations-heading">
      <h2 id="collaborations-heading" className="font-display text-2xl">
        Partnerships and collaborations
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {collaborations.map((collaboration) => (
          <article key={collaboration.name} className="surface-card rounded-2xl p-6">
            {collaboration.logo && (
              <img
                src={collaboration.logo.src}
                alt={collaboration.logo.alt}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            )}
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              {collaboration.relationship}
            </p>
            <h3 className="font-display mt-3 text-xl">{collaboration.name}</h3>
            {collaboration.description && (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {collaboration.description}
              </p>
            )}
            {collaboration.url && (
              <a
                href={collaboration.url}
                className="mt-5 inline-flex text-sm font-medium text-primary hover:text-primary/80"
              >
                Visit organization
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function CommunityList({
  title,
  items,
}: {
  title: string;
  items: readonly { title?: string; name?: string; description?: string }[];
}) {
  if (items.length === 0) return null;

  const id = title.replaceAll(" ", "-").toLowerCase();
  return (
    <section className="mt-14" aria-labelledby={id}>
      <h2 id={id} className="font-display text-2xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title ?? item.name} className="surface-card rounded-2xl p-6">
            <h3 className="font-display text-xl">{item.title ?? item.name}</h3>
            {item.description && (
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
