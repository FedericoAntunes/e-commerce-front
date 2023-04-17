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
    companies.length > 0 || products.length > 0 ? (
      <div className="mt-20 lg:mx-24 pt-6">
        <div className="text-left mt-4 bg-white py-6 px-8 border shadow-lg rounded-lg">
          <h3 className="text-4xl font-semibold mb-4">
            {category.name} Delivery
          </h3>
          <p>
            Enjoy {category.name} delivery and takeaway with No Hunger near you
            from restaurants serving Mexican Food nearby, place your order and
            enjoy! Your order will be delivered in minutes.
          </p>
        </div>
        {companies.length > 0 && (
          <div className="mx-4 lg:mx-0 lg:border-x lg:mt-20 lg:p-10">
            <h4 className="font-semibold text-xl my-10 lg:mt-0 lg:mb-10">
              Trending restaurants of {category.name}
            </h4>
            <Companies companies={companies} />
          </div>
        )}
        <div className="lg:mx-0 lg:border-x lg:p-10 lg:mt-20">
          {Object.keys(category) && products.length > 0 && (
            <h4 className="font-semibold text-xl my-10 lg:mb-10 lg:mt-0">
              Featured products of {category.name}
            </h4>
          )}
          <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 lg:mx-0 grid gap-6">
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
                      className="pb-6 lg:hover:scale-105 ease-in-out duration-300 mx-auto cursor-pointer overflow-hidden relative w-70 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div className="-mb-6 relative">
                        <img
                          className="rounded-full absolute z-10 left-4 top-2 w-12 h-12"
                          src={
                            product.company.logo.substring(0, 4) === "http"
                              ? product.company.logo
                              : process.env.REACT_APP_IMAGE_BASEURL +
                                product.company.logo
                          }
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
                          src={
                            product.image.substring(0, 4) === "http"
                              ? product.image
                              : process.env.REACT_APP_IMAGE_BASEURL +
                                product.image
                          }
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
      </div>
    ) : (
      <div className="mt-20 pt-6 flex h-[80vh] justify-center items-center">
        <div>
          <h3 className="text-2xl font-semibold">
            No results, you can try another category!
          </h3>
          <img
            className="h-[300px] md:h-[500px] mx-auto"
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-page-3936848-3277288.png?f=webp"
            alt=""
          />
          <Link
            to={"/"}
            className="md:w-[150px] text-gray-200 mt-[3rem] inline-block bg-yellow-500 lg:hover:bg-yellow-400 active:bg-yellow-600 font-medium rounded-lg text-base px-5 py-2.5 text-center  "
          >
            <p className="mx-auto font-semibold inline-block text-md">
              Back to home
            </p>
          </Link>
        </div>
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
