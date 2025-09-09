import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  await page.locator('frame').first().contentFrame().getByRole('textbox').click();
  await page.locator('frame').first().contentFrame().getByRole('textbox').fill('sushma');
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(1).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(2).contentFrame().getByRole('textbox').click();
  await page.locator('frame').nth(3).contentFrame().getByRole('textbox').click();
  await expect(page.locator('frame').first().contentFrame().locator('b')).toContainText('Frame Test Page');
  await expect(page.locator('frame').nth(2).contentFrame().getByRole('textbox')).toBeVisible();
  await expect(page.locator('frame').nth(3).contentFrame().getByRole('textbox')).toBeVisible();
  await expect(page.locator('frame').nth(1).contentFrame().getByRole('textbox')).toBeVisible();
  await expect(page.locator('frame').nth(1).contentFrame().getByRole('textbox')).toBeVisible();
  await expect(page.locator('frame').nth(1).contentFrame().getByRole('textbox')).toBeVisible();
  await expect(page.locator('frame').nth(1).contentFrame().getByRole('textbox')).toBeVisible();
});