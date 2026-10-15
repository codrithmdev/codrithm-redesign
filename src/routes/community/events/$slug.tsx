import { createFileRoute, notFound } from "@tanstack/react-router";
import { CommunityEventDetail } from "@/components/site/events/CommunityEventDetail";
import { PageShell } from "@/components/site/PageShell";
import { getPublishableCommunityEvent } from "@/content/community";

export const Route = createFileRoute("/community/events/$slug")({
  loader: ({ params }) => {
    const event = getPublishableCommunityEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  component: CommunityEventDetailPage,
});

function CommunityEventDetailPage() {
  const { event } = Route.useLoaderData();

  return (
    <PageShell eyebrow="Community event" title={event.title} description={event.description}>
      <CommunityEventDetail event={event} />
    </PageShell>
  );
}
