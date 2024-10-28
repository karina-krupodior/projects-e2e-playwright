import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";
import { expect } from "playwright/test";

export class HomePage extends BasePage {
  private signInButton: Locator;
  private signUpButton: Locator;
  userNameInput: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  submitButtonSignUp: Locator;
  myFeed: Locator;

  constructor(page: Page) {
    super(page); // Calls the constructor of BasePage to initialize `page`
    this.signInButton = this.page.locator('a[href="/login"]');
    this.signUpButton = this.page.locator('a[href="/register"]');
    this.userNameInput = this.page.locator('input[placeholder="Username"]');
    this.emailInput = this.page.locator('input[placeholder="Email"]');
    this.passwordInput = this.page.locator('input[placeholder="Password"]');
    this.submitButtonSignUp = this.page.locator(
      "//button[normalize-space(text())='Sign up']"
    );
    this.myFeed = this.page.locator('a[href="/my-feed"]');
  }

  // Method to click the sign-in button
  async clickSignIn() {
    await this.signInButton.click();
  }

  // Method to click the sign-up button
  async clickSignUp() {
    await this.signUpButton.click();
  }

  async fillUserNameInput(Username: string) {
    await this.userNameInput.fill(Username);
  }

  async fillEmailInput(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSubmitButtonSignUp() {
    await this.submitButtonSignUp.click();
  }
  async checkVisibility() {
    const myFeedArea = await this.myFeed.hover();
    expect(myFeedArea).toBe(true);
  }
}
