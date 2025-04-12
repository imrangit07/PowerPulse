import { getWishListLs } from "./getWishListLs"

export const removeWishListItem = (id)=>{
let localStorageWishlist = getWishListLs();

localStorageWishlist=localStorageWishlist.filter((curWish)=>curWish.cardId !==id);

localStorage.setItem("wishList", JSON.stringify(localStorageWishlist))

let removeWish = document.querySelector(`#${id}`)

if(removeWish){
    removeWish.remove();
}
}