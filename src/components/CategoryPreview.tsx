import React, { FC } from "react";
import { Link } from "react-router-dom";

const CategoryPreview: FC = () => {
  return (
    <div className="relative min-w-[12rem] before:content-[''] before:absolute before:w-full before:h-40 before:bg-gray before:-bottom-4 before:left-0 before:rounded-lg before:shadow-md">
      <img
        src='./assets/shared/desktop/image-category-thumbnail-headphones.png'
        alt='category'
        className='mx-auto w-40 relative'
      />
      <p className='font-bold uppercase my-2 relative'>title</p>
      <Link to='auth' className='relative'>
        Shop
      </Link>
    </div>
  );
};

export default CategoryPreview;
