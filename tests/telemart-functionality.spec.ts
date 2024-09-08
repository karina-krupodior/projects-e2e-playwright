import { test, expect } from "@playwright/test";

test.describe("Functionality of Carousel", () => {
  test("Carousel contains more than 2 real elements and scrolls", async ({
    page,
  }) => {
    await page.goto("https://telemart.ua/ua/");

    const swiperButtonNext = page.locator(
      ".categories-slider .swiper-button-next"
    );

    const carouselItems = await page
      .locator(
        '.categories-slider [id^="swiper-wrapper"] [class^=swiper-slide]'
      )
      .all();
    expect(carouselItems.length).toBeGreaterThan(2);

    await swiperButtonNext.click();
    await swiperButtonNext.click();

    const activeContent = page
      .locator(".swiper-slide.swiper-slide-active")
      .first();

    const urlOfActiveContent = await activeContent.getAttribute("href");
    await activeContent.click();

    expect(page.url()).toBe(urlOfActiveContent);
  });
});
