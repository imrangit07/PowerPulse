
export const productQuantity = (e,stock)=>{
    let quantity = document.querySelector("#quantityInput");
    const outStock = document.querySelector("#outOfStock");


    if ((e.target.id === "quantityIncrement") && (stock > quantity.value)) {
        quantity.innerHTML = quantity.value++;
    }
    else if (e.target.id === "quantityDecrement") {
        if (quantity.value > 1) {
            quantity.innerHTML = quantity.value--;
            outStock.textContent="";
        } else {
            quantity.innerHTML = 1;

        }
    }
    else {
        outStock.textContent = `The Item is Out of Stock! We Have only ${stock} Left.`;
    }
}