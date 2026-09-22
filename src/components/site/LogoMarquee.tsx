import { motion } from "framer-motion";
import { Reveal } from "@/animations/reveal";
import { useMotionPrefs } from "@/animations/useMotionPrefs";

const brands = ["SUPERIOR", "Inter AI Club", "DeepCiphers", "NYLP", "MSA", "CODRITHM"];

export function LogoMarquee() {
  const { reduced } = useMotionPrefs();
  const row = [...brands, ...brands];

  return (
    <section className="relative py-20 lg:py-28">
      <Reveal variant="fade" className="text-center">
        <p className="text-sm text-muted-foreground">Growing alongside organisations that believe in student potential</p>
      </Reveal>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <motion.div
          className="flex w-max gap-16 pr-16"
          animate={reduced ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {row.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-2xl font-semibold tracking-tight text-muted-foreground/60 transition-colors duration-300 hover:text-foreground"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
