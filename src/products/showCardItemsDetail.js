import getData from "./getData";
import { getLocalStorageCart } from "./getLocalStorageCart";
import { showPriceQuantity } from "./showCartPriceQ";
import { removeCartItem } from "./removeCartItem";
import LoadPage from "../Load";
import { cardCountUpdate } from "./cardCountUpdate";

window.removeCartItem = removeCartItem;



const showCardItemsDetail= async()=>{
const localStorageItem =  getLocalStorageCart();
const apiData =await getData();

 let cartItems = apiData.filter((cartItem)=>{
    let id = `cart${cartItem.id}`
    return localStorageItem.some((locItem)=> locItem.cartId == id );
 })
//  console.log(cartItems);

 cartItems.forEach((cartProduct)=>{
   let addCartItem = document.querySelector(".cart-items");

   let localStorageData = showPriceQuantity(cartProduct.id,cartProduct.originalPrice,cartProduct.productQuantity)
   
//    console.log("show "+localStorageData.price)

   addCartItem.innerHTML +=`
   <div class="cart-item" id="cart${localStorageData.id}">
          <img src="${cartProduct.mainImage}" alt="Smartphone" />
          <div class="product-details">
            <strong>${cartProduct.title}</strong>
            <small>${cartProduct.description}</small>
          </div>
          <div class="price" style="text-align:center">₹${localStorageData.price}</div>
          <div class="quantity-controls">
            <div><span id="quanitityNone">Quanitity : </span><span>${localStorageData.itemQuantity}</span></div>
          </div>
          <button class="remove-btn" onclick="removeCartItem('${localStorageData.id}')">Remove</button>
        </div>`

    
 })
 
}

cardCountUpdate()
LoadPage()
showCardItemsDetail();
