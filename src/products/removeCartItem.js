import { cardCountUpdate } from "./cardCountUpdate";
import { getLocalStorageCart } from "./getLocalStorageCart";
// import { showCartItems } from "./showCartItems";

export const removeCartItem=(id)=>{
    let localStorageItem =  getLocalStorageCart();
    console.log("click");
    console.log(localStorageItem);
    
    
    
    // id =  `cart${id}`
    console.log("getid: " +id);
    
    
    localStorageItem = localStorageItem.filter((curItem)=> curItem.cartId !== `cart${id}`)
    
    localStorage.setItem("cartItems", JSON.stringify(localStorageItem))

    let removeItem = document.querySelector(`#cart${id}`)
    // console.log(remove);
    if(removeItem){
        console.log(removeItem);
        
        removeItem.remove();
    }
    

    cardCountUpdate()
}