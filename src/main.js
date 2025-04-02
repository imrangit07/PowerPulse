import './style.css';
import './AutoSwiper.js';
import Toggle from './Toggle.js';
import ToggleLogin from './ToggleLogin.js';
import UserSignup from './UserSignup.js';
import {UserLogin,UserLogout} from './UserLogin.jsx';
import LoadPage from './Load.js';
// import { toggleLogin } from './Login';


import products1 from "./Api/Products1.json";
import { showProducts1Content } from './products/Product1';
LoadPage();
Toggle();
ToggleLogin();
UserSignup();
UserLogin();
UserLogout();



// console.log(products1);

// function for the products1
showProducts1Content(products1)

