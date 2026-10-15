import { ArrowUpRight } from "lucide-react";
import type { CommunityCollaboration } from "@/content/community";
import { Reveal } from "@/animations/reveal";
import { Stagger, StaggerItem } from "@/animations/stagger";

type CommunityCollaborationsSectionProps = {
  collaborations: readonly CommunityCollaboration[];
};

function CollaborationCard({ collaboration }: { collaboration: CommunityCollaboration }) {
  const label = collaboration.relationshipLabel ?? collaboration.relationship;

  return (
    <a
      href={collaboration.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${collaboration.name} on LinkedIn (opens in a new tab)`}
      className="surface-card group flex h-full flex-col rounded-2xl p-6 transition-colors duration-200 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none sm:p-7"
    >
      {collaboration.logo ? (
        <div className="flex h-24 items-center rounded-xl border border-border/70 bg-muted/20 p-5">
          <img
            src={collaboration.logo.src}
            alt={collaboration.logo.alt}
            width={collaboration.logo.width}
            height={collaboration.logo.height}
            loading="lazy"
            decoding="async"
            className="size-full object-contain transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      ) : null}
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</p>
      <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
        {collaboration.name}
      </h3>
      {collaboration.description ? (
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{collaboration.description}</p>
      ) : null}
      <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary">
        View on LinkedIn
        <ArrowUpRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}

export function CommunityCollaborationsSection({
  collaborations,
}: CommunityCollaborationsSectionProps) {
  if (collaborations.length === 0) return null;

  return (
    <section className="section-shell" aria-labelledby="community-collaborations-title">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Our collaborations
        </p>
        <h2
          id="community-collaborations-title"
          className="mt-4 text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl"
        >
          Built Through Collaboration.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          We work with communities and organizations that share an interest in technical learning,
          practical experience, and professional connections.
        </p>
      </Reveal>
      <Stagger className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {collaborations.map((collaboration) => (
          <StaggerItem key={collaboration.name}>
            <CollaborationCard collaboration={collaboration} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
