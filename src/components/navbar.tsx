import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import CategoryPreview from "./CategoryPreview";

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(true);
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className=' bg-black text-white border-b-2  border-b-gray py-4'>
        <div className='container flex gap-6 justify-between items-center relative'>
          <div
            className='toggle cursor-pointer md:hidden'
            onClick={toggleNavbar}>
            <span
              className={`w-6 h-0.5 bg-white block transition-all ${
                isMenuOpen && "rotate-45 translate-y-1"
              }`}></span>
            <span
              className={`w-6 h-0.5 bg-white block my-1 transition-all ${
                isMenuOpen && "translate-x-5 opacity-0"
              }`}></span>
            <span
              className={`w-6 h-0.5 bg-white block transition-all ${
                isMenuOpen && "-rotate-45 -translate-y-2"
              }`}></span>
          </div>
          <a href='/' className='text-xl font-bold '>
            audiophile
          </a>
          <ul
            role='mobile-navbar'
            className={`w-full bg-white absolute  text-center top-12 text-black md:hidden px-4 left-0
            ${
              isMenuOpen ? "block sm:flex" : "hidden"
            } sm:justify-start sm:gap-4 sm:flex-wrap`}>
            <li className='mb-6 flex-1'>
              <CategoryPreview />
            </li>
            <li className='mb-6 flex-1'>
              <CategoryPreview />
            </li>
            <li className='mb-6 flex-1'>
              <CategoryPreview />
            </li>
            <li className='mb-6 flex-1'>
              <CategoryPreview />
            </li>
            <li className='mb-6 flex-1'>
              <CategoryPreview />
            </li>
          </ul>
          <ul
            role='main-navbar'
            className='hidden md:flex w-full justify-center gap-8 font-bold uppercase text-xs'>
            <li>
              <a
                href=''
                className='cursor-pointer hover:text-orange transition-all'>
                HOME{" "}
              </a>
            </li>
            <li>
              <a href=''>category 2</a>
            </li>
            <li>
              <a href=''>category 3</a>
            </li>
          </ul>
          <div className='text-xl cursor-pointer sm:ml-auto relative'>
            <AiOutlineShoppingCart onClick={toggleCart} />
          </div>
        </div>
        {isCartOpen ? <Cart toggleCart={toggleCart} /> : null}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
