import { ConsoleMessage, test } from "@playwright/test";
import { SignInPage } from "../../PMO/SignInPage";

type MyFixture = {
  signInPage: SignInPage;
  userData: { email: string; password: string };
};
// userLogged
export const karinaTest = test.extend<MyFixture>({
  signInPage: async ({ page }, use) => {
    const singInPage = new SignInPage(page);
    await use(singInPage);
  },

  page: async ({ page, userData }, use) => {
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
    const signInPage = new SignInPage(page);
    await signInPage.navigateToSingInAndLogin(userData);
    await use(page);
  },
  context: async ({ context }, use) => {
    await context.addCookies([
      {
        name: "Karinochka",
        value: "this is my cookie testing",
        url: "https://demo.learnwebdriverio.com/",
      },
    ]);
    await use(context);
  },

  userData: { email: "", password: "" },
});

export const forCookies = test.extend<MyFixture>({
  context: async ({ context }, use) => {
    await context.addCookies([
      {
        name: "Karinochka",
        value: "this is my cookie testing",
        url: "https://demo.learnwebdriverio.com/",
      },
    ]);
    await use(context);
  },
});

// у нас зьявилась ше одна фікстура яка називається userData
