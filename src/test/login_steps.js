const assert = require('assert')
import { Before, After, Given, When, Then } from 'cucumber';
import {Hooks} from './Hooks';

import LoginPage from '../pages/LoginPage';

let page;
let loginPage;

Before(async () => {
    page = await Hooks();
    loginPage = new LoginPage(page); 
});

Given('that view url {string}', async (url)=> {
  await loginPage.openPage(url); 
  await loginPage.verifyPage(titulo);

});

When('insert email {string} and password {string}', async (email, password)=> {
   await loginPage.fillDataLogin(email,password)
   await loginPage.clickButtonEntrar();

});

Then('view my authentication with success', async ()=> {
 
  let locator = '.user-details div'
  var elemento = await page.waitForSelector(locator, 5000);
  var texto = await page.evaluate((element) => element.textContent, elemento);

  assert.equal(texto, ' Olá Administrador ')

});

After(async()=>{
   page.close();
})