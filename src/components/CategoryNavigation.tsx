import React, { useEffect } from "react";
import { CategoryCard } from ".";
import { TCategory, useGetCategoriesQuery } from "../features/categoriesSlice";

const CategoryNavigation = () => {
  const { data: categories } = useGetCategoriesQuery(undefined);

  return (
    <section className=' sm:flex sm:justify-center sm:gap-12 sm:flex-wrap my-12 container'>
      {categories?.map((cat) => {
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
