
import LoadPage from "../Load";
import { cardCountUpdate } from "./cardCountUpdate";
import { getLocalStorageCart } from "./getLocalStorageCart";

// import { showCartItems } from "./showCartItems";

let localStorageItem = getLocalStorageCart();
export const addToCart = (e, id, stock) => {

    // const currentLaptopItem = document.querySelector(`#card${id}`);
    let cartId = `cart${id}`
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
        console.log(updateItem);

        localStorage.setItem("cartItems", JSON.stringify(updateItem));

    }
    if (existingItem) {
        // alert("Already in cart!")
        return false;
    }
    localStorageItem.push({ cartId, itemPrice, itemQuantity });

    localStorage.setItem("cartItems", JSON.stringify(localStorageItem))



    // console.log(localStorageItem);

    // showCartItems(localStorageItem);
cardCountUpdate()

}
// showCartItems(localStorageItem);

cardCountUpdate()

