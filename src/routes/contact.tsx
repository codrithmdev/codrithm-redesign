import { createFileRoute } from "@tanstack/react-router";
import { useSiteMotion } from "@/components/codrithm/motion";
import { Footer, Nav } from "@/components/codrithm/sections";
import { ContactForm, ContactHero } from "@/components/codrithm/contact";

const DESC =
  "Have a project in mind? Tell Codrithm what you're working on — AI, software, websites or branding.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codrithm" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Contact — Codrithm" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  useSiteMotion();
  return (
    <main>
      <Nav />
      <ContactHero />
      <ContactForm />
      <Footer showCTA={false} />
    </main>
  );
}
