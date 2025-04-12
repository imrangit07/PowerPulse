
import getData from "./getData";
import { getWishListLs } from "./getWishListLs"
import { showPriceQuantity } from "./showCartPriceQ";
import { addWishListinCart } from "./addWishListinCart";
import { emptyCart } from "./removeCartItem";



let localStorageItem = getWishListLs();
const ShowWishlistItem = async () => {
  const apiData = await getData();
  // console.log(localStorageItem);
  // console.log(apiData);
  let wishItems = apiData.filter((wishItem) => {

    return localStorageItem.some((locItem) => locItem.cardId === wishItem.id);
  })

  console.log(wishItems);

  wishItems.forEach((WishProduct) => {
    let addWishItem = document.querySelector(".wish-items");

    let localStorageData = showPriceQuantity(WishProduct.id, WishProduct.originalPrice, WishProduct.productQuantity)

    // let price = (localStorageData.price - ())
    console.log("show " + localStorageData.price)

    let price =Number(Math.floor((WishProduct.originalPrice) - ((WishProduct.originalPrice*WishProduct.discount)/100)))

    console.log(price);
    

    addWishItem.innerHTML += `
   
   <div class="cart-item" id="${localStorageData.id}">
          <img src="${WishProduct.mainImage}" alt="Smartphone" />
          <div class="product-details">
            <strong>${WishProduct.title}</strong>
            <small>${WishProduct.description}</small>
          </div>
          <div class="price" style="text-align:center">₹${price}</div>
          <div class="quantity-controls">
            <div id="quanitityDiv"><span id="quanitityNone">Quanitity : </span> <span> ${localStorageData.itemQuantity} </span></div>
          </div>
            <div style="text-align: center;">
            <button class="wishlist-add-to-cart-btn" data-wishId="${localStorageData.id}">Add to Cart</button>
          </div>
        </div>`

  })


  document.querySelectorAll(".wishlist-add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-wishId");
      addWishListinCart(productId);
      console.log(productId);




      // Remove WishList form local and ui 

    //   localStorageItem = localStorageItem.filter((curItem) => curItem.cartId !== productId)

    //  console.log("This is from remove");
     
    //   console.log(localStorageItem);
      
    //   localStorage.setItem("cartItems", JSON.stringify(localStorageItem))
    //   let removeWish = document.querySelector(`#${productId}`)
    
    //   if (removeWish) {
    //     console.log(removeWish);
    //     removeWish.remove();
    //   }

    });
  });
};
ShowWishlistItem()