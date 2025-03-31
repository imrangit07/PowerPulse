import './style.css';
import './AutoSwiper';
import Toggle from './toggle';
import ToggleLogin from './ToggleLogin';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
// import { toggleLogin } from './Login';


import products1 from "./Api/Products1.json";
import { showProducts1Content } from './products/Product1';

Toggle();
ToggleLogin();
UserSignup();
UserLogin();
// console.log(products1);

// function for the products1
showProducts1Content(products1)

