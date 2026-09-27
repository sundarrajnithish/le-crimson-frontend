import { photoFor } from "../api/demo";
import { SEED_ARTICLES } from "./articles";
import { PHOTO_CREDITS } from "./photos";

describe("bundled photos", () => {
  it("gives every demo story a credited, freely licensed photo", () => {
    for (const a of SEED_ARTICLES) {
      const c = PHOTO_CREDITS[a.id];
      expect(c, a.id).toBeDefined();
      expect(c!.author.length).toBeGreaterThan(1);
      expect(c!.source).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
      expect(c!.license).toMatch(/^(CC0|Public domain|CC BY(-SA)? \d\.\d)$/);
      if (c!.license.startsWith("CC BY"))
        expect(c!.licenseUrl).toMatch(/^https:\/\/creativecommons\.org\//);
    }
  });

  it("builds responsive URLs under the app's base path", () => {
    expect(photoFor("t4")).toMatchObject({
      small: `${import.meta.env.BASE_URL}images/articles/t4-480.webp`,
      large: `${import.meta.env.BASE_URL}images/articles/t4-1200.webp`,
    });
    expect(photoFor("nope")).toBeUndefined();
  });
});
