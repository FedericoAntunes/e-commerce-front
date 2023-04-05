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
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-75 z-50"></div>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-auto mx-3 md:mx-auto shadow-lg z-50">
              <div className="border-b border-gray-300 rounded-t-lg p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <button
                  className="float-right text-xl font-bold leading-none hover:text-black bg-transparent py-1 px-2"
                  onClick={() => setIsModalOpen()}
                >
                  <span className="text-black text-3xl block">×</span>
                </button>
              </div>
              <div className="p-4">
                <img
                  className="mx-auto rounded-t-lg"
                  src={`${product.image}`}
                  alt="category-img"
                />
                <p className="my-4 text-gray-800 text-base leading-relaxed">
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
              <div className="border-t border-gray-300 rounded-b-lg p-4 flex justify-end">
                <button
                  onClick={() => {
                    handleSubmit(product);
                  }}
                  className="text-white bg-yellow-600 hover:bg-yellow-700 font-bold py-2 px-4 rounded-full"
                >
                  Add to my cart
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default CenteredModal;
