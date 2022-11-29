import React from "react";
import { Outlet, useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <>
      <div className="w-full bg-black text-center py-24">
        <h2 className="text-white text-4xl uppercase">{category}</h2>
         Category </div>
    </>
  );
};

export default CategoryPage;
