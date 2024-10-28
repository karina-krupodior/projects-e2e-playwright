// ДЗ №14

// 1) Створіть функцію, яка використовує проміс для імітації затримки у 2 секунди перед поверненням значення.
// Вимоги:

// • Створіть функцію waitForTwoSeconds(), яка повертає проміс, що вирішується через 2 секунди.
// • Після виконання проміса функція повинна вивести в консоль повідомлення “2 секунди пройшло!”.

// *використовуйте setTimeout()

function waitForTwoSeconds() {
  return new Promise((resolve, rejects) => {
    setTimeout(function () {
      resolve("2 secons have passed");
    }, 2000);
  });
}

console.log(
  waitForTwoSeconds().then(function (message) {
    console.log(message);
  })
);

// 2) Створіть три функції, кожна з яких повертає проміс, що виконується через випадковий час (від 1 до 3 секунд). Використайте Promise.all, щоб дочекатися виконання всіх промісів.
// Вимоги:

// •Створіть три функції: task1(), task2(), task3().
// •Кожна з цих функцій повинна повертати проміс із випадковою затримкою (1-3 секунди).
// •Використайте Promise.all, щоб дочекатися виконання всіх промісів і вивести в консоль повідомлення, що всі завдання виконано.

function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First task is done");
    });
  }, 1000);
}

console.log(
  task1().then((message) => {
    console.log(message);
  })
);

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second task is done");
    }, 2000);
  });
}

task2().then((result) => console.log(result));

function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third task is done");
    }, 3000);
  });
}
task3().then((result) => console.log(result));

console.log(
  "Promise.all",
  Promise.all([task1(), task2(), task3()])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error))
);

// 3) Є функція, що використовує проміси для отримання даних про користувача з серверу.
// Перетворіть її на функцію, яка використовує async/await.

// getUserData()
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "John", age: 30 });
    }, 1000);
  });
}

async function getUserDataAsync() {
  try {
    const userInfo = await getUserData();
    console.log(userInfo);
  } catch (error) {
    console.log(error);
  }
}

getUserDataAsync();

// 4) погратись з https://www.jsv9000.app/ виконайте всі запропоновані дії і подивіться як відпрацьовує івентлуп
