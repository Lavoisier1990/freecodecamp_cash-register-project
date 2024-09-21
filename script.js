const customerCash = document.getElementById("cash");
const purchaseTotal = document.getElementById("price-screen");
const resultsDiv = document.getElementById("change-due");
const oneBtn = document.getElementById("one-btn");
const twoBtn = document.getElementById("two-btn");
const threeBtn = document.getElementById("three-btn");
const fourBtn = document.getElementById("four-btn");
const fiveBtn = document.getElementById("five-btn");
const sixBtn = document.getElementById("six-btn");
const sevenBtn = document.getElementById("seven-btn");
const eightBtn = document.getElementById("eight-btn");
const nineBtn = document.getElementById("nine-btn");
const dotBtn = document.getElementById("dot-btn");
const zeroBtn = document.getElementById("zero-btn");
const clearBtn = document.getElementById("clear-btn");
const resetBtn = document.getElementById("reset-btn");
const purchaseBtn = document.getElementById("purchase-btn");


let price = 1.87;
purchaseTotal.innerText = `${price}`;

let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

oneBtn.addEventListener("click", () => {
  if (customerCash.value.length === 0){
   customerCash.focus();
   customerCash.value += 1;
} else {
   customerCash.value += 1;
};
});

twoBtn.addEventListener("click", () => {
  if (customerCash.value.length === 0){
   customerCash.focus();
   customerCash.value += 2;
} else {
   customerCash.value += 2;
};
});

threeBtn.addEventListener("click", () => {
  if (customerCash.value.length === 0){
   customerCash.focus();
   customerCash.value += 3;
} else {
   customerCash.value += 3;
};
});

fourBtn.addEventListener("click", () => {
  if (customerCash.value.length === 0){
   customerCash.focus();
   customerCash.value += 4;
} else {
   customerCash.value += 4;
};
});

fiveBtn.addEventListener("click", () => {
   if (customerCash.value.length === 0){
    customerCash.focus();
    customerCash.value += 5;
} else {
    customerCash.value += 5;
};
});

sixBtn.addEventListener("click", () => {
   if (customerCash.value.length === 0){
    customerCash.focus();
    customerCash.value += 6;
} else {
    customerCash.value += 6;
};
});

sevenBtn.addEventListener("click", () => {
  if (customerCash.value.length === 0){
   customerCash.focus();
   customerCash.value += 7;
} else {
   customerCash.value += 7;
};
});

eightBtn.addEventListener("click", () => {
   if (customerCash.value.length === 0){
    customerCash.focus();
    customerCash.value += 8;
} else {
    customerCash.value += 8;
};
});

nineBtn.addEventListener("click", () => {
   if (customerCash.value.length === 0){
    customerCash.focus();
    customerCash.value += 9;
} else {
    customerCash.value += 9;
};
});

dotBtn.addEventListener("click", () => {
  // Get the current value of the input
  let currentValue = customerCash.value;

  // Add a period to the input value
  if (currentValue.indexOf('.') === -1) {
      currentValue += '.'; // Add a period only if it doesn't already have one
  }

  // Update the input field with the new value
  customerCash.value = currentValue;
});

zeroBtn.addEventListener("click", () => {
   if (customerCash.value.length === 0){
    customerCash.focus();
    customerCash.value += 0;
} else {
    customerCash.value += 0;
};
});

clearBtn.addEventListener("click", () => {
   if (customerCash.value.length === 0){
    customerCash.focus();
    customerCash.value += " ";
} else {
    customerCash.value += " ";
};
});
