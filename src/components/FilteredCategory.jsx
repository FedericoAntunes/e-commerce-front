import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiCall from "./api/api";

function FilteredCategory() {
  const [products, setProducts] = useState(null);
  const [actualProduct, setActualProduct] = useState({});
  const [isShown, setIsShown] = useState(false);
  const params = useParams();

  const getCategoryProducts = async () => {
    const category = await apiCall(
      `/categories/${params.category_slug}`,
      "get"
    );
    const products = await apiCall(
      `/products?categoryId=${category.data.id}`,
      "get"
    );
    setProducts(products.data);
  };

  useEffect(() => {
    getCategoryProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="pt-20 grid-cols-1 sm:grid-cols-4 mx-24 grid gap-2">
      {products &&
        products.map((product, index) => {
          return (
            <div
              onMouseEnter={() => {
                setActualProduct(product.id);
                setIsShown(true);
              }}
              onMouseLeave={() => {
                setActualProduct(product.id);
                setIsShown(false);
              }}
              key={index}
              className="pb-6 overflow-hidden relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              {/* <div className="w-full absolute rounded-lg h-full opacity-0 hover:opacity-50 bg-gray-300"></div> */}
              <div className="flex items-center mx-auto z-30 justify"></div>
              {isShown && actualProduct === product.id && (
                <Link to={`/${product.company.slug}`}>
                  <button className="text-white absolute z-20 opacity-80 right-1 bottom-1 text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Go to restaurant
                  </button>
                </Link>
              )}
              <div className="-mb-6 relative">
                <Link to={`/${product.company.slug}`}>
                  <img
                    className="rounded-full absolute z-10 left-4 top-2 w-12 h-12"
                    src={product.company.logo}
                    alt="company"
                  />
                </Link>
              </div>
              <Link to={`/${product.company.slug}`}>
                <div className="hover:scale-105 ease-in-out w-full h-[200px] mb-5 overflow-hidden duration-300">
                  <img
                    className="pt-6 pb-4 z-0 w-full rounded-t-lg"
                    src={product.image}
                    alt="product"
                  />
                </div>
              </Link>
              <div className="px-5">
                <Link to={`/${product.company.slug}`}>
                  <h5 className="text-md text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-100 bg-green-600 w-16 rounded-full dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FilteredCategory;
