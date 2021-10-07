import {test, expect} from '@playwright/test';

test('should work', async({page}) => {
    await page.goto('https://playwright.dev');
    await page.click('a:visible:has-text("Docs")');
    await page.screenshot({ path: 'test_results/screenshot.png', fullPage: true });
    expect(page.url()).toBe('https://playwright.dev/docs/intro');
});