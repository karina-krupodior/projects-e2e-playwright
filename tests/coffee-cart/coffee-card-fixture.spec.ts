import { test, expect, Locator } from "@playwright/test";
import { coffeeCardTest } from "./coffee-card-fixture";

test.afterEach(async ({ page }) => {
  await page.close();
});

coffeeCardTest(
  "payment details form/window should be Visible",
  async ({ coffeeCardPage }) => {
    await coffeeCardPage.addEspresso();
    await coffeeCardPage.addAmerican();
    await coffeeCardPage.proceedToCheckout();

    // Assertions using the page object
    const paymentDetailsVisible =
      await coffeeCardPage.verifyPaymentDetailsVisible();
    expect(paymentDetailsVisible).toBe(true);

    const paymentLinkVisible = await coffeeCardPage.verifyPaymentLinkVisible();
    expect(paymentLinkVisible).toBe(true);
  }
);