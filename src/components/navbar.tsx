import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Cart, CategoryCard } from "../components";
import useCategories from "../hooks/useCategories";

const Navbar = () => {
  const { categories } = useCategories();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className=' bg-black text-white py-4'>
        <div className='container relative flex gap-6 justify-between items-center  z-50 before:content-[""] before:w-full before:h-[1px] before:absolute before:-bottom-4 before:left-0  before:bg-[#979797]'>
          <button
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
          </button>
          <a href='/' className='text-xl font-bold '>
            audiophile
          </a>
          {/* MOBILE NAVBAR */}
          <ul
            className={`w-full bg-white absolute min-h-screen  text-center top-12 text-black md:hidden px-4 left-0
            ${isMenuOpen ? "block sm:flex" : "hidden"}
             sm:justify-center sm:gap-4 sm:flex-wrap`}>
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

          {/* DESKTOP NAVBAR */}
          <ul
            role='main-navbar'
            className='hidden md:flex w-full justify-center gap-8 font-bold uppercase text-xs'>
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
                    pathname.includes(`/${category.category}`)
                      ? "text-orange"
                      : "not-working"
                  }`}>
                  {category.category}
                </Link>
              </li>
            ))}
          </ul>
          <Link to='auth' className="font-bold uppercase text-xs ml-auto">Login</Link>
          <button
            className='text-xl cursor-pointer relative'
            onClick={toggleCart}>
            <AiOutlineShoppingCart />
          </button>
        </div>
      </nav>
      {isCartOpen ? <Cart toggleCart={toggleCart} /> : null}
      <Outlet />
    </div>
  );
};

export default Navbar;
