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

};
