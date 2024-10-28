import test from "playwright/test";

type UserAuthenticationFixture = {
  goToTheMainPage: () => Promise<void>;
};

export const testConduit = test.extend<UserAuthenticationFixture>({
  goToTheMainPage: async ({ page }, use) => {
    await page.goto("https://demo.learnwebdriverio.com/");
    await use(async () => {
      await page.goto("https://demo.learnwebdriverio.com/");
    });
  },
});
