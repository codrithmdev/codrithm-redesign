import { createFileRoute } from "@tanstack/react-router";
import { useSiteMotion } from "@/components/codrithm/motion";
import { Footer, Nav } from "@/components/codrithm/sections";
import { ServicesCTA, ServicesHero, ServicesList } from "@/components/codrithm/services-page";

const DESC =
  "AI automation, software development, AI & machine learning, websites & WordPress, and graphic design & branding from Codrithm.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Codrithm" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Services — Codrithm" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Page,
});

function Page() {
  useSiteMotion();
  return (
    <main>
      <Nav />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      <Footer showCTA={false} />
    </main>
  );
}
