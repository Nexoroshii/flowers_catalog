import React from "react";
import "./SingleProduct.css";
import placeholderImage from "../../assets/not_found.png";
import { Button } from "@mui/material";
const SingleProduct = ({ name, price, description, image }) => {
  return (
    <div className="product-item">
      <img src={image || placeholderImage} alt={name} />
      <div className="product-item-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <Button variant="contained">Contained</Button>
    </div>
  );
};

export default SingleProduct;
