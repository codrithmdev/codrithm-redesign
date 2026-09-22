import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { tHover } from "@/animations/transitions";
import { useMotionPrefs } from "@/animations/useMotionPrefs";

const posts = [
  { title: "Learning in public", image: blog1, excerpt: "Why sharing the process helps emerging developers grow faster." },
  { title: "Better projects", image: blog2, excerpt: "How collaboration turns early ideas into work with real impact." },
  { title: "The community advantage", image: blog3, excerpt: "A practical guide to learning with people who want you to succeed." },
];

export function Blog() {
  const { reduced } = useMotionPrefs();

  return (
    <section id="blog" className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        title="Stories, ideas &"
        highlight="progress"
        subtitle="Notes from the people, projects, and conversations shaping the Codrithm community."
      />

      <Stagger className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.08}>
        {posts.map((p) => (
          <StaggerItem key={p.title}>
            <motion.a
              href="#blog"
              whileHover={reduced ? {} : { y: -4, scale: 1.01 }}
              transition={tHover}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={912}
                  height={1200}
                  className="h-full w-full object-cover [filter:hue-rotate(105deg)_saturate(1.06)] transition-transform duration-[700ms] ease-[var(--ease-standard)] group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 right-4 grid size-10 place-items-center rounded-lg bg-background/80 backdrop-blur-sm transition-transform duration-300 ease-[var(--ease-standard)] group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-xl transition-colors duration-300 group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </motion.a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
