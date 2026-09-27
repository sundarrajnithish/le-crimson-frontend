import { cn } from "../../lib/cn";

/** Typographic recreation of the original "le CRIMSON — EST. 2022" wordmark. */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span
      className={cn("inline-flex items-baseline gap-1 leading-none select-none", className)}
      role="img"
      aria-label="Le Crimson"
    >
      <span aria-hidden="true" className="font-serif text-[0.8em] italic text-crimson">
        le
      </span>
      <span aria-hidden="true" className="font-serif font-semibold tracking-[0.08em] uppercase">
        Crimson
      </span>
      {!compact && (
        <span
          aria-hidden="true"
          className="ml-1 hidden text-[0.35em] font-medium tracking-[0.3em] text-muted sm:inline"
        >
          EST. 2022
        </span>
      )}
    </span>
  );
}
