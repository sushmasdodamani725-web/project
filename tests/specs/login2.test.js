

const { test } = require('@playwright/test');
const { LoginPage2 } = require('../pages/loginpage2');

test.describe('Swag Labs', () => {
  test('should successfully log in with valid credentials', async ({ page }) => {
    const loginPage2 = new LoginPage2(page);
    await loginPage2.goto();

    // Use a valid user (not "error_user")
    await loginPage2.login('standard_user', 'secret_sauce');

    await loginPage2.expectLoginSuccess();
  });
});
