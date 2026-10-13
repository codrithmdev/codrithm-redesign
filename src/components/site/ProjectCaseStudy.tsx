import type { Project } from "@/content/projects";

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <div className="grid gap-4">
      <section className="surface-card rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl">The problem</h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.problem}</p>
      </section>
      <section className="surface-card rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl">What was developed</h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.developed}</p>
        <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
      </section>
      <section className="surface-card rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl">Technology</h2>
        <p className="mt-4 text-sm text-muted-foreground">{project.technologies.join(" · ")}</p>
        {project.roleOrTeamContribution && (
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {project.roleOrTeamContribution}
          </p>
        )}
      </section>
      {project.images.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {project.images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="aspect-[16/10] rounded-2xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
}
