import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// LazyLoader
import FilteredCategoryLoader from "./partials/loaders/FilteredCategoryLoader";

// Components
import Companies from "./partials/FilteredCategory/Companies";

// ApiCall
import apiCall from "./api/api";

function FilteredCategory() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [actualProduct, setActualProduct] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [companies, setCompanies] = useState(null);

  const params = useParams();

  const getCategoryProducts = async () => {
    const category = await apiCall(
      `/categories/${params.category_slug}`,
      "get"
    );
    setCategory(category.data);
    const companyTag = params.category_slug.split("-");
    const companyData = await apiCall(`/companies?tag=${companyTag[0]}`, "get");
    setCompanies(companyData.data);
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

  return companies && category && products ? (
    <div className="mt-20 pt-6">
      <h3 className="text-2xl font-semibold">{category.name}</h3>
      <div className="mx-4 mt-10 sm:mx-24">
        <h4 className="font-semibold">
          Featured restaurants of {category.name}
        </h4>
        <Companies companies={companies} />
      </div>
      <h4 className="font-semibold mt-16">
        Featured products of {category.name}
      </h4>
      <div className="pt-6 grid-cols-1 sm:grid-cols-4 mx-4 sm:mx-24 grid gap-2">
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
                className="pb-6 mx-auto overflow-hidden relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex items-center mx-auto z-30 justify"></div>
                <Link to={`/${product.company.slug}`}>
                  <button className="text-white absolute z-20 opacity-80 right-1 bottom-1 text-white bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Go to restaurant
                  </button>
                </Link>
                {isShown && actualProduct === product.id && (
                  <Link to={`/${product.company.slug}`}>
                    <button className="text-white absolute z-20 opacity-80 right-1 bottom-1 text-white bg-yellow-500 md:hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                  <div className="md:hover:scale-105 ease-in-out w-full h-[200px] mb-5 overflow-hidden duration-300">
                    <img
                      className="pt-6 pb-4 z-0 w-full rounded-t-lg"
                      src={product.image}
                      alt="product"
                    />
                  </div>
                </Link>
                <div className="px-5 h-[80px]">
                  <Link to={`/${product.company.slug}`}>
                    <h5 className="text-md text-start font-semibold tracking-tight truncate text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                  </Link>
                  <div className="flex items-end">
                    {product.in_offer ? (
                      <>
                        <span className="line-through text-gray-400">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="font-bold text-xl ml-2 text-green-500">
                          ${(product.price * 0.8).toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-xl text-green-500">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <FilteredCategoryLoader />
  );
}

export default FilteredCategory;
