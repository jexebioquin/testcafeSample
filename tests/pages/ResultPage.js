import { Selector} from 'testcafe';

class ResultPage {
    constructor () {
        this.resultLabel = Selector('span.a-color-state.a-text-bold');
        this.resultList = Selector('[data-a-badge-color="sx-orange"] + span');
       
    }

    async getSelector(text){
      const selector= Selector('a[href*="'+text+'"] span');
 
       return selector.textContent;
    }
}

export default ResultPage;