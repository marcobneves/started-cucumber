
import {Before,After,Given, When, Then } from 'cucumber';
import  {Hooks} from './Hooks';
import ListReservesPage from '../pages/ListReservesPage';

let list;
let puppeteerObjects;


Before(async () => {
    puppeteerObjects = await Hooks();
    list = new ListReservesPage(puppeteerObjects.page)
    
});


Given('insert a office room {string} search field', async(room)=> {
    await puppeteerObjects.page.waitFor(3000);
    await list.searchReservesbyRoom(room)
});

Then('show office room {string} in the list', async(office)=> {
    await list.verifyOfficeRoom(office)
});


Given('User logged successfully', async()=>{
    await list.loginSuccess();
});



After(async()=>{
    await puppeteerObjects.browser.close();
});
