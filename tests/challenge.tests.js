import page from './page-model';

fixture `Search Amazon Web Site`

.page `https://www.amazon.com/`;

test('Get Headphones Best Sellers', async t => {
    

    await page.searchItem('headphones');
    const num= page.getBestSellersCount;
    for(var i=0;i<num;i++)
       console.log('Best Seller : ' + page.getBestSellersText(i));

});