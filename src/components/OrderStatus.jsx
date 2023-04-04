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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Product details
              </Typography>
              {lastOrderInfo.products.map((product, index) => (
                <div key={index}>
                  <Typography variant="body1" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Quantity: {product.qty}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Price: ${(product.unit_price * product.qty).toFixed(2)}
                  </Typography>
                  <img
                    src={product.image}
                    alt="Product"
                    sx={{ width: "100%", height: "auto", marginTop: "1rem" }}
                  />
                </div>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Price
              </Typography>
              <Typography variant="body1" gutterBottom>
                Subtotal: ${subtotal.toFixed(2)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tax: ${tax.toFixed(2)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Shipping: ${shipping.toFixed(2)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Total: ${total.toFixed(2)}
              </Typography>
              <Box sx={{ borderBottom: "1px solid #eee", my: 2 }}></Box>
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
