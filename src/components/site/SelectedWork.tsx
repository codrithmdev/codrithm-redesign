import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { projects } from "@/content/projects";

const kindLabels = {
  internal: "Internal product",
  client: "Client project",
  community: "Community project",
  prototype: "Prototype",
} as const;

export function SelectedWork() {
  const publishedProjects = projects.filter((project) => project.publishable);
  if (publishedProjects.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        title="Selected"
        highlight="Work"
        subtitle="A look at the products and technical projects we've worked on."
      />
      <Stagger className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {publishedProjects.map((project) => (
          <StaggerItem key={project.slug}>
            <article className="surface-card flex h-full flex-col overflow-hidden rounded-2xl">
              {project.image && (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-4 text-xs tracking-widest text-muted-foreground uppercase">
                  <span>{kindLabels[project.kind]}</span>
                  <span>{project.status.replaceAll("-", " ")}</span>
                </div>
                <h3 className="font-display mt-5 text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <p className="mt-6 text-xs text-muted-foreground">
                  {project.technologies.join(" · ")}
                </p>
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  View project
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
