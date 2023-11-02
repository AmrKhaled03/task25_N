// src/components/EditProduct.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductAPI from "../utils/ProductAPI";

function EditProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    quantity: "",
  });

  useEffect(() => {
    // Fetch the product data based on the ID from local storage or your API
    const productData = ProductAPI.getProductById(id);

    if (productData) {
      setProduct(productData);
    } else {
      // Handle the case where the product is not found
    }
  }, [id]);

  const handleEditProduct = () => {
    // Update the product data in local storage or your API
    ProductAPI.updateProduct(id, product);
window.location.href="/";
    // You can also display a success message or perform other actions here
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Description"
            value={product.description}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Image URL"
            value={product.image}
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={product.quantity}
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleEditProduct}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
