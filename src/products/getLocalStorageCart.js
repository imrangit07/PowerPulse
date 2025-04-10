export const getLocalStorageCart = ()=>{

    let cardItems = localStorage.getItem("cartItems");
    if(!cardItems){
        return [];
    }

    cardItems=JSON.parse(cardItems);
    return cardItems;
}