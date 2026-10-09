import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Codrithm" },
      {
        name: "description",
        content:
          "Codrithm's privacy information will be published before personal data collection is enabled.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy information is being prepared."
      description="Codrithm will publish its data collection, retention, and contact-handling information before enabling public form submissions or nonessential tracking."
    />
  );
}
