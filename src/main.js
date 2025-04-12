import './style.css';
import './AutoSwiper.js';
import Toggle from './Toggle.js';
import ToggleLogin from './ToggleLogin.js';
import UserSignup from './UserSignup.js';
import { UserLogin, UserLogout } from './UserLogin.js';
import LoadPage from './Load.js';
import getLaptopData from './products/Laptops.js';
import products1 from "./Api/Products1.json";
import { showProducts1Content } from './products/Product1';

// for GSAP
import {
    animateHeader,
    popupMainTopSection,
} from "./animations.js";


LoadPage();
Toggle();
ToggleLogin();
UserSignup();
UserLogin();
UserLogout();
getLaptopData();



document.addEventListener("DOMContentLoaded", () => {
    animateHeader();
    popupMainTopSection();
   
});




// document.addEventListener("DOMContentLoaded",()=>{
//     init();
// })

showProducts1Content(products1)

