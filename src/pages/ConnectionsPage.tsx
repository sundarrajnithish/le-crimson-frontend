import type { KeyboardEvent, ReactNode } from "react";
import { useSearchParams } from "react-router";
import { useConnections, useUpdateConnection } from "../api/queries";
import type { ConnectionAction, ConnectionKind, Member } from "../api/types";
import { Avatar } from "../components/ui/Avatar";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import { CATEGORIES } from "../lib/categories";
import { cn } from "../lib/cn";

const TABS: { id: ConnectionKind; label: string; empty: string }[] = [
  {
    id: "friends",
    label: "Friends",
    empty: "Follow people from Suggestions to build your circle.",
  },
  { id: "followers", label: "Followers", empty: "No followers yet." },
  { id: "requests", label: "Requests", empty: "No pending requests." },
  { id: "suggestions", label: "Suggestions", empty: "No new suggestions right now." },
  { id: "blocked", label: "Blocked", empty: "You haven’t blocked anyone." },
];

const ACTIONS: Record<
  ConnectionKind,
  { action: ConnectionAction; label: string; variant: "primary" | "secondary" | "danger" }[]
> = {
  friends: [{ action: "unfriend", label: "Remove", variant: "secondary" }],
  followers: [{ action: "block", label: "Block", variant: "danger" }],
  requests: [
    { action: "accept", label: "Accept", variant: "primary" },
    { action: "decline", label: "Decline", variant: "secondary" },
  ],
  suggestions: [
    { action: "follow", label: "Follow", variant: "primary" },
    { action: "dismiss", label: "Dismiss", variant: "secondary" },
  ],
  blocked: [{ action: "unblock", label: "Unblock", variant: "secondary" }],
};

const isKind = (v: string | null): v is ConnectionKind => TABS.some((t) => t.id === v);

export default function ConnectionsPage() {
  const [params, setParams] = useSearchParams();
  const tabParam = params.get("tab");
  const tab: ConnectionKind = isKind(tabParam) ? tabParam : "friends";
  const { data, isPending, isError, error, refetch } = useConnections();
  const update = useUpdateConnection();

  const onKeyDown = (e: KeyboardEvent, index: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    const next = TABS[(index + dir + TABS.length) % TABS.length]!;
    setParams({ tab: next.id }, { replace: true });
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <div className="container-page max-w-4xl py-8">
      <PageHeader kicker="Your network" title="Connections" />

      <div
        role="tablist"
        aria-label="Connection lists"
        className="mb-6 flex gap-1 overflow-x-auto border-b border-rule"
      >
        {TABS.map((t, i) => {
          const active = t.id === tab;
          const count = data?.[t.id].length;
          return (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={active}
              aria-controls="connections-panel"
              tabIndex={active ? 0 : -1}
              onKeyDown={(e) => onKeyDown(e, i)}
              onClick={() => setParams({ tab: t.id }, { replace: true })}
              className={cn(
                "-mb-px shrink-0 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
                active ? "border-crimson text-ink" : "border-transparent text-muted hover:text-ink",
              )}
            >
              {t.label}
              {count !== undefined && (
                <span
                  className={cn(
                    "ml-2 rounded-full px-1.5 py-0.5 text-xs",
                    active ? "bg-crimson-soft text-crimson" : "bg-sunken",
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div id="connections-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        {isPending ? (
          <div className="space-y-3">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-20" />
            ))}
          </div>
        ) : isError ? (
          <ErrorState error={error} onRetry={() => void refetch()} />
        ) : data[tab].length === 0 ? (
          <EmptyState title={`No ${TABS.find((t) => t.id === tab)!.label.toLowerCase()}`}>
            {TABS.find((t) => t.id === tab)!.empty}
          </EmptyState>
        ) : (
          <ul className="space-y-3">
            {data[tab].map((m) => (
              <MemberRow key={m.id} member={m}>
                {ACTIONS[tab].map((a) => (
                  <Button
                    key={a.action}
                    size="sm"
                    variant={a.variant}
                    disabled={update.isPending && update.variables?.memberId === m.id}
                    onClick={() => update.mutate({ memberId: m.id, action: a.action })}
                    aria-label={`${a.label} ${m.name}`}
                  >
                    {a.label}
                  </Button>
                ))}
              </MemberRow>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function MemberRow({ member, children }: { member: Member; children: ReactNode }) {
  return (
    <li className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <Avatar name={member.name} src={member.avatarUrl} size={44} />
        <div className="min-w-0">
          <p className="font-semibold">
            {member.name} <span className="font-normal text-muted">@{member.handle}</span>
          </p>
          <p className="truncate text-sm text-muted">{member.bio}</p>
          <p className="mt-1 flex flex-wrap gap-1">
            {member.interests.map((i) => (
              <span key={i} className="rounded-full bg-sunken px-2 py-0.5 text-[11px] text-muted">
                {CATEGORIES[i].label}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="flex gap-2">{children}</div>
    </li>
  );
}
