// src/components/ProductList.js
import React from "react";
import ProductAPI from "./utils/ProductAPI";
import { Link } from "react-router-dom";
function Items({addCart}) {
  const products = ProductAPI.getAllProducts();
 
  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Quantity: {product.quantity}</p>
              
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
                <Link
                  to={`/products/edit/${product.id}`}
                  className="btn btn-warning mr-2"
                >
                  Edit
                </Link>
                <Link
                  to={`/products/delete/${product.id}`}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
                <button className="btn btn-primary" onClick={()=>addCart(product)}>
Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
