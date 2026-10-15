import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { CommunityEvent } from "@/content/community";

type CommunityEventDetailProps = {
  event: CommunityEvent;
};

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function CommunityEventDetail({ event }: CommunityEventDetailProps) {
  const media = event.media?.[0];

  return (
    <article className="max-w-4xl">
      <dl className="surface-card grid gap-5 rounded-2xl p-6 text-sm sm:grid-cols-3 sm:p-8">
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Date
          </dt>
          <dd className="mt-2 font-medium text-foreground">{formatEventDate(event.date)}</dd>
        </div>
        {event.format ? (
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Format
            </dt>
            <dd className="mt-2 font-medium text-foreground">{event.format}</dd>
          </div>
        ) : null}
        {event.speaker || event.attribution ? (
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {event.speaker ? "Speaker" : "Presented with"}
            </dt>
            <dd className="mt-2 font-medium text-foreground">
              {event.speaker ?? event.attribution}
            </dd>
          </div>
        ) : null}
      </dl>

      {media ? (
        <img
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          loading="eager"
          decoding="async"
          className="mt-8 aspect-square w-full rounded-2xl border border-border/70 bg-muted/30 object-contain"
        />
      ) : null}

      {event.attribution && event.speaker ? (
        <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
          {event.attribution}
        </p>
      ) : null}

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link
          to="/community"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to community
        </Link>
        {event.recordingUrl ? (
          <a
            href={event.recordingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Watch recording
          </a>
        ) : null}
      </div>
    </article>
  );
}
