import { Bookmark, BookmarkCheck } from "lucide-react";
import { useSaved } from "../../lib/saved";
import { cn } from "../../lib/cn";

export function BookmarkButton({
  articleId,
  title,
  className,
}: {
  articleId: string;
  title: string;
  className?: string;
}) {
  const { isSaved, toggle } = useSaved();
  const saved = isSaved(articleId);
  const Icon = saved ? BookmarkCheck : Bookmark;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(articleId);
      }}
      aria-pressed={saved}
      aria-label={saved ? `Remove “${title}” from saved` : `Save “${title}”`}
      title={saved ? "Saved" : "Save for later"}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-sunken",
        saved ? "text-crimson" : "text-muted",
        className,
      )}
    >
      <Icon className="size-5" aria-hidden="true" />
    </button>
  );
}
