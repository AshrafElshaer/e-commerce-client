import React from "react";
import { TCategory } from "../../features/categoriesSlice";
import CategoryCard from "../CategoryCard";

type Props = {
  isMenuOpen: boolean;
  categories: TCategory[];
  toggleNavbar: () => void;
};

const MobileNav = ({ isMenuOpen, categories, toggleNavbar }: Props) => {
  return (
    <ul
      className={`w-full bg-white absolute min-h-screen  text-center top-[2.75rem] text-black md:hidden p-4 left-0 block sm:flex sm:justify-center sm:gap-4 sm:flex-wrap`}>
      {categories.map((category) => (
        <li className='flex-1' key={category.category}>
          <CategoryCard
            key={category.category}
            categoryName={category.category}
            image={category.categoryImage}
            toggleNavbar={toggleNavbar}
          />
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;
