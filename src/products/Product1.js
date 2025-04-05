const products1Template = document.querySelector("#products-1--template")
const item1 = document.querySelector(".items-1")


export const showProducts1Content = (product) => {
    if (!product) {
        return false;
    }
    product.forEach(currentProduct => {
        const { itemId, imgUrl, deal, title, offIn, off } = currentProduct;

        // const productClone = document.importNode(products1Template.content, true); //This is old one
        const productClone = products1Template.content.cloneNode(true);

        // console.log(productClone);
        productClone.querySelector("#product-img").src = imgUrl;
        productClone.querySelector("#product-new").innerText = deal;
        productClone.querySelector("#main-product--title").innerText = title;
        productClone.querySelector("#off-in").innerText = offIn;
        productClone.querySelector("#off-value").innerHTML = `${off}`;
        item1.append(productClone);

    });

}