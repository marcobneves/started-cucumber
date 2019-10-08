
import {Before,After,Given, When, Then } from 'cucumber';
import  {Hooks} from './Hooks';
import LoginPage from '../pages/LoginPage';
import ListReservesPage from '../pages/ListReservesPage';

let list;
let puppeteerObjects;


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
    await puppeteerObjects.browser.close();
});
