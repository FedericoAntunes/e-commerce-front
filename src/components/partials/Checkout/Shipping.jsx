import React from "react";

function Shipping({ shippingData, setShippingData }) {
  return (
    <>
      <div className="shipping-information max-w-3xl mx-auto">
        <h2 className="text-lg font-medium text-gray-900">
          Shipping Information
        </h2>
        <form className="mt-6">
          <div>
            <label
              for="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              value={shippingData.name}
              type="text"
              name="name"
              id="name"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              onChange={(e) =>
                setShippingData({ ...shippingData, name: e.target.value })
              }
            />
          </div>
          <div className="mt-6">
            <label
              for="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              value={shippingData.address}
              onChange={(e) =>
                setShippingData({ ...shippingData, address: e.target.value })
              }
              type="text"
              name="address"
              id="address"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6">
            <label
              for="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              value={shippingData.city}
              onChange={(e) =>
                setShippingData({ ...shippingData, city: e.target.value })
              }
              type="text"
              name="city"
              id="city"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              for="province"
              className="block text-sm font-medium text-gray-700"
            >
              Province
            </label>
            <input
              value={shippingData.province}
              onChange={(e) =>
                setShippingData({ ...shippingData, province: e.target.value })
              }
              type="text"
              name="province"
              id="province"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              for="postalCode"
              className="block text-sm font-medium text-gray-700"
            >
              Postal Code
            </label>
            <input
              value={shippingData.postal_code}
              onChange={(e) =>
                setShippingData({
                  ...shippingData,
                  postal_code: e.target.value,
                })
              }
              type="text"
              name="postalCode"
              id="postalCode"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Shipping;
