import {Page, Locator, expect} from '@playwright/test';

export abstract class BasePage{
    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigate(url : string) : Promise <void> {
        await this.page.goto(url, {waitUntil: 'load'});
    }

    async click(locator: Locator) : Promise <void> {
        await locator.waitFor({state : 'visible'});
        await locator.click();
    }

    async fill(locator: Locator, value:string): Promise <void> {
        await locator.waitFor({state: 'visible'});
        await locator.fill(value);
    }


    async verifyURLContains(text: string) : Promise <void> {
        await expect(this.page).toHaveURL(new RegExp(text));
    }

    abstract isloaded(): Promise<void>;
}