import { test } from '@playwright/test';

test("Handling editBox", async ({ page }) => {

    await page.goto("https://google.com");

    const input = page.locator('textarea[name="q"]'); // correct locator

    await input.type("123");// Typing the next type value beside to the existing text
    await page.waitForTimeout(3000);

    await input.type("456"); // appends
    await page.waitForTimeout(3000);

    await input.clear();
    await page.waitForTimeout(3000);

    await input.fill("Playwright"); // replaces the existing text
    await page.waitForTimeout(3000);

    await input.fill("123"); // overwrites previous
    await page.waitForTimeout(3000);

    await input.fill(""); // clears

    await input.fill("abc" + "def");// For appending the text

    //for multi lines combo Box use await input.fill('abcd \n 12344\n 3566');

});