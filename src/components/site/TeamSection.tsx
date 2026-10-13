import { Linkedin } from "@/components/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
          <Dialog key={member.name}>
            <article className="relative h-full">
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="surface-card group flex h-full w-full flex-col overflow-hidden rounded-[28px] text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(0,102,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label={`Read the biography of ${member.name}`}
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
                  <div className="flex flex-1 flex-col p-5 pr-20">
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  </div>
                </button>
              </DialogTrigger>
              {member.links && (
                <div className="absolute top-[228px] right-5 flex gap-2 sm:top-[244px]">
                  {member.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on ${link.label}`}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <Linkedin className="size-4" aria-hidden />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
            <DialogContent className="max-h-[calc(100dvh-2rem)] max-w-2xl overflow-y-auto rounded-[28px] border-border bg-background p-0 shadow-2xl">
              <div className="grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  width={member.image.width}
                  height={member.image.height}
                  className="aspect-[3/4] h-full w-full object-cover object-top"
                  decoding="async"
                />
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <DialogHeader className="text-left">
                    <DialogTitle className="font-display text-2xl">{member.name}</DialogTitle>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                  </DialogHeader>
                  <DialogDescription className="mt-5 text-sm leading-6 text-muted-foreground">
                    {member.introduction}
                  </DialogDescription>
                  {member.links && (
                    <div className="mt-7">
                      {member.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          <Linkedin className="size-4" aria-hidden />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
