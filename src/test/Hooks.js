
import puppeteer from 'puppeteer';

export const Hooks = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        //executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage()
    // let puppeteerObject = {
    //     page: page,
    //     browser:browser,
    // }

    return {page:page,browser:browser};

}



