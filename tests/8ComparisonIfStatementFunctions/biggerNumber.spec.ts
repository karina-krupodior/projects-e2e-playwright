// Вправа №2 — Визначте більше число
// Сценарій: Напишіть програму для визначення більшого з двох чисел.

import { expect, test } from "@playwright/test";

function findBiggerNumber(number1: number, number2: number) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    if (number1 > number2) {
      console.log(`First number ${number1} is bigger `);
      return number1;
    }
    if (number2 > number1) {
      console.log(`Second number ${number2} is bigger `);
      return number2;
    }
    if (number1 === number2) {
      console.log("Numbers are equal");
      return null;
    }
  } else {
    throw Error("This is not a number. Please enter a valid number.");
  }
}

console.log(findBiggerNumber(112345, 124));

test("equal numbers", async () => {
  expect(findBiggerNumber(10, 10)).toBeNull();
});

test("first number should be bigger and second", async () => {
  expect(findBiggerNumber(10, 5)).toBe(10);
});

test("second number should be bigger than first number", async () => {
  expect(findBiggerNumber(10, 20)).toBe(20);
});

test("incorrect value - should throw error", async () => {
  expect(() => findBiggerNumber("24" as any, 6)).toThrowError(
    "This is not a number. Please enter a valid number."
  );
});

test("both values not a number types", async () => {
  expect(() => findBiggerNumber("123" as any, "text" as any)).toThrowError(
    "This is not a number. Please enter a valid number."
  );
});

test("first number is Number.MAX_SAFE_INTEGER", async () => {
  console.log(Number.MAX_SAFE_INTEGER);
  expect(findBiggerNumber(Number.MAX_SAFE_INTEGER, 100000)).toBe(
    Number.MAX_SAFE_INTEGER
  );
});

test("handling negative numbers", async () => {
  expect(findBiggerNumber(-10, -20)).toBe(-10);
});

test("handling zero and negative number", async () => {
  expect(findBiggerNumber(0, -1)).toBe(0);
});
