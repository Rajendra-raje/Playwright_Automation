import { Page, Locator, expect } from "@playwright/test";

import { BasePage } from "./BasePage";

export class LoginPage extends BasePage
{
    //Login
    readonly emailInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    readonly forMe : Locator;

    //Logout
    readonly logoutButton : Locator;
    readonly kaprukaMembers : Locator;

    //Create Account
    readonly createAccountButton : Locator;
    readonly firstNameInput : Locator;
    readonly lastNameInput : Locator;
    readonly createAccountEmailInput : Locator;
    readonly createPasswordInput : Locator;
    readonly confirmPasswordInput : Locator;

    
    constructor(page : Page){
        super(page);
        //Login
        this.emailInput = page.locator('input[name="email"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[type="submit"]');
        this.forMe = page.getByRole('link', { name: 'For You' });

        //Logout
        this.logoutButton = page.getByText(/Logout from your account/i);
        this.kaprukaMembers = page.getByRole('heading', {name : 'Kapruka Members'});

        //Create Account
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.createAccountEmailInput = page.locator('input[name="email"]');
        this.createPasswordInput = page.locator('input[name="password"]');
        this.confirmPasswordInput = page.locator('input[name="passwordReConfirm"]');

    }

    async goto() : Promise <void> {
        await this.navigate('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
    }

    //abstract - Fullfinning the contaract
    async isloaded(): Promise<void> {
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.createAccountButton).toBeVisible();
    }

    async login (email: string, password: string) : Promise <void>{
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);

        //await expect(this.forMe).toBeVisible();
    }

    async logout() : Promise <void>{
        await this.logoutButton.click();
        await expect(this.kaprukaMembers).toBeVisible();
    }

    async createAccount(firstName: string, lastName: string, email: string, password: string): Promise <void>{
        await this.createAccountButton.click();

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.createAccountEmailInput.fill(email);
        await this.createPasswordInput.fill(password);
        await this.confirmPasswordInput.fill(password);

        await this.createAccountButton.click();
    }
}