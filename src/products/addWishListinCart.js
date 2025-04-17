import { cardCountUpdate } from "./cardCountUpdate";
import { getLocalStorageCart } from "./getLocalStorageCart";
import { getWishListLs } from "./getWishListLs";
import { removeWishListItem } from "./removeWishListItem";

let itemPrice = document.querySelector(".cart-item");


let localStorageItem = getLocalStorageCart();

export const addWishListinCart = (id) => {
    console.log("itemPrice " + id);
    let cartId = id;
    let itemQuantity = 1;
    let itemPrice = document.querySelector(".price").textContent;


    itemPrice = itemPrice.replace("₹", "");
    itemPrice = Number(itemPrice * itemQuantity);
    itemQuantity = Number(itemQuantity)

    console.log(`itemqu ${itemQuantity}, itemP ${itemPrice}, wishId ${id} `);

    let existingItem = localStorageItem.find((item) => item.cartId === cartId);

    console.log("existingItem " +existingItem);
    
    if (existingItem) {
          

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    Toast.fire({
        icon: "info",
        title: `${id} - This Item is Already Exists.`
      });
        return false;
    }

    localStorageItem.push({ cartId, itemPrice, itemQuantity });

    localStorage.setItem("cartItems", JSON.stringify(localStorageItem))
    cardCountUpdate()

    removeWishListItem(cartId)
}


const emptyWishList = ()=>{
    
    let localStorageItem =  getWishListLs();
    console.log();
    
 if(localStorageItem.length<1){
    defaultWishList.style.display ="flex";
    console.log("flex");
    
 }else{
    defaultWishList.style.display ="none";
    console.log("none");

 }
}
emptyWishList()