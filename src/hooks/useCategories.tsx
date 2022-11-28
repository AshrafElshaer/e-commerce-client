import { useState, useEffect } from "react";
import { TCategory } from "../features/categories/categoriesSlice";
import data from "../data/categories.json";

const useCategories = () => {
  const [categories, setCategories] = useState<TCategory[]>(data);

  //   const fetchCategories = async () => {
  //     return await fetch("http://localhost:8080/categories")
  //       .then((res) => res.json())
  //       .then((data) => setCategories(data));
  //   };

  //   useEffect(() => {
  //     console.log(categories);
  //   }, []);

  return { categories };
};

export default useCategories;
