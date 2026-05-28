import {test, expect} from '@playwright/test';
import { ComboGiftsPage } from '../../pages/ComboGiftsPage';

test('Get first product name and price', async({page})=>
{
    const combogiftsPage = new ComboGiftsPage(page);
    await combogiftsPage.goto();
    await combogiftsPage.isloaded();
    const name = await combogiftsPage.getFirstProductName();
    const price = await combogiftsPage.getFirstProductPrice();

    console.log('Product Name : ' + name);
    console.log('Product Price : ' + price);

    await expect(name).not.toBe('');
    await expect(price).not.toBe('');
}) 