import { getLocalStorageCart } from "./getLocalStorageCart";

export const showPriceQuantity = (id, price,quantity)=>{
    const localStorageItem =  getLocalStorageCart();

    let itemQuantity = 1;
    
    
    let existingItem = localStorageItem.find((curItem)=> curItem.cartId == `cart${id}`)


    if(existingItem){
        itemQuantity= existingItem.itemQuantity;
        price = existingItem.itemPrice;
    } 
    

    return {itemQuantity,price,id}
}