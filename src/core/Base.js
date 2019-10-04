const assert = require('assert')
export default class Base{

    constructor(page){
        this.page = page;
    }

    async OpenUrl(url){
        await this.page.goto(url);
    }

    async TypeInput (locate, text){
        await this.page.type(locate, text);
    }

    async ClickButton(locator){
        await this.page.click(locator);
    }
    async titlePage(titulo) {
        await this.page.title(titulo)
    }

    async verifyText(locator, text){     
        var elemento = await this.page.waitForSelector(locator, 5000);
        var texto = await this.page.evaluate((element) => element.textContent, elemento);
        assert.equal(text, texto)
    }

}