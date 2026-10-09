import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
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
      <div className="surface-card max-w-2xl rounded-2xl p-6 sm:p-8">
        <p className="text-sm text-muted-foreground">Current status: {project.status}</p>
        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          Detailed project information is published only after its supporting material is approved.
        </p>
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
