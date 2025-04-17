import { getLocalStorageCart } from "./getLocalStorageCart";

export const cardCountUpdate = ()=>{
    let localStorageItem = getLocalStorageCart();
  
    cartCoutn.innerHTML = `${localStorageItem.length}`;
  }