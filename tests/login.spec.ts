import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});