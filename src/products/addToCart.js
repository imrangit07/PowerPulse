
import LoadPage from "../Load";
import { cardCountUpdate } from "./cardCountUpdate";
// import { cartTotalPrice } from "./cartTotalPrice";
import { getLocalStorageCart } from "./getLocalStorageCart";
import { showWishListCount } from "./wishListItems";


// import { showCartItems } from "./showCartItems";

let localStorageItem = getLocalStorageCart();
export const addToCart = (id) => {

    // const currentLaptopItem = document.querySelector(`#card${id}`);
    let cartId = `${id}`
    let itemQuantity = document.querySelector("#quantityInput").value;
    let itemPrice = document.querySelector("#currentPrice").textContent;

    itemPrice = itemPrice.replace("₹", "");
    itemPrice = Number(itemPrice * itemQuantity);
    itemQuantity = Number(itemQuantity)


    let existingItem = localStorageItem.find((item) => item.cartId === cartId);

    

    if (existingItem && itemQuantity > 1) {
        // itemPrice = itemQuantity * itemPrice;
        console.log(cartId, itemPrice, itemQuantity);

        let updateItem = { cartId, itemPrice, itemQuantity };

        updateItem = localStorageItem.map((curItem) => {
            return curItem.cartId === cartId ? updateItem : curItem;
        });
        // console.log(updateItem);

        localStorage.setItem("cartItems", JSON.stringify(updateItem));

    }
    if (existingItem) {
        // alert("This Item is Already Exists.")

         

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

    

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-right",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    Toast.fire({
        icon: "success",
        title: `${id} - Cart Added Successfully`
      }); 

    // console.log(localStorageItem);

    // showCartItems(localStorageItem);
cardCountUpdate();
}
// showCartItems(localStorageItem);

cardCountUpdate();
showWishListCount();



