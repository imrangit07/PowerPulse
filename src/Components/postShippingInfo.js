
import getData from "../products/getData.js";

let checkoutBtn = document.querySelector(".checkout-btn");


if (checkoutBtn) {
    checkoutBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const success = await postShippingInfo();
        if (success) {
            location.href = "./paymentSuccess.html";
        } else {
            alert("Please fill in all fields before proceeding.");
        }
    });
}

// let userData = JSON.parse(localStorage.getItem("user"));
// console.log(userData);


async function postShippingInfo() {
    let fullName = document.querySelector("#fullName").value.trim();
    let city = document.querySelector("#city").value.trim();
    let state = document.querySelector("#state").value.trim();
    let pinCode = document.querySelector("#pincode").value.trim();
    let landmark = document.querySelector("#landmark").value.trim();
    let area = document.querySelector("#area").value.trim();
    let pNumber = document.querySelector("#phone").value.trim();
    let email = document.querySelector("#email").value.trim();


    if (!fullName || !city || !state || !pinCode || !area || !pNumber || !email) {
        return false;
    }

    try {
        const res = await fetch("http://localhost:3000/shippingInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullName,
                city,
                state,
                pinCode,
                landmark,
                area,
                pNumber,
                email
            })
        });

        if (res.ok) {
            return true;
        } else {
            alert("Failed to submit shipping info.");
            return false;
        }
    } catch (error) {
        console.error("Error posting shipping info:", error);
        alert("Something went wrong!");
        return false;
    }
}

export default postShippingInfo;
