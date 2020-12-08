import { t } from 'testcafe';

export async function enterName(searchInput,searchButton, searchtext) {
     await t
            .typeText(searchInput, searchtext)
            .expect(searchInput.value).eql(searchtext, 'value in input is not '+searchtext)
            .click(searchButton);
};

export async function getProductID(bestSellerLabel) {
    const labelID=await bestSellerLabel.getAttribute("id");
    const ID=labelID.replace("-best-seller-supplementary","");
    return ID;
}

