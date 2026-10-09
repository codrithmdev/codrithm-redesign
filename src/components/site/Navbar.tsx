import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { mobileMenuItem } from "@/animations/variants";
import { tNormal } from "@/animations/transitions";
import { STAGGER_NORMAL } from "@/animations/tokens";
import { internalDestinations, navigationItems } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  const closeMenu = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isCurrentRoute = (to: (typeof navigationItems)[number]["to"]) =>
    to === internalDestinations.home ? pathname === to : pathname.startsWith(to);

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
          <Link to={internalDestinations.home} className="shrink-0" aria-label="Codrithm home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  aria-current={isCurrentRoute(item.to) ? "page" : undefined}
                  className={cn(
                    "group relative inline-block px-3 py-2 text-sm transition-colors duration-300 hover:text-foreground",
                    isCurrentRoute(item.to) ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-1 left-3 h-px w-[calc(100%-1.5rem)] origin-left bg-primary transition-transform duration-300 ease-[var(--ease-standard)] group-hover:scale-x-100",
                      isCurrentRoute(item.to) ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to={internalDestinations.contact}
              search={{ type: "project" }}
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:inline-flex"
            >
              Start a Project
            </Link>

            <button
              ref={menuButtonRef}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((v) => !v)}
              className="relative flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90 lg:hidden"
            >
              <motion.span
                className="absolute h-px w-5 bg-primary-foreground"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={tNormal}
              />
              <motion.span
                className="absolute h-px w-5 bg-primary-foreground"
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
              id="mobile-navigation"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{ visible: { transition: { staggerChildren: STAGGER_NORMAL } } }}
            >
              {navigationItems.map((item) => (
                <motion.li key={item.label} variants={mobileMenuItem}>
                  <Link
                    to={item.to}
                    aria-current={isCurrentRoute(item.to) ? "page" : undefined}
                    onClick={() => closeMenu()}
                    className={cn(
                      "block py-2.5 text-lg transition-colors hover:text-foreground",
                      isCurrentRoute(item.to) ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={mobileMenuItem} className="pt-3">
                <Link
                  to={internalDestinations.contact}
                  search={{ type: "project" }}
                  onClick={() => closeMenu()}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-colors hover:bg-primary/90"
                >
                  Start a Project
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
