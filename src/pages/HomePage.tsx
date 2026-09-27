import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useArticles } from "../api/queries";
import type { Article } from "../api/types";
import { useUser } from "../auth/context";
import { ArticleCard } from "../components/news/ArticleCard";
import { CardSkeletons, Skeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import { ButtonLink } from "../components/ui/Button";
import { CATEGORIES } from "../lib/categories";

function greeting(d = new Date()) {
  const h = d.getHours();
  return h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
}

export default function HomePage() {
  const user = useUser();
  const { data, isPending, isError, error, refetch } = useArticles();

  const today = new Date().toLocaleDateString("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-page py-8">
      <div className="mb-8 flex flex-col justify-between gap-2 border-b border-rule pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="kicker mb-2">{today}</p>
          <h1 className="headline text-3xl sm:text-4xl">
            {greeting()}, {user.name.split(" ")[0]}
          </h1>
        </div>
        <p className="text-sm text-muted">
          Tuned to {user.interests.map((i) => CATEGORIES[i].label).join(", ")} ·{" "}
          <Link to="/preferences" className="font-medium text-crimson hover:underline">
            Edit
          </Link>
        </p>
      </div>

      {isPending ? (
        <div className="space-y-10">
          <Skeleton className="aspect-[16/7]" />
          <CardSkeletons />
        </div>
      ) : isError ? (
        <ErrorState error={error} onRetry={() => void refetch()} />
      ) : (
        <Feed articles={data.filter((a) => user.interests.includes(a.category))} />
      )}
    </div>
  );
}

function Feed({ articles }: { articles: Article[] }) {
  const user = useUser();
  if (articles.length === 0) {
    return (
      <EmptyState
        title="No stories in your topics yet"
        action={<ButtonLink to="/preferences">Add more interests</ButtonLink>}
      >
        New stories arrive throughout the day. Adding a few more topics will fill your feed faster.
      </EmptyState>
    );
  }
  const [lead, ...rest] = articles;
  const side = rest.slice(0, 4);
  const grid = rest.slice(4, 10);

  return (
    <div className="space-y-14">
      <section aria-label="Top stories" className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {lead && <ArticleCard article={lead} variant="lead" />}
        <div className="divide-y divide-rule border-rule lg:border-l lg:pl-8">
          <h2 className="kicker pb-2">Also today</h2>
          {side.map((a) => (
            <ArticleCard key={a.id} article={a} variant="row" />
          ))}
        </div>
      </section>

      {grid.length > 0 && (
        <section aria-labelledby="latest">
          <h2 id="latest" className="headline mb-6 text-2xl">
            Latest in your topics
          </h2>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="by-topic">
        <h2 id="by-topic" className="headline mb-6 text-2xl">
          By topic
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {user.interests.map((id) => {
            const cat = CATEGORIES[id];
            const items = articles.filter((a) => a.category === id).slice(0, 3);
            if (items.length === 0) return null;
            return (
              <div key={id} className="card p-5">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-semibold">
                    <cat.icon className="size-4 text-crimson" aria-hidden="true" />
                    {cat.label}
                  </h3>
                  <Link
                    to={`/topic/${id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-crimson hover:underline"
                  >
                    More <ArrowRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">{cat.label} stories</span>
                  </Link>
                </div>
                <div className="divide-y divide-rule">
                  {items.map((a) => (
                    <ArticleCard key={a.id} article={a} variant="row" className="py-3" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
