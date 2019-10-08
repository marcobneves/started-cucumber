
import puppeteer from 'puppeteer';



export const Hooks = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized', '--window-size=1920,1080']
    });
    const page = await browser.newPage()
    await page.setViewport({width:1920, height:1080});

    return {
        page:page,
        browser:browser
    };

}

