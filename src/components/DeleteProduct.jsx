// src/components/DeleteProduct.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductAPI from "../utils/ProductAPI";

function DeleteProduct() {
  const { id } = useParams();

  useEffect(() => {
    // Fetch the product data based on the ID from local storage or your API
    const productData = ProductAPI.getProductById(id);

    if (productData) {
      // Delete the product from local storage or your API
      ProductAPI.deleteProduct(id);
      window.location.href="/";

      // You can display a success message or perform other actions here
      console.log(`Product with ID ${id} has been deleted.`);
    } else {
      // Handle the case where the product is not found
      console.log(`Product with ID ${id} not found.`);
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Delete Product</h2>
      <p>Deleting the product...</p>
    </div>
  );
}

export default DeleteProduct;
