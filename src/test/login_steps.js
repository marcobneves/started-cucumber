const assert = require('assert')
import { Before, After, Given, When, Then } from 'cucumber';
import {Hooks} from './Hooks';

let page;

Before(async () => {
    page = await Hooks();
});

Given('that view url {string}', async (url)=> {
    await page.goto(url);
});

When('insert email {string} and password {string}', async (email, senha)=> {
    await page.type('input[placeholder="Entre com seu E-mail"]', email);
    await page.type('#login_pass', senha);
    await page.click('#form-login button');
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