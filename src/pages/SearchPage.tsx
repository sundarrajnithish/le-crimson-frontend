import { useState } from "react";
import { useSearchParams } from "react-router";
import { Search } from "lucide-react";
import { useSearch } from "../api/queries";
import { ArticleCard } from "../components/news/ArticleCard";
import { PageHeader } from "../components/ui/PageHeader";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState, ErrorState } from "../components/ui/States";
import { CATEGORIES, CATEGORY_LIST, type CategoryId } from "../lib/categories";
import { cn } from "../lib/cn";
import { useDebounced } from "../lib/useDebounced";

const SUGGESTIONS = ["climate", "trains", "battery", "library", "satellite", "sleep"];

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const urlQuery = params.get("q") ?? "";
  const [input, setInput] = useState(urlQuery);
  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
  const [topic, setTopic] = useState<CategoryId | null>(null);

  // Keep the box in sync when the header search changes the URL.
  if (urlQuery !== lastUrlQuery) {
    setLastUrlQuery(urlQuery);
    setInput(urlQuery);
  }

  const query = useDebounced(input.trim(), 250);
  const { data, isFetching, isError, error, refetch } = useSearch(query);

  const update = (value: string) => {
    setInput(value);
    setLastUrlQuery(value.trim());
    setParams(value.trim() ? { q: value.trim() } : {}, { replace: true });
  };

  const results = (data ?? []).filter((a) => !topic || a.category === topic);
  const topicsInResults = [...new Set((data ?? []).map((a) => a.category))];

  return (
    <div className="container-page max-w-4xl py-8">
      <PageHeader kicker="Search" title="Find a story" />

      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative mb-6">
        <label htmlFor="search-input" className="sr-only">
          Search all stories
        </label>
        <Search
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
        <input
          id="search-input"
          type="search"
          value={input}
          onChange={(e) => update(e.target.value)}
          placeholder="Try “trains”, “battery” or a source name"
          className="field h-14 rounded-2xl pl-12 text-lg"
        />
      </form>

      {query.length < 2 ? (
        <div>
          <p className="mb-3 text-sm text-muted">Popular searches</p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => update(s)}
                className="rounded-full border border-rule px-3 py-1.5 text-sm hover:border-crimson hover:text-crimson"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : isError ? (
        <ErrorState error={error} onRetry={() => void refetch()} />
      ) : !data && isFetching ? (
        <div className="space-y-4" role="status" aria-label="Searching">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      ) : (
        <>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <p className="mr-2 text-sm text-muted" aria-live="polite">
              {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
            </p>
            {topicsInResults.length > 1 &&
              [
                null,
                ...CATEGORY_LIST.filter((c) => topicsInResults.includes(c.id)).map((c) => c.id),
              ].map((id) => (
                <button
                  key={id ?? "all"}
                  type="button"
                  aria-pressed={topic === id}
                  onClick={() => setTopic(id)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium",
                    topic === id
                      ? "border-crimson bg-crimson-soft text-crimson"
                      : "border-rule text-muted hover:text-ink",
                  )}
                >
                  {id ? CATEGORIES[id].label : "All"}
                </button>
              ))}
          </div>
          {results.length === 0 ? (
            <EmptyState title="No matching stories">
              Try a broader word, or check the spelling.
            </EmptyState>
          ) : (
            <div
              className={cn("divide-y divide-rule transition-opacity", isFetching && "opacity-60")}
            >
              {results.map((a) => (
                <ArticleCard key={a.id} article={a} variant="row" />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
