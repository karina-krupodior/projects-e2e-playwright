import { ConsoleMessage, test } from "playwright/test";
import { karinaTest } from "./baseFixture";

karinaTest.use({ userData: { email: "test@gmail.com", password: "2345" } });

karinaTest("login- should be logged", async ({ page, signInPage }) => {
  page.on("console", async (msg) => {});
});

test("check console", async ({ page }) => {
  page.on("console", async (msg: ConsoleMessage) => {
    if (
      msg.type() === "error" &&
      msg.text() != "Failed to load resource: net::ERR_FAILED"
    ) {
      throw new Error(
        `on a page ${page.url()} error was throws in a console with error message: ${msg.text()}`
      );
    }
  });
  // its listener and it will works on background
  await page.goto("https://telemart.ua/ua/", { timeout: 2000 });
  await page.reload();
  await page.reload();
  await page.reload();
  await page.reload();
});
