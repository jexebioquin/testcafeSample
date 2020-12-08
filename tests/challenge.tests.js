import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import config from './config';
import { enterName, getProductID} from './helper';

fixture `Search Amazon Web Site`

.page(config.baseUrl);

test.disablePageCaching('Get Headphones Best Sellers', async t => {
    
    const mainPage=new MainPage();
    const resultPage=new ResultPage();
    await enterName(mainPage.searchInput,mainPage.searchButton,'headphones');
    await resultPage.resultLabel.with({ visibilityCheck: true })();;
    const num=await resultPage.resultList.count;

    await t.expect(num).gt(0, 'best seller count is 0');
    var res=new Array();
    for(var i=0;i<num;i++)
    {
     
      const article=await resultPage.resultList.nth(i).textContent;
      const productID=await getProductID(resultPage.resultList.nth(i));
      const productDescrip=await resultPage.getProductDescription(productID);
      res.push(article+' - '+productDescrip+'\n');
    }

    console.log(res)
});