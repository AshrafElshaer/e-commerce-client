import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "../hooks/useWindowSize";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar: FC = () => {
  const [isMenuOpe, setIsMenuOpen] = useState<boolean>(false);
  const windowSize = useWindowSize();
  return (
    <>
      <nav className=' bg-black text-white border-b-2  border-b-gray py-6'>
        <div className='container flex gap-4 justify-between items-center'>
          <div className='toggle cursor-pointer md:hidden'>
            <span className='w-6 h-0.5 bg-white block'></span>
            <span className='w-6 h-0.5 bg-white block my-1'></span>
            <span className='w-6 h-0.5 bg-white block'></span>
          </div>
          <a href='/' className='text-xl font-bold '>
            audiophile
          </a>
          <ul className='hidden md:flex w-full justify-center gap-8 font-bold uppercase text-xs'>
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
          <div className='text-xl cursor-pointer sm:ml-auto'>
            <AiOutlineShoppingCart />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
