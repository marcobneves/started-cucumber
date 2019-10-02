
import puppeteer from 'puppeteer';

export const Hooks = async() => {
        let page;
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: '/usr/bin/google-chrome'
        });
        return page = await browser.newPage();

}

