import getData from "../products/getData";
import { getLocalStorageCart } from "../products/getLocalStorageCart";


export const OrderDetail = async (id) => {
  let orderBox = document.querySelector('#orderBox');

  console.log("I am from order detail");
  let localStorageItem = getLocalStorageCart();
  const apiData = await getData()
  console.log(apiData);

  // console.log(localStorageItem.cartId);
  const matchedObjects = apiData.filter(dbItem =>
    localStorageItem.some(localItem =>
      localItem.cartId === dbItem.id
    )
  );
  console.log("find");


  console.log(matchedObjects);

  console.log(localStorageItem);

  matchedObjects.forEach((element) => {


    const localItem = localStorageItem.find(item => item.cartId === element.id);
    const quantity = localItem ? localItem.itemQuantity : 1;

    let basePrice = Math.floor(element.originalPrice * (1 - element.discount / 100));
    let totalPrice = (basePrice * quantity);
    let taxRate = 9; // percent
    let cgst = Math.floor((totalPrice * taxRate) / 100);
    let sgst = Math.floor((totalPrice * taxRate) / 100);
    let delivery = 50;

    

    // Set current date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    let currentDate = today.toLocaleDateString(undefined, options);

    //set Delivere Date 
    // Set current date + 4 days
    const Doptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const Dtoday = new Date();
    Dtoday.setDate(Dtoday.getDate() + 4);
    let delivereDate = Dtoday.toLocaleDateString(undefined, Doptions);

    orderBox.innerHTML += `
     <div class="order-header">
        <div class="order-meta">
          <div class="order-meta-item">
            <span class="meta-label">ORDER PLACED</span>
            <span class="meta-value">${currentDate}</span>
          </div>
          <div class="order-meta-item">
            <span class="meta-label">PRICE</span>
            <span class="meta-value" id="metaValue">₹${totalPrice}</span>
          </div>
          <div class="order-meta-item">
            <span class="meta-label">ORDER #</span>
            <span class="meta-value">406-6348292-1922745</span>
          </div>
        </div>
        <span class="order-status delivered">Delivered on ${delivereDate}</span>
      </div>
      
      <div class="order-content">
        <div class="product-image-container">
          <img src="${element.mainImage}" class="product-image" alt="image">
          <div class="quantity-badge">${quantity}</div>
        </div>
        
        <div class="product-details">
          <a href="#" class="product-title">${element.title}</a>
          <div class="product-seller">Sold by: PowerPuls</div>
          <div class="product-price">₹${totalPrice}</div>
          <div class="delivery-info">Your item was <span class="delivery-date">delivered on ${delivereDate}</span></div>
          <div class="delivery-info">Courier: BlueDart (Tracking #BD785412369IN)</div>
        </div>
        
        <div class="order-actions">
          <button class="action-btn primary-btn">Buy Again</button>
          <button class="action-btn secondary-btn">View Invoice</button>
          <button class="action-btn secondary-btn">Rate Product</button>
          <button class="action-btn danger-btn">Cancel</button>
        </div>
      </div>
      
      <div class="order-footer">
        <div class="total-sub-amount"> <strong>Price:</strong> ₹${totalPrice} + <strong>CGST:</strong> ${cgst} + <strong>SGST:</strong> ${sgst} + <strong>delivery Charges:</strong> ₹50 </div>
        <div class="total-amount">Total Price : <span class="total-price--count"> ₹${totalPrice + cgst + sgst + delivery} </span></div>
      </div>`
  })

}