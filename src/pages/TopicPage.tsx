import { useParams } from "react-router";
import { Check, Plus } from "lucide-react";
import { useArticles } from "../api/queries";
import { useAuth, useUser } from "../auth/context";
import { NotFound } from "../components/layout/NotFound";
import { ArticleCard } from "../components/news/ArticleCard";
import { Button } from "../components/ui/Button";
import { PageHeader } from "../components/ui/PageHeader";
import { CardSkeletons } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import { CATEGORIES, CATEGORY_IDS, toCategoryId, type CategoryId } from "../lib/categories";

/** One dynamic route replaces eight copy-pasted page folders (World_page, Sports_page, …). */
export default function TopicPage() {
  const { topic } = useParams();
  const id = toCategoryId(topic);
  return id ? <Topic id={id} /> : <NotFound />;
}

function Topic({ id }: { id: CategoryId }) {
  const cat = CATEGORIES[id];
  const user = useUser();
  const { updateUser } = useAuth();
  const { data, isPending, isError, error, refetch } = useArticles(id);
  const following = user.interests.includes(id);

  return (
    <div className="container-page py-8">
      <PageHeader
        kicker="Topic"
        title={cat.label}
        actions={
          <Button
            variant={following ? "secondary" : "primary"}
            aria-pressed={following}
            onClick={() =>
              updateUser({
                interests: following
                  ? user.interests.filter((i) => i !== id)
                  : CATEGORY_IDS.filter((c) => c === id || user.interests.includes(c)),
              })
            }
            disabled={following && user.interests.length === 1}
            title={
              following && user.interests.length === 1 ? "Keep at least one interest" : undefined
            }
          >
            {following ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <Plus className="size-4" aria-hidden="true" />
            )}
            {following ? "Following" : "Follow topic"}
          </Button>
        }
      >
        {cat.blurb}
      </PageHeader>

      {isPending ? (
        <CardSkeletons />
      ) : isError ? (
        <ErrorState error={error} onRetry={() => void refetch()} />
      ) : data.length === 0 ? (
        <EmptyState title={`No ${cat.label} stories right now`}>Check back soon.</EmptyState>
      ) : (
        <div className="space-y-12">
          {data[0] && <ArticleCard article={data[0]} variant="lead" />}
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {data.slice(1).map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
