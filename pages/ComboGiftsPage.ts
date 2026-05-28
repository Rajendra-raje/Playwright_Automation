import { Page, Locator, expect } from "@playwright/test";

import { BasePage } from "./BasePage";

export class ComboGiftsPage extends BasePage
{
    readonly comboGiftsCatagory: Locator;

    constructor(page: Page){
        super(page);
        this.comboGiftsCatagory = page.getByText(/Combo Gifts Categories/i);
    }

    async goto() : Promise <void> {
        await this.navigate('https://www.kapruka.com/online/combogifts');
    }
    async isloaded(): Promise<void> {
        await expect(this.comboGiftsCatagory).toBeVisible();
    }

    async getFirstProductName() : Promise<string>
    {
        const nameLocator = this.page.locator('.catalogueV2heading').first();
        await nameLocator.waitFor({state:'visible' , timeout:20000});
        const name = await nameLocator.textContent();
        return name ?.trim() || '';
    }

    async getFirstProductPrice() : Promise<string>
    {
        const priceLocator = this.page.locator('.catalogueV2converted span:last-child').first();
        await priceLocator.waitFor({state:'visible' , timeout:20000});
        const name = await priceLocator.textContent();
        return name ?.trim() || '';
    }
}