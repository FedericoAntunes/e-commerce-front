import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";

// Actions
import { removeItem, addItem } from "../../redux/slice/shoppingListSlice";
import { toggleMenu } from "../../redux/slice/showShoppingCartSlice";

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

function ShoppingCart() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const showShoppingCart = useSelector(
    (state) => state.showShoppingCart.showCart
  );

  const dispatch = useDispatch();

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

  return (
    <>
      <div
        className={`fixed right-0 h-screen top-0 bg-white w-full lg:w-[550px] z-40 ease-in-out duration-300 ${
          showShoppingCart ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <ToastContainer limit={1} />
        <div className="bg-gradient-to-r flex items-center from-yellow-200 to-yellow-400 h-[5.25rem] w-22 text-black text-lg py-2 px-3">
          <span
            className="absolute top-3 right-4"
            onClick={() =>
              dispatch(toggleMenu({ scroll: true, showCart: false }))
            }
          >
            <button>
              <FontAwesomeIcon
                className="text-white hover:text-red-500"
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
            <ul className="text-center w-full overflow-y-scroll">
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
                          src={product.image}
                          className="h-32 w-[160px] mb-4 sm:mr-2 mx-auto sm:mx-0 rounded-2xl border"
                          alt="product"
                        />
                        <div className="w-full">
                          <div className="flex justify-between">
                            <h4 className="text-black inline text-start font-semibold">
                              {product.title}
                            </h4>
                            <span className="text-gray-600 w-[125px] text-green-500">
                              $ {(product.price * product.quantity).toFixed(2)}{" "}
                              <p className="text-gray-500">
                                ($ {product.price.toFixed(2)} p/u)
                              </p>
                            </span>
                          </div>
                          <div className="w-[125px]">
                            <div className="flex items-center justify-between mt-4 w-full rounded-full px-1">
                              <button
                                className=" w-[35px] pr-1 pb-[5px] pt-[3px] text-red-400 hover:bg-red-100 border-2 border-red-400 align-text-bottom text-gray-800 font-bold px-2 rounded-l-full focus:outline-none"
                                onClick={() => handleSubstractOne(product)}
                              >
                                -
                              </button>
                              <span className="text-center flex-grow">
                                {product.quantity}
                              </span>
                              <button
                                className="w-[35px] pl-1 text-green-500 bg-green-100 hover:bg-green-200 border-2 align-text-bottom border-green-500 text-gray-800 font-bold py-1 px-2 rounded-r-full focus:outline-none"
                                onClick={() => handleAddOne(product)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemove(product.id)}
                          className="text-xs absolute bottom-2 right-2 text-red-400 hover:text-red-600"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </motion.li>
                  </AnimatePresence>
                );
              })}
              <div className="bg-gray-200 border  w-full absolute bottom-0 p-5  left-0 right-0">
                <Link to={"/checkout"}>
                  <button
                    onClick={() =>
                      dispatch(toggleMenu({ scroll: true, showCart: false }))
                    }
                    className=" text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  >
                    Checkout
                  </button>
                </Link>
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
                className="mt-2 md:mt-16 text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
