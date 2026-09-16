// This pulls in two tools from the Playwright library:

// test — the function you use to define a test case
// expect — the function you use to check whether something is true (an assertion) 
import {test,expect} from "@playwright/test";


test('My First test', async ({page}) => {

    await page.goto("https://google.com")
    await expect(page).toHaveTitle("Google") 
    await expect(page).toHaveTitle(/Google/) 
});
