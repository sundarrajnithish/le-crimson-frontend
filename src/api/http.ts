import { toCategoryId, type CategoryId } from "../lib/categories";
import type { Article, LeCrimsonApi, User } from "./types";

/**
 * Adapter for the original Le Crimson REST backend (Spring Boot, formerly on
 * Heroku). It maps the legacy payloads into typed models. Endpoints the old
 * backend never implemented (connections, admin, contact) are delegated to
 * the fallback adapter so the UI keeps working end to end.
 */

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

interface LegacyArticle {
  id?: string | number;
  headlines?: string;
  description?: string;
  cover?: string;
  articleUrl?: string;
  sourceName?: string;
  sourceUrl?: string;
  publishDate?: string;
  category?: string;
}

interface LegacyProfile {
  id?: string | number;
  firstName?: string;
  lastName?: string;
  email?: string;
  profilePic?: string;
  favCategory?: string | string[];
}

function hash(str: string): number {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = (h * 33) ^ str.charCodeAt(i);
  return h >>> 0;
}

const safeUrl = (u: unknown): string | undefined => {
  if (typeof u !== "string") return undefined;
  try {
    const url = new URL(u);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
};

export function mapLegacyArticle(
  raw: LegacyArticle,
  fallbackCategory: CategoryId = "world",
): Article | null {
  const title = raw.headlines?.trim();
  if (!title) return null;
  const id = String(raw.id ?? hash(title + (raw.articleUrl ?? "")));
  const published = raw.publishDate ? new Date(raw.publishDate) : new Date();
  return {
    id,
    title,
    summary: raw.description?.trim() ?? "",
    body: [],
    category: toCategoryId(raw.category) ?? fallbackCategory,
    source: { name: raw.sourceName?.trim() || "Unknown source", url: safeUrl(raw.sourceUrl) },
    url: safeUrl(raw.articleUrl),
    imageUrl: safeUrl(raw.cover),
    publishedAt: Number.isNaN(published.getTime())
      ? new Date().toISOString()
      : published.toISOString(),
    seed: hash(id),
  };
}

export function parseLegacyCategories(value: LegacyProfile["favCategory"]): CategoryId[] {
  if (!value) return [];
  let list: unknown = value;
  if (typeof value === "string") {
    try {
      list = JSON.parse(value);
    } catch {
      list = value.replace(/[[\]"]/g, "").split(",");
    }
  }
  if (!Array.isArray(list)) return [];
  return [...new Set(list.map(toCategoryId).filter((c): c is CategoryId => !!c))];
}

export function createHttpApi(
  baseUrl: string,
  fallback: LeCrimsonApi,
  fetchImpl: typeof fetch = fetch,
): LeCrimsonApi {
  const cache = new Map<string, Article>();

  async function request<T>(path: string, init?: RequestInit): Promise<T> {
    let res: Response;
    try {
      res = await fetchImpl(`${baseUrl}${path}`, {
        ...init,
        headers: { "Content-Type": "application/json", ...init?.headers },
        signal: AbortSignal.timeout(10_000),
      });
    } catch {
      throw new ApiError("Can't reach the news service. Check your connection and try again.");
    }
    if (!res.ok)
      throw new ApiError(`The news service returned an error (${res.status}).`, res.status);
    return (await res.json()) as T;
  }

  const mapMany = (raw: unknown, category?: CategoryId): Article[] => {
    if (!Array.isArray(raw)) return [];
    const out = raw
      .map((r) => mapLegacyArticle(r as LegacyArticle, category))
      .filter((a): a is Article => !!a);
    out.forEach((a) => cache.set(a.id, a));
    return out;
  };

  const listArticles: LeCrimsonApi["listArticles"] = async ({ category, limit } = {}) => {
    const path = category
      ? `/news/topic?q=${encodeURIComponent(category.toUpperCase())}`
      : "/news/home";
    const list = mapMany(await request<unknown>(path), category);
    return limit ? list.slice(0, limit) : list;
  };

  return {
    ...fallback,
    mode: "http",
    listArticles,

    async getArticle(id) {
      if (!cache.has(id)) await listArticles();
      return cache.get(id) ?? null;
    },

    async searchArticles(query) {
      return mapMany(await request<unknown>(`/news/search?q=${encodeURIComponent(query)}`));
    },

    async upsertProfile(user: User) {
      const [firstName, ...rest] = user.name.split(" ");
      const saved = await request<LegacyProfile>("/profile", {
        method: "PUT",
        body: JSON.stringify({
          firstName,
          lastName: rest.join(" "),
          email: user.email,
          profilePic: user.avatarUrl,
          loginSource: user.provider === "google" ? "Google" : "Demo",
          favCategory: JSON.stringify(user.interests),
        }),
      });
      const interests = parseLegacyCategories(saved.favCategory);
      return { ...user, interests: interests.length ? interests : user.interests };
    },
  };
}
