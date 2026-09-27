import { useArticles } from "../api/queries";
import { ArticleCard } from "../components/news/ArticleCard";
import { ButtonLink } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";
import { CardSkeletons } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import { useSaved } from "../lib/saved";

export default function SavedPage() {
  const { saved } = useSaved();
  const { data, isPending, isError, error, refetch } = useArticles();
  const byId = new Map((data ?? []).map((a) => [a.id, a]));
  const items = saved.map((id) => byId.get(id)).filter((a) => !!a);

  return (
    <div className="container-page max-w-4xl py-8">
      <PageHeader kicker="Library" title="Saved stories">
        Stories you bookmark appear here, newest first.
      </PageHeader>
      {isPending ? (
        <CardSkeletons count={3} />
      ) : isError ? (
        <ErrorState error={error} onRetry={() => void refetch()} />
      ) : items.length === 0 ? (
        <EmptyState
          title="Nothing saved yet"
          action={<ButtonLink to="/home">Browse your feed</ButtonLink>}
        >
          Tap the bookmark icon on any story to keep it for later.
        </EmptyState>
      ) : (
        <div className="divide-y divide-rule">
          {items.map((a) => (
            <ArticleCard key={a.id} article={a} variant="row" />
          ))}
        </div>
      )}
    </div>
  );
}
