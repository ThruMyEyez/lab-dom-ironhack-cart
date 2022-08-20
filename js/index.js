// ITERATION 1
//! Not altering the Markup & CSS
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  //*Step 1 - Step 5
  const price = product.querySelector('.price span').innerText,
    quantity = product.querySelector('.quantity input').value,
    subTotal = product.querySelector('.subtotal span'),
    sum = price * quantity;
  subTotal.innerText = sum;
  return sum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product'),
    productsArr = [...products],
    totalAll = document.querySelector('#total-value span');
  let productsSum = 0;
  // console.log(products);
  // console.log(productsArr);
  productsArr.forEach((product) => {
    productsSum += updateSubtotal(product);
  });
  //  ITERATION 3
  //... your code goes here
  totalAll.innerText = productsSum;
  // console.log(totalAll);
  // console.log(productsSum);
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget.parentNode.parentNode;
  // removeBtns = document.querySelectorAll('.btn-remove'); // garbage code
  target.parentNode.removeChild(target);
  calculateAll();
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // you can create and interact with elements which aren't placed on the page, after that you can add them to page.
  // element at which to append =>
  const tableEl = document.querySelector('tbody');
  //tableEl.className = 'product';
  // create the row element and its child nodes & values =>
  // the tr-name element with childnodes =>
  const trProduct = document.createElement('tr');
  trProduct.setAttribute('class', 'product');
  //* the tdName element with span =>
  const tdName = document.createElement('td');
  tdName.className = 'name';
  const tdNameSpan = document.createElement('span'),
    nameValue = document.querySelector(
      '.create-product input:first-child'
    ).value;
  tdNameSpan.innerText = nameValue;
  tdName.appendChild(tdNameSpan);
  //* the tdPrice element with span =>
  const tdPrice = document.createElement('td'),
    tdPriceSpan = document.createElement('span'),
    priceValue = document.querySelector(
      '.create-product input:last-child'
    ).value;

  tdPrice.className = 'price';
  tdPrice.innerText = '$';
  tdPriceSpan.innerText = priceValue;
  tdPrice.appendChild(tdPriceSpan);
  //let rowToAdd = document.createElement('tr').setAttribute('class', 'product');
  //rowToAdd.setAttribute('class', 'product');

  //console.log(rowToAdd);
  //tableEl.appendChild(rowToAdd);
  // append the final child element =>
  const addRow = tableEl.insertRow(-1); //.createElement('td');
  addRow.appendChild(tdName);
  // testing
  console.log(tableEl, tdName, trProduct, nameValue);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //* getting all available rm buttons on Page when site is loaded as array
  //* iterate thru the array of available rm buttons
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
  //* createProduct onlick event to call the createProduct function.
  const cProduct = document.querySelector('#create');
  cProduct.addEventListener('click', createProduct);
});
