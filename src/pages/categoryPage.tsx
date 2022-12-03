import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Button } from "../components";
import useCategories from "../hooks/useCategories";

const CategoryPage = () => {
  const { category } = useParams();
  const { categories } = useCategories();
  return (
    <>
      <div className='w-full bg-black text-center py-24'>
        <h2 className='text-white text-4xl uppercase'>{category}</h2>
      </div>
    
      {categories.map(
        (cat) =>
          cat.category === category &&
          cat.products
            .sort((a, b) => Number(b.isNew) - Number(a.isNew))
            .map((product) => (
              <div key={product._id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className=' w-96 aspect-square'
                />
                <div
                  role='content'
                  className='flex flex-col gap-10 w-96 mx-auto lg:mx-0 px-4'>
                  {product.isNew && (
                    <span className='text-orange tracking-[1rem] text-sm  '>
                      NEW PRODUCT
                    </span>
                  )}
                  <h1 className=' text-4xl md:text-5xl lg:text-6xl'>
                    {product.name}
                  </h1>
                  <p className='text-black/70'>{product.description}</p>
                  <Button className='w-44 lg:mx-0'>SEE PRODUCT</Button>
                </div>
              </div>
            ))
      )}
      <div>
        <img src='' alt='' />
      </div>
    </>
  );
};

export default CategoryPage;
