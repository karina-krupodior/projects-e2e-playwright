import { test, expect } from "@playwright/test";

test.describe("Playwright Functionality", () => {
  test.beforeEach(async ({ page }) => {
    const ulrForCoffeeCartApp = "https://coffee-cart.app/";
    await page.goto(ulrForCoffeeCartApp);
  });

  test("has title", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const getStarted = page.locator(".getStarted_Sjon");
    const installation = page.locator('h1:has-text("Installation")');

    await getStarted.click();

    await expect(installation).toBeVisible();
  });

  test("checking opening side bar ", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const navbarLinkDocs = page.locator('a:has-text("Docs")');
    const migrationMenuLink = page.locator('a:has-text("Migration")');
    const menuLinkMigratingFromProtractor = page.locator(
      'a[href="/docs/protractor"]'
    );

    await navbarLinkDocs.click();
    await migrationMenuLink.click();
    await menuLinkMigratingFromProtractor.hover();

    await expect(menuLinkMigratingFromProtractor).toBeVisible();
    await expect(menuLinkMigratingFromProtractor).toContainText(
      "Migrating from Protractor"
    );
  });

  test("checking ability to copy text", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const navbarLinkDocs = page.locator('.navbar__items [href="/docs/intro"]');
    await navbarLinkDocs.click();
    const codeBlock = page
      .locator("div")
      .filter({ hasText: "npm init playwright@latest" })
      .first();
    const copyButton = codeBlock
      .locator('button[aria-label="Copy code to clipboard"]')
      .first();

    await expect(copyButton).toBeVisible();
    await copyButton.click();
  });

  test("Verify navigation to GitHub page and visibility of repository details", async ({
    page,
  }) => {
    await page.goto("https://playwright.dev/");
    const gitHubRepository = page.locator('[aria-label="GitHub repository"]');

    await gitHubRepository.click();

    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      gitHubRepository.click(),
    ]);

    await newPage.waitForLoadState();
    await expect(
      newPage.locator("text=microsoft / playwright Public")
    ).toBeVisible();
  });

  test("Search works and finds the necessary element", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const searchButton = page.locator(".DocSearch-Button-Placeholder");
    const docSearch = page.locator("#docsearch-input");
    const directLink = page.locator('[aria-label="Direct link to getByLabel"]');
    await searchButton.click();
    await docSearch.fill("get");
    await page.locator("#docsearch-item-4").click();
    await directLink.click();
    await expect(directLink).toBeVisible();
  });
});
