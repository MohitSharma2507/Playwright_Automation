const { chromium } = require('playwright');
import {test, expect} from '@playwright/test';

test('Test',async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/search?q=saucedemo&oq=saucedemo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI3MTRqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dsaucedemo%26oq%3Dsaucedemo%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI3MTRqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DgHSqaqfXB43gseMP2ZrkkQs&q=EhAkAUkAHDEHzSmIGcBO1vGjGIDpqdUGIjB6BtX4IWkdrnUWyHSKI02eeb4PmtHjMLhwT5OfeTm1NKsS3HVzd3tHZcsngoRK8noyAVJaAUM');
  await page.locator('iframe[name="a-zak2bv9vd5if"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-zak2bv9vd5if"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-zak2bv9vd5if"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-zak2bv9vd5if"]').contentFrame().locator('[id="8"]').click();

  // ---------------------
  await context.close();
  await browser.close();
});