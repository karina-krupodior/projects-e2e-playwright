import { test, expect } from "@playwright/test";
// Homework #8
// Task #ifelse #unittests

// Task #3
// Write unit tests for this program

// Equivalence classes
// positive
// negative
// zero

// Boundary values
// 1
// 0
// -1
// + infinity
// - infinity

// Example of task execution

function isPositive(number) {
  if (typeof number === "number") {
    //1

    if (number > 0) {
      //2
      console.log("number is positive");
      return true;
    } else if (number === 0) {
      //3
      console.log("number is negative");
      return false;
    } else {
      // 4
      console.log("number is negative");
      return false;
    }
  } else {
    //5
    throw Error("pls use number to check if it positive");
  }
}

test("is positive", async () => {
  const result = isPositive(1);
  expect(result).toBeTruthy();
});

test("is positive - max value", async () => {
  const result = isPositive(1.7976931348623157e308);
  expect(result).toBeTruthy();
});

test("is negative", async () => {
  const result = isPositive(-1);
  expect(result).toBeFalsy();
});

test("is negative - min value", async () => {
  const result = isPositive(-1.7976931348623157e308);
  expect(result).toBeFalsy();
});
