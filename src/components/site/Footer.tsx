import { Logo } from "./Logo";
import { Reveal } from "@/animations/reveal";
import { Stagger, StaggerItem } from "@/animations/stagger";

const columns = [
  { title: "Explore", links: ["Home", "About", "Services", "Projects", "Community", "Contact"] },
  { title: "Socials", links: ["LinkedIn", "Instagram", "Facebook", "YouTube"] },
  { title: "Connect", links: ["WhatsApp", "Calendly", "Email", "Join Codrithm"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <Reveal variant="fadeUp">
            <Logo />
            <h2 className="font-display mt-6 max-w-sm text-3xl leading-tight sm:text-4xl">
              Where coders learn, build, and grow together.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Codrithm is a student-driven technology community grounded in ethical values,
              continuous learning, and mutual support.
            </p>
          </Reveal>

          <Stagger className="grid gap-10 sm:grid-cols-3" stagger={0.08}>
            {columns.map((col) => (
              <StaggerItem key={col.title} small>
                <p className="text-xs tracking-widest text-muted-foreground uppercase">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#home"
                        className="group relative inline-block text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        {l}
                        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[image:var(--gradient-solar)] transition-transform duration-300 ease-[var(--ease-standard)] group-hover:scale-x-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs tracking-widest text-muted-foreground uppercase sm:flex-row">
          <span>© {new Date().getFullYear()} Codrithm</span>
          <span>Built for people who build</span>
        </div>
      </div>
    </footer>
  );
}
