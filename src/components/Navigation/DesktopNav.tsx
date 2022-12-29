import React from "react";
import { Link } from "react-router-dom";
import { TCategory } from "../../features/categoriesSlice";

type Props = {
  categories: TCategory[];
  pathName: string;
};
const DesktopNav = ({ categories, pathName }: Props) => {
  return (
    <ul className='hidden md:flex w-full justify-center gap-8 font-bold uppercase text-xs'>
      <li>
        <Link
          to='/'
          className='cursor-pointer hover:text-orange transition-all '>
          home
        </Link>
      </li>

      {categories.map((category) => (
        <li key={category.category}>
          <Link
            to={`/${category.category}`}
            className={`cursor-pointer hover:text-orange transition-all ${
              pathName.includes(`/${category.category}`)
                ? "text-orange"
                : "not-working"
            }`}>
            {category.category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
