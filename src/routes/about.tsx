import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Codrithm" },
      {
        name: "description",
        content:
          "Learn how Codrithm connects practical technology services with a technology community.",
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
      description="Codrithm is evolving from a learning community into a technology services provider while keeping practical learning and collaboration at the centre of its work."
    />
  );
}
