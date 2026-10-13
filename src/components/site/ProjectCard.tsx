import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";

const labels: Record<Project["kind"], string> = {
  client: "Client project",
  internal: "Internal product",
  community: "Community project",
  prototype: "Technical demonstration",
};

export function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0];
  return (
    <article className="surface-card overflow-hidden rounded-2xl">
      {image && (
        <img
          src={image.src}
          alt={image.alt}
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
        <p className="mt-5 text-xs text-muted-foreground">{project.technologies.join(" · ")}</p>
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
        >
          View project <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
