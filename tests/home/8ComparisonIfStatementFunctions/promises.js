// const myPromise = new Promise(function (resolve, reject) {
//   if (false) {
//     resolve("promise is true");
//   } else {
//     reject("rejected");
//   }
// });

// myPromise.then(function (result) {
//   console.log("result:", result);
// }).catch(function(error) {
//     console.log(error)
// });

// run - start Debugging - node js
const someResolve = Promise.resolve(12345);
const someReject = Promise.reject(12345);

// у нас є в обьекте і значення 12345 і стан фулфілд а коли ви захочите це в консолі дізнатися ви не сможите тільки в дебазі
//  методи Promise.resolve и Promise.reject(12345) дозволяють створювати проміси по статусам ріджектид і різов
//  навішо це потрібно він не знає тому шо він ніколи не використовував на практиці
//  цей весь функціонал вам потрібен більше для розширення кругозору але насчастья ви цього використовувати не будете

//  Promise.all приймає в себе массив з іншими промісами і він переходить в резолвід коли всі проміси всередині массивву стали фулфілед
// Promise.all  перетворює всі проміси в один проміс і виконає його коли всі проміси всередині перейдут в статус револв  

const someAll = Promise.all([someResolve, someReject]);

console.log("breakpoint");