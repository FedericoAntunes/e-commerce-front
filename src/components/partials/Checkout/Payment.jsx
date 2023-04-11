import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

// Mui
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Grid,
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import ScrollToTop from "../../ScrollToTop";

function Payment({ shippingData, setShippingData }) {
  const [active, setActive] = useState(null);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (newValue) => {
    setState((prev) => ({ ...prev, selectedDate: newValue }));
    if (newValue && newValue.getFullYear() >= 2023 && newValue.getMonth() + 1 <= 12) {
      handleInputChange({
        target: {
          name: "expiry",
          value: newValue
            ? `${String(newValue.getMonth() + 1).padStart(2, "0")}/${newValue
                .getFullYear()
                .toString()
                .substr(-2)}`
            : "",
        },
      });
    } else {
      handleInputChange({
        target: {
          name: "expiry",
          value: " ",
        },
      });
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const expDate = (params) => (
    <DatePicker
      {...params}
      label="Valid Thru"
      inputFormat="MM/yy"
      id="card-expiry"
      className="form-control"
      required
      value={state.expiry}
      onChange={(newValue) =>
        handleInputChange({ target: { name: "expiry", value: newValue } })
      }
      sx={{ my: 1 }}
    />
  );

  return (
    <>
      <ScrollToTop />
      <div id="checkout">
        <FormControl id="checkout">
          <FormLabel component="legend" id="demo-row-radio-buttons-group-label">
            <div className="justify-center my-6 flex">
              <img
                className="bg-transparent w-8"
                src="https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/secure-payment-icon.png"
                alt=""
              />{" "}
              <span className="ml-2">Secure payment system</span>
            </div>
          </FormLabel>
          <RadioGroup
            row
            required
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => {
              setActive(e.target.value);
              setShippingData({
                ...shippingData,
                payment_method: e.target.value,
              });
            }}
          >
            <FormControlLabel
              value="credit_card"
              control={<Radio />}
              label="Credit Card"
            />
            <FormControlLabel
              value="etransfer"
              control={<Radio />}
              label="eTransfer"
            />
          </RadioGroup>
        </FormControl>

        <Box sx={{ display: active === "credit_card" ? "block" : "none" }}>
          <Grid container>
            <Grid item xs={12}>
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="card-number"
                label="Card Number"
                type="number"
                name="number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                sx={{ my: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Expiration Date"
                  views={["month", "year"]}
                  format="MM/yy"
                  slotProps={{ textField: { helperText: "mm/yy" } }}
                  value={state.selectedDate}
                  sx={{ my: 1 }}
                  onChange={handleDateChange}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="" // CardName
                id="card-name"
                label="Name"
                type="text"
                name="name"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onKeyPress={(event) => {
                  const regex = /^[a-zA-Z\s]*$/;
                  const key = String.fromCharCode(event.which);
                  if (!regex.test(key)) {
                    event.preventDefault();
                  }
                }}
                sx={{ my: 1 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="card-cvc"
                label="CVC"
                type="tel"
                name="cvc"
                className="form-control"
                pattern="\d{3,4}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                inputProps={{
                  maxLength: 3,
                }}
                onKeyPress={(event) => {
                  const keyCode = event.keyCode || event.which;
                  const keyValue = String.fromCharCode(keyCode);
                  const regex = /^[0-9]*$/;
                  if (!regex.test(keyValue)) {
                    event.preventDefault();
                  }
                }}
                sx={{ my: 1 }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: active === "etransfer" ? "block" : "none" }}>
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
              label={<span>Card Number</span>}
              sx={{
                width: "100%",
              }}
              variant="standard"
              inputProps={{ underline: { borderBottom: "#FCD34D" } }}
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
              label={<span>Name on card</span>}
              sx={{
                width: "100%",
              }}
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
              label={<span>Expiration date</span>}
              sx={{
                width: "100%",
              }}
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
              label={<span>CVV</span>}
              sx={{
                width: "100%",
              }}
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
        </Box>
      </div>
    </>
  );
}

export default Payment;
