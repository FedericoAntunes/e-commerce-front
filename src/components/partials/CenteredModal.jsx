import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slice/showShoppingCartSlice";
import { addItem } from "../../redux/slice/shoppingListSlice";
import AddItemBtn from "./AddItemBtn";

function CenteredModal({
  product,
  isModalOpen,
  setIsModalOpen,
  actualProduct,
}) {
  function notify(message) {
    toast.warn(message, {
      position: "bottom-right",
    });
  }
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold w-80 text-center">
                    {product.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsModalOpen()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <img
                    className="h-40 mx-auto rounded-t"
                    src={`${product.image}`}
                    alt="category-img"
                  />
                  <p className="my-4 text-slate-500 text-lg mx-auto leading-relaxed w-80">
                    {product.description}
                  </p>
                  <h1>In stock: {product.stock}</h1>
                  <div className="text-right">
                    <h1>US$ {product.price}</h1>
                  </div>
                  <input
                    onChange={(e) => handleQuantity(e)}
                    type="number"
                    min={1}
                    max={product.stock}
                    value={quantity}
                  />
                </div>
                {/*footer*/}
                <div className="flex flex-col items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    onClick={() => {
                      handleSubmit(product);
                    }}
                  >
                    <AddItemBtn />
                  </button>

                  <button
                    className="text-red-500 bg-white hover:bg-red-200 border border-red-500 mt-4 inline-block ms-auto rounded background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsModalOpen()}
                  >
                    Close
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
