import { SEED_ARTICLES } from "../data/articles";
import { MEMBERS, SEED_CONNECTIONS, SEED_POSTS, memberById } from "../data/community";
import { CATEGORY_IDS, type CategoryId } from "../lib/categories";
import { readJSON, writeJSON } from "../lib/storage";
import type {
  AdminStats,
  Article,
  ConnectionAction,
  ConnectionKind,
  Connections,
  LeCrimsonApi,
  Member,
  Post,
  User,
} from "./types";

const MINUTE = 60_000;

interface DemoState {
  posts: {
    id: string;
    authorId: string;
    articleId: string;
    comment: string;
    createdAt: string;
    likes: number;
  }[];
  liked: string[];
  connections: Record<ConnectionKind, string[]>;
  /** The signed-in demo user, so their own posts can be rendered. */
  me?: Member;
}

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Tokenised, case- and accent-insensitive match over title, summary, body, source and category. */
export function matchesQuery(article: Article, query: string): boolean {
  const norm = (s: string) =>
    s
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();
  const haystack = norm(
    [
      article.title,
      article.summary,
      article.body.join(" "),
      article.source.name,
      article.category,
    ].join(" "),
  );
  const terms = norm(query).split(/\s+/).filter(Boolean);
  return terms.length > 0 && terms.every((t) => haystack.includes(t));
}

export interface DemoApiOptions {
  /** Simulated network latency in ms (0 in tests). */
  latency?: number;
  now?: () => number;
  /** Persist interactions to localStorage (default true). */
  persist?: boolean;
}

export function createDemoApi({
  latency = 250,
  now = Date.now,
  persist = true,
}: DemoApiOptions = {}): LeCrimsonApi {
  const bootedAt = now();

  const articles: Article[] = SEED_ARTICLES.map((a) => ({
    id: a.id,
    title: a.title,
    summary: a.summary,
    body: [...a.body],
    category: a.category,
    source: { name: a.source },
    author: a.author,
    publishedAt: new Date(bootedAt - a.age * MINUTE).toISOString(),
    seed: hash(a.id),
  })).sort((x, y) => y.publishedAt.localeCompare(x.publishedAt));

  const initialState = (): DemoState => ({
    posts: SEED_POSTS.map((p) => ({
      id: p.id,
      authorId: p.authorId,
      articleId: p.articleId,
      comment: p.comment,
      createdAt: new Date(bootedAt - p.age * MINUTE).toISOString(),
      likes: p.likes,
    })),
    liked: [],
    connections: structuredClone(SEED_CONNECTIONS),
  });

  const isState = (v: unknown): v is DemoState =>
    typeof v === "object" &&
    v !== null &&
    Array.isArray((v as DemoState).posts) &&
    Array.isArray((v as DemoState).liked);

  const state: DemoState = persist
    ? readJSON("demo-state", initialState(), isState)
    : initialState();
  const save = () => persist && writeJSON("demo-state", state);

  const wait = <T>(value: T): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(structuredClone(value)), latency));

  const findMember = (id: string): Member | undefined =>
    id === state.me?.id ? state.me : memberById(id);

  const hydratePost = (p: DemoState["posts"][number]): Post | null => {
    const author = findMember(p.authorId);
    if (!author) return null;
    return {
      id: p.id,
      author,
      articleId: p.articleId,
      article: articles.find((a) => a.id === p.articleId),
      comment: p.comment,
      createdAt: p.createdAt,
      likes: p.likes,
      likedByMe: state.liked.includes(p.id),
    };
  };

  const setMe = (user: User) => {
    state.me = {
      id: user.id,
      name: user.name,
      handle: user.email.split("@")[0] || user.id,
      avatarUrl: user.avatarUrl,
      bio: user.bio ?? "",
      interests: user.interests,
    };
    save();
  };

  const connections = (): Connections => {
    const out = {} as Connections;
    for (const kind of Object.keys(state.connections) as ConnectionKind[]) {
      out[kind] = state.connections[kind].map(memberById).filter((m): m is Member => !!m);
    }
    return out;
  };

  return {
    mode: "demo",

    async listArticles({ category, limit } = {}) {
      let list = category ? articles.filter((a) => a.category === category) : articles;
      if (limit) list = list.slice(0, limit);
      return wait(list);
    },

    async getArticle(id) {
      return wait(articles.find((a) => a.id === id) ?? null);
    },

    async searchArticles(query) {
      return wait(articles.filter((a) => matchesQuery(a, query)));
    },

    async upsertProfile(user: User) {
      setMe(user);
      return wait(user);
    },

    async listPosts() {
      const posts = state.posts
        .map(hydratePost)
        .filter((p): p is Post => !!p && !state.connections.blocked.includes(p.author.id))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
      return wait(posts);
    },

    async createPost({ articleId, comment, author }) {
      if (!articles.some((a) => a.id === articleId))
        throw new Error("That article no longer exists.");
      const text = comment.trim();
      if (text.length === 0) throw new Error("Add a comment before sharing.");
      if (text.length > 280) throw new Error("Comments are limited to 280 characters.");
      if (state.me?.id !== author.id) setMe(author);
      const raw = {
        id: `p-${now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
        authorId: author.id,
        articleId,
        comment: text,
        createdAt: new Date(now()).toISOString(),
        likes: 0,
      };
      state.posts.unshift(raw);
      save();
      return wait(hydratePost(raw) as Post);
    },

    async toggleLike(postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (!post) throw new Error("Post not found.");
      const liked = state.liked.includes(postId);
      state.liked = liked ? state.liked.filter((id) => id !== postId) : [...state.liked, postId];
      post.likes = Math.max(0, post.likes + (liked ? -1 : 1));
      save();
      return wait(hydratePost(post) as Post);
    },

    async getConnections() {
      return wait(connections());
    },

    async updateConnection(memberId, action: ConnectionAction) {
      const c = state.connections;
      const remove = (kind: ConnectionKind) => (c[kind] = c[kind].filter((id) => id !== memberId));
      const add = (kind: ConnectionKind) => {
        if (!c[kind].includes(memberId)) c[kind] = [...c[kind], memberId];
      };
      switch (action) {
        case "accept":
          remove("requests");
          add("friends");
          break;
        case "decline":
          remove("requests");
          break;
        case "follow":
          remove("suggestions");
          add("friends");
          break;
        case "dismiss":
          remove("suggestions");
          break;
        case "unfriend":
          remove("friends");
          break;
        case "block":
          (["friends", "followers", "requests", "suggestions"] as const).forEach(remove);
          add("blocked");
          break;
        case "unblock":
          remove("blocked");
          break;
      }
      save();
      return wait(connections());
    },

    async getAdminStats(): Promise<AdminStats> {
      const today = new Date(bootedAt);
      const signups = Array.from({ length: 14 }, (_, i) => {
        const d = new Date(today);
        d.setDate(d.getDate() - (13 - i));
        // Deterministic, gently rising curve with weekday bumps.
        const count = 18 + i * 2 + ((hash(`s${i}`) % 9) - 4) + (d.getDay() === 1 ? 6 : 0);
        return { date: d.toISOString().slice(0, 10), count };
      });
      const interestShare = CATEGORY_IDS.map((category: CategoryId) => ({
        category,
        users:
          40 +
          MEMBERS.filter((m) => m.interests.includes(category)).length * 37 +
          (hash(category) % 60),
      })).sort((a, b) => b.users - a.users);

      const levels = ["info", "info", "info", "warn", "info", "error", "info", "info"] as const;
      const messages = [
        "Ingested 36 articles from 7 sources",
        "Preferences updated for 12 users",
        "Daily digest emails queued",
        "Source feed 'Harbour Ledger' responded slowly (2.4s)",
        "New admin invited",
        "Image proxy returned 502 for 1 cover — fallback cover used",
        "Search index rebuilt in 180ms",
        "Weekly backup completed",
      ];
      return wait({
        totals: {
          users: signups.reduce((s, d) => s + d.count, 0) + 1180,
          activeToday: 312,
          articles: articles.length,
          shares: state.posts.length + 214,
        },
        interestShare,
        signups,
        recentUsers: MEMBERS.slice(0, 8).map((m, i) => ({
          ...m,
          joinedAt: new Date(bootedAt - (i * 2 + 1) * 1440 * MINUTE).toISOString(),
          role: i === 0 ? ("admin" as const) : ("member" as const),
        })),
        logs: messages.map((message, i) => ({
          id: `log-${i}`,
          at: new Date(bootedAt - i * 47 * MINUTE).toISOString(),
          level: levels[i] ?? "info",
          message,
        })),
      });
    },

    async sendContact(msg) {
      if (!msg.name.trim() || !msg.email.includes("@") || msg.message.trim().length < 10) {
        throw new Error("Please complete every field.");
      }
      await wait(null);
    },
  };
}
