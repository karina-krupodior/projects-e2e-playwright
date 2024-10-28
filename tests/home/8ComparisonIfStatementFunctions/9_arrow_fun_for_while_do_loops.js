// - Виведіть в консоль числа від 1 до 345 (while)

let numbers = 0;
while (numbers < 345) {
  numbers++;
  console.log(numbers);
}
// - Знайти сумму чисел від 1 до 100 (тобто  1 + 2 + 3 + 4 + 5 + 6....)
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

// - Виведіть в консоль числа від 241  до 1 (do while)
let num = 241;
do {
  num--;
} while (num >= 1);

// - Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)

export function biggerNumber(num1, num2) {
  if (num1 > num2) {
    console.log(`first number ${num1} is bigger `);
    return num1;
  } else if (num2 > num1) {
    console.log(`second number ${num2} is bigger`);
    return num2;
  } else if (num1 === num2) {
    console.log(`Numbers ${num1} and ${num2} equal`);
    return null;
  }
}
