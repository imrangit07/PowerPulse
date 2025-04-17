import { animateItemSection, animateNewItems } from "../animations.js";


const products1Template = document.querySelector("#products-1--template")
const item1 = document.querySelector(".items-1")

animateItemSection();

export const showProducts1Content = (product) => {
  if (!product) {
    return false;
  }
  product.forEach(currentProduct => {
    const { itemId, imgUrl, deal, title, offIn, off } = currentProduct;


   if(item1){
    item1.innerHTML += `
    <div class="item-1 flex-center">
     <div class="item-1--image">
      <img src="${imgUrl}" alt="product img" id="product-img">
    </div>
    <div class="item-1-details">
   <div class="detail" id="product-new">${deal}</div>
   <div>
     <span class="detail-span" id="main-product--title">${title}</span>
   </div>
   <div class="detail" id="off-in">
   ${offIn}
   </div>
   <div class="up-to">
     <div class="upto">
       <span>UP</span><br>
       <span>TO</span>
     </div>
     <div class="off-value">
       <span class="offValue" id="off-value">${off} </span>
       <span class="item-1--arrow"><i class="fa-solid fa-arrow-right"></i></span>
     </div>
   </div>
 </div>
   `
   }

  });

  // animateNewItems(newElements);
}
