import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { removeItem, addItem } from "../../redux/slice/shoppingListSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function notify(message) {
  toast.warn(message, {
    position: "bottom-right",
  });
}

function ShoppingCart({ openMenu, toggleMenu }) {
  const shoppingList = useSelector((state) => state.shoppingList);

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
        className={`fixed right-0 h-screen top-0 bg-white w-full lg:w-2/5 z-10 ease-in-out duration-300 ${
          openMenu ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 h-[5.25rem] w-22 text-black text-lg py-2 px-3">
          <span className="absolute right-3 top-4" onClick={() => toggleMenu()}>
            <button>
              <FontAwesomeIcon className="text-gray-700" icon={faClose} />
            </button>
          </span>
          <div className="font-bold">Your Shopping cart</div>
        </div>
        <div className="flex text-black justify-center mx-3 mt-6 h-[89vh]">
          {shoppingList.length > 0 ? (
            <ul className="text-center w-full overflow-y-scroll mb-20 ">
              {shoppingList.map((product) => {
                return (
                  <li className="mt-2 text-lg py-1 relative border-b border-gray-500">
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
                          Quantity:
                          <div className="w-2/3 ml-4 border rounded-full px-1">
                            <button
                              className="float-left"
                              onClick={() => handleSubstractOne(product)}
                            >
                              -
                            </button>{" "}
                            {product.quantity}{" "}
                            <button
                              className="float-right"
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
                  </li>
                );
              })}
              <div className="bg-gray-200 border  w-full absolute bottom-0 p-5  left-0 right-0">
                <Link to={"/checkout"}>
                  <button
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
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/a023a017672c2488.svg"
                alt="Shopping-cart"
              />
              <p>Your shopping cart is empty!</p>
              <p>Add products to start an order.</p>
              <button
                onClick={() => toggleMenu()}
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
