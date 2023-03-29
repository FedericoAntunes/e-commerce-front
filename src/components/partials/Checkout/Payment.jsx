import React from "react";

function Payment({ shippingData, setShippingData }) {
  return (
    <>
      <div class="payment-information mt-10">
        <h2 class="text-lg font-medium text-gray-900">Payment Information</h2>
        <form>
          <div class="mt-4 flex items-center">
            <input
              onChange={(e) =>
                setShippingData({
                  ...shippingData,
                  payment_method: e.target.value,
                })
              }
              value="creditCard"
              type="radio"
              id="creditCard"
              name="paymentMethod"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label
              for="creditCard"
              class="ml-3 block text-sm font-medium text-gray-700"
            >
              Credit Card
            </label>

            <div class="mt-4">
              <input
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    payment_method: e.target.value,
                  })
                }
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                for="paypal"
                class="ml-3 block text-sm font-medium text-gray-700"
              >
                PayPal
              </label>
            </div>
            <div class="mt-4">
              <input
                onChange={(e) =>
                  setShippingData({
                    ...shippingData,
                    payment_method: e.target.value,
                  })
                }
                type="radio"
                id="eTransfer"
                name="paymentMethod"
                value="eTransfer"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                for="eTransfer"
                class="ml-3 block text-sm font-medium text-gray-700"
              >
                e-Transfer
              </label>
            </div>
          </div>
          <div class="mt-4">
            <label
              for="cardNumber"
              class="block text-sm font-medium text-gray-700"
            >
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="mt-4">
            <label
              for="cardName"
              class="block text-sm font-medium text-gray-700"
            >
              Name on Card
            </label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="mt-4">
            <label
              for="expirationDate"
              class="block text-sm font-medium text-gray-700"
            >
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              id="expirationDate"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div class="mt-4">
            <label for="cvv" class="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Payment;
