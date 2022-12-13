import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import { TProduct } from "../features/categories/categoriesSlice";
import useCategories from "../hooks/useCategories";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId, category } = useParams();
  const { categories } = useCategories();
  const foundProduct = categories
    .find((cat) => cat.category === category)
    ?.products.find((product) => product._id === productId);

  const youMayAlsoLike = categories
    .find((cat) => cat.category === category)
    ?.products.filter((product) => product._id !== foundProduct?._id)
    .slice(0, 3);

  const getMultipleRandom = (arr: TProduct[], num: number): TProduct[] => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  if (youMayAlsoLike && youMayAlsoLike?.length < 3) {
    const exitingProductsIds = youMayAlsoLike?.map((product) => product._id);

    const allProducts: TProduct[] = [];

    // make array of all products and filter them to take out the main product and the products we have in you may also like state to complete the array to 3 product
    categories.map((category) =>
      category.products.map((product) => {
        if (
          product._id !== foundProduct?._id &&
          !exitingProductsIds.includes(product._id)
        ) {
          allProducts.push(product);
        }
      })
    );
    const newYouMayAlsoLike = getMultipleRandom(
      allProducts,
      3 - youMayAlsoLike.length
    );
    youMayAlsoLike.push(...newYouMayAlsoLike);
  }

  useEffect(() => {
    !foundProduct ? navigate("/no-match") : null;
  }, []);

  return (
    <div className='container'>
      <button onClick={()=> navigate(-1)} className='block my-8 '>
        {" "}
        Go Back
      </button>
      {/* product display */}
      {foundProduct && (
        <div>
          <section
            className={`md:flex justify-between items-center md:gap-10 lg:gap-16 my-8`}>
            <img
              src={foundProduct.image}
              alt={foundProduct.name}
              className=' w-96 aspect-square mx-auto md:mx-0 md:flex-1 rounded-lg'
            />
            {/* description */}
            <div className='flex flex-col gap-6 w-96 mx-auto lg:mx-0 px-4 text-center lg:text-left md:flex-1 mt-8'>
              {foundProduct.isNew && (
                <span className='text-orange tracking-[1rem] text-sm  '>
                  NEW PRODUCT
                </span>
              )}
              <h1 className=' text-4xl md:text-5xl lg:text-6xl'>
                {foundProduct.name}
              </h1>
              <p className='text-black/70'>{foundProduct.description}</p>
              <p className='text-lg font-bold'>
                ${" "}
                {foundProduct.price.toLocaleString(
                  undefined, // leave undefined to use the visitor's browser
                  // locale or a string like 'en-US' to override it.
                  { minimumFractionDigits: 2 }
                )}
              </p>
              <div className='flex justify-between gap-4 w-full'>
                <div className='flex justify-center items-center px-6 py-[0.75rem] bg-gray rounded gap-6 flex-1'>
                  <button className='text-black/40 hover:text-orange'>-</button>
                  {/* QTY */}3
                  <button className='text-black/40 hover:text-orange'>+</button>
                </div>
                <Button className='flex-1 md:flex-auto'> ADD TO CART</Button>
              </div>
            </div>
          </section>
          {/* features */}
          <section className='my-16 lg:flex'>
            <div className='flex-1'>
              <h2 className='mb-8 text-2xl'>FEATURES</h2>
              {foundProduct.features.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className='block mb-4 text-black/70'>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className='mt-12 flex flex-col flex-1 md:gap-48 md:flex-row lg:flex-col lg:gap-0 lg:ml-auto '>
              <h2 className='text-2xl mb-4 lg:ml-auto mr-14'>IN THE BOX</h2>
              <ul className='lg:ml-auto'>
                {foundProduct.includes.map((item) => (
                  <li key={item._id} className='mb-2 text-black/70'>
                    <span className='text-orange mr-2 '>{item.quantity}X</span>
                    {item.item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* gallary */}
          <section className='  sm:grid grid-cols-2 grid-rows-2 gap-4 '>
            {foundProduct.gallery.map((img, idx) => (
              <img
                src={img}
                key={idx}
                alt={foundProduct.name}
                className={`rounded-lg w-full h-full my-4 sm:my-0 ${
                  idx === 0 ? "row-span-1 col-span-1" : ""
                } ${
                  idx === 1 ? "col-start-1 col-end-2 row-start-2 row-end-3" : ""
                } ${idx === 2 ? "row-span-full " : ""}`}
              />
            ))}
          </section>
          {/* you may also like  */}
          <section className='my-8'>
            <h2 className='uppercase text-3xl text-center my-16'>
              you may also like
            </h2>
            <div className='flex flex-wrap justify-center gap-8'>
              {youMayAlsoLike
                ? youMayAlsoLike.map((productYouMightLike) => {
                    let categoryName: string = "";
                    const getCategoryName = categories.map((category) =>
                      category.products.map((product) => {
                        if (product._id === productYouMightLike._id) {
                          return (categoryName = category.category);
                        }
                        return;
                      })
                    );
                    const productName = productYouMightLike.name.split(" ");
                    return (
                      <div
                        key={productYouMightLike._id}
                        className='w-60 sm:flex-1 text-center '>
                        <img
                          src={productYouMightLike.image}
                          alt={productYouMightLike.name}
                          className='rounded-lg'
                        />
                        <h3 className='my-4 text-xl'>
                          {productName
                            .slice(0, productName.length - 1)
                            .join(" ")}
                        </h3>
                        <Button>
                          <Link
                            to={`/${categoryName}/${productYouMightLike._id}`}>
                            see product
                          </Link>
                        </Button>
                      </div>
                    );
                  })
                : null}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
