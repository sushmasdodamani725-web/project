import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/key_presses?');
  await expect(page.getByRole('heading')).toContainText('Key Presses');
  await page.locator('#target').dblclick();
  await page.locator('#target').press('Enter');
  await page.getByText('Key Presses Key presses are').click();
  await page.locator('#target').click();
  await page.locator('#target').fill('sushma');
  await page.locator('#target').press('Enter');
  await page.locator('#target').click();
  await page.locator('#target').fill(' ');
});