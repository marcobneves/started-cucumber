
import puppeteer from 'puppeteer';

export const Hooks = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage()
    return page;
}



