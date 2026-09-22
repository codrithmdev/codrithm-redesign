import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span
      className={cn(
        "font-display relative inline-flex h-9 max-w-full shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap text-xl font-semibold tracking-tight",
        className,
      )}
    >
      <img
        src="/codrithm-mark.png"
        alt=""
        width={32}
        height={32}
        className="size-8 shrink-0 rounded-full object-cover"
        style={{ width: 32, height: 32 }}
      />
      {!compact && <span className="truncate">CODRITHM</span>}
    </span>
  );
}
