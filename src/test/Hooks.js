
import puppeteer from 'puppeteer';



export const Hooks = async () => {
    const  browser = await puppeteer.launch({
        headless: true,
        args: ['--start-maximized', '--window-size=1920,1080']
    });
    const page = await browser.newPage()
     

    return {
        page:page,
        browser:browser
    };

}

