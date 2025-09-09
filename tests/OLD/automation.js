import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('abc');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('abc@gmail.com');
  await page.getByRole('radio', { name: 'Gender:' }).check();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).click();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).fill('9898989898');
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('2012-12-12');
  await page.getByRole('textbox', { name: 'Subjects:' }).click();
  await page.getByRole('textbox', { name: 'Subjects:' }).fill('xyz');
  await page.getByRole('checkbox', { name: 'Hobbies:' }).check();
});