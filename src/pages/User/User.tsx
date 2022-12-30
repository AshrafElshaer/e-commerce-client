import { Link, Outlet, useLocation } from "react-router-dom";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaAddressBook, FaBoxOpen } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
const User = () => {
  const { pathname } = useLocation();
  return (
    <section className='container py-12'>
      <header>
        <h2 className='text-center text-3xl'>Welcome (username)</h2>
      </header>

      <nav className='my-8'>
        <ul className='flex  justify-start items-center font-bold text-lg border-b-2 border-b-gray'>
          <li className={`px-8 py-2  ${pathname === "/user" ? "bg-gray" : ""}`}>
            <Link to='/user' className='flex justify-start items-center gap-4'>
              <RiAccountBoxFill />
              Account
            </Link>
          </li>
          <li
            className={`px-8 py-2  ${
              pathname === "/user/address" ? "bg-gray" : ""
            }`}>
            <Link
              to='address'
              className='flex justify-start items-center gap-4'>
              <FaAddressBook />
              Address
            </Link>
          </li>
          <li
            className={`px-8 py-2  ${
              pathname === "/user/orders" ? "bg-gray" : ""
            }`}>
            <Link to='orders' className='flex justify-start items-center gap-4'>
              <FaBoxOpen />
              Orders
            </Link>
          </li>
          <li
            className={`px-8 py-2  ${
              pathname === "/user/payment" ? "bg-gray" : ""
            }`}>
            <Link
              to='payment'
              className='flex justify-start items-center gap-4'>
              <MdPayments />
              Payment Methods
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </section>
  );
};

export default User;
