import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart, AiTwotoneSetting } from "react-icons/ai";
import { BiLogOut, BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Cart, CategoryCard } from "../components";
import useCategories from "../hooks/useCategories";
import { useAppSelector } from "../app/hooks";
import { selectCartCount } from "../features/cartSlice";
import { selectCurrentUser } from "../features/authSlice";

const Navbar = () => {
  const { categories } = useCategories();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = useAppSelector(selectCartCount);
  const user = useAppSelector(selectCurrentUser);

  const toggleNavbar = () => {
    setIsMenuOpen((perv) => !perv);
    setIsCartOpen(false);
    setIsUserMenuOpen(false);
  };
  const toggleCart = () => {
    setIsCartOpen((perv) => !perv);
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };
  const toggleUserMenu = () => {
    setIsUserMenuOpen((perv) => !perv);
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };
  function disableScroll() {
    // To get the scroll position of current webpage
    const TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    const LeftScroll =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }
  useEffect(() => {
    setIsCartOpen(false);
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    isCartOpen || isUserMenuOpen ? disableScroll() : enableScroll();
  }, [isCartOpen, isUserMenuOpen]);

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
                    pathname.includes(`/${category.category}`)
                      ? "text-orange"
                      : "not-working"
                  }`}>
                  {category.category}
                </Link>
              </li>
            ))}
          </ul>
          {/* USER MENU */}
          {user ? (
            <button className='text-xl ml-auto' onClick={toggleUserMenu}>
              <FiUser />
            </button>
          ) : (
            <Link to='auth' className='font-bold uppercase text-xs ml-auto'>
              Login
            </Link>
          )}
          {isUserMenuOpen ? (
            <ul className='bg-white text-black text-base  absolute top-[2.75rem] right-0 w-60 rounded-b-lg flex flex-col gap-6 p-4'>
              <li>
                <Link
                  to='/user'
                  className='flex justify-start items-center gap-2 hover:text-orange'>
                  <AiTwotoneSetting />
                  Preferences
                </Link>
              </li>
              <li className='flex justify-start items-center gap-2 hover:text-orange'>
                <BiSupport />
                Contact Support
              </li>
              <li className='flex justify-start items-center gap-2 hover:text-orange '>
                {" "}
                <BiLogOut />
                Log Out
              </li>
            </ul>
          ) : null}
          {/* CART MENU */}
          <button
            data-cartcount={cartCount}
            className={`text-xl cursor-pointer relative ${
              cartCount
                ? "before:content-[attr(data-cartcount)] before:w-full before:h-full before:bg-orange before:absolute before:-top-3 before:-right-3 before:rounded-full before:text-xs before:grid before:content-center"
                : ""
            }  `}
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
