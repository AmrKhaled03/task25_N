// src/components/ProductForm.js
import React, { useState } from "react";
import ProductAPI from "../utils/ProductAPI";

function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
 const handleImageChange = (event) => {
  const selectedImage = event.target.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  }
  };
  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now().toString(),
      title,
      description,
      price,
      image,
      quantity,
    };

    ProductAPI.addProduct(newProduct);
    // Redirect or update state as needed after adding the product
window.location.href="/";

  };
 
  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            placeholder="Image URL"
            // value={image}

            // accept="image/*"
            onChange={handleImageChange} 
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
