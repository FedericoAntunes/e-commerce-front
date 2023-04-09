import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEllipsis,
  faStar,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

// Components
import CenteredModal from "./partials/CenteredModal";
import RestaurantLoader from "./partials/loaders/RestaurantLoader";

// ApiCall
import apiCall from "./api/api";

function Restaurant() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actualProduct, setActualProduct] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [showBtn, setShowBtn] = useState("");

  const user = useSelector((state) => state.user);

  const [searchParams, setSearchParams] = useSearchParams();
  const productSlug = searchParams.get("product");

  const navigate = useNavigate();

  const handleOpenModal = (productSlug) => {
    setActualProduct(productSlug);
    setIsModalOpen(!isModalOpen);
  };

  const params = useParams();
  const getData = async () => {
    const companyData = await apiCall(`/companies/${params.slug}`, "get");
    !companyData.data && navigate("/");
    setCompany(companyData.data);
    const productData = await apiCall(
      `/products?companyId=${companyData.data.id}`,
      "get"
    );
    setProducts(productData.data);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isModalOpen]);

  useEffect(() => {
    const productExists = products.some((item) => item.slug === productSlug);
    productExists && handleOpenModal(productSlug);
  }, [products]);

  return company && products ? (
    <div className="mt-20">
      <div
        className="w-full mb-6 h-32"
        style={{
          backgroundImage: `url("${company.background}")`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FontAwesomeIcon
          className="rounded-full bg-gray-100 p-2 float-right mr-2 mt-3"
          icon={faEllipsis}
        />
        <FontAwesomeIcon
          className="rounded-full bg-gray-100 p-2 float-right mr-2 mt-3"
          icon={faHeart}
        />
      </div>
      <div className="mx-2 lg:mx-24">
        <div className="mx-2">
          <h2 className="text-left font-bold text-4xl mb-6 mt-12">
            {company.name}
          </h2>
          <small className="text-left block">
            <div className="mb-2">
              <FontAwesomeIcon className="text-yellow-300" icon={faStar} /> 4.2
              <span className="text-gray-500"> (100+ reviews) • </span>
              <span className="underline text-blue-600">More information</span>
            </div>
            <div className="text-gray-400 mb-2">$ • Burguer • Fastfood •</div>
            <div className="font-semibold text-orange-400">
              {!user
                ? "Login to see the estimated delivery time"
                : "The estimated waiting time is 30 - 40 min"}
            </div>
          </small>
        </div>
        {products.some((item) => item.in_offer) && (
          <>
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-left mx-2">
                Limited time offerts!{" "}
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faStopwatch}
                />
              </h2>
              <div className="grid-cols-1 sm:grid-cols-4 mt-6 grid gap-2">
                {products.map((product, index) => {
                  return (
                    product.in_offer && (
                      <div
                        onMouseEnter={() => {
                          setActualProduct(product.slug);
                          setIsShown(true);
                          setShowBtn(`${index}a`);
                        }}
                        onMouseLeave={() => {
                          setActualProduct(product.slug);
                          setIsShown(false);
                          setShowBtn("");
                        }}
                        key={`${index}a`}
                        className="pb-6 overflow-hidden relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                      >
                        <div className="flex items-center mx-auto z-30 justify">
                          <CenteredModal
                            product={product}
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            actualProduct={actualProduct}
                          />
                        </div>
                        <button
                          onClick={() => handleOpenModal(product.slug)}
                          className="md:hidden absolute z-20 opacity-80 right-1 bottom-1 text-white bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          View more
                        </button>
                        {isShown && showBtn === `${index}a` && (
                          <button
                            onClick={() => handleOpenModal(product.slug)}
                            className="hidden md:inline absolute z-20 opacity-80 right-1 bottom-1 text-white bg-yellow-500 md:hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            View more
                          </button>
                        )}
                        <div className="-mb-6 relative">
                          <img
                            className="rounded-full absolute z-10 left-4 top-2 w-12 h-12"
                            src={product.company.logo}
                            alt="company"
                          />
                        </div>
                        <Link to={`/${product.company.slug}`}>
                          <div className="md:hover:scale-105 ease-in-out relative w-full h-[200px] mb-5 overflow-hidden duration-300">
                            <img
                              className="pt-6 pb-4 z-0 mx-auto rounded-t-lg"
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
                    )
                  );
                })}
              </div>
            </div>
          </>
        )}
        {products.some((item) => item.id === item.id) && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-left mx-2">
              Picked for you{" "}
              <FontAwesomeIcon className="text-red-500" icon={faHeart} />
            </h2>
            <div className="grid-cols-1 sm:grid-cols-4 mt-6 grid gap-2">
              {products.map((product, index) => {
                return (
                  <div
                    onMouseEnter={() => {
                      setActualProduct(product.slug);
                      setIsShown(true);
                      setShowBtn(`${index}b`);
                    }}
                    onMouseLeave={() => {
                      setActualProduct(product.slug);
                      setIsShown(false);
                      setShowBtn("");
                    }}
                    key={`${index}b`}
                    className="pb-6 overflow-hidden relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="flex items-center mx-auto z-30 justify">
                      <CenteredModal
                        product={product}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        actualProduct={actualProduct}
                      />
                    </div>
                    <button
                      onClick={() => handleOpenModal(product.slug)}
                      className="md:hidden absolute z-20 opacity-80 right-1 bottom-1 text-white bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      View more
                    </button>
                    {isShown && showBtn === `${index}b` && (
                      <button
                        onClick={() => handleOpenModal(product.slug)}
                        className="hidden md:inline absolute z-20 opacity-80 right-1 bottom-1 text-white bg-yellow-500 md:hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        View more
                      </button>
                    )}
                    <div className="-mb-6 relative">
                      <img
                        className="rounded-full absolute z-10 left-4 top-2 w-12 h-12"
                        src={product.company.logo}
                        alt="company"
                      />
                    </div>
                    <Link to={`/${product.company.slug}`}>
                      <div className="md:hover:scale-105 ease-in-out relative w-full h-[200px] mb-5 overflow-hidden duration-300">
                        <img
                          className="pt-6 pb-4 z-0 mx-auto rounded-t-lg"
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
        )}
        <div className="text-left mt-12 border-t pt-12">
          <h5 className="text-2xl font-semibold">Frequently asked questions</h5>
          <div className="mt-4">
            <h6 className="font-semibold text-lg">
              Can I order {company.name} delivery with No-Hunger?
            </h6>
            <p>Yes. {company.name} delivery is available on No-Hunger.</p>
          </div>
          <div className="mt-4">
            <h6 className="font-semibold text-lg">
              Is {company.name} delivery available near me?
            </h6>
            {!user ? (
              <p>
                Enter your address to see if {company.name} delivery is
                available to your location in Ottawa
              </p>
            ) : (
              <p>Yes, {company.name} delivery is available to your location</p>
            )}
          </div>
          <div className="mt-4">
            <h6 className="font-semibold text-lg">
              Where can I find {company.name} online menu prices?
            </h6>
            <p>
              View upfront pricing information for the various items offered by{" "}
              {company.name} here on this page.
            </p>
          </div>
          <div className="mt-4">
            <h6 className="font-semibold text-lg">
              How do I pay for my {company.name} order?
            </h6>
            <p>Payment is handled via your No-Hunger account.</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <RestaurantLoader />
  );
}

export default Restaurant;
