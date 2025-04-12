import { getLocalStorageCart } from "./getLocalStorageCart";

const laptopSubtotal = document.querySelector("#laptopSubtotal")
const CGST = document.querySelector("#CGST");
const SGST = document.querySelector("#SGST");
const deliveryFee = document.querySelector("#delivery");
const finalTotalPrice = document.querySelector("#finalTotalPrice")

export const cartTotalPrice=()=>{
    let localStorageItem =  getLocalStorageCart(); 

    console.log(localStorageItem);
    
    let initialVal=0;
    
    let tolalItemPrice = localStorageItem.reduce( (accum,curItem)=>{
        let itemPrice = parseInt(curItem.itemPrice) || 0;

        return itemPrice + accum;

    },initialVal)
    

    let delivery = (tolalItemPrice<1)?tolalItemPrice:50;
    let tax = Math.floor((tolalItemPrice*9)/100);
    laptopSubtotal.textContent = `₹${tolalItemPrice}`;
    CGST.textContent = `₹${tax}`;
    SGST.textContent = `₹${tax}`;
    deliveryFee.textContent= `₹${delivery}`;
    finalTotalPrice.textContent = `₹${tolalItemPrice + tax + tax + delivery}`;
    
   
}
