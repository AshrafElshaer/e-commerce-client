import React from "react";
import { AboutUs, Button } from "../components";
import errorImgUrl from "../assets/Error-404.png";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <div className='container'>
        <img
          src={errorImgUrl}
          alt='404-Error'
          className='w-[50%] min-w-[25rem] mx-auto'
        />
        <Link to='/'>
          <Button>Back to home</Button>
        </Link>
      </div>
      <AboutUs />
    </>
  );
};

export default NoMatch;
