import React from "react";
import { Outlet, useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <>
      <div>{category}</div>
    </>
  );
};

export default CategoryPage;
