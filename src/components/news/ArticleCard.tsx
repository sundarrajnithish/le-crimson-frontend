import { Link } from "react-router";
import type { Article } from "../../api/types";
import { CATEGORIES } from "../../lib/categories";
import { cn } from "../../lib/cn";
import { timeAgo } from "../../lib/format";
import { ArticleCover } from "./ArticleCover";
import { BookmarkButton } from "./BookmarkButton";

type Variant = "lead" | "card" | "row";

function Meta({ article }: { article: Article }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-xs text-muted">
      <span className="font-medium text-ink/80">{article.source.name}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={article.publishedAt}>{timeAgo(article.publishedAt)}</time>
    </p>
  );
}

export function ArticleCard({
  article,
  variant = "card",
  className,
}: {
  article: Article;
  variant?: Variant;
  className?: string;
}) {
  const cat = CATEGORIES[article.category];
  const href = `/article/${encodeURIComponent(article.id)}`;

  if (variant === "row") {
    return (
      <article className={cn("group relative flex gap-4 py-4", className)}>
        <div className="aspect-square w-20 shrink-0 overflow-hidden rounded-xl sm:w-24">
          <ArticleCover article={article} iconSize={24} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="kicker mb-1">{cat.label}</p>
          <h3 className="headline text-base leading-snug sm:text-lg">
            <Link
              to={href}
              className="after:absolute after:inset-0 group-hover:underline decoration-crimson/50 underline-offset-4"
            >
              {article.title}
            </Link>
          </h3>
          <div className="mt-1.5">
            <Meta article={article} />
          </div>
        </div>
        <BookmarkButton
          articleId={article.id}
          title={article.title}
          className="relative z-10 self-start"
        />
      </article>
    );
  }

  const lead = variant === "lead";
  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className={cn("overflow-hidden rounded-2xl", lead ? "aspect-[16/9]" : "aspect-[16/10]")}>
        <ArticleCover
          article={article}
          iconSize={lead ? 64 : 40}
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <p className="kicker mb-1.5">{cat.label}</p>
          <h3 className={cn("headline leading-tight", lead ? "text-2xl sm:text-4xl" : "text-xl")}>
            <Link
              to={href}
              className="after:absolute after:inset-0 group-hover:underline decoration-crimson/50 underline-offset-4"
            >
              {article.title}
            </Link>
          </h3>
          {article.summary && (
            <p
              className={cn(
                "mt-2 text-muted",
                lead ? "text-base sm:text-lg" : "line-clamp-2 text-sm",
              )}
            >
              {article.summary}
            </p>
          )}
          <div className="mt-3">
            <Meta article={article} />
          </div>
        </div>
        <BookmarkButton
          articleId={article.id}
          title={article.title}
          className="relative z-10 -mr-2"
        />
      </div>
    </article>
  );
}
