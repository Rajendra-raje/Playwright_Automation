import {test, expect} from '@playwright/test';

test('Test1', async({page})=>
{
    await page.goto('https://www.google.com');
})