import { Selector} from 'testcafe';

class ResultPage {
    constructor () {
        this.resultLabel = Selector('span.a-color-state.a-text-bold');
        this.resultList = Selector('[data-a-badge-color="sx-orange"] + span');
       
    }

    async getProductDescription(text){
      const productDescription= Selector('a[href*="'+text+'"] span');
 
       return productDescription.textContent;
    }
}

export default ResultPage;