import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { AnimatedButton } from "./AnimatedButton";
import { mobileMenuItem } from "@/animations/variants";
import { tNormal } from "@/animations/transitions";
import { STAGGER_NORMAL } from "@/animations/tokens";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Community", href: "#pricing" },
  { label: "Projects", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-[var(--ease-standard)]",
          scrolled
            ? "border-b border-border bg-background/70 py-2 backdrop-blur-xl"
            : "border-b border-transparent py-4",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="shrink-0">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="group relative inline-block px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-3 h-px w-[calc(100%-1.5rem)] origin-left scale-x-0 bg-[image:var(--gradient-solar)] transition-transform duration-300 ease-[var(--ease-standard)] group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <AnimatedButton size="md" className="hidden sm:inline-flex">
              Work with us
            </AnimatedButton>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
            >
              <motion.span
                className="absolute h-px w-5 bg-foreground"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={tNormal}
              />
              <motion.span
                className="absolute h-px w-5 bg-foreground"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={tNormal}
              />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{ visible: { transition: { staggerChildren: STAGGER_NORMAL } } }}
            >
              {links.map((l) => (
                <motion.li key={l.label} variants={mobileMenuItem}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-lg text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={mobileMenuItem} className="pt-3">
                <AnimatedButton size="lg" className="w-full">
                  Work with us
                </AnimatedButton>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
