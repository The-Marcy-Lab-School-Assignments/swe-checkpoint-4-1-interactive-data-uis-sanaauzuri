// Import functions
import { getProducts } from './fetch-helpers.js'
import { renderProducts } from './dom-helpers.js'

getProducts()
    .then(result => {
        if (result.error) {
            const errorElement = document.querySelector('#error-message')
            errorElement.textContent = result.error.message
        } else {
             renderProducts(result.data)
        }
    })
// Stuck on this: add a click handler using event delegation
// Read the product ID from the element's dataset
// Fetch the product by ID and chain .then() to render its details
const productsList = document.querySelector('#products-list')
productsList.addEventListener('click', (event) => {
    const clickedCard = event.target.closest('li')
});
