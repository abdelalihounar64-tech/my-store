const products = [

  {
    id:1,
    name:"Aluminium",
    description:"منتج عالي الجودة للاستعمال اليومي.",
    image:"images/product1.jpg",

    images:[
      "images/product1.jpg",
      "images/product1-2.jpg",
      "images/product1-3.jpg"
    ]
  },

  {
    id:2,
    name:"Asperox",
    description:"منظف قوي لإزالة الدهون والأوساخ.",

    image:"images/product2.jpg",

    images:[
      "images/product2.jpg",
      "images/product2-2.jpg",
      "images/product2-3.jpg"
    ]
  },

  {
    id:3,
    name:"balai IP harcha",
    description:"فرشاة تنظيف قوية وعملية.",

    image:"images/product3.jpg",

    images:[
      "images/product3.jpg",
      "images/product3-2.jpg",
      "images/product3-3.jpg"
    ]
  },

  {
    id:4,
    name:"Dettol",
    description:"صابون نظافة وحماية فعالة.",

    image:"images/product4.jpg",

    images:[
      "images/product4.jpg",
      "images/product4-2.jpg",
      "images/product4-3.jpg"
    ]
  }

];


// INDEX PAGE

const productsContainer =
document.getElementById("productsContainer");

if(productsContainer){

  displayProducts(products);

}

function displayProducts(items){

  productsContainer.innerHTML = "";

  items.forEach(product => {

    productsContainer.innerHTML += `

      <div class="card">

        <a href="product.html?id=${product.id}">

          <img
          src="${product.image}"
          class="main-image">

        </a>

        <div class="small-images">

          ${product.images.map(img => `

            <img src="${img}">

          `).join("")}

        </div>

        <div class="card-content">

          <h2>${product.name}</h2>

        </div>

        <button
        class="whatsapp-btn"
        onclick="sendWhatsApp('${product.name}')">

        أضف للسلة

        </button>

      </div>

    `;

  });

}


// WHATSAPP

function sendWhatsApp(productName){

  const message = `
مرحبا أريد طلب:
${productName}
`;

  const phone = "212600000000";

  const url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url,"_blank");

}


// PRODUCT PAGE

const productName =
document.getElementById("productName");

if(productName){

  const params =
  new URLSearchParams(window.location.search);

  const id = params.get("id");

  const product =
  products.find(p => p.id == id);

  if(product){

    loadProduct(product);

  }

}

function loadProduct(product){

  document.getElementById("productName")
  .innerText = product.name;

  document.getElementById("productDescription")
  .innerText = product.description;

  document.getElementById("mainProductImage")
  .src = product.image;

  const thumbs =
  document.getElementById("productThumbs");

  thumbs.innerHTML = "";

  product.images.forEach(img => {

    thumbs.innerHTML += `

      <img
      src="${img}"
      onclick="changeImage('${img}')">

    `;

  });

}


// CHANGE IMAGE

function changeImage(src){

  document.getElementById("mainProductImage")
  .src = src;

}


// ZOOM

const mainImage =
document.getElementById("mainProductImage");

if(mainImage){

  mainImage.addEventListener("click", () => {

    document.getElementById("zoomModal")
    .style.display = "flex";

    document.getElementById("zoomedImage")
    .src = mainImage.src;

  });

}

function closeZoom(){

  document.getElementById("zoomModal")
  .style.display = "none";

}
