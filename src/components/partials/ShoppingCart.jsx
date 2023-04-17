import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";

// Actions
import { removeItem, addItem } from "../../redux/slice/shoppingListSlice";
import { toggleMenu } from "../../redux/slice/showShoppingCartSlice";

// ApiCall
import apiCall from "../api/api";
import UnavailableProducts from "./UnavailableProducts";
import SpinnerLoader from "./loaders/SpinnerLoader";

function notify(message) {
  toast.warn(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function notifyError(message) {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function ShoppingCart() {
  const [loader, setLoader] = useState(false);

  const shoppingList = useSelector((state) => state.shoppingList);
  const showShoppingCart = useSelector(
    (state) => state.showShoppingCart.showCart
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRemove = (productId) => {
    return dispatch(removeItem(productId));
  };

  const handleAddOne = (product) => {
    if (product.quantity === product.stock) {
      return notify("No more products available.");
    }
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const handleSubstractOne = (product) => {
    dispatch(addItem({ ...product, quantity: -1 }));
  };

  const handleCheckout = async () => {
    setLoader(true);
    const products = await apiCall("/products", "get");
    const sameProducts = products.data.filter((product) =>
      shoppingList.some((userProduct) => product.id === userProduct.id)
    );
    const unavailableProducts = sameProducts.filter((product) =>
      shoppingList.some((userProduct) => product.stock < userProduct.quantity)
    );

    if (unavailableProducts.length > 0) {
      setLoader(false);
      return notifyError(
        <UnavailableProducts products={unavailableProducts} />
      );
    } else {
      setLoader(false);
      dispatch(toggleMenu({ scroll: true, showCart: false }));
      navigate("/checkout");
    }
  };

  return (
    <>
      <div
        className={`fixed right-0 h-screen top-0 bg-white w-full lg:w-[550px] z-40 ease-in-out duration-300 ${
          showShoppingCart ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="bg-gradient-to-r flex items-center from-yellow-200 to-yellow-400 h-[5.25rem] w-22 text-black text-lg py-2 px-3">
          <span
            className="absolute top-3 right-4"
            onClick={() =>
              dispatch(toggleMenu({ scroll: true, showCart: false }))
            }
          >
            <button>
              <FontAwesomeIcon
                className="text-white lg:hover:text-red-500 active:text-red-600 lg:active:text-red-600"
                icon={faClose}
              />
            </button>
          </span>
          <div className="w-full">
            <div className="font-bold text-white">Your Shopping cart </div>
          </div>
        </div>
        <div className="flex text-black py-3 justify-center mx-2 h-[calc(100vh-166px)]">
          {shoppingList.length > 0 ? (
            <ul className="text-center w-full overflow-y-auto">
              {shoppingList.map((product) => {
                return (
                  <AnimatePresence key={product.id} mode="popLayout">
                    <motion.li
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      className="mt-2 text-lg py-2 mr-2 relative border-b border-gray-300"
                    >
                      <div className="block sm:flex">
                        <img
                          src={
                            product.image.substring(0, 4) === "http"
                              ? product.image
                              : process.env.REACT_APP_IMAGE_BASEURL +
                                product.image
                          }
                          className="w-[160px] mb-4 sm:mr-2 mx-auto sm:mx-0 rounded-2xl border"
                          alt="product"
                        />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <h4 className="text-black inline text-start font-semibold">
                              {product.title}
                            </h4>
                            {product.in_offer ? (
                              <span className="w-[125px] text-green-500">
                                ${" "}
                                {(
                                  product.price *
                                  product.quantity *
                                  Number(process.env.REACT_APP_PRODUCT_DISCOUNT)
                                ).toFixed(2)}{" "}
                                <p className="text-gray-500">
                                  (${" "}
                                  {(
                                    product.price *
                                    Number(
                                      process.env.REACT_APP_PRODUCT_DISCOUNT
                                    )
                                  ).toFixed(2)}{" "}
                                  p/u)
                                </p>
                              </span>
                            ) : (
                              <span className="w-[125px] text-green-500">
                                ${" "}
                                {(product.price * product.quantity).toFixed(2)}{" "}
                                <p className="text-gray-500">
                                  ($ {product.price.toFixed(2)} p/u)
                                </p>
                              </span>
                            )}
                          </div>
                          <div className="w-[125px]">
                            <div className="flex items-center justify-between mt-4 w-full rounded-full px-1">
                              <button
                                className=" w-[35px] pr-1 pb-[5px] pt-[3px] text-red-400 lg:hover:bg-red-100 lg:active:bg-red-300 active:bg-red-300 border-2 border-red-400 align-text-bottom font-bold px-2 rounded-l-full focus:outline-none"
                                onClick={() => handleSubstractOne(product)}
                              >
                                -
                              </button>
                              <span className="text-center flex-grow">
                                {product.quantity}
                              </span>
                              <button
                                className="w-[35px] pl-1 text-green-500 bg-green-100 lg:hover:bg-green-200 active:bg-green-300 lg:active:bg-green-300 border-2 align-text-bottom border-green-500 font-bold py-1 px-2 rounded-r-full focus:outline-none"
                                onClick={() => handleAddOne(product)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemove(product.id)}
                          className="text-xs absolute bottom-2 right-2 text-red-400 lg:hover:text-red-500 active:text-red-600 lg:active:text-red-600"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </motion.li>
                  </AnimatePresence>
                );
              })}
              <div className="bg-gray-200 border  w-full absolute bottom-0 p-5  left-0 right-0">
                <button
                  onClick={() => {
                    handleCheckout();
                  }}
                  className=" text-white bg-yellow-500 lg:hover:bg-yellow-400 active:bg-yellow-600 lg:active:bg-yellow-600 lg:hover:scale-105 ease-in-out duration-150 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  {loader ? <SpinnerLoader /> : "Checkout"}
                </button>
              </div>
            </ul>
          ) : (
            <div className="my-auto">
              <img
                className="mt-20"
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/a023a017672c2488.svg"
                alt="Shopping-cart"
              />
              <p>Your shopping cart is empty!</p>
              <p>Add products to start an order.</p>
              <button
                onClick={() =>
                  dispatch(toggleMenu({ scroll: true, showCart: false }))
                }
                className="mt-2 md:mt-16 text-white bg-yellow-500 lg:hover:bg-yellow-400 active:bg-yellow-600 lg:active:bg-yellow-600 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                Start buying
              </button>
            </div>
          )}
        </div>
      </div>
      {showShoppingCart ? (
        <div
          className="opacity-25 fixed inset-0 z-20 bg-black"
          onClick={() =>
            dispatch(toggleMenu({ scroll: true, showCart: false }))
          }
        ></div>
      ) : null}
    </>
  );
}

export default ShoppingCart;
