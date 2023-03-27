import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiCall from "./api/api";
import { Link, NavLink } from "react-router-dom";
import ProductModal from "./partials/ProductModal";

function Restaurant() {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actualProduct, setActualProduct] = useState({});

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
  }, []);

  return (
    <>
      {/* {products.map((product) => {
        return (
          <div key={product.id}>
            
          </div>
        );
      })} */}
      <div className="flex flex-wrap justify-center">
        {products.map((product) => {
          return (
            <div className="w-full max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={`/${product.company.slug}`}>
                <img
                  className="pt-8 pb-4 mx-auto rounded-t-lg"
                  src={product.image}
                  alt="product image"
                />
              </Link>
              <div className="px-5 pb-5">
                <Link to={`/${product.company.slug}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </Link>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  <ProductModal
                    product={product}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    actualProduct={actualProduct}
                  />
                  <button
                    onClick={() => handleOpenModal(product.id)}
                    className="text-white text-white
          bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Restaurant;
