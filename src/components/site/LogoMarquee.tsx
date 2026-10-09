import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/animations/reveal";
import { useMotionPrefs } from "@/animations/useMotionPrefs";
import { communityCollaborations } from "@/content/community";

export function LogoMarquee() {
  const { reduced } = useMotionPrefs();
  const [paused, setPaused] = useState(false);
  const brands = communityCollaborations.filter((collaboration) => collaboration.publishable);
  if (brands.length === 0) return null;
  const row = [...brands, ...brands];

  return (
    <section className="relative py-20 lg:py-28">
      <Reveal variant="fade" className="text-center">
        <p className="text-sm text-muted-foreground">Community collaborations</p>
      </Reveal>

      <div
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <motion.div
          className="flex w-max gap-16 pr-16"
          animate={reduced || paused ? { x: "0%" } : { x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {row.map((collaboration, i) => (
            <span
              key={`${collaboration.name}-${i}`}
              className="font-display text-2xl font-semibold tracking-tight text-muted-foreground/60 transition-colors duration-300 hover:text-foreground"
            >
              {collaboration.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
