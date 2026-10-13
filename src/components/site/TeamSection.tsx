import { Linkedin } from "@/components/icons";
import { teamMembers } from "@/content/team";

export function TeamSection() {
  const members = teamMembers.filter((member) => member.publishable);
  if (members.length === 0) return null;
  return (
    <section className="mt-14" aria-labelledby="team-heading">
      <h2 id="team-heading" className="font-display text-2xl">
        Team
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {members.map((member) => (
          <article
            key={member.name}
            className="surface-card group flex h-full flex-col overflow-hidden rounded-[28px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(0,102,255,0.12)]"
          >
            <div className="relative h-52 overflow-hidden bg-muted sm:h-56">
              <img
                src={member.image.src}
                alt={member.image.alt}
                width={member.image.width}
                height={member.image.height}
                className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                </div>
                {member.links && (
                  <div className="flex shrink-0 gap-2">
                    {member.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${link.label}`}
                        className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <Linkedin className="size-4" aria-hidden />
                        <span className="sr-only">{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
