import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  children,
  actions,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-rule pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {kicker && <p className="kicker mb-2">{kicker}</p>}
        <h1 className="headline text-3xl sm:text-4xl">{title}</h1>
        {children && <div className="mt-2 max-w-2xl text-muted">{children}</div>}
      </div>
      {actions && <div className="flex shrink-0 gap-2">{actions}</div>}
    </div>
  );
}
