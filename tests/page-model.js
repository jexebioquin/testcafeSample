import { Selector, t } from 'testcafe';

class Page {
    constructor () {
        this.searchInput = Selector('input#twotabsearchtextbox');
        this.resultList = Selector('[data-a-badge-color="sx-orange"] + span');
    }

    async searchItem (searchtext) {
        await t
            .typeText(this.searchInput, searchtext)
            .pressKey('enter');
    }
     
    async getBestSellersCount (searchtext) {
        await t.this.resultList.count;
    }

    async getBestSellersText (i) {
        await t.this.resultList.nth(i);
    }

}



export default new Page();