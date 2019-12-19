import Base from '../core/Base'

export default class ListReservesPage extends Base{

    constructor(page){
        super(page);
    }

    async searchReservesbyRoom(room){
        
        await super.TypeInput('input[type=search]', room)
    }
    async loginSuccess(){
        await super.OpenUrl('https://triadproject.herokuapp.com/login.php')
        await super.TypeInput('input[placeholder="Entre com seu E-mail"]', 'admin@gmail.com');
        await super.TypeInput('#login_pass', '123456');
        await super.ClickButton('#form-login button');
        await super.titlePage('Projeto TRIAD')
        await super.verifyText('.user-details div','Olá Administrador');
        
       
    }

    async verifyOfficeRoom(office){
        await super.verifyText('table tbody tr td', office);
    }

}