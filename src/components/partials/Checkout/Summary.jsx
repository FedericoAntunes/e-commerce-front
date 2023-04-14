import { useSelector } from "react-redux";

function Summary() {
  const shoppingList = useSelector((state) => state.shoppingList);

  const subtotal = shoppingList.reduce(
    (acc, product) =>
      product.in_offer
        ? acc +
          product.price *
            process.env.REACT_APP_PRODUCT_DISCOUNT *
            product.quantity
        : acc + product.price * product.quantity,
    0
  );

  const shipping = 10;
  const tax = subtotal * 0.085;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-lg p-0 lg:p-6">
      <h2 className="text-3xl font-medium mb-6 text-center">Order Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="flex shadow-lg border flex-col justify-between bg-gray-100 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4">Order Details</h3>
          {shoppingList.map((product) => (
            <div
              key={product.id}
              className="flex flex-col h-full bg-white border pb-2 lg:overflow-hidden rounded-l-lg items-center mb-4"
            >
              <img
                src={
                  product.image.substring(0, 4) === "http"
                    ? product.image
                    : process.env.REACT_APP_IMAGE_BASEURL + product.image
                }
                className="h-full w-32 lg:h-[80px] lg:border-r mx-auto rounded-lg mt-6 object-fit mb-4"
                alt=""
              />
              <div className="flex-1">
                <h4 className="text-sm my-2">{product.title}</h4>
              </div>
              <div className="text-right">
                <span className="text-gray-500">$</span>
                <span className="text-gray-800 font-medium ml-1">
                  {product.in_offer
                    ? (
                        product.price * process.env.REACT_APP_PRODUCT_DISCOUNT
                      ).toFixed(2)
                    : product.price.toFixed(2)}
                </span>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500 text-xs mr-2">Qty:</span>
                  <span className="text-gray-800 text-xs font-medium">
                    {product.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 relative rounded-lg pb-20 border shadow-lg p-6">
          <h3 className="text-xl font-medium mb-4">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-800 font-medium">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="text-gray-800 font-medium">
              ${shipping.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Taxes</span>
            <span className="text-gray-800 font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="flex flex-grow justify-between items-center border-t absolute bottom-6 w-[calc(100%-3rem)] border-gray-300 pt-4">
            <h3 className="text-2xl font-bold">Total</h3>
            <span className="text-gray-800 font-medium text-2xl">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
