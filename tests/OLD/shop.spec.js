import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('dialog', { name: 'New message' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
});