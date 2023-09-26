import { Given, When, Then } from "@cucumber/cucumber";
import { expect, chromium, Page, Browser } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('User navigates to the application', async function (){
    browser = await chromium.launch({ headless: false});
    page = await browser.newPage();
    await page.goto("https://www.hepsiburada.com/")
    const electronicButton = await page.getByText('Elektronik').first().textContent();
    expect(electronicButton).toEqual('Elektronik');
});

Given('User click on the login link', async function (){
    await page.locator('[data-test-id="account"]').click();
    await page.getByRole('link', { name: 'Giriş Yap' }).click();
});

Given('User click on the login link', async function (){
    await page.locator('[data-test-id="account"]').click();
    await page.getByRole('link', { name: 'Giriş Yap' }).click();
});

Given('User enter the username as {string}', async function (username){

    await page.getByPlaceholder('E-posta adresi veya telefon numarası').click();
    await page.getByPlaceholder('E-posta adresi veya telefon numarası').fill(username);
    await page.getByPlaceholder('E-posta adresi veya telefon numarası').press('Enter');
});

Given('User enter the password as {string}', async function (password){
    await page.getByRole('textbox', { name: 'Şifre' }).click();
    await page.getByRole('textbox', { name: 'Şifre' }).fill(password);
});

When('User click on the login button', async function (){
    await page.getByRole('textbox', { name: 'Şifre' }).press('Enter');
});

Then('Login should be success', async function (){
    const hesabimText = await page.locator("#myAccount > span a > span").nth(0);
    expect(hesabimText).toEqual('Hesabım');
});

