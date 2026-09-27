import { Link } from "react-router";
import { Heart } from "lucide-react";
import { useToggleLike } from "../../api/queries";
import type { Post } from "../../api/types";
import { CATEGORIES } from "../../lib/categories";
import { cn } from "../../lib/cn";
import { timeAgo } from "../../lib/format";
import { ArticleCover } from "../news/ArticleCover";
import { Avatar } from "../ui/Avatar";

export function PostCard({ post }: { post: Post }) {
  const like = useToggleLike();
  const a = post.article;
  return (
    <article className="card p-5" aria-label={`Post by ${post.author.name}`}>
      <header className="flex items-center gap-3">
        <Avatar name={post.author.name} src={post.author.avatarUrl} />
        <div className="min-w-0">
          <p className="truncate font-semibold">{post.author.name}</p>
          <p className="text-xs text-muted">
            @{post.author.handle} · <time dateTime={post.createdAt}>{timeAgo(post.createdAt)}</time>
          </p>
        </div>
      </header>
      <p className="mt-3 whitespace-pre-line">{post.comment}</p>
      {a && (
        <Link
          to={`/article/${a.id}`}
          className="group mt-4 flex overflow-hidden rounded-xl border border-rule hover:border-ink/30"
        >
          <div className="w-28 shrink-0 sm:w-36">
            <ArticleCover article={a} iconSize={24} />
          </div>
          <div className="min-w-0 p-3">
            <p className="kicker mb-1">{CATEGORIES[a.category].label}</p>
            <p className="headline line-clamp-2 leading-snug group-hover:underline">{a.title}</p>
            <p className="mt-1 text-xs text-muted">{a.source.name}</p>
          </div>
        </Link>
      )}
      <footer className="mt-3 flex items-center">
        <button
          type="button"
          onClick={() => like.mutate(post.id)}
          aria-pressed={post.likedByMe}
          aria-label={post.likedByMe ? "Unlike" : "Like"}
          className={cn(
            "-ml-2 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-sm transition-colors hover:bg-crimson-soft",
            post.likedByMe ? "text-crimson" : "text-muted",
          )}
        >
          <Heart className={cn("size-4", post.likedByMe && "fill-current")} aria-hidden="true" />
          <span>{post.likes}</span>
        </button>
      </footer>
    </article>
  );
}
