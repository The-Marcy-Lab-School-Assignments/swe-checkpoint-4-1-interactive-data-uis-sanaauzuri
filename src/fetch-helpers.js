export const fetchData = (url) => {

};

export const getProducts = () => {
// Invokes fetch
return fetch('https://dummyjson.com/docs/products')
    .then((response) => { 
        // Check if response.ok, error if it isn't
        if (!response.ok) {
            throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }
        return response.json();
        // Handles resolved/rejected promises with .then and .catch, returns obj
    }) .then(products => {
        return { 
        data: products, 
        error: null };
    }) .catch(error => {
        return { 
        data: null, 
        error: error };
    })
};

export const getProductById = (id) => {
return fetch(`https://dummyjson.com/docs/products#products${id}`)
    .then((response) => {
        if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }
        return response.json();
    }) .then(product => {
        return { 
        data: product, 
        error: null };
    }) .catch(error => {
        return { 
        data: null, 
        error: error };
    })
};

export const searchProducts = (query) => {

};
