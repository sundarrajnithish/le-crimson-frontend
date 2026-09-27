import { readJSON, removeKey, writeJSON } from "./storage";

describe("storage", () => {
  it("round-trips JSON under a namespace", () => {
    writeJSON("k", { a: 1 });
    expect(localStorage.getItem("lecrimson:k")).toBe('{"a":1}');
    expect(readJSON("k", null)).toEqual({ a: 1 });
    removeKey("k");
    expect(readJSON("k", "fallback")).toBe("fallback");
  });

  it("falls back on corrupt JSON instead of throwing (v1 crashed here)", () => {
    localStorage.setItem("lecrimson:bad", "{not json");
    expect(readJSON("bad", [])).toEqual([]);
  });

  it("falls back when the stored shape fails validation", () => {
    writeJSON("n", "text");
    const isNum = (v: unknown): v is number => typeof v === "number";
    expect(readJSON("n", 7, isNum)).toBe(7);
  });

  it("survives storage that throws (private mode, quota)", () => {
    const spy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceeded");
    });
    expect(() => writeJSON("x", 1)).not.toThrow();
    spy.mockRestore();
  });
});
