import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMotionPrefs } from "./useMotionPrefs";

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string | undefined;
  suffix?: string | undefined;
  decimals?: number;
  className?: string | undefined;
};

/** Counts up once when it scrolls into view. */
export function Counter({
  to,
  from = 0,
  duration = 1.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { reduced } = useMotionPrefs();
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, from, to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
