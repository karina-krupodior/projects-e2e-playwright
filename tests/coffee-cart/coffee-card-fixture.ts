// 14 lesson (ДЗ №16  in telegram)
// Переписати існуючі тести для condulit і coffee cart з використанням фікстур
import { test as base, expect, Locator } from "@playwright/test";
import { CoffeeCard } from "./CoffeeCardPage";

type CoffeeCardFixture = {
  coffeeCardPage: CoffeeCard;
};

// Extend the base test to include your custom fixture
export const coffeeCardTest = base.extend<CoffeeCardFixture>({
  // Define a fixture for navigating to the Coffee Cart app
  coffeeCardPage: async ({ page }, use) => {
    // Navigate to the Coffee Cart App
    const coffeeCardPage = new CoffeeCard(page);
    await page.goto("https://coffee-cart.app");
    // Pass the function to use, so it's accessible in the test
    await use(coffeeCardPage);
  },
});
