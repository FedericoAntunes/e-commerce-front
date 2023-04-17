import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { format } from "date-fns";

// ApiCall
import apiCall from "./api/api";

export default function OrderHistory() {
  const [orders, setOrders] = useState(null);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const ordersHandler = async () => {
      const orders = await apiCall(`/orders/user`, "get", null, {
        Authorization: `Bearer ${token}`,
      });
      setOrders(orders.data);
    };
    ordersHandler();
  }, []);

  return (
    orders && (
      <div className="mt-[84px] relative mx-4 lg:mx-24">
        <div className="mx-auto py-16 lg:pb-24">
          <Link
            to={"/"}
            className="w-full md:w-[150px] absolute left-0 text-white inline-block bg-yellow-500 lg:hover:bg-yellow-400 active:bg-yellow-600 lg:active:bg-yellow-600 ease-in-out duration-100 font-medium rounded-lg text-base px-5 py-2.5 text-center"
          >
            <p className="mx-auto font-semibold inline-block text-md">
              Back to home
            </p>
          </Link>
          <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and download
              invoices.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold">Recent orders</h2>
            <div className="space-y-20">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div className="border" key={order.id}>
                    <h3 className="sr-only">
                      Order placed on {order.createdAt}
                    </h3>
                    <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                      <dl className="divide-y divide-gray-200 mx-auto space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                        <div className="flex justify-between sm:block">
                          <dt className="font-semibold text-left lg:text-center text-gray-900">
                            Date placed
                          </dt>
                          <dd className="sm:mt-1">
                            {format(
                              new Date(order.createdAt),
                              "yyyy-MM-dd hh:mm"
                            )}
                          </dd>
                        </div>
                        <div className="flex justify-between pt-6 sm:block sm:pt-0">
                          <dt className="font-semibold text-left lg:text-center text-gray-900">
                            Order number
                          </dt>
                          <dd className="sm:mt-1">{order.id}</dd>
                        </div>
                        <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                          <dt className="text-left font-semibold lg:text-center">
                            Total amount
                          </dt>
                          <dd className="sm:mt-1 text-green-500 font-semibold">
                            $ {order.total_price.toFixed(2)}
                          </dd>
                        </div>
                        <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                          <dt className="font-semibold">Status</dt>
                          <dd
                            className={`sm:mt-1 font-semibold ${
                              order.status === "In process"
                                ? "text-blue-500"
                                : order.status === "Sending"
                                ? "text-yellow-400"
                                : "text-green-500"
                            }`}
                          >
                            {order.status}
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <table className="w-full border-t text-gray-500 ">
                      <caption className="sr-only">Products</caption>
                      <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                        <tr>
                          <th
                            scope="col"
                            className="sm:w-2/5 lg:w-1/3 pr-8 py-3 text-center font-semibold"
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            className="hidden w-1/5 pr-8 py-3 font-semibold text-center sm:table-cell"
                          >
                            Unit price
                          </th>
                          <th
                            scope="col"
                            className="hidden pr-8 py-3 font-semibold text-center sm:table-cell"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="hidden py-3 font-semibold text-center sm:table-cell"
                          >
                            Total price
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                        {order.orderProducts.map((orderProduct) => (
                          <tr key={orderProduct.id}>
                            <td className="py-6 pr-8">
                              <div className="flex items-center">
                                <img
                                  src={
                                    orderProduct.product.image.substring(
                                      0,
                                      4
                                    ) === "http"
                                      ? orderProduct.product.image
                                      : process.env.REACT_APP_IMAGE_BASEURL +
                                        orderProduct.product.image
                                  }
                                  alt={""}
                                  className="w-16 h-16 object-center object-cover rounded ml-2 border mr-6"
                                />
                                <div>
                                  <div className="font-medium text-gray-900">
                                    {orderProduct.product.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="hidden py-6 pr-8 sm:table-cell">
                              <p>
                                $
                                {orderProduct.in_offer
                                  ? (
                                      orderProduct.unit_price *
                                      process.env.REACT_APP_PRODUCT_DISCOUNT
                                    ).toFixed(2)
                                  : orderProduct.unit_price.toFixed(2)}
                              </p>
                            </td>
                            <td className="hidden py-6 pr-8 sm:table-cell">
                              {orderProduct.qty}
                            </td>
                            <td className="py-6 pr-8 table-cell sm:hidden">
                              <p>
                                <span className="font-semibold text-yellow-500">
                                  $
                                  {orderProduct.in_offer
                                    ? (
                                        orderProduct.unit_price *
                                        process.env.REACT_APP_PRODUCT_DISCOUNT
                                      ).toFixed(2)
                                    : orderProduct.unit_price.toFixed(2)}
                                </span>{" "}
                                <span className="text-xs">
                                  ($
                                  {orderProduct.in_offer
                                    ? (
                                        orderProduct.unit_price *
                                        process.env.REACT_APP_PRODUCT_DISCOUNT
                                      ).toFixed(2)
                                    : orderProduct.unit_price.toFixed(2)}
                                  x{orderProduct.qty})
                                </span>
                              </p>
                            </td>
                            <td className="hidden py-6 font-semibold text-yellow-500 sm:table-cell">
                              $
                              {orderProduct.in_offer
                                ? (
                                    orderProduct.unit_price *
                                    process.env.REACT_APP_PRODUCT_DISCOUNT
                                  ).toFixed(2)
                                : orderProduct.unit_price.toFixed(2)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              ) : (
                <p className="mt-4 font-semibold border flex items-center justify-center p-16 rounded-lg">
                  You don't have orders yet. <br /> When you place your first
                  order it will appear here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
