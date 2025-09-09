const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');

test.describe('Swag labs', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page); // Class name fixed
    await loginPage.goto();
    await loginPage.login('error_user', 'secret_sauce');
    await loginPage.expectLoginSuccess();
  });
});