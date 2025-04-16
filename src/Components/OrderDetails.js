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
    let basePrice = Math.floor(element.originalPrice * (1 - element.discount / 100));
    let taxRate = 9; // percent
    let cgst = Math.floor((basePrice * taxRate) / 100);
    let sgst = Math.floor((basePrice * taxRate) / 100);
    let delivery = 50;

    let totalPrice = basePrice + cgst + sgst;

    orderBox.innerHTML += `
     <div class="order-header">
        <div class="order-meta">
          <div class="order-meta-item">
            <span class="meta-label">ORDER PLACED</span>
            <span class="meta-value">10 April 2025</span>
          </div>
          <div class="order-meta-item">
            <span class="meta-label">TOTAL</span>
            <span class="meta-value" id="metaValue">₹${totalPrice}</span>
          </div>
          <div class="order-meta-item">
            <span class="meta-label">ORDER #</span>
            <span class="meta-value">406-6348292-1922745</span>
          </div>
        </div>
        <span class="order-status delivered">Delivered on Apr 14, 2025</span>
      </div>
      
      <div class="order-content">
        <div class="product-image-container">
          <img src="${element.mainImage}" class="product-image" alt="Smartphone XYZ">
          <div class="quantity-badge">1</div>
        </div>
        
        <div class="product-details">
          <a href="#" class="product-title">${element.title}</a>
          <div class="product-seller">Sold by: PowerPuls</div>
          <div class="product-price">₹${totalPrice}</div>
          <div class="delivery-info">Your item was <span class="delivery-date">delivered on Apr 14, 2025</span></div>
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
        <div class="total-amount">Order Total: ₹${totalPrice} + delivery Charges</div>
      </div>`
  })

}