const url = "https://www.balawi.one/wp-json/wc/store/products";

const productContainer = document.querySelector(".products");
async function getProducts(){
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);

    }
    catch(error) {
        console.log(error);
    }
}
getProducts();

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML +=
        `<div class="product">
           <div>
           
            <img src="${product.images[0].src}" alt="${product.name}">
            <h4>${product.name}</h4>
            <div>
            </div>`;
        
    });
}