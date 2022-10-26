// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  //... your code goes here
const price = product.querySelector('.price span')
console.log(price.innerText)
const quantity = product.querySelector('.quantity input')
console.log (quantity.value)
const subtotal = product.querySelector('.subtotal span')
let result = Number(price.innerText)*Number(quantity.value)
console.log(result)
subtotal.innerText=result
return result
}

function calculateAll() {
  const multipleProducts = document.getElementsByClassName('product');
  const totalValue= document.getElementById(`total-value`)
  let totalResult=0
  //console.log(multipleProducts)
  for(let i=0;i<multipleProducts.length;i++){
  totalResult+=updateSubtotal(multipleProducts[i])
}
{
  totalValue.innerText=totalResult
}
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
