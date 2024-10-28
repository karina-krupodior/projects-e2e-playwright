// 15 param tests debug waiting
import test, { expect } from "playwright/test";

const testData = [
  {
    testId: "MONE-001",
    searchQuery: "Монітори",
    searchResultWorld: "Монітор",
  },
  {
    testId: "MONE-002",
    searchQuery: "Компʼютерна мишка",
    searchResultWorld: "Компʼютерна мишка",
  },
];
for (const data of testData) {
  test(`s${data.testId}each for ${data.searchQuery} - should appear in search result`, async ({
    page,
  }) => {
    await page.goto("https://rozetka.com.ua/");
    const searchLocator = page.locator('input[name="search"]');
    await searchLocator.click();
    await searchLocator.fill(data.searchQuery);
    await page.keyboard.press("Enter");

    const searchResult = page
      .locator(
        `//li[contains(@class,"catalog-grid")]//a[contains(@class,'goods-title_picture)]`
      )
      .first();
    expect(searchResult.getAttribute("title")).toContain(
      data.searchResultWorld
    );
  });
}
