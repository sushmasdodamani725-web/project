import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.locator('.card > a').first().click();
  await expect(page.getByRole('heading', { name: '$360 *includes tax' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Samsung galaxy s6');

  const textSelector = await page.$('text=contact');
console.log(' Found "Sign up" using text selector');
 const cssSelector = await page.$('id=logModal');
 console.log('2. Found header using CSS selector');
 await page.locator//*[@id="carouselExampleIndicators"]/div/div[3]/img


});