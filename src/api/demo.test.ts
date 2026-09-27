import { createDemoApi, matchesQuery } from "./demo";
import { createDemoUser } from "../auth/session";
import type { Article } from "./types";

const make = () =>
  createDemoApi({ latency: 0, persist: false, now: () => Date.parse("2026-09-27T12:00:00Z") });

describe("demo API", () => {
  it("lists articles newest first and filters by category", async () => {
    const api = make();
    const all = await api.listArticles();
    expect(all.length).toBe(36);
    const times = all.map((a) => a.publishedAt);
    expect([...times].sort().reverse()).toEqual(times);
    const science = await api.listArticles({ category: "science" });
    expect(science.length).toBe(4);
    expect(science.every((a) => a.category === "science")).toBe(true);
  });

  it("returns defensive copies so callers can't mutate internal state", async () => {
    const api = make();
    const [first] = await api.listArticles();
    first!.title = "mutated";
    const again = await api.getArticle(first!.id);
    expect(again?.title).not.toBe("mutated");
  });

  it("searches case- and accent-insensitively across title, body and source", async () => {
    const api = make();
    expect((await api.searchArticles("NIGHT TRAINS")).map((a) => a.id)).toContain("w2");
    expect((await api.searchArticles("riverside courier")).length).toBeGreaterThan(0);
    expect(await api.searchArticles("zzzz-no-match")).toEqual([]);
  });

  it("creates posts with validation", async () => {
    const api = make();
    const me = createDemoUser();
    await expect(api.createPost({ articleId: "w1", comment: "   ", author: me })).rejects.toThrow(
      /comment/i,
    );
    await expect(api.createPost({ articleId: "nope", comment: "hi", author: me })).rejects.toThrow(
      /no longer exists/,
    );
    const post = await api.createPost({ articleId: "w1", comment: "Worth a read", author: me });
    expect(post.author.name).toBe(me.name);
    expect((await api.listPosts())[0]?.id).toBe(post.id);
  });

  it("toggles likes idempotently", async () => {
    const api = make();
    const [p] = await api.listPosts();
    const liked = await api.toggleLike(p!.id);
    expect(liked).toMatchObject({ likedByMe: true, likes: p!.likes + 1 });
    const unliked = await api.toggleLike(p!.id);
    expect(unliked).toMatchObject({ likedByMe: false, likes: p!.likes });
  });

  it("moves members between connection lists", async () => {
    const api = make();
    let c = await api.getConnections();
    const requester = c.requests[0]!;
    c = await api.updateConnection(requester.id, "accept");
    expect(c.requests.map((m) => m.id)).not.toContain(requester.id);
    expect(c.friends.map((m) => m.id)).toContain(requester.id);

    c = await api.updateConnection(requester.id, "block");
    expect(c.friends.map((m) => m.id)).not.toContain(requester.id);
    expect(c.blocked.map((m) => m.id)).toContain(requester.id);
  });

  it("hides posts from blocked members", async () => {
    const api = make();
    const [p] = await api.listPosts();
    await api.updateConnection(p!.author.id, "block");
    expect((await api.listPosts()).some((x) => x.author.id === p!.author.id)).toBe(false);
  });

  it("persists interactions to localStorage when enabled", async () => {
    const a = createDemoApi({ latency: 0 });
    const [p] = await a.listPosts();
    await a.toggleLike(p!.id);
    const b = createDemoApi({ latency: 0 });
    expect((await b.listPosts()).find((x) => x.id === p!.id)?.likedByMe).toBe(true);
  });

  it("builds admin stats with 14 days of sign-ups and every category", async () => {
    const s = await make().getAdminStats();
    expect(s.signups).toHaveLength(14);
    expect(s.interestShare).toHaveLength(9);
    expect(s.totals.articles).toBe(36);
  });
});

describe("matchesQuery", () => {
  const a = {
    title: "Café opens",
    summary: "",
    body: ["Fresh bread"],
    source: { name: "Courier" },
    category: "local",
  } as unknown as Article;
  it("requires every term to match", () => {
    expect(matchesQuery(a, "cafe bread")).toBe(true);
    expect(matchesQuery(a, "cafe pizza")).toBe(false);
    expect(matchesQuery(a, "   ")).toBe(false);
  });
});
