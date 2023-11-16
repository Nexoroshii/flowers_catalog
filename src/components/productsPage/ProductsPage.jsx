import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const ProductsPage = ({ products }) => {
  return (
    <div className="products-page">
      {products.map((product) => (
        <SingleProduct key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsPage;
