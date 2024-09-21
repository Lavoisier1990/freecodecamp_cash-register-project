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
const purchaseBtn = document.getElementById("purchase-btn");

customerCash.addEventListener('input', function() {
  // Replace commas with periods
  let value = this.value.replace(/,/g, '.');

  // Remove non-numeric characters except for decimal point
  value = value.replace(/[^0-9.]/g, '');

  // Ensure only two decimal places
  const decimalIndex = value.indexOf('.');
  if (decimalIndex !== -1) {
      value = value.substring(0, decimalIndex + 3); // Keep two decimal places
  }

  this.value = value;
});


let price = 1.87;
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
