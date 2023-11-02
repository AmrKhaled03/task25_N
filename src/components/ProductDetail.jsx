// src/components/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import ProductAPI from "../utils/ProductAPI";

function ProductDetail() {
  const { id } = useParams();
  const product = ProductAPI.getProductById(id);

  if (!product) {
    return <div className="container mt-4">Product not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Product Detail</h2>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Description: {product.description}</p>
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Quantity: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
