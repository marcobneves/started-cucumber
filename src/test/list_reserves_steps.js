
import {Given, When, Then } from 'cucumber';
import puppeteer from 'puppeteer';

import ListReservesPage from '../pages/ListReservesPage';

let list;

Before(async () => {
    puppeteerObjects = await Hooks();
    list = new ListReservesPage(puppeteerObjects.page)
 
});


Given('insert a office room {string} search field', async(room)=> {
   
    await list.searchReservesbyRoom(room)
});

Then('show office room {string} in the list', function (string) {

});

After(async()=>{
    list.browser.close();
});