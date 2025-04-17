export const getWishListLs = ()=>{

    let wishItems = localStorage.getItem("wishList");
    if(!wishItems){
        return [];
    }

    wishItems=JSON.parse(wishItems);
    return wishItems;
}