import Base from '../core/Base'

export default class LoginPages extends Base{
    
    constructor(page){
        super(page);
    }

    async openPage(url){
        await super.OpenUrl(url);
        
    }

    async fillDataLogin(email, password){
        await super.TypeInput('input[placeholder="Entre com seu E-mail"]', email);
        await super.TypeInput('#login_pass', password);
    }

    async clickButtonEntrar(){
        await super.ClickButton('#form-login button');
    }

    async verifyPage(titulo){
        await super.titlePage('Projeto TRIAD')

    }

}