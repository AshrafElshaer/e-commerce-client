import { useEffect } from "react";
import { Header, CategoryNavigation, HomePreview } from "../components";
import { useGetCategoriesQuery } from "../features/api/apiSlice";
import useCategories from "../hooks/useCategories";
const Home = () => {
  // const {
  //   data: categories,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetCategoriesQuery(undefined);
  // const serverUrl = process.env.SERVER_URL;

  useEffect(() => {
    // console.log(categories);
  }, []);
  return (
    <>
      <Header />
      <main className='container'>
        <HomePreview />
        
      </main>
    </>
  );
};

export default Home;
