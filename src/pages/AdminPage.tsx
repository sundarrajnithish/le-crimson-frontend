import type { ReactNode } from "react";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import { useAdminStats } from "../api/queries";
import type { AdminStats } from "../api/types";
import { BarList } from "../components/charts/BarList";
import { LineChart } from "../components/charts/LineChart";
import { Avatar } from "../components/ui/Avatar";
import { PageHeader } from "../components/ui/PageHeader";
import { Skeleton } from "../components/ui/Skeleton";
import { ErrorState } from "../components/ui/States";
import { CATEGORIES } from "../lib/categories";
import { cn } from "../lib/cn";
import { compactNumber, formatDate, timeAgo } from "../lib/format";

export default function AdminPage() {
  const { data, isPending, isError, error, refetch } = useAdminStats();

  return (
    <div className="container-page py-8">
      <PageHeader kicker="Admin" title="Dashboard">
        Readers, interests and system health at a glance.
      </PageHeader>
      {isPending ? (
        <div className="space-y-6" role="status" aria-label="Loading dashboard">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-24" />
            ))}
          </div>
          <Skeleton className="h-72" />
        </div>
      ) : isError ? (
        <ErrorState error={error} onRetry={() => void refetch()} />
      ) : (
        <Dashboard stats={data} />
      )}
    </div>
  );
}

function Panel({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("card min-w-0 p-5", className)} aria-label={title}>
      <h2 className={cn("font-semibold", !subtitle && "mb-4")}>{title}</h2>
      {subtitle && <p className="mb-4 text-sm text-muted">{subtitle}</p>}
      {children}
    </section>
  );
}

function TableView({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: [string, string];
  rows: [string, number][];
}) {
  return (
    <details className="mt-3 text-sm">
      <summary className="cursor-pointer text-muted hover:text-ink">View as table</summary>
      <table className="mt-2 w-full">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="text-left text-xs text-muted">
            <th className="py-1 font-medium">{head[0]}</th>
            <th className="py-1 text-right font-medium">{head[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="border-t border-rule">
              <td className="py-1">{k}</td>
              <td className="py-1 text-right tabular-nums">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}

const LEVEL = {
  info: { icon: Info, label: "Info", className: "text-muted" },
  warn: { icon: AlertTriangle, label: "Warning", className: "text-warn" },
  error: { icon: AlertCircle, label: "Error", className: "text-bad" },
} as const;

function Dashboard({ stats }: { stats: AdminStats }) {
  const tiles = [
    { label: "Total readers", value: stats.totals.users },
    { label: "Active today", value: stats.totals.activeToday },
    { label: "Stories indexed", value: stats.totals.articles },
    { label: "Community shares", value: stats.totals.shares },
  ];
  const signups = stats.signups.map((s) => {
    const d = new Date(`${s.date}T12:00:00`);
    return {
      label: d.toLocaleDateString("en", { weekday: "short", month: "short", day: "numeric" }),
      tick: d.toLocaleDateString("en", { month: "short", day: "numeric" }),
      value: s.count,
    };
  });
  const interests = stats.interestShare.map((s) => ({
    label: CATEGORIES[s.category].label,
    value: s.users,
  }));

  return (
    <div className="space-y-6">
      <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {tiles.map((t) => (
          <div key={t.label} className="card p-5">
            <dt className="text-sm text-muted">{t.label}</dt>
            <dd className="mt-1 text-3xl font-semibold">{compactNumber(t.value)}</dd>
          </div>
        ))}
      </dl>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Panel title="New readers per day" subtitle="Last 14 days">
          <LineChart data={signups} title="New readers per day, last 14 days" unit="new readers" />
          <TableView
            caption="New readers per day"
            head={["Day", "New readers"]}
            rows={signups.map((s) => [s.label, s.value])}
          />
        </Panel>
        <Panel title="Readers by interest" subtitle="Readers following each topic">
          <BarList data={interests} title="Readers by interest" unit="readers" />
          <TableView
            caption="Readers by interest"
            head={["Topic", "Readers"]}
            rows={interests.map((s) => [s.label, s.value])}
          />
        </Panel>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Panel title="Recent sign-ups">
          {/* Focusable so keyboard users can scroll the table on narrow screens. */}
          <div
            className="-mx-5 overflow-x-auto"
            role="region"
            aria-label="Recent sign-ups table"
            tabIndex={0}
          >
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="text-left text-xs text-muted">
                  <th className="px-5 py-2 font-medium">Reader</th>
                  <th className="px-2 py-2 font-medium">Interests</th>
                  <th className="px-2 py-2 font-medium">Role</th>
                  <th className="px-5 py-2 text-right font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentUsers.map((u) => (
                  <tr key={u.id} className="border-t border-rule">
                    <td className="px-5 py-2.5">
                      <span className="flex items-center gap-2.5">
                        <Avatar name={u.name} size={28} />
                        <span className="font-medium">{u.name}</span>
                      </span>
                    </td>
                    <td className="px-2 py-2.5 text-muted">
                      {u.interests.map((i) => CATEGORIES[i].label).join(", ")}
                    </td>
                    <td className="px-2 py-2.5">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-xs",
                          u.role === "admin"
                            ? "bg-crimson-soft text-crimson"
                            : "bg-sunken text-muted",
                        )}
                      >
                        {u.role}
                      </span>
                    </td>
                    <td className="px-5 py-2.5 text-right text-muted tabular-nums">
                      {formatDate(u.joinedAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="System log">
          <ol className="space-y-3">
            {stats.logs.map((l) => {
              const lv = LEVEL[l.level];
              return (
                <li key={l.id} className="flex gap-3 text-sm">
                  <lv.icon
                    className={cn("mt-0.5 size-4 shrink-0", lv.className)}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p>
                      <span className={cn("mr-1.5 text-xs font-semibold uppercase", lv.className)}>
                        {lv.label}
                      </span>
                      {l.message}
                    </p>
                    <p className="text-xs text-muted">
                      <time dateTime={l.at}>{timeAgo(l.at)}</time>
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Panel>
      </div>
    </div>
  );
}
