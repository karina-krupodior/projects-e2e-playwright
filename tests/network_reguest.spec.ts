import { test, Response } from "playwright/test";
import { createRandomUserData } from "./helper";
import { RegisterPage } from "./PMO/RegisterPage";
// 17 network requests
//  у нас є функція хелпер яка створює рандомні дані (нейм имейл і пасворд)
//  у нас є пейдж обжект регистер пейдж який ми створюємо єкземпляр классу цієї сторінки
//  використовуючи цей обьект регістер яким ми створили за допомогою регістер пейдж
//  ми переходим на сторінку регестрації заповняємо данні які отримали в крієйт рендом юзер
//  плейврайт дозволяє вам чекати як рестонс так і на реквест
//  після того як був зроблений ріквест робиться рісонс
test("working with network in playwright", async ({ page }) => {
  const userData = createRandomUserData(); // Генеруємо випадкові дані для користувача.
  const register = new RegisterPage(page); // Ініціалізуємо сторінку реєстрації.

  await register.navigateToSignUpPage(); // Переходимо на сторінку реєстрації.
  await register.fillInputFields(userData); // Заповнюємо поля форми реєстрації випадковими даними.

  // Оголошуємо обіцянки для очікування HTTP-відповідей.
  // Метод `page.waitForResponse()` очікує на відповідь від певного запиту.
  const responsePromise = page.waitForResponse(RegExp("/api/users"));
  // Очікуємо відповіді від запиту, URL якого відповідає регулярному виразу.

  const responsePromise2 = page.waitForResponse(
    `https://conduit-api.learnwebdriverio.com/api/users`
  );
  // Очікуємо відповіді конкретно від URL, який ми вказали.

  const responsePromise3 = page.waitForResponse("**/ap?/**");
  // Використовуємо маску URL, щоб очікувати відповіді від будь-якого запиту,
  // який містить у собі `/ap` і будь-які інші символи після цього.

  const responsePromise4 = page.waitForResponse((response: Response) => {
    return response.url().includes("api");
  });
  // Очікуємо відповіді від будь-якого запиту, який містить в URL слово "api",
  // за допомогою функції зворотного виклику (callback).

  await register.clickSignUpButton(); // Натискаємо кнопку реєстрації.

  // Очікуємо, поки відповідь на запит, який створює користувача, не буде отримана.
  const response = await responsePromise;
  const response1 = await responsePromise2;
  const response2 = await responsePromise3;

  // Виводимо URL відповідей у консоль для перевірки.
  console.log(response1.url());
  console.log(response2.url());

  // Виводимо URL, який повернув перший запит.
  console.log(response.url());

  // Використовуємо методи об'єкта `Response`, щоб отримати більше інформації про відповідь.

  // Метод `json()` повертає JSON-дані, які містяться у відповіді.
  console.log(await response.json());

  // Метод `body()` повертає тіло відповіді у вигляді Buffer або типізованого масиву.
  console.log(await response.body());

  // Метод `headers()` повертає всі заголовки відповіді у вигляді об'єкта.
  console.log(response.headers());

  // Метод `allHeaders()` повертає всі заголовки разом із заголовками загального типу.
  console.log(await response.allHeaders());

  // Метод `headerValue()` отримує значення конкретного заголовка, наприклад "content-length".
  console.log(await response.headerValue("content-length"));

  // Метод `statusText()` повертає текстовий опис статусу відповіді (наприклад, "OK").
  console.log(response.statusText());

  // Метод `status()` повертає числовий код статусу відповіді (наприклад, 200).
  console.log(response.status());

  // Метод `ok()` повертає true, якщо статус відповіді у діапазоні 200-299.
  console.log(response.ok());
});

test("working with network in playwright2", async ({ page }) => {
  const userData = createRandomUserData(); // Генеруємо випадкові дані для користувача.
  const register = new RegisterPage(page); // Ініціалізуємо сторінку реєстрації.

  await register.navigateToSignUpPage(); // Переходимо на сторінку реєстрації.
  await register.fillInputFields(userData); // Заповнюємо поля форми реєстрації випадковими даними.
  const responsePromise4 = page.waitForResponse((response: Response) => {
    return response.url().includes("api") && !response.url().includes("url");
  });
  await register.clickSignUpButton();
  const response = await responsePromise4;
  console.log(response.url());
  console.log(await response.json());
  console.log(response.body());
});
