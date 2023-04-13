import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

// LazyLoader
import FilteredCategoryLoader from "./partials/loaders/FilteredCategoryLoader";

// Components
import Companies from "./partials/FilteredCategory/Companies";

// ApiCall
import apiCall from "./api/api";
import Loader from "./partials/loaders/Loader";

function FilteredCategory() {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const [actualProduct, setActualProduct] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [companies, setCompanies] = useState(null);

  const location = useLocation();

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
    setCategory(null);
    setCompanies(null);
    getCategoryProducts();
    // eslint-disable-next-line
  }, [location.pathname]);

  return companies && category && products ? (
    companies.length || Object.keys(category) ? (
      <div className="mt-20 pt-6">
        <h3 className="text-2xl font-semibold">{category.name}</h3>
        {companies.length && (
          <div className="mx-4 mt-10 sm:mx-24">
            <h4 className="font-semibold">
              Featured restaurants of {category.name}
            </h4>
            <Companies companies={companies} />
          </div>
        )}
        {Object.keys(category) && (
          <h4 className="font-semibold mt-16">
            Featured products of {category.name}
          </h4>
        )}
        <div className="pt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-24 grid gap-2">
          {products &&
            products.map((product, index) => {
              return (
                <Link to={`/${product.company.slug}?product=${product.slug}`}>
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
                    className="pb-6 lg:hover:scale-105 ease-in-out duration-300 cursor-pointer mx-auto overflow-hidden relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="-mb-6 relative">
                      <img
                        className="rounded-full absolute z-10 left-4 top-2 w-12 h-12"
                        src={product.company.logo}
                        alt="company"
                      />
                    </div>
                    <div className="w-full h-[200px] mb-5 overflow-hidden duration-300">
                      {product.stock === 0 && (
                        <img
                          className="absolute h-[270px]"
                          src="https://www.gunslingerlongboards.co.za/images/overlay_image_nostock.png"
                          alt="Out of stock"
                        />
                      )}
                      <img
                        className="pt-6 pb-4 z-0 w-full rounded-t-lg"
                        src={product.image}
                        alt="product"
                      />
                    </div>
                    <div className="px-5">
                      <h5 className="text-md text-start font-semibold tracking-tight truncate text-gray-900 dark:text-white">
                        {product.title}
                      </h5>
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
                </Link>
              );
            })}
        </div>
      </div>
    ) : (
      <div className="mt-20 pt-6">
        <h3 className="text-2xl font-semibold">No results...</h3>
      </div>
    )
  ) : (
    <>
      <Loader />
      <FilteredCategoryLoader />
    </>
  );
}

export default FilteredCategory;
