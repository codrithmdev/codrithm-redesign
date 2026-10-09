import { Link, createFileRoute } from "@tanstack/react-router";
import { Activity, Sparkles, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { communityActivities, communityCollaborations, communityEvents } from "@/content/community";
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

export const Route = createFileRoute("/community")({
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
      <CommunityList
        title="Events and workshops"
        items={events}
        empty="Approved event and workshop details will be shared here when they are ready."
      />
      <CommunityList
        title="Community activities"
        items={activities}
        empty="Activity information will be added as it is verified for public sharing."
      />
      <CommunityList
        title="Partnerships and collaborations"
        items={collaborations}
        empty="Collaboration information is shown only with approval from the organizations involved."
      />
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

function CommunityList({
  title,
  items,
  empty,
}: {
  title: string;
  items: readonly { title?: string; name?: string; description?: string }[];
  empty: string;
}) {
  const id = title.replaceAll(" ", "-").toLowerCase();
  return (
    <section className="mt-14" aria-labelledby={id}>
      <h2 id={id} className="font-display text-2xl">
        {title}
      </h2>
      {items.length ? (
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
      ) : (
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{empty}</p>
      )}
    </section>
  );
}
