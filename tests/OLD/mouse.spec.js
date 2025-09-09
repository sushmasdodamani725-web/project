import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');
  await page.getByRole('img', { name: 'User Avatar' }).first().click();
  await expect(page.locator('#content')).toContainText('View profile');
  await page.getByText('Hover over the image for').click();
  await page.getByRole('link', { name: 'View profile' }).click();
//   await page.mouse.move(100, 100);
// await page.mouse.down();
// await page.mouse.move(200, 100);
// await page.mouse.move(200, 200);
// await page.mouse.move(100, 200);
// await page.mouse.move(100, 100);
// await page.mouse.up()
});