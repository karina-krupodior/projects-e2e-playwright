import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.locator(".getStarted_Sjon").click();

  await expect(page.locator('h1:has-text("Installation")')).toBeVisible();
});

test("checking opening side bar ", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator('a:has-text("Docs")').click();
  await page.locator('a:has-text("Migration")').click();
  await page.locator('[href="/docs/protractor"]').hover();
  await expect(page.locator('[href="/docs/protractor"]')).toBeVisible();
  await expect(page.locator('a[href="/docs/protractor"]')).toContainText(
    "Migrating from Protractor"
  );
});

test("checking ability to copy text", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator('.navbar__items [href="/docs/intro"]').click();
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

  await page.locator('[aria-label="GitHub repository"]').click();

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('[aria-label="GitHub repository"]').click(),
  ]);

  await newPage.waitForLoadState();
  await expect(
    newPage.locator("text=microsoft / playwright Public")
  ).toBeVisible();
});

test("Search works and finds the necessary element", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator(".DocSearch-Button-Placeholder").click();
  await page.locator("#docsearch-input").fill("get");
  await page.locator("#docsearch-item-4").click();
  await page.locator('[aria-label="Direct link to getByLabel"]').click();
  await expect(
    page.locator('[aria-label="Direct link to getByLabel"]')
  ).toBeVisible();
});
