import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function Summary() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const dispatch = useDispatch();
  return (
    <>
      <div class="bg-white border rounded-lg shadow-lg p-6">
        <div class="flex justify-center ml-[9rem] mb-4">
          <h2 class="text-lg font-medium">Order Summary</h2>
        </div>
        <div className="grid grid-cols-2 gap-7 justify-center items-center">
          <div className="mb-5">
            {shoppingList.map((product) => {
              return (
                <div className="flex justify-start py-2 border my-4">
                  <img src={product.image} className="h-28 w-40" alt="" />
                  <div className="text-start flex flex-col justify-between ">
                    <h4>{product.title}</h4>
                    <h4>USD: {product.price}</h4>
                    <h4>Qty: {product.quantity}</h4>
                  </div>
                </div>
                
              );
            })}
          </div>

          <div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Subtotal</span>
              <span class="text-gray-800 font-medium">$100.00</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Shipping</span>
              <span class="text-gray-800 font-medium">$10.00</span>
            </div>
            <div class="flex justify-between mb-2">
              <span class="text-gray-600">Taxes</span>
              <span class="text-gray-800 font-medium">$8.50</span>
            </div>
            <div class="flex justify-between items-center border-t border-gray-300 pt-4">
              <h3 class="text-lg font-bold">Total</h3>
              <span class="text-gray-800 font-medium">$118.50</span>
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mt-6">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
