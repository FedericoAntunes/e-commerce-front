import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { removeItem, addItem } from "../../redux/slice/shoppingListSlice";
import { ToastContainer, toast } from "react-toastify";

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
        className={`fixed overflow-y-scroll right-0 h-screen top-0 bg-white w-full lg:w-1/4 z-10 ease-in-out duration-300 ${
          openMenu ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="bg-yellow-300 h-16 w-22 text-black text-lg py-2 px-3">
          <span className="absolute right-3 top-4" onClick={() => toggleMenu()}>
            <FontAwesomeIcon icon={faClose} />
          </span>
          <div className="font-bold">Your Shopping cart</div>
          <div className="font-semibold">Enter your location</div>
        </div>
        <div className="flex text-black justify-center ml-3 mt-6">
          <ul className="text-center">
            {shoppingList.map((product) => {
              return (
                <li className="mt-2 text-lg py-1 border-b border-gray-500 font-semibold">
                  <h4 className="text-black">{product.title}</h4>
                  <div className="flex">
                    <img
                      src={product.image}
                      className="w-24 h-24"
                      alt="product"
                    />
                    <div>
                      <div>USD {product.price * product.quantity} </div>
                      <div>Quantity: </div>
                      <div>
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
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="text-xs mx-4 text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
