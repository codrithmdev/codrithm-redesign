import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/codrithm/page-shell";
import { SERVICES } from "@/components/codrithm/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const index = SERVICES.findIndex((s) => s.slug === params.slug);
    const service = SERVICES[index];
    if (!service) throw notFound();
    return { service, index };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.service.name;
    const title = name ? `${name} — Codrithm Services` : "Service unavailable — Codrithm";
    const desc = name
      ? `${name} by Codrithm. Full service details are coming soon.`
      : "This Codrithm service page could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(name ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service, index } = Route.useLoaderData();
  return (
    <PageShell
      label="Services"
      code={`0${index + 1}`}
      lines={[service.name]}
      intro="Full details for this service are being prepared and will be published in the next phase."
    >
      <Link
        to="/services"
        className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
      >
        ← All services
      </Link>
    </PageShell>
  );
}
