import React from "react";

const Product = ({ product }) => {
  return (
    <li key={product.name}>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <div>
        <strong>${product.price}</strong>
      </div>
    </li>
  );
};

export default Product;
