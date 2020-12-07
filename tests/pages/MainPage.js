import { Selector} from 'testcafe';

class MainPage {
    constructor () {
        this.searchInput = Selector('input#twotabsearchtextbox');
        this.searchButton=Selector('input[value=Go]');
    }
}

export default MainPage;