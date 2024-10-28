// 16 testing best practice cookies storage state

import test, { expect } from "playwright/test";
import { RegisterPage } from "./PMO/RegisterPage";
import { createRandomUserData } from "./helper";
import { promises } from "fs";
import { forCookies } from "./home/fixtures/baseFixture";

const userData = createRandomUserData();

forCookies("create user", async ({ page, context }) => {
  const register = new RegisterPage(page);

  await register.navigateToSignUpPage();
  //   await context.addCookies([
  //     {
  //       name: "Karinochka",
  //       value: "this is my cookie testing",
  //       url: "https://demo.learnwebdriverio.com/",
  //     },
  //   ]);
  //   await register.fillInputFields(userData);

  //   await register.clickSignUpButton();
  console.log("before clearCookies", await context.cookies());
  await context.clearCookies({ name: "Karinochka" });
  console.log("after clearCookies", await context.cookies());
});

// ми переходимо на сайт зари і у нас зьявляється це віконце прийняти всі кукі або реджект
// ми створюємо проміс який буде очікувати поки браузер
// поверне нам респонс який буде містити оцю частину /consentreceipts
// в середині юрл на яку був створенний рексест і далі я клікаю на  reject-all-handler
// далі авейчу проміс для того шоб отримати цей респонс і далі із респонсу я беру баді
test("приклад зберігання cookies в json файл", async ({ page, context }) => {
  await page.goto("https://www.zara.com");

  // цей блок коду натискає кнопку прийняти тільки необхідні і чекає відповіді від сервера
  const responsePromise = page.waitForResponse(RegExp("/consentreceipts"));
  await page.locator("#onetrust-reject-all-handler").click();
  const response = await responsePromise;
  //   await responsePromise;
  const body = await response.json();

  const cookies = await context.cookies(); // записуємо всі кукі в змінну cookies
  console.log(cookies);

  // за допомогою бібліотеки fs і обʼєкту promises ми записуємо кукі у файл zara.cookies.json
  //   await promises.writeFile(
  //     "tests/condulit-tests/.cookies/zara.cookies.json",
  //     JSON.stringify(cookies)
  //   );
});

forCookies("приклад збереження сессії юзера", async ({ page, context }) => {
  const userData = createRandomUserData();

  const register = new RegisterPage(page);
  await register.navigateToSignUpPage();
  await register.fillInputFields(userData);

  const responsePromise = page.waitForResponse(RegExp("/api/users"));
  await register.clickSignUpButton();

  // очікуємо поки логін юзера буде зевершений за допомогою UI
  await expect(page.getByText(userData.name, { exact: false })).toBeVisible();

  // очікуємо поки реквест який створює юзера виконається
  const response = await responsePromise;
  expect(response.ok()).toBeTruthy();

  // після того як ми впевненились що юзер створений і залогінився, ми зберігаємо його сесію
  await page.context().storageState({
    path: `tests/.auth/${userData.name}.storage.json`,
  });
});

forCookies("condulit use storage state", async ({ browser }) => {
  const userData = createRandomUserData();
  const context = await browser.newContext({
    storageState: "tests/.auth/elena.storage.json",
  });
  const page = await context.newPage();
  await page.goto("https://demo.learnwebdriverio.com/");
  console.log("");
});

forCookies("condulit use storage state with ", async ({ browser }) => {
  const userData = createRandomUserData();

  const context = await browser.newContext({
    storageState: "tests/.auth/elena.storage.json",
  });

  const page = await context.newPage();

  await page.goto("https://demo.learnwebdriverio.com/");

  await page.evaluate(() => {
    localStorage.setItem("karina", "hi from karina");
  });
  console.log("");
});
