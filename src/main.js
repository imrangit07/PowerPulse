import './style.css';
import './AutoSwiper.js';
import Toggle from './Toggle.js';
import ToggleLogin from './ToggleLogin.js';
import UserSignup from './UserSignup.js';
import {UserLogin,UserLogout} from './UserLogin.js';
import LoadPage from './Load.js';
import getLaptopData from './products/Laptops.js';

// import { toggleLogin } from './Login';


import products1 from "./Api/Products1.json";
import { showProducts1Content } from './products/Product1';
// import getData from './products/getData.js';
// import setData from './products/setData.js';

    LoadPage();
    Toggle();
    ToggleLogin();
    UserSignup();
    UserLogin();
    UserLogout();
    getLaptopData();
    // getData();
    // setData()




// document.addEventListener("DOMContentLoaded",()=>{
//     init();
// })

showProducts1Content(products1)

