import { createFileRoute } from "@tanstack/react-router";
import { useSiteMotion } from "@/components/codrithm/motion";
import { Footer, Nav, Team } from "@/components/codrithm/sections";
import { AboutCTA, AboutHero, AboutStory, AboutValues } from "@/components/codrithm/about";

const DESC =
  "Codrithm is a technology and creative services initiative with a community-driven foundation. Meet the team and what drives us.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Codrithm" },
      { name: "description", content: DESC },
      { property: "og:title", content: "About — Codrithm" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: Page,
});

function Page() {
  useSiteMotion();
  return (
    <main>
      <Nav />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <Team n="03" />
      <AboutCTA />
      <Footer showCTA={false} />
    </main>
  );
}
