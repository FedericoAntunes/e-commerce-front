import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { yellow } from "@mui/material/colors";
import { pink } from "@mui/material/colors";
import { red } from '@mui/material/colors';

const yellowA400 = yellow[500];

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
            control={<Radio sx={{ color: "#FCD34D", "&.Mui-checked": {color: "#F59E0B"}}}  />}
            label="Credit Card"
          />
          <FormControlLabel value="paypal" control={<Radio sx={{ color: "#FCD34D", "&.Mui-checked": {color: "#F59E0B"}}} />} label="PayPal" />
          <FormControlLabel
            value="etransfer"
            control={<Radio sx={{ color: "#FCD34D", "&.Mui-checked": {color: "#F59E0B"}}} />}
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
          label={<span style={{color: "#F59E0B"}}>Card Number</span>}
          sx={{ width: "100%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
          '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
          //color= {yellowA400}  
          inputProps={{underline: {borderBottom: "#FCD34D" }}}
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
          label={<span style={{color: "#F59E0B"}}>Name on card</span>}
          sx={{ width: "100%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
          '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
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
          label={<span style={{color: "#F59E0B"}}>Expiration date</span>}
          sx={{ width: "100%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
          '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
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
          label={<span style={{color: "#F59E0B"}}>CVV</span>}
          sx={{ width: "100%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
          '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
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
