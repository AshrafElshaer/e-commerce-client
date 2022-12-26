import { useState, useEffect } from "react";
import { TCategory } from "../features/categoriesSlice";
import data from "../data/categories.json";

const useCategories = () => {
  const [categories, setCategories] = useState<TCategory[]>(data);

  return { categories };
};

export default useCategories;
