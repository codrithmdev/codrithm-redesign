import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Codrithm" },
      {
        name: "description",
        content: "Approved Codrithm projects, clearly labeled by type and current status.",
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
      description="A selection of products and technical work that has been approved for public viewing. Each project is labeled by its role and current status."
    >
      {publishableProjects.length === 0 ? (
        <div className="surface-card max-w-2xl rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl">Project evidence is being prepared.</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            We only publish work when its description, classification, status, and supporting
            material have been confirmed. In the meantime, you can tell us what you need to build.
          </p>
          <Link
            to="/contact"
            search={{ type: "project" }}
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            Discuss a project <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {publishableProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </PageShell>
  );
}
