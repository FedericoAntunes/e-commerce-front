import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "./api/api";
import { Link } from "react-router-dom";
import ProductModal from "./partials/ProductModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEllipsis, faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Restaurant() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actualProduct, setActualProduct] = useState({});
  const [isShown, setIsShown] = useState(false);

  const user = useSelector((state) => state.user);

  const handleOpenModal = (productId) => {
    setActualProduct(productId);
    setIsModalOpen(!isModalOpen);
  };

  const params = useParams();
  const getData = async () => {
    const companyData = await apiCall(`/companies/${params.slug}`, "get");
    setCompany(companyData);
    const productData = await apiCall(
      `/products?companyId=${companyData.id}`,
      "get"
    );
    setProducts(productData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    company && (
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
        <div className="mx-4">
          <div className="mx-2">
            <h2 className="text-left font-bold text-4xl">{company.name}</h2>
            <small className="text-left block">
              <FontAwesomeIcon icon={faStar} /> 4.2 (100+ reviews) •{" "}
              <span className="underline">More information</span>
              <div className="text-gray-600">$ • Burguer • Fastfood •</div>
              <div className="font-semibold">
                {!user
                  ? "Login to see the estimated delivery time"
                  : "The estimated waiting time is 30 - 40 min"}
              </div>
            </small>
            <p className="text-left text-gray-500">{company.description}</p>
          </div>
          <div className="grid-cols-1 sm:grid-cols-4 grid gap-2">
            {products.map((product, index) => {
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
                  className="relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  {/* <div className="w-full absolute rounded-lg h-full opacity-0 hover:opacity-50 bg-gray-300"></div> */}
                  <div className="flex items-center mx-auto z-30 justify">
                    <ProductModal
                      product={product}
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      actualProduct={actualProduct}
                    />{" "}
                  </div>
                  {isShown && actualProduct === product.id && (
                    <button
                      onClick={() => handleOpenModal(product.id)}
                      className="text-white absolute z-20 right-1 bottom-20 text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View more
                    </button>
                  )}
                  <div className="-mb-6 relative">
                    <img
                      className="rounded-full absolute z-10 left-4 top-2 h-12"
                      src={product.company.logo}
                      alt="company"
                    />
                  </div>
                  <Link to={`/${product.company.slug}`}>
                    <div className="hover:scale-105 ease-in-out duration-300">
                      <img
                        className="pt-8 pb-4 z-0 mx-auto rounded-t-lg w-[12rem]"
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
                      <span className="font-bold text-gray-900 dark:text-white">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
  );
}

export default Restaurant;
