import type { ProjectDraft } from "./projects";

// Not imported by public routes. This is an approval-gated editorial draft.
export const projectDrafts: readonly ProjectDraft[] = [
  {
    slug: "audit-ai",
    title: "Audit AI",
    summary:
      "An AI-assisted website audit project focused on identifying conversion friction and prioritizing recommendations.",
    kind: "internal",
    status: "to-confirm",
    problem:
      "Traditional reports can list technical or design issues without explaining their business implications or priorities.",
    developed:
      "Audit AI explores combining website observations with structured prioritization and clear explanations.",
    publishable: false,
    approvalNotes: [
      "Confirm implemented functionality, current stage, and technology stack.",
      "Provide 2–4 approved screenshots and any approved demo or repository URL.",
      "Confirm description and media permissions before publication.",
    ],
  },
];
