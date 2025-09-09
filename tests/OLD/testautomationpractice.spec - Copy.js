import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByText('Name: Email: Phone:').click();
  await page.getByRole('textbox', { name: 'Enter Name' }).dblclick();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('sush');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('sushmma');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
 await page.getByRole('textbox', { name: 'Enter Phone' }).fill('7654426788');
   function isElementVisible(element) {
return element.offsetWidth > 0 &&
element.offsetHeight > 0 &&
element.style.visibility !== 'hidden' &&
element.style.display !== 'none' &&
!element.hasAttribute('hidden');}
async function clickWithAutoWait(locator) {
await locator.waitFor({ state: 'attached' });
await locator.waitFor({ state: 'visible' });
await locator.waitFor({ state: 'stable' });
await locator.waitFor({ state: 'enabled' });
await locator.waitFor({ state: 'receivable' });
await locator.click();
await page.waitForSelector('.results-loaded');
await page.waitForResponse('https://api.example.com/data');

await page.waitForFunction(() => {
return document.readyState === 'complete';
});
}
});