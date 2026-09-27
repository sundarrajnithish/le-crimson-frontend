import { cn } from "../../lib/cn";

export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("animate-pulse rounded-xl bg-sunken", className)} />;
}

export function CardSkeletons({ count = 6 }: { count?: number }) {
  return (
    <div
      role="status"
      aria-label="Loading stories"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="aspect-[16/10]" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
      ))}
    </div>
  );
}
