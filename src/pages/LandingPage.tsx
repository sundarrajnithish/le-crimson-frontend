import { Navigate, useLocation } from "react-router";
import { Bookmark, MessagesSquare, Search, SlidersHorizontal } from "lucide-react";
import { useAuth } from "../auth/context";
import { GoogleSignIn } from "../auth/GoogleSignIn";
import { ArticleCover } from "../components/news/ArticleCover";
import { Button } from "../components/ui/Button";
import { photoFor } from "../api/demo";
import { SEED_ARTICLES } from "../data/articles";
import { CATEGORIES } from "../lib/categories";
import type { Article } from "../api/types";

const previews: Article[] = ["t1", "sc1", "s1"].map((id, i) => {
  const a = SEED_ARTICLES.find((x) => x.id === id)!;
  return {
    ...a,
    source: { name: a.source },
    body: [...a.body],
    publishedAt: "",
    seed: 9173 * (i + 3),
    photo: photoFor(id),
  };
});

const features = [
  {
    icon: SlidersHorizontal,
    title: "Pick your interests",
    text: "Nine topics, from Science to Local. Your feed and navigation adapt instantly.",
  },
  {
    icon: Search,
    title: "Search everything",
    text: "Find stories across every source by keyword, topic or outlet.",
  },
  {
    icon: MessagesSquare,
    title: "Share with friends",
    text: "Post stories with a comment, like what friends share, grow your circle.",
  },
  {
    icon: Bookmark,
    title: "Save for later",
    text: "Bookmark stories and come back to them from any page.",
  },
];

export default function LandingPage() {
  const { user, signInDemo, signInWithGoogle } = useAuth();
  const from = (useLocation().state as { from?: string } | null)?.from;

  // Signing in updates the session store; this redirect then takes over.
  if (user) return <Navigate to={user.interests.length ? (from ?? "/home") : "/welcome"} replace />;

  return (
    <div className="overflow-hidden">
      <section className="container-page grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <p className="kicker mb-4">A personalised newsroom</p>
          <h1 className="headline text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            News, tuned <em className="text-crimson">to you</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Le Crimson gathers stories from many outlets, arranges them around the topics you care
            about, and lets you discuss them with friends. All in one calm, fast reader.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" onClick={signInDemo}>
              Try the live demo
            </Button>
            <GoogleSignIn onCredential={signInWithGoogle} />
          </div>
          <p className="mt-3 text-sm text-muted">
            No account needed. The demo runs entirely in your browser.
          </p>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[440px]" aria-hidden="true">
          {previews.map((a, i) => (
            <div
              key={a.id}
              className="card absolute w-[78%] overflow-hidden shadow-2xl shadow-black/10"
              style={{
                top: `${i * 22}%`,
                left: `${[0, 22, 8][i]}%`,
                rotate: `${[-4, 3, -1][i]}deg`,
                zIndex: i,
              }}
            >
              <div className={i === previews.length - 1 ? "aspect-[16/8]" : "aspect-[16/10]"}>
                <ArticleCover
                  article={a}
                  iconSize={34}
                  sizes="360px"
                  priority={i === previews.length - 1}
                />
              </div>
              {/* Only the front card carries text; the cards behind read as a stack of covers. */}
              {i === previews.length - 1 && (
                <div className="p-4">
                  <p className="kicker mb-1">{CATEGORIES[a.category].label}</p>
                  <p className="headline line-clamp-2 text-lg leading-snug">{a.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="features" className="border-y border-rule bg-surface/60">
        <div className="container-page py-14">
          <h2 id="features" className="sr-only">
            Features
          </h2>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon className="mb-3 size-6 text-crimson" aria-hidden="true" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
