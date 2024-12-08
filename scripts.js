// Common product data shared across all pages
const products = [
  {
    id: 1,
    name: "Leather Handbag",
    description: "A classic handbag perfect for any occasion.",
    image: "Images/product1.jpeg",
  },
  {
    id: 2,
    name: "Modern Sneakers",
    description: "Comfortable sneakers for everyday wear.",
    image: "Images/product2.jpeg",
  },
  {
    id: 3,
    name: "Elegant Wristwatch",
    description: "A timeless wristwatch with a sleek design",
    image: "Images/product3.jpeg",
  },
  {
    id: 4,
    name: "Elegant Wristwatch",
    description: "A timeless wristwatch with a sleek design",
    image: "Images/product4.jpeg",
  },
  {
    id: 5,
    name: "Headset",
    description: "A comfortable headset for music and calls",
    image: "Images/product5.jpeg",
  },
  {
    id: 6,
    name: "Handbag",
    description: "A classic handbag perfect for any occasion.",
    image: "Images/product6.jpeg",
  },
  {
    id: 7,
    name: "Smartphone",
    description:
      "A sleek smartphone with a large display and long battery life",
    image: "Images/product7.jpeg",
  },
];

// Initialize the product feed page
function initProductFeed() {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      // Navigate to product-view.html with product index as a query parameter
      window.location.href = `./product-view.html?productIndex=${index}`;
      // Debugging logs
      const targetUrl = `./product-view.html?productIndex=${index}`;
      console.log("Redirecting to:", targetUrl);
      window.location.href = targetUrl;
    });
  });
}

// Initialize the product view page
function initProductView() {
  const urlParams = new URLSearchParams(window.location.search);
  const productIndex = parseInt(urlParams.get("productIndex"), 10);

  if (
    isNaN(productIndex) ||
    productIndex < 0 ||
    productIndex >= products.length
  ) {
    alert("Invalid product selection.");
    window.location.href = "index.html";
    return;
  }

  const product = products[productIndex];
  const productContainer = document.querySelector(".product-view");
  productContainer.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-details">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button class="btn btn-block">Add to Cart</button>
            <button class="btn btn-block">Place Order</button>
        </div>
    `;
}

// Execute scripts based on the current page
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("index.html")) {
    initProductFeed();
  } else if (window.location.pathname.includes("product-view.html")) {
    initProductView();
  }
});
