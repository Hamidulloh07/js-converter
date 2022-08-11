let elForm = document.querySelector("form");
let elInputFirst = document.querySelector(".input-1")
let elInputSecond = document.querySelector(".input-2");

elInputFirst.oninput = () => {
  let elOutput = ((elInputFirst.value) * 1.8) + 32;
  let elOutput2 = ((elInputFirst.value) + 273.15);
  elInputSecond.value = (elOutput.toFixed(2));
  elInputThird.value = (elOutput2.toFixed(2));

}

elInputSecond.oninput = () => {
  let elOutput = (((elInputSecond.value) - 32) / 1.8);
  let elOutput2 = (((elInputSecond.value) - 32) / 1.8) + 273.15;
  elInputFirst.value = (elOutput.toFixed(2));
  elInputThird.value = (elOutput2.toFixed(2));
};


// let elForm = document.querySelector(".form");
// let elInput = document.querySelector(".form-control");
// let elList = document.querySelector(".list");


// let foodElement = [];
// console.log(foodElement);
// let res = foodElement.includes();


// elForm.addEventListener("submit", function(evt) {
//   evt.preventDefault();
//   let elInputValue = (elInput.value).trim();
//   foodElement.push(elInputValue);
//   elInput.focus();
//   elInput.value = "";
//   elList.innerHTML = "";

//   for(item of foodElement) {
//     let elItem = document.createElement("li")
//     elItem.setAttribute("class", "inner__item");
//     elItem.textContent = item;
//     elList.appendChild(elItem);

//   if (elInputValue == true) {
//     alert("qale");



//   };

// }    

// });
// let elFormProducts = document.querySelector(".form-products");
// let elInputProducts = elFormProducts.querySelector(".input-products");

// let elListProducts = document.querySelector(".list-products");

// let productsArr = [];

// elFormProducts.addEventListener("submit", function(evt) {
//   evt.preventDefault();

//   let productsValue = elInputProducts.value.trim();
//   productsArr.push(productsValue);
//   elInputProducts.focus();
//   elInputProducts.value = "";
//   elListProducts.innerHTML = "";
  
//   for (product of productsArr) {
//     let elItemProduct = document.createElement("li");
//     elItemProduct.setAttribute("class", "list-group-item");
//     elItemProduct.textContent = product;
//     elListProducts.appendChild(elItemProduct);
//   }
// })