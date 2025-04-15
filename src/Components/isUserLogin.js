import getData from "../products/getData"
import postShippingInfo from "./postShippingInfo";
import updateShippingInfo from "./updateShippingInfo";
const checkoutDisplayflex = document.querySelector("#checkoutDisplayNone");


const isUserLogin = async() => {
   
    const res = await fetch("http://localhost:3000/shippingInfo") 
    .then(response => response.json())
    .then(data => {return data})
    .catch(error => {
        console.error('Error fetching data:', err);
        return null;
    });

    
    
    let userData =JSON.parse (localStorage.getItem("user"));
    console.log(userData);

    if(userData){
        const data = res.find((info)=>info.email === userData.email)
        console.log(data);
     
            if (userData) {
                checkoutDisplayflex.style.display = "block";
                
                if(userData.email == data.email){
                    updateShippingInfo();
                }else{
                    postShippingInfo()
                }
            }
           }else {
            alert("Please Login or Signup");      
        } 
    }
   


export  {isUserLogin};