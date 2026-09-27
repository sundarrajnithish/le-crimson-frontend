import type { CategoryId } from "../lib/categories";

export interface Article {
  id: string;
  title: string;
  summary: string;
  /** Paragraphs. Empty for articles that only link out (live backend). */
  body: string[];
  category: CategoryId;
  source: { name: string; url?: string };
  author?: string;
  /** External link to the original story, when one exists. */
  url?: string;
  /** Remote cover image. When absent, a generated cover is drawn. */
  imageUrl?: string;
  publishedAt: string;
  /** Deterministic number used to vary generated covers. */
  seed: number;
}

export type Role = "member" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: Role;
  interests: CategoryId[];
  location?: string;
  bio?: string;
  joinedAt: string;
  provider: "demo" | "google";
}

/** Public-facing slice of another member (for feeds and connections). */
export interface Member {
  id: string;
  name: string;
  handle: string;
  avatarUrl?: string;
  bio: string;
  interests: CategoryId[];
}

export interface Post {
  id: string;
  author: Member;
  articleId: string;
  article?: Article;
  comment: string;
  createdAt: string;
  likes: number;
  likedByMe: boolean;
}

export type ConnectionKind = "friends" | "followers" | "requests" | "suggestions" | "blocked";

export type ConnectionAction =
  "accept" | "decline" | "follow" | "dismiss" | "unfriend" | "block" | "unblock";

export type Connections = Record<ConnectionKind, Member[]>;

export interface AdminStats {
  totals: { users: number; activeToday: number; articles: number; shares: number };
  interestShare: { category: CategoryId; users: number }[];
  signups: { date: string; count: number }[];
  recentUsers: (Member & { joinedAt: string; role: Role })[];
  logs: { id: string; at: string; level: "info" | "warn" | "error"; message: string }[];
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

/** The single contract every backend adapter implements. */
export interface LeCrimsonApi {
  readonly mode: "demo" | "http";
  listArticles(opts?: { category?: CategoryId; limit?: number }): Promise<Article[]>;
  getArticle(id: string): Promise<Article | null>;
  searchArticles(query: string): Promise<Article[]>;
  upsertProfile(user: User): Promise<User>;
  listPosts(): Promise<Post[]>;
  createPost(input: { articleId: string; comment: string; author: User }): Promise<Post>;
  toggleLike(postId: string): Promise<Post>;
  getConnections(): Promise<Connections>;
  updateConnection(memberId: string, action: ConnectionAction): Promise<Connections>;
  getAdminStats(): Promise<AdminStats>;
  sendContact(message: ContactMessage): Promise<void>;
}
