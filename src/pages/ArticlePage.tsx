import { useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ExternalLink, Link2, Share2 } from "lucide-react";
import { useArticle, useArticles } from "../api/queries";
import { ArticleCard } from "../components/news/ArticleCard";
import { ArticleCover } from "../components/news/ArticleCover";
import { BookmarkButton } from "../components/news/BookmarkButton";
import { ShareDialog } from "../components/social/ShareDialog";
import { Button, ButtonLink } from "../components/ui/Button";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import { toast } from "../components/ui/toast";
import { CATEGORIES } from "../lib/categories";
import { formatDate, readingTime, timeAgo } from "../lib/format";

export default function ArticlePage() {
  const { id = "" } = useParams();
  const { data: article, isPending, isError, error, refetch } = useArticle(id);
  const related = useArticles(article?.category);
  const [sharing, setSharing] = useState(false);

  if (isPending) {
    return (
      <div className="container-page max-w-3xl py-10" role="status" aria-label="Loading story">
        <Skeleton className="mb-4 h-4 w-24" />
        <Skeleton className="mb-3 h-10 w-full" />
        <Skeleton className="mb-8 h-10 w-2/3" />
        <Skeleton className="aspect-[16/9]" />
      </div>
    );
  }
  if (isError)
    return (
      <div className="container-page max-w-3xl py-10">
        <ErrorState error={error} onRetry={() => void refetch()} />
      </div>
    );
  if (!article) {
    return (
      <div className="container-page max-w-3xl py-10">
        <EmptyState
          title="Story not found"
          action={<ButtonLink to="/home">Back to your feed</ButtonLink>}
        >
          It may have been removed by the source.
        </EmptyState>
      </div>
    );
  }

  const cat = CATEGORIES[article.category];
  const text = [article.summary, ...article.body].join(" ");
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast("Link copied");
    } catch {
      toast("Couldn’t copy. Your browser blocked clipboard access.");
    }
  };

  return (
    <article className="container-page py-8">
      <div className="mx-auto max-w-3xl">
        <Link
          to={`/topic/${article.category}`}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> {cat.label}
        </Link>
        <p className="kicker mb-3">{cat.label}</p>
        <h1 className="headline text-4xl leading-[1.08] sm:text-5xl">{article.title}</h1>
        {article.summary && <p className="mt-4 text-xl text-muted">{article.summary}</p>}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-rule py-4">
          <div className="text-sm">
            <p className="font-medium">
              {article.author ? `${article.author}, ` : ""}
              {article.source.name}
            </p>
            <p className="text-muted">
              <time dateTime={article.publishedAt} title={formatDate(article.publishedAt)}>
                {timeAgo(article.publishedAt)}
              </time>
              {article.body.length > 0 && ` · ${readingTime(text)} min read`}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <BookmarkButton articleId={article.id} title={article.title} />
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copy link"
              className="inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-sunken hover:text-ink"
            >
              <Link2 className="size-5" aria-hidden="true" />
            </button>
            <Button size="sm" onClick={() => setSharing(true)}>
              <Share2 className="size-4" aria-hidden="true" /> Share
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto my-8 aspect-[16/8] max-w-4xl overflow-hidden rounded-3xl">
        <ArticleCover article={article} iconSize={72} />
      </div>

      <div className="mx-auto max-w-2xl">
        {article.body.length > 0 ? (
          <div className="space-y-5 font-serif text-lg leading-relaxed text-ink/90 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.9] first-letter:font-semibold first-letter:text-crimson">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="text-muted">This story is published by {article.source.name}.</p>
        )}
        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-medium text-crimson hover:underline"
          >
            Read the full story at {article.source.name}{" "}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>

      {related.data && related.data.length > 1 && (
        <section
          aria-labelledby="related"
          className="mx-auto mt-16 max-w-5xl border-t border-rule pt-10"
        >
          <h2 id="related" className="headline mb-6 text-2xl">
            More in {cat.label}
          </h2>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.data
              .filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
          </div>
        </section>
      )}

      <ShareDialog article={article} open={sharing} onClose={() => setSharing(false)} />
    </article>
  );
}
