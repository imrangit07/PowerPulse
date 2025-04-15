import getData from "./getData";
import { getWishListLs } from "./getWishListLs";
import { removeWishListItem } from "./removeWishListItem";

const wishCountElement = document.querySelector("#wishCount");
const localStorageWishList = getWishListLs()

const wishListItem = async () => {
    console.log(localStorageWishList);

    const apiData = await getData();
    // console.log("wish"+apiData);
    const wishlist = document.querySelector("#wishlistItem");
    wishlist.addEventListener("click", (e) => {

        wishlist.style.color = "red";
        wishlist.classList.add("animate-pop");

        setTimeout(() => {
            wishlist.classList.remove("animate-pop");
        }, 300);


        let card = e.target.closest(".wishList")
        console.log(card);

        let cardId = card.getAttribute("id")

        console.log(cardId);

        // const cardDetails = apiData.find(data => `${data.id}` == cardId);

        // console.log(cardDetails);

        let existingItem = localStorageWishList.find((item) => item.cardId === cardId);

        if (existingItem) {
          alert("This Item is Already Exists.")
            return false;
        }

        // isExistingWishItem(cardId)
        localStorageWishList.push({ cardId: cardId });

        localStorage.setItem("wishList", JSON.stringify(localStorageWishList))
        showWishListCount()
       

    })

}


// const isWishlist= ()=>{

//    let wishListID = document.querySelector(".wishlist-icon");
//    console.log(wishListID);
   
//    const wishlist = document.querySelector("#wishlistItem");
       
  
//         wishlist.style.color = "red";

// }

const showWishListCount = ()=>{
    console.log(localStorageWishList.length);
    

  if (wishCountElement) {
    wishCountElement.innerText = localStorageWishList.length;
  }else{
    console.log("wishCountElement Not Found");
    
  }
}


export {wishListItem,showWishListCount}