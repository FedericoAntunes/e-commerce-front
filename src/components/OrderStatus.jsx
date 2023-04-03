import { Stepper, Step, StepLabel, Paper, Grid, Typography } from '@mui/material/';
import { useSelector } from 'react-redux';

function OrderStatus() {
  const shoppingList = useSelector((state) => state.shoppingList);
  const subtotal = shoppingList.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const tax = subtotal * 0.085;
  const shipping = 10;
  const total = subtotal + tax + shipping;

  return (
    <div className='my-60'>
      <Typography variant="h4" gutterBottom>Thanks for your order</Typography>
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
            <Typography variant="h5" gutterBottom>Product details</Typography>
            {shoppingList.map((product, index) => (
              <div key={index}>
                <Typography variant="body1" gutterBottom>{product.title}</Typography>
                <Typography variant="body1" gutterBottom>Quantity: {product.quantity}</Typography>
                <Typography variant="body1" gutterBottom>Price: ${(product.price * product.quantity).toFixed(2)}</Typography>
                <img src={product.image} alt="Product" sx={{ width: '100%', height: 'auto', marginTop: '1rem' }} />
              </div>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>Price</Typography>
            <Typography variant="body1" gutterBottom>Subtotal: ${subtotal.toFixed(2)}</Typography>
            <Typography variant="body1" gutterBottom>Tax: ${tax.toFixed(2)}</Typography>
            <Typography variant="body1" gutterBottom>Shipping: ${shipping.toFixed(2)}</Typography>
            <Typography variant="body1" gutterBottom>Total: ${total.toFixed(2)}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderStatus;