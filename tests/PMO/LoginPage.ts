import { Page } from "playwright";

// export function LoginPage(page) {
//   this.page = page
//   (this.usernameSelector = "input[placeholder='Email]");
//   this.passwordSelector = "input[placeholder='Password']";
//   this.loginButtonSelector = "input[placeholder='button']";
// }

// LoginPage.prototype.login = async function (username: string, pass: string) {
//   await this.page.locator(this.usernameSelector).fill(username);
//   await this.page.locator(this.passwordSelector).fill(pass);
//   await this.age.locator(this.loginButtonSelector).click();
// };

// rewrite this login page by using class

export class LoginPage {
  page: Page;
  usernameSelector: string;
  passwordSelector: string;
  loginButtonSelector: string;
  constructor(page: Page) {
    this.page = page;
    this.usernameSelector = "input[placeholder='Email]";
    this.passwordSelector = "input[placeholder='Password']";
    this.loginButtonSelector = "input[placeholder='button']";
  }

  async login(username: string, pass: string) {
    await this.page.locator(this.usernameSelector).fill(username);
    await this.page.locator(this.passwordSelector).fill(pass);
    await this.page.locator(this.loginButtonSelector).click();
  }
}

// const loginPage = new LoginPage();
