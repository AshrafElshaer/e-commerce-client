import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId , category } = useParams();
  return <div>Product ID :{productId}
  <h1>{category}</h1>
  </div>;
};

export default ProductPage;
