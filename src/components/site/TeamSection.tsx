import { teamMembers } from "@/content/team";

export function TeamSection() {
  const members = teamMembers.filter((member) => member.publishable);
  if (members.length === 0) return null;
  return (
    <section className="mt-14" aria-labelledby="team-heading">
      <h2 id="team-heading" className="font-display text-2xl">
        Team
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <article key={member.name} className="surface-card overflow-hidden rounded-2xl">
            <img
              src={member.image.src}
              alt={member.image.alt}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="font-display text-xl">{member.name}</h3>
              <p className="mt-1 text-sm text-primary">{member.role}</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{member.introduction}</p>
              {member.links && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {member.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="text-sm font-medium text-primary hover:text-primary/80"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
