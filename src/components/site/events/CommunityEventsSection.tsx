import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CommunityEvent } from "@/content/community";
import { Reveal } from "@/animations/reveal";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { cn } from "@/lib/utils";

type CommunityEventsSectionProps = {
  events: readonly CommunityEvent[];
};

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function EventMeta({ event }: { event: CommunityEvent }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
      <span>{formatEventDate(event.date)}</span>
      {event.format ? <span>{event.format}</span> : null}
    </div>
  );
}

function EventPoster({ event, className }: { event: CommunityEvent; className?: string }) {
  const media = event.media?.[0];

  if (!media) {
    return (
      <div
        className={cn("flex aspect-square items-end border-border/70 bg-muted/30 p-6", className)}
      >
        <p className="text-sm font-medium text-muted-foreground">Event poster pending approval</p>
      </div>
    );
  }

  return (
    <div className={cn("aspect-square overflow-hidden border-border/70 bg-muted/30", className)}>
      <img
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        loading="lazy"
        decoding="async"
        className="size-full object-contain transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
      />
    </div>
  );
}

function EventLink({ slug }: { slug: string }) {
  return (
    <Link
      to="/community/events/$slug"
      params={{ slug }}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      View event details
      <ArrowRight
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

function ArchiveCard({ event }: { event: CommunityEvent }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-200 hover:border-primary/50 motion-reduce:transition-none">
      <EventPoster event={event} className="border-b" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <EventMeta event={event} />
        <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">{event.title}</h3>
        {event.speaker || event.attribution ? (
          <p className="mt-4 text-sm font-medium text-foreground/85">
            {event.speaker ? `With ${event.speaker}` : event.attribution}
          </p>
        ) : null}
        <div className="mt-6 pt-1">
          <EventLink slug={event.slug} />
        </div>
      </div>
    </article>
  );
}

function FeaturedEvent({ event }: { event: CommunityEvent }) {
  return (
    <article className="surface-card group overflow-hidden rounded-2xl lg:grid lg:grid-cols-[0.92fr_1.08fr]">
      <EventPoster event={event} className="border-b lg:border-b-0 lg:border-r" />
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Featured session
          </p>
          <h3 className="mt-5 max-w-2xl text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl">
            {event.title}
          </h3>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            {event.description}
          </p>
        </div>
        <div className="mt-8">
          <EventLink slug={event.slug} />
        </div>
        <div className="mt-8 border-t border-border/70 pt-6">
          <EventMeta event={event} />
          {event.speaker || event.attribution ? (
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {event.speaker ? "Speaker" : "Presented with"}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {event.speaker ?? event.attribution}
              </p>
              {event.attribution && event.speaker ? (
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{event.attribution}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function CommunityEventsSection({ events }: CommunityEventsSectionProps) {
  if (events.length === 0) return null;

  const featuredEvent = events.find((event) => event.featured);
  const archiveEvents = featuredEvent
    ? events.filter((event) => event.slug !== featuredEvent.slug)
    : events;

  return (
    <section className="section-shell pt-8 sm:pt-12" aria-labelledby="community-events-title">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Inside the community
        </p>
        <h2
          id="community-events-title"
          className="mt-4 text-3xl font-bold tracking-[-0.035em] text-foreground sm:text-4xl"
        >
          Where learning happens.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Sessions, workshops, and practical conversations from the Codrithm community.
        </p>
      </Reveal>

      {featuredEvent ? (
        <Reveal className="mt-8">
          <FeaturedEvent event={featuredEvent} />
        </Reveal>
      ) : null}

      {archiveEvents.length > 0 ? (
        <div className={featuredEvent ? "mt-10" : "mt-8"}>
          {featuredEvent ? (
            <Reveal>
              <h3 className="text-xl font-bold tracking-tight text-foreground">Past sessions</h3>
            </Reveal>
          ) : null}
          <Stagger className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {archiveEvents.map((event) => (
              <StaggerItem key={event.slug}>
                <ArchiveCard event={event} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      ) : null}
    </section>
  );
}
