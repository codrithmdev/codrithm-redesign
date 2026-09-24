import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "@/animations/stagger";

const items = [
  {
    q: "Who can join Codrithm?",
    a: "Students and emerging developers who want to learn practical skills, meet thoughtful peers, and contribute to collaborative projects are welcome.",
  },
  {
    q: "Do I need to be an experienced developer?",
    a: "No. Codrithm is built for learners at different stages. Curiosity, consistency, and respect for others matter more than a perfect starting point.",
  },
  {
    q: "What happens in a Codrithm session?",
    a: "Sessions can include practical workshops, project reviews, peer learning, mentorship, and conversations with people working in technology.",
  },
  {
    q: "Can organisations collaborate with Codrithm?",
    a: "Yes. We welcome meaningful partnerships that create real learning opportunities and help emerging developers gain practical experience.",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="contact" className="mx-auto w-full max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading title="Questions, answered" />

      <Stagger className="mt-14 space-y-3" stagger={0.06}>
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <StaggerItem key={item.q}>
              <div className="surface-card overflow-hidden rounded-xl transition-colors duration-300 hover:border-border-strong">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 bg-primary px-6 py-5 text-left text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <span className="font-display text-base sm:text-lg">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="px-6 pb-6 text-sm text-muted-foreground"
                      >
                        {item.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
