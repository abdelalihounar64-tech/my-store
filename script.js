// عدد القطع داخل العلبة

const piecesPerBox = 12;

// الكمية

let quantity = 1;

// النوع

let currentType = "piece";


// تغيير الصورة

function changeImage(src){

  document
  .getElementById("mainProductImage")
  .src = src;

}


// تكبير الصورة

const mainImage =
document.getElementById("mainProductImage");

mainImage.addEventListener("click", () => {

  document
  .getElementById("zoomModal")
  .style.display = "flex";

  document
  .getElementById("zoomedImage")
  .src = mainImage.src;

});


// إغلاق التكبير

function closeZoom(){

  document
  .getElementById("zoomModal")
  .style.display = "none";

}


// اختيار قطعة أو علبة

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


// زيادة

function increaseQuantity(){

  if(currentType === "piece"){

    quantity += 1;

  }else{

    quantity += piecesPerBox;

  }

  updateQuantity();

}


// نقصان

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

  updateQuantity();

}


// تحديث الرقم

function updateQuantity(){

  document
  .getElementById("quantity")
  .innerText = quantity;

}


// واتساب

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
