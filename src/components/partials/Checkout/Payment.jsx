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

import { useForm } from "react-hook-form";

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

  function handleDateChange(newValue) {
    setState((prev) => ({ ...prev, selectedDate: newValue }));
    if (
      newValue &&
      newValue.getFullYear() >= 2023 &&
      newValue.getMonth() + 1 <= 12
    ) {
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
  }

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
  const { register, handleSubmit } = useForm();

  return (
    <>
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
          <div style={{ display: "flex", justifyContent: "center" }}>
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
                className="mb-4"
                control={<Radio />}
                label="Credit Card"
              />
            </RadioGroup>
          </div>
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
            <div className="mt-10 mx-auto w-[400px] flex justify-center gap-4">
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="card-number"
                  label="Card Number"
                  type="number"
                  name="number"
                  value={state.number}
                  onChange={(evt) => {
                    handleInputChange(evt);
                    setShippingData({
                      ...shippingData,
                      payment_info: {
                        ...shippingData.payment_info,
                        card_number: evt.target.value,
                      },
                    });
                  }}
                  onFocus={handleInputFocus}
                  sx={{ my: 1 }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  className="" // CardName
                  id="card-name"
                  label="Name"
                  type="text"
                  name="name"
                  onChange={(evt) => {
                    handleInputChange(evt);
                    setShippingData({
                      ...shippingData,
                      payment_info: {
                        ...shippingData.payment_info,
                        name_card: evt.target.value,
                      },
                    });
                  }}
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
            </div>
            <div className="mt-10 mx-auto w-[400px] flex justify-center gap-4">
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    required
                    label="Expiration Date"
                    views={["month", "year"]}
                    format="MM/yy"
                    slotProps={{ textField: { helperText: "mm/yy" } }}
                    value={state.selectedDate}
                    sx={{ my: 1, maxWidth: "223px" }}
                    onChange={(date) => {
                      handleDateChange(date);
                      setShippingData({
                        ...shippingData,
                        payment_info: {
                          ...shippingData.payment_info,
                          expiration_date: date,
                        },
                      });
                    }}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="card-cvc"
                  label="CVC"
                  type="tel"
                  name="cvc"
                  className="form-control"
                  pattern="\d{3,4}"
                  onChange={(evt) => {
                    handleInputChange(evt);
                    setShippingData({
                      ...shippingData,
                      payment_info: {
                        ...shippingData.payment_info,
                        cvv: evt.target.value,
                      },
                    });
                  }}
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
            </div>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Payment;
