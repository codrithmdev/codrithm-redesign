import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/animations/reveal";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { Parallax } from "@/animations/parallax";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  body: string;
  note: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean | undefined;
  overlay?: React.ReactNode;
};

export function FeatureSplit({
  title,
  body,
  note,
  bullets,
  image,
  imageAlt,
  reversed,
  overlay,
}: Props) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>*:first-child]:order-2",
      )}
    >
      <Reveal variant={reversed ? "fadeRight" : "fadeLeft"}>
        <h3 className="font-display max-w-md text-3xl leading-tight sm:text-4xl">{title}</h3>
        <p className="mt-5 max-w-lg text-muted-foreground">{body}</p>
        <p className="mt-4 max-w-lg text-muted-foreground">{note}</p>

        <motion.a
          href="#pricing"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-7 inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated/70 px-5 py-2.5 text-sm transition-colors hover:border-primary/60"
        >
          See Doc
          <ArrowRight className="size-4 transition-transform duration-200 ease-[var(--ease-standard)] group-hover:translate-x-1" />
        </motion.a>

        <Stagger className="mt-8 space-y-3" stagger={0.08}>
          {bullets.map((b) => (
            <StaggerItem key={b} small className="flex items-center gap-3 text-sm">
              <span className="grid size-5 shrink-0 place-items-center rounded-md bg-[image:var(--gradient-solar)] text-primary-foreground">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-muted-foreground">{b}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>

      <Reveal variant={reversed ? "fadeLeft" : "fadeRight"}>
        <Parallax distance={18}>
          <div className="surface-card group relative overflow-hidden rounded-2xl">
            <motion.img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1200}
              height={1200}
              className="aspect-square w-full object-cover [filter:hue-rotate(105deg)_saturate(1.12)] transition-transform duration-[900ms] ease-[var(--ease-standard)] group-hover:scale-[1.03]"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
            {overlay}
          </div>
        </Parallax>
      </Reveal>
    </div>
  );
}
