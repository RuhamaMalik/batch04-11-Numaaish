const productData = [
  {
    id: 1,
    name: "hp core i7",
    category: "Laptop",
    price: " 50,000 PKR",
    img: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Best Gaming Phones 2023",
    category: "Smartphone",
    price: "75,000 PKR",
    img: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/04/Best-gaming-phone-2023.jpg",
  },
  {
    id: 3,
    name: "Official Huawei FreeBuds Studio Wireless Headphones",
    category: "Headphones",
    price: "42,999 PKR",
    img: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "SAMSUNG Galaxy Tab S6 Lite 10.4 64GB",
    category: "Tablet",
    price: "199.9$",
    img: "https://m.media-amazon.com/images/I/415G0bg-hiL._AC._SR360,460.jpg",
  },
  {
    id: 5,
    name: "Microsoft Surface Laptop 5 Core i7 ",
    category: "Laptop",
    price: "474,999 PKR",
    img: "https://www.mega.pk/items_images/Microsoft+Surface+Laptop+5+Core+i7+12th+Generation+16GB+RAM+512GB+SSD+13+5+inch+Windows+11+Price+in+Pakistan%2C+Specifications%2C+Features_-_23885.webp",
  },
  {
    id: 6,
    name: "HP Notebook 15",
    category: "Laptop",
    price: " 45,999.00 PKR",
    img: "https://www.hshop.pk/wp-content/uploads/2019/12/HP-Notebook-15-RA008nia-Price-in-Pakistan-hshop.pk_.png",
  },
];

let searchTerm = (products, itemToSearch) => {
  let item = itemToSearch.toLowerCase();

  let result = products.filter((product) => {
    let productCategory = product.category.toLowerCase();
    return productCategory.includes(item);
  });

  return result;
};

// let result = searchTerm(productData , "laptop")

// console.log("original >>>>>>>>>>>>> " ,productData);
// console.log("filtered >>>>>>>>>>>>> " ,result);

let productSection = document.querySelector("#productSection");

let generateProductCard = (product) => {
  // console.log(product);
  return `
    <div class="product-card">
            <img class="product-image" src="${product.img}" alt="${product.name}">
            <div class="product-info">
              <div class="product-title">${product.name}</div>
              <div class="product-price">${product.price}</div>
            </div>
          </div>
    `;
};

let productsCardHtml = productData.map(generateProductCard).join("");
productSection.innerHTML = productsCardHtml;

function handleSearch(userSearch) {
  let searchResult = searchTerm(productData, userSearch);

  let productsCardHtml = searchResult.map(generateProductCard).join("");
  productSection.innerHTML = productsCardHtml;

//   if (searchResult.length > 0) {
//     productSection.innerHTML = productsCardHtml;
//   } else {
//     productSection.innerHTML = `<div class="no-match">No match found</div> `;
//   }
 searchResult.length > 0 ?
    productSection.innerHTML = productsCardHtml
  :productSection.innerHTML = `<div class="no-match">No match found</div> `
  
}
