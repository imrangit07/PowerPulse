
import getData from "../products/getData.js";
// import { getShippingInfo } from "./isUserLogin.js";

let paymentBtn = document.querySelector("#paymentBtn");


if (paymentBtn) {
    paymentBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const success = await postShippingInfo();
        if (success) {
            location.href = "./paymentSuccess.html";
        } else {
            alert("Please fill in all fields before proceeding.");
        }
    });
}






async function updateShippingInfo() {

    const res = await fetch("http://localhost:3000/shippingInfo") 
    .then(response => response.json())
    .then(data => {return data})
    .catch(error => {
        console.error('Error fetching data:', err);
        return null;
    });
    let userData =JSON.parse (localStorage.getItem("user"));


    const data = res.find((info)=>info.email === userData.email)
    console.log(data.id);
    
   
    let fullName = document.querySelector("#fullName").value=`${data.fullName}`
    let city = document.querySelector("#city").value=`${data.city}`
    let state = document.querySelector("#state").value=`${data.state}`
    let pinCode = document.querySelector("#pincode").value=`${data.pinCode}`
    let landmark = document.querySelector("#landmark").value=`${data.landmark}`
    let area = document.querySelector("#area").value=`${data.area}`
    let pNumber = document.querySelector("#phone").value=`${data.pNumber}`
    let email = document.querySelector("#email").value=`${data.email}`


    if (!fullName || !city || !state || !pinCode || !area || !pNumber || !email) {
        return false;
    }

    try {
        const res = await fetch("http://localhost:3000/orders", {
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

export default updateShippingInfo;
