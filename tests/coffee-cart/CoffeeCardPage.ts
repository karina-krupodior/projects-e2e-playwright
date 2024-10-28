import { Locator, Page } from "playwright";

export class CoffeeCard {
  page: Page;
  espressoCup: Locator;
  americanoCap: Locator;
  cartPage: Locator;
  checkoutButton: Locator;
  paymentDetailsHeader: Locator;
  paymentLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.espressoCup = page.locator('[data-test="Espresso"]');
    this.americanoCap = page.locator('[data-test="Americano"]');
    this.cartPage = page.locator('[aria-label="Cart page"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.paymentDetailsHeader = page.locator("h1[data-v-29c3be1b]");
    this.paymentLink = page.locator("p[data-v-29c3be1b]");
  }

  async addEspresso() {
    await this.espressoCup.click();
  }

  async addAmerican() {
    await this.americanoCap.click();
  }

  async proceedToCheckout() {
    await this.cartPage.click();
    await this.checkoutButton.click();
  }

  async verifyPaymentDetailsVisible() {
    return this.paymentDetailsHeader.isVisible();
  }

  async verifyPaymentLinkVisible() {
    return this.paymentLink.isVisible();
  }
}
