import Base from '../core/Base'

export default class ListReservesPage extends Base{

    constructor(page){
        super(page);
    }

    async searchReservesbyRoom(room){
        await super.TypeInput('input', room)
    }
}