import { test, expect } from "@playwright/test";

test.describe("Coffee Card Functionality Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://coffee-cart.app/");
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("payment details form/window should be Visible", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="Americano"]').click();
    await page.locator('[aria-label="Cart page"]').click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator("h1[data-v-29c3be1b]").click();
    const itIsVisible = await page
      .locator('h1:has-text("Payment details")')
      .isVisible();
    expect(itIsVisible).toBe(true);
    await expect(page.locator("h1[data-v-29c3be1b]")).toContainText(
      "Payment details"
    );
    const IsVisible = await page.locator("p[data-v-29c3be1b]").isVisible();
    expect(IsVisible).toBe(true);

    await expect(page.locator("p[data-v-29c3be1b]")).toContainText(
      "We will send you a payment link via email."
    );
  });

  test("add item to card", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();

    await page.locator('[aria-label="Cart page"]').click();

    await expect(page.locator('[aria-label="Cart page"]')).toBeVisible();
    await expect(page.locator('[aria-label="Cart page"]')).toContainText(
      "cart (1)"
    );

    const isVisible = await page
      .locator('li.list-item[data-v-8965af83] div:has-text("Espresso")')
      .isVisible();
    expect(isVisible).toBe(true);
  });

  test("navigate to github page", async ({ page }) => {
    await page.locator('[aria-label="GitHub page"]').click();

    await expect(page.locator('[aria-label="Cart page"]')).toBeVisible();
    await expect(
      page.locator(
        '.container[data-v-09b4348a] p:has-text("Star our repository")'
      )
    ).toBeVisible();

    await page
      .locator('a[href="https://github.com/jecfish/coffee-cart"]')
      .click();

    await expect(
      page.locator('[aria-label="commits by jecfish"]')
    ).toBeVisible();
  });

  test("should update card count when item added", async ({ page }) => {
    await page.locator('[data-test="Americano"]').click();
    await page.locator("li").filter({ hasText: "cart (1)" }).click();
    await expect(
      page.locator("li").filter({ hasText: "cart (1)" })
    ).toBeVisible();
    await expect(page.locator("#app")).toContainText("cart (1)");
  });

  test("should display empty card message when card empty", async ({
    page,
  }) => {
    await page.locator('[data-test="Cafe_Latte"]').click();
    await page.locator('[aria-label="Cart page"]').click();

    await page.locator(".delete").click();
    await expect(page.locator(".list p[data-v-8965af83]")).toBeVisible();
    await expect(page.locator(".list p[data-v-8965af83]")).toContainText(
      "No coffee, go add some."
    );
  });

  test("id1 - it should show promotion message", async ({ page }) => {
    await page.locator('[data-test="Espresso"]').click();
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.locator('[data-test="Cappuccino"]').click();
    await expect(page.locator(".yes")).toBeVisible();

    await expect(
      page.locator('button[data-v-852f3b25]:has-text("Nah, I\'ll skip.")')
    ).toBeVisible();

    await expect(page.locator(".promo span")).toContainText(
      "It's your lucky day! Get an extra cup of Mocha for $4."
    );
  });

  test("id2", async ({ page }) => {
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[name="name"]').click();
    await page.locator('[name="name"]').fill("Karina");

    await page.locator('[name="email"]').click();
    await page.locator('[name="email"]').fill("test@gmail.com");

    await page.getByLabel("Promotion message").click();
    await page.locator('[type="checkbox"]').check();

    await page.locator("#submit-payment").click();
    await expect(page.locator('[class="snackbar success"]')).toBeVisible();
    await expect(page.locator('[class="snackbar success"]')).toContainText(
      "Thanks for your purchase. Please check your email for payment."
    );
  });
});
