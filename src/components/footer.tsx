import React from "react";
import { Link } from "react-router-dom";
import { CategoryNavigation, AboutUs } from "../components";
import useCategories from "../hooks/useCategories";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  const { categories } = useCategories();
  return (
    <footer className='bg-black text-white text-center sm:text-left py-14'>
      <div className='container'>
        <div className=' w-full md:flex md:items-center mb-8'>
          <Link to='/'>
            <h1 className='font-bold text-xl mb-12 md:mb-0'>audiophile</h1>
          </Link>
          <ul
            role='main-navbar'
            className='  w-full flex flex-col gap-4 sm:flex-row sm:justify-start md:justify-end md:gap-8 font-bold uppercase text-xs'>
            <li>
              <Link
                to='/'
                className='cursor-pointer hover:text-orange transition-all'>
                home
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.category}>
                <Link
                  to={`/${category.category}`}
                  className='cursor-pointer hover:text-orange transition-all'>
                  {category.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className='text-gray/70 mb-8 md:w-1/2 mr-auto'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className='sm:flex justify-between items-center'>
          <p className='text-gray/70 mb-4 sm:mb-0'>
            Copyright 2021. All Rights Reserved
          </p>
          <ul className='flex justify-center gap-4 text-3xl'>
            <li>
              <a
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-orange transition-all'>
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-orange transition-all'>
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                href='http://'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-orange transition-all'>
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
