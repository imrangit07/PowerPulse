import { getLocalStorageCart } from "../products/getLocalStorageCart";
import { OrderDetail } from "./OrderDetails";


export const paymentSuccess = document.addEventListener('DOMContentLoaded', function () {
    const orderNumberEl = document.getElementById('order-number');
    const orderDateEl = document.getElementById('order-date');
    const totalAmount = document.getElementById('total-amount');

    let localStorageItem = getLocalStorageCart();
    console.log(localStorageItem);
    let initialVal = 0;

    let tolalItemPrice = localStorageItem.reduce((accum, curItem) => {
        let itemPrice = parseInt(curItem.itemPrice) || 0;

        return itemPrice + accum;

    }, initialVal)
    // This is for show total amount
    let tax = Math.floor((tolalItemPrice * 9) / 100);
    let delivery = (tolalItemPrice<1)?tolalItemPrice:50;

    totalAmount.innerHTML = `₹${tolalItemPrice + tax + tax + delivery}`;

    if (orderNumberEl && orderDateEl) {
        // Generate random order number
        const orderNumber = '#' + Math.floor(Math.random() * 900000 + 100000);
        orderNumberEl.textContent = orderNumber;

        // Set current date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        orderDateEl.textContent = today.toLocaleDateString(undefined, options);

        // Start confetti effect
        createConfetti();
        // OrderDetail(localStorageItem)
    }
});


// function continueShopping() {
//     alert('Redirecting to home page...');
// }

// function viewOrder() {
//     alert('Redirecting to order details...');
// }

function createConfetti() {
    const colors = ['#4CAF50', '#2196F3', '#FFC107', '#FF5722', '#9C27B0'];
    const container = document.querySelector('.success-container');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';

        container.appendChild(confetti);

        animateConfetti(confetti);
    }
}

function animateConfetti(element) {
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;

    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transition = `all ${duration}s linear`;
        element.style.top = '100%';
        element.style.left = (parseFloat(element.style.left) + (Math.random() * 60 - 30)) + '%';

        // Remove element after animation
        setTimeout(() => {
            element.remove();
        }, duration * 1000);
    }, delay * 1000);



    setTimeout(() => {
        location.href = "./order.html";
        // location.href = "./index.html";
        // OrderDetail()
    }, 7000)
}
