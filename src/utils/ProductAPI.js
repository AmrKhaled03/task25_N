// src/utils/ProductAPI.js
const STORAGE_KEY = "items";

const ProductAPI = {
  getAllProducts: () => {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return items;
  },
  getProductById: (id) => {
    const items = ProductAPI.getAllProducts();
    return items.find((item) => item.id === id);
  },
  addProduct: (item) => {
    const items = ProductAPI.getAllProducts();
   items.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },
  updateProduct: (id, updatedProduct) => {
    const items = ProductAPI.getAllProducts();
    const index =items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items[index] = { ...updatedProduct, id };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  },
  deleteProduct: (id) => {
    const items = ProductAPI.getAllProducts();
    const updatedProducts = items.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
  },
};

export default ProductAPI;
