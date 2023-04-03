import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  Grid,
  Typography,
} from "@mui/material/";
import { useSelector } from "react-redux";

function OrderStatus() {
  const lastOrderInfo = useSelector((state) => state.lastOrderInfo);
  const subtotal = lastOrderInfo.products.reduce(
    (acc, product) => acc + product.unit_price * product.qty,
    0
  );
  const tax = subtotal * 0.085;
  const shipping = 10;
  const total = subtotal + tax + shipping;

  return (
    <div className="my-60">
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderStatus;
