// =========================
// Mostafa Store Script
// =========================


// =========================
// PRODUCTS
// =========================

const products = [

  {
    id:1,

    name:"منظف الأرض",

    description:
    "منظف قوي برائحة منعشة ولمعان رائع يدوم طويلا.",

    image:
    "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop",

    images:[
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1200&auto=format&fit=crop"
    ]
  },

  {
    id:2,

    name:"سائل غسل الملابس",

    description:
    "يحافظ على نظافة الملابس مع رائحة منعشة وفخمة.",

    image:
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",

    images:[
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop"
    ]
  },

  {
    id:3,

    name:"معطر المنزل",

    description:
    "معطر قوي لجميع الغرف برائحة تدوم طويلا.",

    image:
    "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1200&auto=format&fit=crop",

    images:[
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop"
    ]
  }

];


// =========================
// DISPLAY PRODUCTS
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

          <img src="${product.image}" alt="${product.name}">

        </a>

        <div class="card-content">

          <h2>${product.name}</h2>

          <p>${product.description}</p>

          <input
          type="number"
          class="price-input"
          placeholder="اكتب الثمن الذي تقترحه">

          <button
          class="whatsapp-btn"
          onclick="sendWhatsApp('${product.name}', this)">

          اطلب الآن

          </button>

        </div>

      </div>

    `;

  });

}


// =========================
// SEARCH
// =========================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

  searchInput.addEventListener("input", function(){

    const value = this.value.toLowerCase();

    const filtered = products.filter(product =>

      product.name.toLowerCase().includes(value)

    );

    displayProducts(filtered);

  });

}


// =========================
// WHATSAPP
// =========================

function sendWhatsApp(productName, button){

  const card = button.parentElement;

  const price =
  card.querySelector(".price-input").value;

  const message = `

مرحبا، أريد طلب:

${productName}

الثمن المقترح:
${price} درهم

`;

  // ضع رقمك هنا
  const phone = "212600000000";

  const url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

}


// =========================
// PRODUCT PAGE
// =========================

const productName =
document.getElementById("productName");

if(productName){

  const params =
  new URLSearchParams(window.location.search);

  const productId = params.get("id");

  const product = products.find(p =>

    p.id == productId

  );

  if(product){

    loadProduct(product);

  }

}

function loadProduct(product){

  document.getElementById("productName")
  .innerText = product.name;

  document.getElementById("productDescription")
  .innerText = product.description;

  const mainImage =
  document.getElementById("mainImage");

  mainImage.src = product.image;

  const thumbs =
  document.getElementById("thumbsContainer");

  if(thumbs){

    thumbs.innerHTML = "";

    product.images.forEach(image => {

      thumbs.innerHTML += `

        <img
        src="${image}"
        onclick="changeImage('${image}')">

      `;

    });

  }

}


// =========================
// CHANGE IMAGE
// =========================

function changeImage(src){

  document.getElementById("mainImage").src = src;

}


// =========================
// ZOOM IMAGE
// =========================

const mainImage =
document.getElementById("mainImage");

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


// =========================
// PRODUCT PAGE WHATSAPP
// =========================

function sendProductWhatsApp(){

  const name =
  document.getElementById("productName").innerText;

  const price =
  document.getElementById("priceInput").value;

  const message = `

مرحبا، أريد طلب:

${name}

الثمن المقترح:
${price} درهم

`;

  const phone = "212613675970";

  const url =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

}
