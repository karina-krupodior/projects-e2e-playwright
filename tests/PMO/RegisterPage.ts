// 16 testing best practice cookies storage state
import { Locator, Page } from "playwright";
import { createRandomUserData } from "../helper";

export class RegisterPage {
  private page: Page;
  private signUpButton: Locator;
  userNameInput: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  submitButtonSignUp: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpButton = this.page.locator('a[href="/register"]');
    this.userNameInput = this.page.locator('input[placeholder="Username"]');
    this.emailInput = this.page.locator('input[placeholder="Email"]');
    this.passwordInput = this.page.locator('input[placeholder="Password"]');
    this.submitButtonSignUp = this.page.locator(
      "//button[normalize-space(text())='Sign up']"
    );
  }

  async navigateToSignUpPage() {
    await this.page.goto("https://demo.learnwebdriverio.com/register");
  }

  async fillInputFields(userData?: {
    name: string;
    email: string;
    pass: string;
  }) {
    if (!userData) {
      userData = createRandomUserData();
    }
    await this.userNameInput.fill(userData?.name);
    await this.emailInput.fill(userData?.email);
    await this.passwordInput.fill(userData?.pass);

    return userData;
  }

  async clickSignUpButton() {
    await this.submitButtonSignUp.click();
  }
}
