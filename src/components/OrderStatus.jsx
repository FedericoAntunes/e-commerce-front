import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  Typography,
  Box,
} from "@mui/material/";
import { useSelector } from "react-redux";
import apiCall from "./api/api";
import { useEffect, useState } from "react";

function OrderStatus() {
  const token = useSelector((state) => state.user.token);
  const [order, setOrder] = useState(null);
  const lastOrderInfo = useSelector((state) => state.lastOrderInfo);
  const subtotal = lastOrderInfo.products.reduce(
    (acc, product) => acc + product.unit_price * product.qty,
    0
  );
  const tax = subtotal * 0.085;
  const shipping = 10;
  const total = subtotal + tax + shipping;

  useEffect(() => {
    const handleOrder = async () => {
      const order = await apiCall(`/orders/lastOrder`, "get", null, {
        Authorization: `Bearer ${token}`,
      });
      setOrder(order.data);
    };
    handleOrder();
  }, []);

  return (
    order && (  
      <div className="mt-[84px] py-12 sm:px-48">
        <Typography variant="h4" gutterBottom>
          Thanks for your order
        </Typography>
        <Stepper activeStep={2}>
          <Step>
            <StepLabel>Order in progress</StepLabel>
          </Step>
          <Step>
            <StepLabel>Incoming</StepLabel>
          </Step>
          <Step>
            <StepLabel>Shipped</StepLabel>
          </Step>
        </Stepper>
        <div class="flex flex-col gap-4 mt-6 bg-white p-6 rounded-lg shadow-xl  lg:flex-row lg:justify-between">
          <div class="w-full md:w-full lg:w-2/5">
            <div class="p-4 bg-gray-100 border rounded-lg">
              <h5 class="text-xl font-bold mb-2">Order Details</h5>
              {lastOrderInfo.products.map((product, index) => (
                <div
                  key={index}
                  class="flex items-center justify-between py-2 border-b border-gray-300"
                >
                  <div class="flex-grow pr-4">
                    <h6 class="font-medium">{product.title}</h6>
                    <p class="text-sm text-gray-600 leading-6 tracking-wider">
                      Quantity: <strong>{product.qty}</strong>
                    </p>
                    <p class="text-sm text-gray-600 leading-6 tracking-wider">
                      Price:{" "}
                      <strong>
                        ${(product.unit_price * product.qty).toFixed(2)}
                      </strong>
                    </p>
                  </div>
                  <img
                    src={product.image}
                    alt="Product"
                    class="w-[100px] rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
          <div class="w-full md:w-full lg:w-3/5">
            <div class="p-4 bg-gray-100 border">
              <div class="mb-4">
                <h5 class="text-xl font-bold text-left">Order Summary</h5>
              </div>
              <div class="mb-4">
                <p class="text-sm text-gray-600 text-left leading-6 tracking-wider">
                  Subtotal: <strong>${subtotal.toFixed(2)}</strong>
                </p>

                <p class="text-sm text-gray-600 text-left leading-6 tracking-wider">
                  Tax: <strong>${tax.toFixed(2)}</strong>
                </p>

                <div className="mb-4">
                  <p class="text-sm text-gray-600 text-left leading-6 tracking-wider">
                    Shipping: <strong>${shipping.toFixed(2)}</strong>
                  </p>
                </div>

                <h6 class="text-lg font-medium mb-2 text-left">
                  <strong>Total:</strong> <strong>${total.toFixed(2)}</strong>
                </h6>
              </div>
              <div class="border-b border-gray-300 mb-2"></div>
              <div>
                <h5 class="text-xl font-bold text-left">Order Information</h5>
                {order && (
                  <div key={order.id} class="mt-4">
                    <p class="text-sm text-gray-600 text-left leading-6 tracking-wider">
                      <strong>Order Id:</strong> {order.id}
                    </p>
                    <p class="text-sm text-gray-600 text-left leading-6 tracking-wider">
                      <strong>Order Status:</strong> {order.status}
                    </p>
                    <div class="flex items-center mt-2">
                      <p class="text-sm text-gray-600 leading-6 tracking-wider">
                        <strong>Name:</strong> {order.address.firstname}{" "}
                        {order.address.lastname}
                      </p>
                      <p class="text-sm text-gray-600 ml-2 leading-6 tracking-wider">
                        <strong>Province:</strong> {order.address.province}
                      </p>
                    </div>
                    <h6 class="text-sm text-gray-600 font-medium mt-2 text-left leading-6 tracking-wider">
                      <strong>Address:</strong>
                    </h6>
                    <p class="text-sm text-gray-600 text-left leading-6 tracking-wider">
                      {order.address.address}, {order.address.city},{" "}
                      {order.address.postal_code}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default OrderStatus;
