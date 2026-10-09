import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { projects } from "@/content/projects";

const labels = {
  client: "Client project",
  internal: "Internal product",
  community: "Community project",
  prototype: "Demonstration",
} as const;

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
            <article key={project.slug} className="surface-card overflow-hidden rounded-2xl">
              {project.image && (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {labels[project.kind]} · {project.status}
                </p>
                <h2 className="font-display mt-3 text-2xl">{project.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <p className="mt-5 text-xs text-muted-foreground">
                  {project.technologies.join(" · ")}
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                >
                  View project <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </PageShell>
  );
}
