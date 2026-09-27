import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { useCreatePost } from "../../api/queries";
import type { Article } from "../../api/types";
import { useUser } from "../../auth/context";
import { Button } from "../ui/Button";
import { toast } from "../ui/toast";

const MAX = 280;

/** Native <dialog>: focus trap, Esc to close and inert background for free. */
export function ShareDialog({
  article,
  open,
  onClose,
}: {
  article: Article;
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const user = useUser();
  const createPost = useCreatePost();
  const [comment, setComment] = useState("");
  const titleId = useId();
  const counterId = useId();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal?.();
    if (!open && d.open) d.close?.();
  }, [open]);

  const remaining = MAX - comment.length;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-labelledby={titleId}
      className="card m-auto w-[min(92vw,32rem)] p-0 text-ink shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      <form
        method="dialog"
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate(
            { articleId: article.id, comment, author: user },
            {
              onSuccess: () => {
                setComment("");
                onClose();
                toast("Shared to your community feed");
              },
            },
          );
        }}
        className="p-6"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id={titleId} className="headline text-xl">
            Share with your community
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-m-1 rounded-full p-1 text-muted hover:bg-sunken"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <p className="mb-4 rounded-xl bg-sunken p-3 text-sm font-medium">{article.title}</p>
        <label htmlFor={`${titleId}-comment`} className="mb-1.5 block text-sm font-medium">
          Add a comment
        </label>
        <textarea
          id={`${titleId}-comment`}
          value={comment}
          onChange={(e) => setComment(e.target.value.slice(0, MAX))}
          rows={4}
          required
          aria-describedby={counterId}
          placeholder="Why is this worth reading?"
          className="field resize-none"
        />
        <div className="mt-1.5 flex justify-between text-xs">
          <span role="alert" className="text-bad">
            {createPost.error instanceof Error ? createPost.error.message : ""}
          </span>
          <span id={counterId} className={remaining < 20 ? "text-warn" : "text-muted"}>
            {remaining} characters left
          </span>
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={!comment.trim() || createPost.isPending}>
            {createPost.isPending ? "Sharing…" : "Share"}
          </Button>
        </div>
      </form>
    </dialog>
  );
}
