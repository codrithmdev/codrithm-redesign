import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Codrithm" },
      {
        name: "description",
        content:
          "Verified Codrithm work will be shared here when project details are approved for publication.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const publishableProjects = projects.filter((project) => project.publishable);

  return (
    <PageShell
      eyebrow="Projects"
      title="Work, shared accurately."
      description="Project details are published only when their classification, contribution, current status, and supporting material are approved."
    >
      {publishableProjects.length === 0 && (
        <div className="surface-card max-w-2xl rounded-2xl p-6 text-sm leading-6 text-muted-foreground sm:p-8">
          Approved project case studies will appear here when they are ready to share.
        </div>
      )}
    </PageShell>
  );
}
