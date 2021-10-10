import {test, expect} from '@playwright/test';

test('Click Menu Item', async({page}) => {
    await page.goto('http://webapp');
    await page.click('a:visible:has-text("Privacy")');
    await page.screenshot({ path: 'test_results/screenshot2.png', fullPage: true });
    expect(page.url()).toBe('http://webapp/Privacy');
});