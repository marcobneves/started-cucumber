
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
        await expect(this.page.title()).resolves.toMatch(titulo)
    }

}