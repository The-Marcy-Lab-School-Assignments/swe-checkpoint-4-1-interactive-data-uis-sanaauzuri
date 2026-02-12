export const renderProducts = (products) => {
    // Clears #products-list content
    const productsList = document.querySelector('#products-list')
    productsList.textContent = ''
    // // Updates #product-count with num of products
    const productCount = document.querySelector('#product-count')
    productCount.textContent = products.length
    products.forEach(product => {
        // Create li for each product
        const li = document.createElement('li')
        // Stores the product id on the li using a data- attribute
        li.dataset.id = product.id
        // Image in li
        const img = document.createElement('img')
        img.src = product.thumbnail
        img.alt = product.title
        // h3 in li
        const title = document.createElement('h3')
        title.textContent = product.title
        // p in li
        const price = document.createElement('p')
        price.textContent = product.price;
        // Appends each li to #products-list
        li.append(img)
        li.append(title)
        li.append(price)
        productsList.append(li)
    });
};


export const renderProductDetails = (product) => {
    const productDetails = document.querySelector('#product-details')
    productDetails.removeAttribute('hidden')
    // Getting specific product details using HTML
    const title = productDetails.querySelector('#product-title')
    const thumbnail = productDetails.querySelector('#product-thumbnail')
    const price = productDetails.querySelector('#product-price')
    const description = productDetails.querySelector('#product-description')
    // Displaying
    title.textContent = product.title
    thumbnail.src = product.thumbnail
    price.textContent = product.price
    description.textContent = product.description
}
