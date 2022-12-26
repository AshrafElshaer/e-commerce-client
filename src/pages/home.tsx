import { useEffect } from "react";
import { Header, AboutUs, HomePreview } from "../components";
import { useGetCategoriesQuery } from "../features/categoriesSlice";
import useCategories from "../hooks/useCategories";
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
