import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { BentoSection } from "@/components/site/BentoSection";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { CtaSection } from "@/components/site/CtaSection";
import { HowWeWork } from "@/components/site/HowWeWork";
import { SelectedWork } from "@/components/site/SelectedWork";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codrithm — Software that makes work easier" },
      {
        name: "description",
        content:
          "Codrithm builds business websites, custom applications, and AI-powered workflows around specific problems.",
      },
      { property: "og:title", content: "Codrithm — Software that makes work easier" },
      {
        property: "og:description",
        content:
          "Business websites, custom applications, and AI-powered workflows from Codrithm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <BentoSection />
      <SelectedWork />
      <HowWeWork />
      <Pricing />
      <LogoMarquee />
      <Faq />
      <CtaSection />
    </motion.div>
  );
}
