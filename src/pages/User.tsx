import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Hello = () => <p>index hello</p>;
const Password = () => <p>Password hello</p>;
const User = () => {
  const { pathname } = useLocation();
  return (
    <section className='container py-12'>
      <header>
        <h2 className='text-center text-3xl'>Welcome (username)</h2>
      </header>
      <div className='flex'>
        <nav>
          <ul className='flex flex-col justify-center items-start font-bold text-lg border-r-2 border-r-gray'>
            <li
              className={`px-8 py-2 w-full ${
                pathname === "/user" ? "bg-gray" : ""
              }`}>
              <Link to='/user'>Account</Link>
            </li>
            <li
              className={`px-8 py-2 w-full ${
                pathname === "/user/address" ? "bg-gray" : ""
              }`}>
              <Link to='address'>Address</Link>
            </li>
            <li
              className={`px-8 py-2 w-full ${
                pathname === "/user/orders" ? "bg-gray" : ""
              }`}>
              <Link to='orders'>Orders</Link>
            </li>
            <li
              className={`px-8 py-2 w-full ${
                pathname === "/user/payment" ? "bg-gray" : ""
              }`}>
              <Link to='payment'>Payment Methods</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </section>
  );
};

export default User;
