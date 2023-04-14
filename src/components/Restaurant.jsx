import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEllipsis,
  faStar,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

// Actions
import { toggleMenu } from "../redux/slice/showShoppingCartSlice";

// Components
import CenteredModal from "./partials/CenteredModal";
import RestaurantLoader from "./partials/loaders/RestaurantLoader";
import RestaurantInfoModal from "./partials/RestaurantInfoModal";

// ApiCall
import apiCall from "./api/api";

function Restaurant() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [actualProduct, setActualProduct] = useState({});
  const [isShown, setIsShown] = useState(false);
  const [showBtn, setShowBtn] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [searchParams, setSearchParams] = useSearchParams();
  const productSlug = searchParams.get("product");

  const navigate = useNavigate();

  const handleOpenModal = (productSlug, forceOpen) => {
    setActualProduct(productSlug);
    if (forceOpen) {
      dispatch(toggleMenu({ scroll: false, showCart: false }));
      setIsModalOpen(true);
    } else {
      setIsModalOpen(!isModalOpen);
      dispatch(toggleMenu({ scroll: isModalOpen, showCart: false }));
    }
  };

  function HandleMoreInfoModal(event) {
    event.preventDefault();
    return setIsDescriptionOpen(!isDescriptionOpen);
  }

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
    setCompany(null);
    setProducts([]);
    getData();
    // eslint-disable-next-line
  }, [location.pathname]);

  useEffect(() => {
    const productExists = products.some((item) => item.slug === productSlug);
    productExists && handleOpenModal(productSlug, true);
  }, [products]);

  return company && products ? (
    <div className="mt-20">
      <div
        className="w-full mb-6 h-32 md:h-[20rem]"
        style={{
          backgroundImage: `url("${
            company.background.substring(0, 4) === "http"
              ? company.background
              : process.env.REACT_APP_IMAGE_BASEURL + company.background
          }")`,
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
      <div className="mx-4 lg:mx-24">
        <div className="md:absolute md:top-[142px] md:px-10 md:py-[1rem] md:border md:rounded-lg md:bg-white md:bg-opacity-50 md:shadow-lg md:backdrop-blur-sm  ">
          <h2 className="text-left font-bold text-4xl mb-6">{company.name}</h2>
          <small className="text-left block">
            <div className="mb-2">
              <span className="font-bold text-gray-700">
                <FontAwesomeIcon
                  className="text-yellow-400 h-[15px]"
                  icon={faStar}
                />{" "}
                {company.valoration}
              </span>
              <span className="text-gray-700"> (100+ reviews) • </span>
              {company.description ? (
                <button
                  className="underline leading-10 text-green-600"
                  onClick={HandleMoreInfoModal}
                >
                  More information
                </button>
              ) : null}
              <RestaurantInfoModal
                company={company}
                isDescriptionOpen={isDescriptionOpen}
                setIsDescriptionOpen={setIsDescriptionOpen}
              />
            </div>
            <div className="text-gray-700 mb-2">$ • {company.tags} •</div>
            <div className="font-semibold text-red-600">
              {!user
                ? "Login to see the estimated delivery time"
                : company.estimated_time}
            </div>
          </small>
        </div>
        {products.some((item) => item.in_offer) && (
          <>
            <div className="mt-16">
              <h2 className="text-2xl lg:ml-10 font-semibold text-left">
                Limited time offerts!{" "}
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faStopwatch}
                />
              </h2>
              <div className="grid-cols-1 md:grid-cols-2 lg:border-x lg:px-10 lg:grid-cols-4 mt-6 grid gap-y-8 gap-x-4">
                {products.map((product, index) => {
                  return (
                    product.in_offer && (
                      <div>
                        <div className="flex items-center mx-auto z-30 justify">
                          <CenteredModal
                            product={product}
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            actualProduct={actualProduct}
                          />
                        </div>
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
                          onClick={() => handleOpenModal(product.slug)}
                          key={`${index}a`}
                          className="pb-6 lg:hover:scale-105 ease-in-out mx-auto duration-300 cursor-pointer overflow-hidden relative w-70 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
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
                          <Link to={`/${product.company.slug}`}>
                            <div className="relative w-full h-[200px] mb-5 overflow-hidden">
                              {product.stock === 0 && (
                                <img
                                  className="absolute h-[270px]"
                                  src="https://www.gunslingerlongboards.co.za/images/overlay_image_nostock.png"
                                  alt="Out of stock"
                                />
                              )}
                              <img
                                className="pt-6 pb-4 z-0 mx-auto rounded-t-lg"
                                src={
                                  product.image.substring(0, 4) === "http"
                                    ? product.image
                                    : process.env.REACT_APP_IMAGE_BASEURL +
                                      product.image
                                }
                                alt="product"
                              />
                            </div>
                          </Link>
                          <div className="px-5">
                            <Link to={`/${product.company.slug}`}>
                              <h5 className="text-md text-start font-semibold truncate tracking-tight text-gray-900 dark:text-white">
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
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </>
        )}
        {products.some((item) => item.id === item.id) && (
          <div className="mt-16 lg:rounded-lg">
            <h2 className="text-2xl lg:ml-10 font-semibold text-left">
              Picked for you{" "}
              <FontAwesomeIcon className="text-red-500" icon={faHeart} />
            </h2>
            <div className="grid-cols-1 md:grid-cols-2 lg:border-x lg:px-10 lg:grid-cols-4 mt-6 grid gap-4 gap-y-8">
              {products.map((product, index) => {
                return (
                  <div>
                    <div className="flex items-center mx-auto z-30 justify">
                      <CenteredModal
                        product={product}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        actualProduct={actualProduct}
                      />
                    </div>
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
                      onClick={() => handleOpenModal(product.slug)}
                      key={`${index}b`}
                      className="pb-6 lg:hover:scale-105 ease-in-out mx-auto duration-300 cursor-pointer overflow-hidden relative w-70 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg"
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
                      <Link to={`/${product.company.slug}`}>
                        <div className="relative w-full h-[200px] mb-5 overflow-hidden">
                          {product.stock === 0 && (
                            <img
                              className="absolute h-[270px]"
                              src="https://www.gunslingerlongboards.co.za/images/overlay_image_nostock.png"
                              alt="Out of stock"
                            />
                          )}
                          <img
                            className="pt-6 pb-4 z-0 mx-auto rounded-t-lg"
                            src={
                              product.image.substring(0, 4) === "http"
                                ? product.image
                                : process.env.REACT_APP_IMAGE_BASEURL +
                                  product.image
                            }
                            alt="product"
                          />
                        </div>
                      </Link>
                      <div className="px-5">
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
