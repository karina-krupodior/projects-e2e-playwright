import test, { Route, Request } from "playwright/test";
import { createRandomUserData } from "./helper";
import { RegisterPage } from "./PMO/RegisterPage";

test("working with network in playwright", async ({ page }) => {
  page.route(RegExp("/api/user/"), async (route: Route, request: Request) => {
    const body = await request.method();

    await route.continue({ method: "POST" });
    const userData = createRandomUserData(); // Генеруємо випадкові дані для користувача.
    const register = new RegisterPage(page); // Ініціалізуємо сторінку реєстрації.

    await register.navigateToSignUpPage(); // Переходимо на сторінку реєстрації.
    await register.fillInputFields(userData); // Заповнюємо поля форми реєстрації випадковими даними.
    await page.waitForTimeout(10000);
    await register.clickSignUpButton();

    console.log("1");
  });
});

