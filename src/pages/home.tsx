import { useEffect, useState } from "react";
import { Header, AboutUs, HomePreview } from "../Components";
import { useGetCategoriesQuery } from "../features/categoriesSlice";
const Home = () => {
  
  return (
    <>
      <Header />
      <main className='container'>
        <HomePreview />
      </main>
      <AboutUs />
    </>
  );
};

export default Home;
