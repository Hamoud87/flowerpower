const detailsContainer = document.querySelector(".product-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const mila = params.get("id");
console.log(mila);

const url = "https://www.madani.one/wp-json/wc/store/products/" + mila;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details);
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

function createHtml(details) {
  detailsContainer.innerHTML = `
                                  
                                  <img src="${details.images[0].src}" alt="${details.name}">  
                                  <div class="pro-details">
                                  <h1>${details.name}</h1>
                                  <h4 >${details.categories[0].name}</h4>
                                
                                  <h4 >${details.price_html}</h4>
                                  </div>`;
}
