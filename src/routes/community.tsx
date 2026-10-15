import { createFileRoute } from "@tanstack/react-router";
import { useSiteMotion } from "@/components/codrithm/motion";
import { Collabs, Events, Footer, Nav, Spark } from "@/components/codrithm/sections";
import { CommunityActivities, CommunityCTA, CommunityHero } from "@/components/codrithm/community";

const DESC =
  "Join the Codrithm Community: hands-on workshops, events, projects, career development, collaborations and Codrithm Spark.";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Codrithm" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Community — Codrithm" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/community" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: Page,
});

function Page() {
  useSiteMotion();
  return (
    <main>
      <Nav />
      <CommunityHero />
      <CommunityActivities />
      <Events />
      <Spark />
      <Collabs />
      <CommunityCTA />
      <Footer showCTA={false} />
    </main>
  );
}
