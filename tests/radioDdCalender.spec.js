import { expect, test } from '@playwright/test';

test("Handling radioButtonsDropDownCalender", async ({ page }) => {
    await page.goto("https://cleartrip.com");
    let pageTitle = await page.title();
    expect(pageTitle).toContain("Cleartrip");
    await page.reload();//page reload
    await page.locator("#roundtrip").click();
    await page.locator('xpath=//input[@placeholder="Where from?"]').click();
    await page.locator('xpath=//p[contains(text(), "Bengaluru, IN - Kempegowda International Airport (BLR)")]').click();
    await page.locator('[mask="url(#mask0_985_9207)"]').click();
    await page.locator('xpath=//div[contains(text(), "23")]').first().click();//Choosing start Date
    await page.locator('xpath=//div[contains(text(), "22")]').nth(2).click();
    const startDate = page.locator('xpath=//div[contains(text(),"Fri, May 23")]');
    expect(startDate).toBeVisible();
    expect(startDate).toHaveText("Fri, May 23");
    expect(await startDate.textContent()).toBe("Fri, May 23");

});