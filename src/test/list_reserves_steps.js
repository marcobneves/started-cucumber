
    import { Before, After, Given, When, Then } from 'cucumber';
    import {Hooks} from './Hooks'; 
    
    import ListReservesPage from '../pages/ListReservesPage';
    import LoginPage from '../pages/LoginPage';

    let puppeteerObjects;
    let listreserves;
    let loginPage;

Before(async () => {
    puppeteerObjects = await Hooks();
    listreserves = new ListReservesPage(puppeteerObjects.page); 
    loginPage = new LoginPage(puppeteerObjects.page)

});

Given('insert a office room {string} search field', async(room)=> {
   
    await listreserves.searchReservesbyRoom(room)
});

Then('show office room {string} in the list', function (string) {

});

After(async()=>{
    puppeteerObjects.browser.close();
});