import { useEffect } from "react";
import { Header } from "../components";
import { useGetCategoriesQuery } from "../features/api/apiSlice";
const Home = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery(undefined);
  // const serverUrl = process.env.SERVER_URL;


  useEffect(() => {
    // console.log(categories);
  }, []);
  return (
    <>
      <Header />
      {isSuccess && categories.map(cat => (
        <div key={cat._id}>
          {cat.category}
        </div>
      ))}
    </>
  );
};

export default Home;
