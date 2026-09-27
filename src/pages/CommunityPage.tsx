import { Link } from "react-router";
import { usePosts, useConnections, useUpdateConnection } from "../api/queries";
import { PostCard } from "../components/social/PostCard";
import { Avatar } from "../components/ui/Avatar";
import { Button, ButtonLink } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";

export default function CommunityPage() {
  const posts = usePosts();
  return (
    <div className="container-page py-8">
      <PageHeader kicker="Community" title="What people are reading">
        Stories shared by people in your network. Share your own from any article page.
      </PageHeader>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem]">
        <section aria-label="Community posts" className="space-y-4">
          {posts.isPending ? (
            [0, 1, 2].map((i) => <Skeleton key={i} className="h-56" />)
          ) : posts.isError ? (
            <ErrorState error={posts.error} onRetry={() => void posts.refetch()} />
          ) : posts.data.length === 0 ? (
            <EmptyState
              title="It’s quiet here"
              action={<ButtonLink to="/home">Find a story to share</ButtonLink>}
            />
          ) : (
            posts.data.map((p) => <PostCard key={p.id} post={p} />)
          )}
        </section>
        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <Suggestions />
        </aside>
      </div>
    </div>
  );
}

function Suggestions() {
  const { data } = useConnections();
  const update = useUpdateConnection();
  const people = data?.suggestions ?? [];
  return (
    <div className="card p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-semibold">People to follow</h2>
        <Link to="/connections" className="text-sm font-medium text-crimson hover:underline">
          See all
        </Link>
      </div>
      {people.length === 0 ? (
        <p className="text-sm text-muted">You’re all caught up.</p>
      ) : (
        <ul className="space-y-3">
          {people.slice(0, 4).map((m) => (
            <li key={m.id} className="flex items-center gap-3">
              <Avatar name={m.name} src={m.avatarUrl} size={36} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{m.name}</p>
                <p className="truncate text-xs text-muted">{m.bio}</p>
              </div>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => update.mutate({ memberId: m.id, action: "follow" })}
              >
                Follow
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
