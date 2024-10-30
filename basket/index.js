const products = [
  { id: 1, name: "MacBook Pro", price: 2500 },
  { id: 2, name: "iPhone 16 Pro Max", price: 900 },
  { id: 3, name: "Samsung Galaxy Tab", price: 450 },
  { id: 4, name: "Dell XPS 13", price: 1800 },
  { id: 5, name: "Google Pixel 6", price: 799 },
  { id: 6, name: "HP 15s", category: "laptop", price: 1500}
];

let cart = [];


function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; 

  products.forEach(({ id, name, price }) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4";
    productCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Price: $${price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${id})">Add to Cart</button>
                </div>
            </div>
        `;
    productList.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find(({ id }) => id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  cartItems.innerHTML = ""; 

  cart.forEach(({ id, name, price }, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <span>${name} - $${price}</span>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
        `;
    cartItems.appendChild(cartItem);
  });

  cartCount.textContent = cart.length; 
}


function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}


function clearCart() {
  cart = [];
  updateCart();
}


displayProducts();
