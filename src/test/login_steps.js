import { Before, Given, When, Then } from 'cucumber';
import {Hooks} from './Hooks';

let page;

Before(async () => {
    page = await Hooks();
});

Given('that view url {string}', async (url)=> {
    page.goto(url);
});


When('insert email {string} and password {string}', function (email, senha) {

});


Then('view my authentication with success', function () {
  
});