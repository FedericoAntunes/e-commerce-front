import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Payment({ shippingData, setShippingData }) {
  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Payment</FormLabel>
        <RadioGroup
          row
          required
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) =>
            setShippingData({
              ...shippingData,
              payment_method: e.target.value,
            })
          }
        >
          <FormControlLabel
            value="credit_card"
            control={<Radio />}
            label="Credit Card"
          />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
          <FormControlLabel
            value="etransfer"
            control={<Radio />}
            label="eTransfer"
          />
        </RadioGroup>
      </FormControl>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          id="cardNumber"
          label="Card Number"
          sx={{ width: "100%" }}
          onChange={(e) => 
            setShippingData({
              ...shippingData,
              payment_info: {
                ...shippingData.payment_info,
                card_number: e.target.value,
              },
            })
        }
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          id="nameOnCard"
          label="Name on card"
          sx={{ width: "100%" }}
          onChange={(e) =>
            setShippingData({
              ...shippingData,
              payment_info: {
                ...shippingData.payment_info,
                name_card: e.target.value,
              },
            })
          
          }
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          id="expirationDate"
          label="Expiration date"
          sx={{ width: "100%" }}
          onChange={(e) =>
            setShippingData({
              ...shippingData,
              payment_info: {
                ...shippingData.payment_info,
                expiration_date: e.target.value,
              },
            })
          }
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          id="cvv"
          label="CVV"
          sx={{ width: "100%" }}
          onChange={(e) =>
            setShippingData({
              ...shippingData,
              payment_info: {
                ...shippingData.payment_info,
                cvv: e.target.value,
              },
            })
          }
        />
      </Box>
    </>
  );
}

export default Payment;
