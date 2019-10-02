
import puppeteer from 'puppeteer';

<<<<<<< HEAD
export const Hooks = async() => {
        let page;
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: '/usr/bin/google-chrome'
        });
        return page = await browser.newPage();

}

=======
export const Hooks = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome'
    });
    const page = await browser.newPage()
    return page;
}



>>>>>>> f9534bf5e332e7199afbd569529dd8be06fd3b0a
