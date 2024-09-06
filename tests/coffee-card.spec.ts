import { test, expect, Locator } from "@playwright/test";

test.describe("Coffee Card Functionality Test", () => {
  test.beforeEach(async ({ page }) => {
    const ulrForCoffeeCartApp = "https://coffee-cart.app/";
    await page.goto(ulrForCoffeeCartApp);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test("payment details form/window should be Visible", async ({ page }) => {
    const espressoCup: Locator = page.locator('[data-test="Espresso"]');
    const americanoCup: Locator = page.locator('[data-test="Americano"]');
    const cardPage: Locator = page.locator('[aria-label="Cart page"]');
    const checkout: Locator = page.locator('[data-test="checkout"]');
    const paymentDetails: Locator = page.locator("h1[data-v-29c3be1b]");
    const paymentLink: Locator = page.locator("p[data-v-29c3be1b]");

    await espressoCup.click();
    await americanoCup.click();
    await cardPage.click();
    await checkout.click();
    await paymentDetails.click();

    const itIsVisible = await page
      .locator('h1:has-text("Payment details")')
      .isVisible();
    expect(itIsVisible).toBe(true);

    await expect(paymentDetails).toContainText("Payment details");

    const IsVisible = await paymentLink.isVisible();
    expect(IsVisible).toBe(true);

    await expect(paymentLink).toContainText(
      "We will send you a payment link via email."
    );
  });

  test("add item to card", async ({ page }) => {
    const espressoCup: Locator = page.locator('[data-test="Espresso"]');
    const cardPage: Locator = page.locator('[aria-label="Cart page"]');

    await espressoCup.click();
    await cardPage.click();

    await expect(cardPage).toBeVisible();
    await expect(cardPage).toContainText("cart (1)");

    const isVisible = await page
      .locator('li.list-item[data-v-8965af83] div:has-text("Espresso")')
      .isVisible();
    expect(isVisible).toBe(true);
  });

  test("navigate to github page", async ({ page }) => {
    const gitHubPage: Locator = page.locator('[aria-label="GitHub page"]');
    const cardPage: Locator = page.locator('[aria-label="Cart page"]');
    const gitHubCoffeeCartApp: Locator = page.locator(
      'a[href="https://github.com/jecfish/coffee-cart"]'
    );

    const repository: Locator = page.locator(
      '.container[data-v-09b4348a] p:has-text("Star our repository")'
    );
    await gitHubPage.click();
    await expect(repository).toBeVisible();

    await expect(cardPage).toBeVisible();

    await gitHubCoffeeCartApp.click();
    const elementInRepository: Locator = page.locator(
      '[aria-label="commits by jecfish"]'
    );
    await expect(elementInRepository).toBeVisible();
  });

  test("should update card count when item added", async ({ page }) => {
    const americanoCup:Locator = page.locator('[data-test="Americano"]');
    const countCups:Locator = page.locator("li").filter({ hasText: "cart (1)" });

    await americanoCup.click();
    await countCups.click();

    await expect(countCups).toBeVisible();
    await expect(page.locator("#app")).toContainText("cart (1)");
  });

  test("should display empty card message when card empty", async ({
    page,
  }) => {
    const cafeLatte: Locator = page.locator('[data-test="Cafe_Latte"]');
    const cardPage: Locator = page.locator('[aria-label="Cart page"]');
    const deleteCoffeeFormCard: Locator = page.locator(".delete");
    const emptyCardMessage:Locator = page.locator(".list p[data-v-8965af83]");
    await cafeLatte.click();
    await cardPage.click();

    await deleteCoffeeFormCard.click();

    await expect(emptyCardMessage).toBeVisible();
    await expect(emptyCardMessage).toContainText("No coffee, go add some.");
  });

  test("id1 - it should show promotion message", async ({ page }) => {
    const EspressoCup: Locator = page.locator('[data-test="Espresso"]');
    const EspressoMacchiatoCup: Locator = page.locator(
      '[data-test="Espresso_Macchiato"]'
    );
    const CappuccinoCup: Locator = page.locator('[data-test="Cappuccino"]');
    const confirmationToAddCup: Locator = page.locator(".yes");
    const skipButton: Locator = page.locator(
      'button[data-v-852f3b25]:has-text("Nah, I\'ll skip.")'
    );
    const promoMessage: Locator = page.locator(".promo span");

    await EspressoCup.click();
    await EspressoMacchiatoCup.click();
    await CappuccinoCup.click();

    await expect(confirmationToAddCup).toBeVisible();
    await expect(skipButton).toBeVisible();
    await expect(promoMessage).toContainText(
      "It's your lucky day! Get an extra cup of Mocha for $4."
    );
  });

  test("id2", async ({ page }) => {
    const checkout: Locator = page.locator('[data-test="checkout"]');
    const name: Locator = page.locator('[name="name"]');
    const email: Locator = page.locator('[name="email"]');
    const checkbox: Locator = page.locator('[type="checkbox"]');
    const submitPayment: Locator = page.locator("#submit-payment");
    const successMessage:Locator = page.locator('[class="snackbar success"]');

    await checkout.click();
    await name.click();
    await name.fill("Karina");
    await email.click();
    await email.fill("test@gmail.com");
    await page.getByLabel("Promotion message").click();
    await checkbox.check();
    await submitPayment.click();

    await expect(successMessage).toBeVisible();
    await expect(successMessage).toContainText(
      "Thanks for your purchase. Please check your email for payment."
    );
  });
});
