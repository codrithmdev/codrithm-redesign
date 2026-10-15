import { createFileRoute } from "@tanstack/react-router";
import { PageShell, BackHome } from "@/components/codrithm/page-shell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Codrithm" },
      {
        name: "description",
        content: "Verified projects will be published here once they are approved.",
      },
      { property: "og:title", content: "Work — Codrithm" },
      {
        property: "og:description",
        content: "Verified projects will be published here once they are approved.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      label="Work"
      code="02"
      lines={["Selected work,", "coming soon."]}
      intro="Verified projects will be published here once they are approved."
    >
      <BackHome />
    </PageShell>
  );
}
