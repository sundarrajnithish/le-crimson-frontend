import type { ReactNode } from "react";
import { AlertTriangle, Inbox } from "lucide-react";
import { Button } from "./Button";

export function EmptyState({
  title,
  children,
  action,
}: {
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="card flex flex-col items-center px-6 py-14 text-center">
      <Inbox className="mb-3 size-8 text-muted" aria-hidden="true" />
      <h3 className="headline text-xl">{title}</h3>
      {children && <div className="mt-2 max-w-md text-muted">{children}</div>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function ErrorState({ error, onRetry }: { error: unknown; onRetry?: () => void }) {
  const message = error instanceof Error ? error.message : "Something went wrong.";
  return (
    <div
      role="alert"
      className="card flex flex-col items-center border-bad/30 px-6 py-12 text-center"
    >
      <AlertTriangle className="mb-3 size-8 text-bad" aria-hidden="true" />
      <h3 className="headline text-xl">We couldn’t load this</h3>
      <p className="mt-2 max-w-md text-muted">{message}</p>
      {onRetry && (
        <Button variant="secondary" className="mt-5" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
