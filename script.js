// =========================
// MOSTAFA STORE
// =========================


// المنتج الوحيد

const products = [

  {

    id:1,

    name:"Shampooing Chapo",

    description:
    "شامبو مغذي للشعر العادي يمنح نعومة ولمعان طبيعي مع تركيبة غنية بالبروتينات.",

    image:"images/images/product5.jpg",

    images:[

      "images/images/product5.jpg",

      "images/images/product5-2.jpg"

    ]

  }

];


// =========================
// الصفحة الرئيسية
// =========================

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
        onclick="goToProduct(${product.id})">

        أضف للسلة

        </button>

      </div>

    `;

  });

}


// فتح صفحة المنتج

function goToProduct(id){

  window.location.href =
  `product.html?id=${id}`;

}



// =========================
// صفحة المنتج
// =========================


// عدد القطع داخل العلبة

const piecesPerBox = 12;


// الكمية الحالية

let quantity = 1;


// النوع الحالي

let currentType = "piece";


// تحميل بيانات المنتج

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


// تحميل المنتج

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


// تغيير الصورة

function changeImage(src){

  document
  .getElementById("mainProductImage")
  .src = src;

}


// =========================
// تكبير الصورة
// =========================

const mainImage =
document.getElementById("mainProductImage");

if(mainImage){

  mainImage.addEventListener("click", () => {

    document
    .getElementById("zoomModal")
    .style.display = "flex";

    document
    .getElementById("zoomedImage")
    .src = mainImage.src;

  });

}


// إغلاق التكبير

function closeZoom(){

  document
  .getElementById("zoomModal")
  .style.display = "none";

}



// =========================
// قطعة أو علبة
// =========================

function selectType(type){

  currentType = type;

  document
  .getElementById("pieceBtn")
  .classList.remove("active");

  document
  .getElementById("boxBtn")
  .classList.remove("active");

  if(type === "piece"){

    document
    .getElementById("pieceBtn")
    .classList.add("active");

  }else{

    document
    .getElementById("boxBtn")
    .classList.add("active");

  }

}



// =========================
// زيادة العدد
// =========================

function increaseQuantity(){

  if(currentType === "piece"){

    quantity += 1;

  }else{

    quantity += piecesPerBox;

  }

  updateTotal();

}



// =========================
// نقصان العدد
// =========================

function decreaseQuantity(){

  if(currentType === "piece"){

    if(quantity > 1){

      quantity -= 1;

    }

  }else{

    if(quantity > piecesPerBox){

      quantity -= piecesPerBox;

    }

  }

  updateTotal();

}



// =========================
// تحديث الثمن
// =========================

const priceInput =
document.getElementById("priceInput");

if(priceInput){

  priceInput.addEventListener("input", updateTotal);

}


function updateTotal(){

  const price =
  Number(document.getElementById("priceInput").value);

  const total =
  price * quantity;

  document
  .getElementById("quantity")
  .innerText = `DH ${total}`;

}



// =========================
// واتساب
// =========================

function sendWhatsApp(){

  const product =
  document
  .getElementById("productName")
  .innerText;

  const price =
  document
  .getElementById("priceInput")
  .value;

  const type =
  currentType === "piece"
  ? "قطعة"
  : "علبة";

  const message = `

مرحبا
أريد طلب:

${product}

الكمية:
${quantity}

النوع:
${type}

الثمن:
${price} DH

`;

  const phone = "212613675970";

  const url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url,"_blank");

}
