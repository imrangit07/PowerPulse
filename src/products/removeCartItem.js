import { cardCountUpdate } from "./cardCountUpdate";
import { cartTotalPrice } from "./cartTotalPrice";
import { getLocalStorageCart } from "./getLocalStorageCart";
import { showWishListCount } from "./wishListItems";

const defaultCart = document.querySelector("#defaultCart");


const removeCartItem=(id)=>{

    let localStorageItem =  getLocalStorageCart();
    // console.log("click");
    // console.log(localStorageItem);
    
    
    
    // id =  `cart${id}`
    // console.log("getid: " +id);
    
    
    localStorageItem = localStorageItem.filter((curItem)=> curItem.cartId !== id)
    
    
    localStorage.setItem("cartItems", JSON.stringify(localStorageItem))

    let removeItem = document.querySelector(`#${id}`)
    // console.log(remove);
    if(removeItem){
        console.log(removeItem);
        
        removeItem.remove();
    }
    
    console.log(localStorageItem);
    showWishListCount();
    cardCountUpdate();
    cartTotalPrice();
    emptyCart();
}

const emptyCart = ()=>{
    
    let localStorageItem =  getLocalStorageCart();
    console.log();
    
 if(localStorageItem.length<1){
    defaultCart.style.display ="flex";
    console.log("flex");
    
 }else{
    defaultCart.style.display ="none";
    console.log("none");

 }
}

export {removeCartItem,emptyCart}