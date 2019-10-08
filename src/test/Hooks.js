
import puppeteer from 'puppeteer';
import {Before} from 'cucumber';


export const Hooks = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage()

    return {page:page,browser:browser};

}

