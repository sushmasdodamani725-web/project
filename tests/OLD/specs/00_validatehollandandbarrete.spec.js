import { test, expect } from '@playwright/test';

test('Validate page title and URL', async ({ page }) => {
  await page.goto( "https://practicetestautomation.com/practice-test-login/");

  const actualTitle = await page.title();
  const actualURL = page.url();

  // Updated expected title with actual characters instead of HTML entities
  const expectedTitle = "Test Login | Practice Test Automation";
  const expectedURL =  "https://practicetestautomation.com/practice-test-login/";

  expect(actualTitle).toBe(expectedTitle);
  expect(actualURL).toBe(expectedURL);
});
