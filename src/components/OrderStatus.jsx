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
      console.log("order", order.data);
      setOrder(order.data);
    };
    handleOrder();
  }, []);

  return (
    order && (
      <div className="mt-[84px] py-12">
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
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Paper className="text-left" sx={{ p: 2, bgcolor: "#f5f5f5" }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Order details
                </Typography>
              </Box>
              {lastOrderInfo.products.map((product, index) => (
                <Box
                  key={index}
                  sx={{
                    borderBottom: "1px solid #eee",
                    py: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <div className="text-center">
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        className="font-bold"
                        gutterBottom
                      >
                        Quantity: <strong>{product.qty}</strong>
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Price:{" "}
                        <strong>
                          ${(product.unit_price * product.qty).toFixed(2)}
                        </strong>
                      </Typography>
                    </div>
                  </Box>
                  <img
                    src={product.image}
                    alt="Product"
                    style={{
                      width: "20rem",
                      borderRadius: "0.5rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                    className="rounded-lg"
                  />
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper className="text-start" sx={{ p: 2, bgcolor: "#f5f5f5" }}>
              <div className="text-start mb-4">
                <Typography variant="h5" gutterBottom>
                  Order Summary
                </Typography>
              </div>
              <div className="text-start">
                <Typography variant="body1" gutterBottom>
                  Subtotal: <strong>${subtotal.toFixed(2)}</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Tax: <strong>${tax.toFixed(2)}</strong>
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Shipping: <strong>${shipping.toFixed(2)}</strong>
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <strong>Total:</strong> <strong>${total.toFixed(2)}</strong>
                </Typography>
              </div>
              <Box sx={{ borderBottom: "1px solid gray", my: 2, opacity: 0.5 }}></Box>
              <Typography variant="h5" gutterBottom>
                Order Information
              </Typography>
              {order && (
                <div key={order.id}>
                  <Typography variant="body1">
                    <strong>Order Id:</strong> {order.id}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Order Status:</strong> {order.status}
                  </Typography>
                  <div>
                    <Typography
                      variant="body1"
                      gutterBottom
                      display="inline-block"
                    >
                      <strong>Name:</strong> {order.address.firstname}{" "}
                      {order.address.lastname}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      display="inline-block"
                      sx={{ ml: 2 }}
                    >
                      <strong>Province:</strong> {order.address.province}
                    </Typography>
                  </div>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", mb: 1 }}
                  >
                    Address:
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {order.address.address}, {order.address.city},{" "}
                    {order.address.postal_code}
                  </Typography>
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  );
}

export default OrderStatus;
