import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await expect(page.getByTestId('Grid-:Rqhb:').getByText('Join the world’s most widely')).toBeVisible();
  await expect(page.getByTestId('Grid-:Rqhb:').getByRole('paragraph')).toContainText('Join the world’s most widely adopted AI-powered developer platform.');
  await expect(page.locator('#hero_user_email')).toBeEmpty();

  await page.locator//*[@id="hero-section-brand-heading"])
  const cssSelector = await page.$('id="hero-section-brand-heading"');
  console.log('2. Found header using CSS selector');
});