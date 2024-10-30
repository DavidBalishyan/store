const products = [
    { name: "MacBook Pro", category: "laptop", price: 2500, status: "available" },
    { name: "iPhone 16 Pro Max", category: "phone", price: 900, status: "available" },
    { name: "Samsung Galaxy Tab", category: "tablet", price: 450, status: "available" },
    { name: "Dell XPS 13", category: "laptop", price: 1800, status: "available" },
    { name: "Google Pixel 6", category: "phone", price: 799, status: "available" },
    { name: "HP 15s", category: "laptop", price: 1500, status: "available" }
];


function displayProducts(productsToDisplay) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 
    productsToDisplay.forEach(({ name, category, price, status }) => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-4";
        productCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Category: ${category}</p>
                    <p class="card-text">Price: $${price}</p>
                    <p class="card-text">Status: ${status}</p>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

function filterProducts() {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const statusFilter = document.getElementById("statusFilter").value;

    const filteredProducts = products.filter(({ category, status }) => {
        const categoryMatch = categoryFilter === "all" || category === categoryFilter;
        const statusMatch = statusFilter === "all" || status === statusFilter;
        return categoryMatch && statusMatch;
    });

    displayProducts(filteredProducts);
}


displayProducts(products);
