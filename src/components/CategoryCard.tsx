import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from ".";
import { TCategory } from "../features/categories/categoriesSlice";

type TCategoryCardProps = {
  categoryName: string;
  image: string;
  toggleNavbar?: () => void;
};

const CategoryCard = ({
  categoryName,
  image,
  toggleNavbar,
}: TCategoryCardProps) => {
  return (
    <div className="relative mb-6 sm:mb-0 text-center flex-1  min-w-[12rem] before:content-[''] before:absolute before:w-full before:h-48 before:bg-gray before:-bottom-4 before:left-0 before:rounded-lg before:shadow-md">
      <img src={image} alt='category' className='mx-auto w-40 h-40 relative' />
      <p className='font-bold uppercase my-2 relative'>{categoryName}</p>
      <Link to={`/${categoryName}`} className='relative' onClick={toggleNavbar}>
        <Button buttonType='secondary'>Shop</Button>
      </Link>
    </div>
  );
};

export default CategoryCard;
