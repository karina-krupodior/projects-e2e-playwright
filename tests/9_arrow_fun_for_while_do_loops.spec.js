import { biggerNumber } from "./9lesson";
import { expect, test } from "@playwright/test";

test("should show bigger number", () => {
  expect(biggerNumber(5, 2)).toBe(5);
  expect(biggerNumber(10, 20)).toBe(20);
  expect(biggerNumber(8, 8)).toBeNull();
});
