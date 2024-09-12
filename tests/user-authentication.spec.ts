import { expect, Locator, test } from "@playwright/test";
test.describe("User Authentication", () => {
  test("101 signUp user - We should be able to sign up a new user", async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/");

    const signUp: Locator = page.locator(
      "//a[contains(@class,'nav-link') and @href='/register']"
    );
    await signUp.click();
    const random = Math.floor(Math.random() * 100);
    const userName: Locator = page.locator("//*[@placeholder='Username']");
    const email: Locator = page.locator("//*[@placeholder='Email']");
    const password: Locator = page.locator("//*[@placeholder='Password']");
    await userName.fill(`Karina${random}`);
    await email.fill(`test${random}@gmail.com`);
    await password.fill("1234");
    const singUpButton = page.locator("//button[contains(text(),'Sign up')]");
    await singUpButton.click();
  });

  test("Sign in user - should sign in with an existing user and create an article", async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/");
    const signIn = page.locator(
      "//a[contains(@class, 'nav-link') and @href='/login']"
    );
    await signIn.click();
    const emailField = page.locator("//input[contains(@placeholder,'Email')]");
    const passwordField = page.locator(
      "//input[contains(@placeholder,'Password')]"
    );
    await emailField.fill("test8@gmail.com");
    await passwordField.fill("1234");
    const signButton = page.locator("//button[contains(text(),'Sign in')]");
    await signButton.click();
    const newArticlePage = page.locator("//a[@href='/editor']");
    await newArticlePage.click();
    const articleTitle = page.locator('//input[@placeholder="Article Title"]');
    await articleTitle.fill("first title");

    const articleDescription = page.locator(
      "//input[@data-qa-id='editor-description']"
    );
    await articleDescription.fill("some description");
    const noteEdit = page.locator(
      '//textarea[contains(@class,"auto-textarea-input")]'
    );
    await noteEdit.fill("here");
    const tagOfArticle = page.locator('//input[@data-qa-id="editor-tags"]');
    await tagOfArticle.fill("test1");
    const publishArticleButton = page.locator(
      '//button[@data-qa-id="editor-publish"]'
    );

    await publishArticleButton.click();
    const articleTitleOnArticlePage = page.locator(
      '//h1[@data-qa-id="article-title"]'
    );
    const titleText = await articleTitleOnArticlePage.textContent();
    console.log("titleText:", titleText);

    expect(titleText).toEqual("first title");
  });
});
