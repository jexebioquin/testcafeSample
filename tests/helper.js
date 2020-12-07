import { t } from 'testcafe';

export async function enterName(selector1,selector2, searchtext) {
     await t
            .typeText(selector1, searchtext)
            .expect(selector1.value).eql(searchtext)
            .click(selector2);
};

export async function getProductDescription(selector) {
    const productID=await selector.getAttribute("id");
    const ID=productID.replace("-best-seller-supplementary","");
    return ID;
}

