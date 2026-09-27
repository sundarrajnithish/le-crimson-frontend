import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function signInAndOnboard(page: Page) {
  await page.goto("/");
  await page.getByRole("button", { name: /try the live demo/i }).click();
  await expect(
    page.getByRole("heading", { name: /what do you want to read about/i }),
  ).toBeVisible();
  for (const topic of ["Science", "Technology", "World"]) {
    await page.getByRole("checkbox", { name: topic }).check({ force: true });
  }
  await page.getByRole("button", { name: /build my feed/i }).click();
  await expect(page).toHaveURL(/\/home$/);
}

async function expectNoA11yViolations(page: Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`),
  ).toEqual([]);
}

test.describe("Le Crimson", () => {
  test("landing page is accessible and has no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("News, tuned");
    await expectNoA11yViolations(page);
    expect(errors).toEqual([]);
  });

  test("full reader journey", async ({ page }) => {
    await signInAndOnboard(page);
    await expect(page.getByRole("region", { name: /top stories/i })).toBeVisible();
    await expectNoA11yViolations(page);

    // Open the lead story, save it and share it. Read the title from the link we click,
    // then wait for the article page itself (the URL changes before the lazy page renders).
    const lead = page
      .getByRole("region", { name: /top stories/i })
      .getByRole("link")
      .first();
    const title = (await lead.textContent())!.trim();
    await lead.click();
    await expect(page).toHaveURL(/\/article\//);
    await expect(page.getByRole("heading", { level: 1, name: title })).toBeVisible();
    await page
      .getByRole("button", { name: `Save “${title}”`, exact: true })
      .first()
      .click();
    await page.getByRole("button", { name: /^share$/i }).click();
    await page.getByLabel(/add a comment/i).fill("Worth your five minutes.");
    await page
      .getByRole("dialog")
      .getByRole("button", { name: /^share$/i })
      .click();
    await expect(page.getByText(/shared to your community feed/i)).toBeVisible();
    await expectNoA11yViolations(page);

    // Saved list survives a reload (persisted state).
    await page.goto("/saved");
    await page.reload();
    await expect(page.getByText(title)).toBeVisible();

    // Community shows the new post.
    await page.goto("/community");
    await expect(page.getByText("Worth your five minutes.")).toBeVisible();
    await expectNoA11yViolations(page);
  });

  test("search, connections and admin pages are accessible", async ({ page }) => {
    await signInAndOnboard(page);
    await page.goto("/search?q=battery");
    await expect(page.getByText(/result.* for “battery”/i)).toBeVisible();
    await expectNoA11yViolations(page);

    await page.goto("/connections?tab=requests");
    await page.getByRole("button", { name: /accept naomi park/i }).click();
    await expect(page.getByRole("button", { name: /accept naomi park/i })).toHaveCount(0);
    await expectNoA11yViolations(page);

    await page.goto("/admin");
    await expect(page.getByRole("img", { name: /new readers per day/i })).toBeVisible();
    await expectNoA11yViolations(page);
  });

  test("dark mode is accessible too", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await signInAndOnboard(page);
    await expect(page.locator("html")).toHaveClass(/dark/);
    await expectNoA11yViolations(page);
  });

  test("unknown routes show the 404 page", async ({ page }) => {
    await page.goto("/definitely-not-a-page");
    await expect(page.getByRole("heading", { name: /isn’t in print/i })).toBeVisible();
  });
});
