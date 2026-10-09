import { motion } from "framer-motion";
import { Bell, BarChart3, Megaphone, Package, Settings, Users, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { VIEWPORT_LOOSE } from "@/animations/tokens";
import { useMotionPrefs } from "@/animations/useMotionPrefs";

const stages = ["Understand", "Scope", "Build", "Review"];

const workflow = ["Requirements", "Interface", "Integration"];

const bars = [42, 24, 16, 26, 25, 28, 11, 9, 33, 18, 14, 26, 29, 17];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const sparkline = "M0 22 L14 16 L28 24 L42 9 L56 18 L70 6 L84 14 L98 3";

export function DashboardMockup() {
  const { reduced } = useMotionPrefs();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_LOOSE}
      className="surface-card relative overflow-hidden rounded-2xl backdrop-blur-xl"
    >
      {/* top bar */}
      <motion.div
        variants={item}
        className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6"
      >
        <Logo compact className="text-sm" />
        <div className="hidden items-center gap-5 text-xs text-muted-foreground md:flex">
          {[
            { icon: BarChart3, label: "Brief" },
            { icon: Package, label: "Build" },
            { icon: Users, label: "Review" },
            { icon: Megaphone, label: "Share" },
            { icon: Settings, label: "Settings" },
          ].map(({ icon: Icon, label }, i) => (
            <span
              key={label}
              className={
                i === 2 ? "flex items-center gap-1.5 text-foreground" : "flex items-center gap-1.5"
              }
            >
              <Icon className="size-3.5" />
              {label}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Bell className="size-4 text-muted-foreground" />
          <motion.span
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
            className="size-7 rounded-full bg-[image:var(--gradient-solar)]"
          />
        </div>
      </motion.div>

      <div className="p-4 sm:p-6">
        <motion.div variants={item} className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-lg sm:text-xl">Project workspace</h3>
          <span className="rounded-full border border-border bg-elevated px-3 py-1.5 text-xs text-muted-foreground">
            Illustrative view
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <motion.div
              key={stage}
              variants={item}
              className="rounded-xl border border-border bg-elevated/50 p-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Step {index + 1}
                </span>
                <span className="text-[10px] text-success">In progress</span>
              </div>
              <div className="mt-2 flex items-end justify-between gap-2">
                <span className="font-display text-base sm:text-lg">{stage}</span>
                <svg viewBox="0 0 98 28" className="h-6 w-16 overflow-visible">
                  <motion.path
                    d={sparkline}
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    variants={{
                      hidden: { pathLength: reduced ? 1 : 0, opacity: 0 },
                      visible: {
                        pathLength: 1,
                        opacity: 1,
                        transition: { duration: 1.1, ease },
                      },
                    }}
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <motion.div
            variants={item}
            className="rounded-xl border border-border bg-elevated/40 p-4"
          >
            <p className="text-sm">A clear path from idea to handover</p>
            <p className="mt-1 text-xs text-muted-foreground">
              A decorative workflow illustration, not a live product dashboard.
            </p>
            <div className="mt-4 space-y-4">
              {workflow.map((name, i) => (
                <div key={name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground">{name}</span>
                    <span className="text-muted-foreground">Planned</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full origin-left rounded-full bg-[image:var(--gradient-solar)]"
                      style={{ width: `${[72, 54, 38][i]}%` }}
                      variants={{
                        hidden: { scaleX: reduced ? 1 : 0 },
                        visible: {
                          scaleX: 1,
                          transition: { duration: 1, ease, delay: 0.2 + i * 0.12 },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end gap-1 border-t border-border pt-3 text-xs text-muted-foreground">
              Explore <ChevronDown className="size-3" />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-xl border border-border bg-elevated/40 p-4"
          >
            <p className="text-sm">Workflow signals</p>
            <div className="mt-6 flex h-36 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 origin-bottom rounded-t-sm"
                  style={{
                    height: `${h * 2}%`,
                    background:
                      i % 2 === 0
                        ? "var(--gradient-solar)"
                        : "color-mix(in oklab, var(--primary) 35%, transparent)",
                  }}
                  variants={{
                    hidden: { scaleY: reduced ? 1 : 0, opacity: reduced ? 1 : 0 },
                    visible: {
                      scaleY: 1,
                      opacity: 1,
                      transition: { duration: 0.7, ease, delay: 0.2 + i * 0.04 },
                    },
                  }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[10px] text-muted-foreground">
              <span>Illustrative</span>
              <span className="flex items-center gap-1">
                Project view <ChevronDown className="size-3" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
