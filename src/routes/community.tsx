import { Link, createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { approvedExternalUrls } from "@/content/site";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community | Codrithm" },
      {
        name: "description",
        content:
          "Learn about Codrithm's technology community, practical learning, and collaboration.",
      },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <PageShell
      eyebrow="Community"
      title="Learn, build, and connect."
      description="Codrithm brings students and emerging developers together for practical learning, collaboration, and shared experience in technology."
    >
      <div className="surface-card max-w-2xl rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl">
          Community information is being prepared with care.
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Events, activities, and collaboration details will be shared here when they have been
          verified.
        </p>
        {approvedExternalUrls.communityJoin ? (
          <a
            href={approvedExternalUrls.communityJoin}
            className="mt-8 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90"
          >
            Join Community
          </a>
        ) : (
          <Link
            to="/contact"
            search={{ type: "general" }}
            className="mt-8 inline-flex text-sm font-medium text-primary hover:text-primary/80"
          >
            Contact Codrithm about the community
          </Link>
        )}
      </div>
    </PageShell>
  );
}
