import { Locator, Page } from "playwright";
export class SignInPage {
  private page: Page;
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly singInButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.email = page.locator("input[placeholder='Email]");
    this.password = page.locator("input[placeholder='Password']");
    this.singInButton = page.locator("button");
  }

  async navigateTo() {
    await this.page.goto("/login");
  }

  async fillEmailInput(email: string) {
    await this.email.fill(email);
  }

  async fillPasswordInput(password: string) {
    await this.password.fill(password);
  }

  async clickSingInButton() {
    await this.singInButton.click();
  }

  async navigateToSingInAndLogin(userData: {
    email: string;
    password: string;
  }) {
    await this.navigateTo();
    await this.fillEmailInput(userData.email);
    await this.fillPasswordInput(userData.password);
    await this.clickSingInButton();
  }
}

// const loginPage = new LoginPage();
