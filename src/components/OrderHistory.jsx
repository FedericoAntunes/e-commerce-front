import { useEffect, useState } from "react";
import apiCall from "./api/api";
import { useSelector } from "react-redux";

export default function OrderHistory() {
  const [orders, setOrders] = useState(null);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const ordersHandler = async () => {
      const orders = await apiCall(`/orders/user`, "get", null, {
        Authorization: `Bearer ${token}`,
      });
      console.log("order", orders.data);
      setOrders(orders.data);
    };
    ordersHandler();
  }, []);

  return (
    orders && (
      <div className="bg-gray-100 mt-[84px]">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and download
              invoices.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="sr-only">Recent orders</h2>

            <div className="space-y-20">
              {orders.map((order) => (
                <div key={order.id}>
                  <h3 className="sr-only">Order placed on {order.createdAt}</h3>

                  <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                    <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                      <div className="flex justify-between sm:block">
                        <dt className="font-medium text-gray-900">
                          Date placed
                        </dt>
                        <dd className="sm:mt-1">{order.createdAt}</dd>
                      </div>
                      <div className="flex justify-between pt-6 sm:block sm:pt-0">
                        <dt className="font-medium text-gray-900">
                          Order number
                        </dt>
                        <dd className="sm:mt-1">{order.id}</dd>
                      </div>
                      <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                        <dt>Total amount</dt>
                        <dd className="sm:mt-1">{order.total_price}</dd>
                      </div>
                      <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                        <dt>Status</dt>
                        <dd className="sm:mt-1">{order.status}</dd>
                      </div>
                    </dl>
                    <a
                      /*  href={order.invoiceHref} */
                      className="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"
                    >
                      View Invoice
                      <span className="sr-only">for order {order.id}</span>
                    </a>
                  </div>

                  <table className="mt-4 w-full text-gray-500 sm:mt-6">
                    <caption className="sr-only">Products</caption>
                    <thead className="sr-only text-sm text-gray-500 text-left sm:not-sr-only">
                      <tr>
                        <th
                          scope="col"
                          className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="hidden pr-8 py-3 font-normal sm:table-cell"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="w-0 py-3 font-normal text-right"
                        >
                          Info
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                      {order.orderProducts.map((orderProduct) => (
                        <tr key={orderProduct.id}>
                          <td className="py-6 pr-8">
                            <div className="flex items-center">
                              <img
                                src={orderProduct.product.image}
                                alt={""}
                                className="w-16 h-16 object-center object-cover rounded mr-6"
                              />
                              <div>
                                <div className="font-medium text-gray-900">
                                  {orderProduct.product.title}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-6 pr-8 sm:table-cell">
                            {orderProduct.unit_price}
                          </td>
                          <td className="hidden py-6 pr-8 sm:table-cell">
                            {orderProduct.qty}
                          </td>
                          <td className="py-6 font-medium text-right whitespace-nowrap">
                            <a
                              href={orderProduct.href}
                              className="text-indigo-600"
                            >
                              View
                              <span className="hidden lg:inline">
                                {" "}
                                orderProduct
                              </span>
                              <span className="sr-only">
                                , {orderProduct.title}
                              </span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
