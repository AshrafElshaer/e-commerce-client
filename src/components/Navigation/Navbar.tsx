import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart, AiTwotoneSetting } from "react-icons/ai";
import { BiLogOut, BiSupport } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Cart } from "..";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCartCount } from "../../features/cartSlice";
import {
  selectCurrentUser,
  useLogoutUserMutation,
  logoutAuth,
} from "../../features/authSlice";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { disableScroll, enableScroll } from "../../lib/scroll";
import {
  TCategory,
  useGetCategoriesQuery,
} from "../../features/categoriesSlice";

const Navbar = () => {
  const { data: categories } = useGetCategoriesQuery(undefined);
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const user = useAppSelector(selectCurrentUser);
  const [logoutUser] = useLogoutUserMutation();

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

  useEffect(() => {
    setIsCartOpen(false);
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    isCartOpen || isUserMenuOpen ? disableScroll() : enableScroll();
  }, [isCartOpen, isUserMenuOpen]);

  const logout = async () => {
    try {
      const result = await logoutUser(undefined).unwrap();
      dispatch(logoutAuth());
      setIsUserMenuOpen(false);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <nav className=' bg-black text-white py-4'>
        <div className='container relative flex gap-6 justify-between items-center  z-50 before:content-[""] before:w-full before:h-[1px] before:absolute before:-bottom-4 before:left-0  before:bg-[#979797]'>
          {/* HAMBURGER BUTTON */}
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
          {isMenuOpen ? <MobileNav toggleNavbar={toggleNavbar} /> : null}

          {/* DESKTOP NAVBAR */}
          <DesktopNav pathName={pathname} />

          {/* USER MENU */}
          {user ? (
            <button
              className='text-xl ml-auto'
              onClick={toggleUserMenu}
              aria-label='User Menu'>
              <FiUser />
            </button>
          ) : (
            <Link to='auth' className='font-bold uppercase text-xs ml-auto'>
              Login
            </Link>
          )}
          {isUserMenuOpen ? (
            <>
              <ul className='bg-white text-black text-base  absolute top-[2.75rem] right-0 w-60 rounded-b-lg flex flex-col gap-6 p-4 shadow-lg'>
                <li>
                  <Link
                    to='/user'
                    className='flex justify-start items-center gap-2 hover:text-orange'>
                    <AiTwotoneSetting />
                    Preferences
                  </Link>
                </li>
                <li>
                  <Link
                    to='/support'
                    className='flex justify-start items-center gap-2 hover:text-orange'>
                    <BiSupport />
                    Contact Support
                  </Link>
                </li>
                <li className='flex justify-start items-center gap-2 hover:text-orange '>
                  {" "}
                  <button
                    className='flex justify-start items-center gap-2'
                    onClick={logout}>
                    <BiLogOut />
                    Log Out
                  </button>
                </li>
              </ul>
            </>
          ) : null}
          {/* CART MENU */}
          <button
            data-cartcount={cartCount}
            aria-label='Cart Menu'
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
      {isUserMenuOpen ? (
        <div
          className='absolute bg-zinc-900/40 w-full h-screen'
          onClick={toggleUserMenu}></div>
      ) : null}
      {isCartOpen ? <Cart toggleCart={toggleCart} /> : null}
      <Outlet />
    </div>
  );
};

export default Navbar;
