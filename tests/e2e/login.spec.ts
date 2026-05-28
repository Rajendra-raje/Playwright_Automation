import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login', async({page})=>
{
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.isloaded();
    
    await loginPage.login("programmer.logicr@gmail.com" , "Kapruka@18");

    await expect(loginPage.forMe).toBeVisible();

})

test('Logout', async({page}) =>
{
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.isloaded();
    
    await loginPage.login("programmer.logicr@gmail.com" , "Kapruka@18");

    await loginPage.logout();    
})

test('Create Account', async({page}) =>
{
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.createAccount("Test FirstName", "Test LastName", "test@test.com", "Test@2026")
})