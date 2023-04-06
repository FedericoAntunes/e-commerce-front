import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { removeItem, addItem } from "../../redux/slice/shoppingListSlice";
import { toggleMenu } from "../../redux/slice/showShoppingCartSlice";

function notify(message) {
  toast.warn(message, {
    position: "bottom-right",
  });
}

function ShoppingCart() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const showShoppingCart = useSelector((state) => state.showShoppingCart);

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
      <ToastContainer />
      <div
        className={`fixed right-0 h-screen top-0 bg-white w-full lg:w-[550px] z-40 ease-in-out duration-300 ${
          showShoppingCart ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="bg-gradient-to-r flex items-center from-yellow-200 to-yellow-400 h-[5.25rem] w-22 text-black text-lg py-2 px-3">
          <span
            className="absolute top-3 right-4"
            onClick={() => dispatch(toggleMenu())}
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
                      className="mt-2 text-lg py-1 mr-2 relative border-b border-gray-500"
                    >
                      <div className="flex">
                        <img
                          src={product.image}
                          className="w-24 h-24"
                          alt="product"
                        />
                        <div className="w-full">
                          <div className="flex justify-between mx-2">
                            <h4 className="text-black inline text-start font-medium">
                              {product.title}
                            </h4>
                            <span className="text-gray-600">
                              $ {product.price * product.quantity} (${" "}
                              {product.price} p/u)
                            </span>
                          </div>
                          <div className="w-1/4">
                            <label className="block font-bold mb-2">
                              Quantity:
                            </label>
                            <div className="flex items-center justify-between w-full ml-4 rounded-full px-1">
                              <button
                                className=" w-1/3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l-full focus:outline-none"
                                onClick={() => handleSubstractOne(product)}
                              >
                                -
                              </button>
                              <span className="text-center flex-grow">
                                {product.quantity}
                              </span>
                              <button
                                className="w-1/3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r-full focus:outline-none"
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
                    onClick={() => dispatch(toggleMenu())}
                    className=" text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </ul>
          ) : (
            <div>
              <img
                className="mt-20"
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/a023a017672c2488.svg"
                alt="Shopping-cart"
              />
              <p>Your shopping cart is empty!</p>
              <p>Add products to start an order.</p>
              <button
                onClick={() => dispatch(toggleMenu())}
                className="mt-2 text-white bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Start buying
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
