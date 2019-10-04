
import { Before, After, Given, When, Then } from 'cucumber';
import {Hooks} from './Hooks';

import LoginPage from '../pages/LoginPage';

let page;
let loginPage;

Before(async () => {
    page = await Hooks();
    loginPage = new LoginPage(page); 
});

After(async()=>{
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/usr/bin/google-chrome'
});
});

Given('that view url {string}', async (url)=> {
  await loginPage.openPage(url); 
  await loginPage.verifyPage();

});

When('insert email {string} and password {string}', async (email, password)=> {
   await loginPage.fillDataLogin(email,password)
   await loginPage.clickButtonEntrar();
   await page.waitFor(2000);

});

Then('view my authentication with success', async ()=> {
  await loginPage.verifyUserAuthenticated();
  
});

Then ('view Error message {string}', async (message)=>{

   await loginPage.VerifyErrorMessage(message);
});

After(async () => {
  await page.close();
});