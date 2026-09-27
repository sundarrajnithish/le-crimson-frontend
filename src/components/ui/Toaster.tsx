import { CheckCircle2, X } from "lucide-react";
import { toastStore } from "./toast";

export function Toaster() {
  const toasts = toastStore.use();
  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex flex-col items-center gap-2 px-4"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto flex items-center gap-3 rounded-full bg-ink py-2.5 pr-2.5 pl-4 text-sm text-paper shadow-xl"
        >
          <CheckCircle2 className="size-4 text-ok" aria-hidden="true" />
          {t.message}
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => toastStore.set((all) => all.filter((x) => x.id !== t.id))}
            className="rounded-full p-1 hover:bg-paper/10"
          >
            <X className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      ))}
    </div>
  );
}
