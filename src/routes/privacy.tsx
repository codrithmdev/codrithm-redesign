import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | Codrithm" },
      { name: "description", content: "Current privacy information for the Codrithm website." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="A clear account of what this site does today."
      description="This page reflects the current website implementation. It will be updated before any contact form or nonessential tracking is activated."
    >
      <div className="surface-card max-w-3xl rounded-2xl p-6 text-sm leading-6 text-muted-foreground sm:p-8">
        <h2 className="font-display text-2xl text-foreground">Current website behaviour</h2>
        <p className="mt-4">
          The site currently provides public information about Codrithm and its services. The
          contact interface does not send or store submitted information because a receiving
          provider has not been configured.
        </p>
        <h2 className="font-display mt-10 text-2xl text-foreground">
          Before data collection begins
        </h2>
        <p className="mt-4">
          Codrithm needs owner approval for the contact provider, recipient, retention period,
          access controls, consent wording, and a contact address for privacy questions. Those
          details will be published before form submission or nonessential analytics are enabled.
        </p>
        <h2 className="font-display mt-10 text-2xl text-foreground">
          What still needs confirmation
        </h2>
        <p className="mt-4">
          Cookie usage, hosting and service-provider practices, any analytics, and data-retention
          periods require confirmation from the site owner. This page does not make claims about
          practices that have not been verified.
        </p>
      </div>
    </PageShell>
  );
}
