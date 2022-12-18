import { useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { Button, AboutUs } from "../components";
import useCategories from "../hooks/useCategories";
import NoMatch from "./NoMatch";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const { pathname } = useLocation();
  const { categories } = useCategories();
  const foundCategory = categories.find((cat) => cat.category === category);

  useEffect(() => {
    if (!foundCategory) {
      navigate("/no-match");
    }
  }, []);

  return (
    <>
      <div className='w-full bg-black text-center py-24'>
        <h2 className='text-white text-4xl uppercase'>{category}</h2>
      </div>

      {foundCategory &&
        foundCategory.products
          // will use to transform response with RTK Query
          .sort((a, b) => Number(b.isNew) - Number(a.isNew))
          .map((product, idx) => (
            <div
              key={product._id}
              className={`md:flex ${
                idx % 2 && "flex-row-reverse"
              } justify-between items-center md:gap-10 lg:gap-16 my-8 container`}>
              <img
                src={product.image}
                alt={product.name}
                className=' w-96 aspect-square mx-auto md:mx-0 md:flex-1 rounded-lg'
              />
              {/* description */}
              <div className='flex flex-col gap-6 w-96 mx-auto lg:mx-0 px-4 text-center lg:text-left md:flex-1 mt-8'>
                {product.isNew && (
                  <span className='text-orange tracking-[1rem] text-sm  '>
                    NEW PRODUCT
                  </span>
                )}
                <h1 className=' text-4xl md:text-5xl lg:text-6xl'>
                  {product.name}
                </h1>
                <p className='text-black/70'>{product.description}</p>
                <Link to={`${pathname}/${product._id}`}>
                  <Button className='w-44 lg:mx-0'>SEE PRODUCT</Button>
                </Link>
              </div>
            </div>
          ))}
      <AboutUs />
    </>
  );
};

export default CategoryPage;
