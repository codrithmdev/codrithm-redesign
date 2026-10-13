import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ProjectCaseStudy } from "@/components/site/ProjectCaseStudy";
import { getPublishableProject } from "@/content/projects";
import { internalDestinations } from "@/content/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getPublishableProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <PageShell
      eyebrow={`${project.kind} project`}
      title={project.title}
      description={project.summary}
    >
      <div className="max-w-4xl">
        <p className="mb-6 text-sm text-muted-foreground">Current status: {project.status}</p>
        <ProjectCaseStudy project={project} />
        {project.approvedExternalUrl && (
          <a
            href={project.approvedExternalUrl}
            className="mt-8 inline-flex text-sm font-medium text-primary hover:text-primary/80"
          >
            Open project link
          </a>
        )}
        <Link
          to={internalDestinations.projects}
          className="mt-8 inline-flex text-sm font-medium text-primary hover:text-primary/80"
        >
          Back to projects
        </Link>
      </div>
    </PageShell>
  );
}
