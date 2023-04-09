import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slice/showShoppingCartSlice";
import { addItem } from "../../redux/slice/shoppingListSlice";
import AddItemBtn from "./AddItemBtn";

function notify(message) {
  toast.warn(message, {
    position: "bottom-right",
  });
}

function CenteredModal({
  product,
  isModalOpen,
  setIsModalOpen,
  actualProduct,
}) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleSubmit = (product) => {
    if (quantity > product.stock) {
      return notify("The quantity cannot exceed the stock of the product.");
    }
    if (quantity < 1) {
      return notify("The quantity cannot be less than 0.");
    }
    setIsModalOpen();
    dispatch(toggleMenu(true));
    dispatch(addItem({ ...product, quantity }));
  };

  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <>
      {isModalOpen && product.slug === actualProduct ? (
        <>
          <div className="fixed left-0 h-screen top-0 right-0 bottom-0 z-40 flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="border-0 rounded-lg h-screen sm:h-[70vh] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b mt-16 sm:mt-0 border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-left">
                    {product.title}
                  </h3>
                  <span
                    onClick={() => setIsModalOpen()}
                    className="bg-transparent text-black hover:cursor-pointer float-right h-6 w-6 text-3xl leading-none block outline-none font-semibold focus:outline-none"
                  >
                    ×
                  </span>
                </div>
                <div className="relative p-6 sm:grid bg-gray-100 sm:grid-cols-2 flex-auto">
                  <div className="pr-4 my-auto">
                    <img
                      className="h-40 w-[219px] mx-auto border mt-8 md:mt-0 rounded"
                      src={`${product.image}`}
                      alt="category-img"
                    />
                    <h4 className="my-4 text-slate-800 text-sm font-bold text-left leading-6">
                      In stock:{" "}
                      <span className="text-slate-500">{product.stock}</span>
                    </h4>
                    <div className="text-center justify-between flex">
                      <input
                        onChange={(e) => handleQuantity(e)}
                        type="number"
                        min={1}
                        max={product.stock}
                        value={quantity}
                        className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <div>
                        {product.in_offer ? (
                          <>
                            <span className="line-through text-xl text-gray-400">
                              ${product.price.toFixed(2)}
                            </span>
                            <span className="font-bold text-2xl ml-2 text-green-500">
                              ${(product.price * 0.8).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="font-bold text-2xl text-green-500">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-hidden my-auto overflow-y-auto h-[170px]">
                    <p className="mt-2 text-gray-900 font-body text-lg leading-8 text-left w-80">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="hidden md:inline"
                    onClick={() => {
                      handleSubmit(product);
                    }}
                  >
                    <AddItemBtn />
                  </button>
                  <button
                    onClick={() => {
                      handleSubmit(product);
                    }}
                    className="bg-yellow-500 md:hidden  text-white font-bold py-2 px-4 rounded-full w-4/5"
                  >
                    Add to my cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen()}
            className={`opacity-25 fixed inset-0 z-30 bg-black`}
          ></div>
        </>
      ) : null}
    </>
  );
}

export default CenteredModal;
