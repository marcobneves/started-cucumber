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

    async verifyPage(){
        await super.titlePage('Projeto TRIAD')

    }
    async verifyUserAuthenticated(){
        await super.verifyText('.user-details div','Olá Administrador');

    }

    async VerifyErrorMessage(message){
        await super.verifyText('.alert-error div span', message)
    }

    async LoginSuccess(){
        await super.OpenUrl('https://triadproject.herokuapp.com/login.php')
        await super.TypeInput('input[placeholder="Entre com seu E-mail"]', 'admin@gmail.com');
        await super.TypeInput('#login_pass', '123456');
        await super.ClickButton('#form-login button');
       
    }

    

}