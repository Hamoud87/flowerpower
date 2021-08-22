const url = "https://www.madani.one/wp-json/wc/store/products?category=19";

const productContainer = document.querySelector(".products");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
    console.log(getResults);
  } catch (error) {
    console.log(error);
  }
}
getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="product"><a href="details.html?id=${product.id}">
           <div>
           
            <img src="${product.images[0].src}" alt="${product.name}">
            </a>
            <div class="product-detials">
            <h2>${product.name}</h2>
            <p class="pro-price">${product.price_html}</hp>
            </div>
            <button data-product="${product.id}" class="cta-buy">Add To Cart</button>
            </div>`;
  });
}
