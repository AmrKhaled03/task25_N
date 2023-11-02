// src/utils/ProductAPI.js
const STORAGE_KEY = "products";

const ProductAPI = {
  getAllProducts: () => {
    const products = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return products;
  },
  getProductById: (id) => {
    const products = ProductAPI.getAllProducts();
    return products.find((product) => product.id === id);
  },
  addProduct: (product) => {
    const products = ProductAPI.getAllProducts();
    products.push(product);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  },
  updateProduct: (id, updatedProduct) => {
    const products = ProductAPI.getAllProducts();
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { ...updatedProduct, id };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
  },
  deleteProduct: (id) => {
    const products = ProductAPI.getAllProducts();
    const updatedProducts = products.filter((product) => product.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
  },
};

export default ProductAPI;
