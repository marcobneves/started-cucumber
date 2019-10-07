
import puppeteer from 'puppeteer';
import LoginPages from '../pages/LoginPage';

export const Hooks = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage()
    // let puppeteerObject = {
    //     page: page,
    //     browser:browser,
    // }

    return {page:page,browser:browser};

}