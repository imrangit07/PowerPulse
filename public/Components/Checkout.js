import {isUserLogin} from "./isUserLogin";


function Checkout() {
    const checkout = document.querySelector("#Checkout");
    const checkoutDisplayflex = document.querySelector("#checkoutDisplayNone");
    if (checkout) {
        checkout.addEventListener("click", () => {
            isUserLogin()
        })
    }


    if (checkoutDisplayflex) {
        checkoutDisplayflex.addEventListener("click", (e) => {
            if (e.target.id === "checkoutDisplayNone") {
                checkoutDisplayflex.style.display = "none";
            }

        })
    }



}


// function CheckoutPopup(){}

export default Checkout;