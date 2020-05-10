import React from "react";
import Product from "./product";

const Products = ({ products }) => {
  return (
    <ul>
      {products.map(({ node: product }) => (
        <Product product={product} key={product.name} />
      ))}
    </ul>
  );
};

export default Products;
