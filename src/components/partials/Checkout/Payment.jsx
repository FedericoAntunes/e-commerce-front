import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

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

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Payment</FormLabel>
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
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
          <FormControlLabel
            value="etransfer"
            control={<Radio />}
            label="eTransfer"
          />
        </RadioGroup>
      </FormControl>

      <Box sx={{ display: active === "credit_card" ? "block" : "none" }}>
        <div>
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <div className="col-6">
            <input
              type="tel"
              name="expiry"
              className="form-control"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="col-6">
            <input
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
      </Box>

      <Box sx={{ display: active === "paypal" ? "block" : "none" }}>Paypal</Box>

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
            //color= {yellowA400}
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
    </>
  );
}

export default Payment;
