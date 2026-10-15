import { createFileRoute } from "@tanstack/react-router";
import { useSiteMotion } from "@/components/codrithm/motion";
import {
  About,
  CommunityPreview,
  Footer,
  Hero,
  Nav,
  Projects,
  Team,
  Testimonials,
  WhatWeDo,
} from "@/components/codrithm/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codrithm — Technology & Creative Solutions" },
      {
        name: "description",
        content:
          "Codrithm builds intelligent software, AI automation, websites and distinctive brands that help ambitious ideas move forward.",
      },
      { property: "og:title", content: "Codrithm — Technology & Creative Solutions" },
      {
        property: "og:description",
        content:
          "Ideas into impact. Technology into reality. AI, software, websites and branding by Codrithm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useSiteMotion();
  return (
    <main>
      <Nav />
      <Hero />
      <WhatWeDo />
      <About />
      <Projects />
      <CommunityPreview />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
