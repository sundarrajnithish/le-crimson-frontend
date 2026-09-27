import { Check } from "lucide-react";
import { CATEGORY_LIST, type CategoryId } from "../lib/categories";
import { cn } from "../lib/cn";

/**
 * One data-driven picker replaces the two copy-pasted 200-line CheckCircle
 * components (nine hand-written checkboxes each) from the original app.
 */
export function InterestPicker({
  value,
  onChange,
}: {
  value: CategoryId[];
  onChange: (next: CategoryId[]) => void;
}) {
  const toggle = (id: CategoryId) =>
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);

  return (
    <fieldset>
      <legend className="sr-only">Choose your interests</legend>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {CATEGORY_LIST.map(({ id, label, icon: Icon, blurb, hues }) => {
          const checked = value.includes(id);
          return (
            <label
              key={id}
              className={cn(
                "card relative flex cursor-pointer flex-col gap-3 p-4 transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-crimson",
                checked ? "border-crimson bg-crimson-soft/60 shadow-sm" : "hover:border-ink/30",
              )}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                onChange={() => toggle(id)}
              />
              <span
                className="inline-flex size-10 items-center justify-center rounded-xl text-white"
                style={{ background: `linear-gradient(135deg, ${hues[0]}, ${hues[1]})` }}
                aria-hidden="true"
              >
                <Icon className="size-5" />
              </span>
              <span>
                <span className="block font-semibold">{label}</span>
                <span className="mt-0.5 block text-xs text-muted">{blurb}</span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-3 right-3 inline-flex size-6 items-center justify-center rounded-full border transition-colors",
                  checked
                    ? "border-crimson bg-crimson text-crimson-ink"
                    : "border-rule text-transparent",
                )}
              >
                <Check className="size-3.5" strokeWidth={3} />
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
