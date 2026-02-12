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