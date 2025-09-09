import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/select-elements/');
  await page.locator('#post-2649').getByRole('paragraph').locator('iframe').contentFrame().getByText('Item 1').click();
  await page.getByRole('link', { name: 'DropDown Menu' }).click();

 
});