// ДЗ №15  Дописати тест з використанням PageObject
// 1. Перехід на сторінку HomePage +
// 2. клік по signUp +
// 3. заповнення обовʼязкових полів +
// 4. клік по Sign Up +
// 5. перевірити що юзер зареєстрований

import test from "playwright/test";
import { HomePage } from "../PMO/HomePage";

// ❗️напишіть PageObject для сторінки Sign Up

test("Register from home page", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateTo("https://demo.learnwebdriverio.com/");

  await homePage.clickSignUp();
  await homePage.fillUserNameInput("Karina");
  await homePage.fillEmailInput("test@gmail.com");
  await homePage.fillPasswordInput("12345");
  await homePage.clickSubmitButtonSignUp();
  await homePage.checkVisibility();
});
