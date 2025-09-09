import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Login Login' }).click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('6366315238');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.locator('.r4vIwl').first().fill('5');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('link', { name: 't shirts' }).click();
  
});