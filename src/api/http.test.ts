import { createDemoApi } from "./demo";
import { ApiError, createHttpApi, mapLegacyArticle, parseLegacyCategories } from "./http";
import { createDemoUser } from "../auth/session";

const legacy = {
  id: 7,
  headlines: "Legacy headline",
  cover: "https://img.example.com/a.jpg",
  articleUrl: "https://news.example.com/a",
  sourceName: "Example News",
  sourceUrl: "javascript:alert(1)",
  publishDate: "2022-12-01T10:00:00Z",
  category: "SPORTS",
};

describe("legacy mapping", () => {
  it("maps the v1 backend shape into a typed Article", () => {
    const a = mapLegacyArticle(legacy)!;
    expect(a).toMatchObject({
      id: "7",
      title: "Legacy headline",
      category: "sports",
      url: "https://news.example.com/a",
    });
    expect(a.source).toEqual({ name: "Example News", url: undefined }); // unsafe URL dropped
  });

  it("skips items without a headline", () => {
    expect(mapLegacyArticle({ id: 1 })).toBeNull();
  });

  it("parses every favCategory format the old backend produced", () => {
    expect(parseLegacyCategories('["World","Sports"]')).toEqual(["world", "sports"]);
    expect(parseLegacyCategories("World,Health,Nope")).toEqual(["world", "health"]);
    expect(parseLegacyCategories(["SCIENCE", "science"])).toEqual(["science"]);
    expect(parseLegacyCategories(undefined)).toEqual([]);
  });
});

describe("HTTP adapter", () => {
  const fallback = createDemoApi({ latency: 0, persist: false });

  it("calls the legacy endpoints", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify([legacy]), { status: 200 }));
    const api = createHttpApi("https://api.test", fallback, fetchMock as typeof fetch);
    const list = await api.listArticles({ category: "world" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.test/news/topic?q=WORLD",
      expect.anything(),
    );
    expect(list[0]?.title).toBe("Legacy headline");
    expect(await api.getArticle("7")).toMatchObject({ id: "7" });
  });

  it("turns network and HTTP failures into friendly ApiErrors", async () => {
    const down = createHttpApi("https://api.test", fallback, (async () => {
      throw new TypeError("fetch failed");
    }) as typeof fetch);
    await expect(down.listArticles()).rejects.toThrow(/Can't reach/);

    const err = createHttpApi(
      "https://api.test",
      fallback,
      (async () => new Response("", { status: 503 })) as typeof fetch,
    );
    await expect(err.searchArticles("x")).rejects.toBeInstanceOf(ApiError);
  });

  it("sends the profile in the legacy PUT shape", async () => {
    const fetchMock = vi.fn(
      async () => new Response(JSON.stringify({ id: 1, favCategory: '["Health"]' })),
    );
    const api = createHttpApi("https://api.test", fallback, fetchMock as typeof fetch);
    const u = await api.upsertProfile({ ...createDemoUser(), interests: ["world"] });
    const [, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(init.method).toBe("PUT");
    expect(JSON.parse(init.body as string)).toMatchObject({
      firstName: "Alex",
      lastName: "Rivera",
      loginSource: "Demo",
    });
    expect(u.interests).toEqual(["health"]);
  });

  it("delegates features the old backend never had to the fallback", async () => {
    const api = createHttpApi("https://api.test", fallback, vi.fn() as unknown as typeof fetch);
    expect((await api.getConnections()).friends.length).toBeGreaterThan(0);
  });
});
