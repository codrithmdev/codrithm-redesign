import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import featureShield from "@/assets/feature-shield.jpg";
import featureCharts from "@/assets/feature-charts.jpg";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { BentoSection } from "@/components/site/BentoSection";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureSplit } from "@/components/site/FeatureSplit";
import { StatsSection } from "@/components/site/StatsSection";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { CtaSection } from "@/components/site/CtaSection";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Codrithm — Where Coders Make History" },
      {
        name: "description",
        content:
          "Codrithm is a student-driven technology community built around ethical values, continuous learning, peer mentorship and collaborative innovation.",
      },
      { property: "og:title", content: "Codrithm — Where Coders Make History" },
      {
        property: "og:description",
        content:
          "Practical skills, peer mentorship, and collaborative innovation for emerging developers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bullets = [
  "Hands-on sessions that build practical skill.",
  "Peer mentorship from people growing alongside you.",
  "Collaborative projects with meaningful outcomes.",
];

function Index() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Navbar />
      <Hero />
      <LogoMarquee />
      <BentoSection />

      <section id="features" className="mx-auto w-full max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <SectionHeading
          title="Learning with"
          highlight="Momentum"
          subtitle="A community designed to make technology learning practical, welcoming, and connected."
        />

        <div className="mt-20 space-y-28 lg:space-y-40">
          <FeatureSplit
            title="Learn by building things that matter"
            body="Move from tutorials to real projects with sessions, feedback, and opportunities to put your skills into practice."
            note="Practical progress, shared with a supportive community."
            bullets={bullets}
            image={featureShield}
            imageAlt="Abstract blue technology pattern"
          />
          <FeatureSplit
            reversed
            title="Grow beside people who want you to win"
            body="Find peers, mentors, and collaborators who make the path into technology feel less isolated."
            note="A shared rhythm for learning, shipping, and improving."
            bullets={bullets}
            image={featureCharts}
            imageAlt="Abstract collaborative technology dashboard"
          />
        </div>
      </section>

      <StatsSection />
      <Pricing />
      <Testimonials />
      <Blog />
      <Faq />
      <CtaSection />
      <Footer />
    </motion.main>
  );
}
