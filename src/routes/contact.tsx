import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageShell } from "@/components/site/PageShell";
import { serviceSlugs } from "@/content/services";

const contactTypeSchema = z.enum(["project", "partnership", "general"]);

const contactSearchSchema = z.object({
  type: contactTypeSchema.optional().catch("general").default("general"),
  service: z.enum(serviceSlugs).optional().catch(undefined),
});

export const Route = createFileRoute("/contact")({
  validateSearch: contactSearchSchema,
  head: () => ({
    meta: [
      { title: "Contact | Codrithm" },
      {
        name: "description",
        content: "Contact Codrithm about a project, partnership, or general question.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { type, service } = Route.useSearch();
  const intent =
    type === "project" ? "a project" : type === "partnership" ? "a partnership" : "a question";

  return (
    <PageShell
      eyebrow="Contact"
      title="Start with the problem you want to solve."
      description={`You are exploring ${intent}${service ? ` related to ${service.replaceAll("-", " ")}` : ""}.`}
    >
      <div className="surface-card max-w-2xl rounded-2xl p-6 sm:p-8">
        <p className="text-sm leading-6 text-muted-foreground">
          A secure contact form will be added only after Codrithm confirms the receiving destination
          and privacy handling. This page does not collect or submit information yet.
        </p>
      </div>
    </PageShell>
  );
}
