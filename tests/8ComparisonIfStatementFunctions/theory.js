import { expect } from "@playwright/test";
console.log(10 < 11);
console.log(8 != 8); 
console.log(100 != 20);
console.log(30 != 40);

const numbersInString = "1234";
console.log(Number(numbersInString));
const numbers = 69874;
console.log(String(numbers));
console.log("02" > 1);

console.log(null == undefined);
console.log(0 == null);
console.log(0 == false);
console.log(NaN == false);
console.log(undefined == 0);
expect(123).toBeTruthy();
console.log(expect(123).toBeTruthy()); // 123 == true
// console.log(expect(123).toBeFalsy()); // 123 == false
console.log(expect(123).toBeGreaterThan(1234)); // 123 > 1234
console.log(expect(123).toBeGreaterThanOrEqual(1234)); // 123 >= 1234
console.log(expect(123).toBeLessThan(1234)); // 123 < 1234
console.log(expect(123).toBeLessThanOrEqual(1234)); // 123 <= 1234
// to be NaN  null use when we need to know for sure
expect(123).toBeNaN(1234);
expect(123).toBeNull(1234); // in Api testing we need в апі тестуванні ми можемо отримати нал це на бекі
// якшо ми шось беремо з фронтенду нам повертаеться андефаенд або пустий стрін у нас є якийсь веб елемент ми з нього атрибут
// або значення і якщо це значення є то воно повертає значення а якщо немає то повертає undefind
// дуже рідно в апі є нул а ось в апі часто буде нул повертатися
// порівняння та перевірка типів буде відбувати за допомогой цих expect
// нативні дж порівння використовуємо дуже рідко але нативін дж порівняння потріблі для if else

//  передавши туди  або ми визначаємо чи буде виконуватися дія в середині фігурних дужок
if (10 > 7) {
  console.log("this is true result");
} else {
  console.log(" this is false result"); 
}
console.log(getBannerId(45)); // argument
// {} - передаэм код який повинен бути виконаний
// return - ключове слово яке вказуэ шо результат функції треба повернути
// функція може шось повертати і може шось не повертати
// як шо фкнкція нічого не повертає то вона фактично повертає тип войд
// void - це пустота
// якщо хочете шоб функція шось повертала то не забувайте додавати ключоге слово return
// наприклад метод клик нічого не повертає
