import React, { useEffect } from "react";
import useCategories from "../hooks/useCategories";
import { CategoryCard } from "../components";
import { TCategory } from "../features/categories/categoriesSlice";

const CategoryNavigation = () => {
  const { categories } = useCategories();

  const selectedCategories = () => {
    if (categories.length < 4) return categories;
  };

  return (
    <section className=' sm:flex sm:justify-center sm:gap-12 sm:flex-wrap my-12 '>
      {categories.map((cat) => {
        const { category, categoryImage, _id } = cat;
        return (
          <CategoryCard
            key={_id}
            categoryName={category}
            image={categoryImage}
          />
        );
      })}
    </section>
  );
};

export default CategoryNavigation;
