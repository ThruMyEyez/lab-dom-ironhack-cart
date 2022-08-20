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
  const tbody = document.querySelector('tbody'),
    tRow = document.createElement('tr'),
    priceValue = document.querySelector(
      '.create-product input:last-child'
    ).value,
    nameValue = document.querySelector(
      '.create-product input:first-child'
    ).value;
  //* Markup Var
  const trMarkup = `
  <td class="name">
    <span>${nameValue}</span>
  </td>
  <td class="price">$<span>${priceValue}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
`;

  tRow.className = 'product';
  tRow.innerHTML = trMarkup;
  // append the final child element =>
  const addRow = tbody.insertRow(-1); //.createElement('td');
  addRow.appendChild(tRow);
  // testing
  console.log(tRow, trMarkup);
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
