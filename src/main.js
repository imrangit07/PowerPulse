import './style.css';
import './AutoSwiper.js';
// import Toggle from './toggle.js';
import ToggleLogin from './ToggleLogin.js';
import UserSignup from './UserSignup.js';
import UserLogin from './UserLogin.js';
// import { toggleLogin } from './Login';


import products1 from "./Api/Products1.json";
import { showProducts1Content } from './products/Product1';

// Toggle();
ToggleLogin();
UserSignup();
UserLogin();
// console.log(products1);

// function for the products1
showProducts1Content(products1)

