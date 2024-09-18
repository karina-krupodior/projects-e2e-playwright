import { test, expect } from "@playwright/test";

// Task #1 — Check if a number is even or odd
// Scenario: Write a program that checks whether a number is even or odd.

function checkEvenOrOdd(number) {
  if (typeof number === "number") {
    if (number === 0) {
      console.log(`number is ${number}`);
      return null;
    }
    if (number % 2 === 0) {
      console.log("This number is even");
      return true;
    } else if (number % 2 !== 0) {
      console.log(`This ${number} is odd`);
      return false;
    }
  } else {
    throw Error("Enter number");
  }
}

console.log(checkEvenOrOdd(1));

test("number is even - positive", async () => {
  const result = checkEvenOrOdd(4);
  expect(result).toBe(true);
});

test("negative even number", async () => {
  expect(checkEvenOrOdd(-44)).toBe(true);
  expect(checkEvenOrOdd(-120)).toBe(true);
});

test("number is odd", async () => {
  const result = checkEvenOrOdd(3);
  expect(result).toBe(false);
});

test("negative odd number", async () => {
  expect(checkEvenOrOdd(-1)).toBe(false);
  expect(checkEvenOrOdd(-111)).toBe(false);
});

test("number is zero", async () => {
  const result = checkEvenOrOdd(0);
  expect(result).toBeNull();
});

test("type is incorrect - not a number", async () => {
  // Creates a function that calls checkEvenOrOdd("5").
  // Creating a wrapper function allows delaying the call until the framework is ready to handle it.
  expect(() => checkEvenOrOdd("5")).toThrowError("Enter number");
  expect(() => checkEvenOrOdd({})).toThrowError("Enter number");
  expect(() => checkEvenOrOdd([])).toThrowError("Enter number");
});
