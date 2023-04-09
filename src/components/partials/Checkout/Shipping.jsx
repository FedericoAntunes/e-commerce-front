import { Box, TextField } from "@mui/material";

function Shipping({ shippingData, setShippingData }) {
  return (
    <>
      <form action="">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField
            helperText=" "
            id="demo-helper-text-aligned"
            value={shippingData.address.firstname}
            label={<span style={{}}>Firstname</span>}
            sx={{ width: "50%" }}
            variant="standard"
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                address: { ...shippingData.address, firstname: e.target.value },
              })
            }
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label={<span style={{}}>Lastname</span>}
            value={shippingData.address.lastname}
            sx={{ width: "50%" }}
            variant="standard"
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                address: { ...shippingData.address, lastname: e.target.value },
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
            helperText=" "
            id="address"
            label={<span style={{}}>Address</span>}
            value={shippingData.address.address}
            sx={{ width: "100%" }}
            variant="standard"
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                address: { ...shippingData.address, address: e.target.value },
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
            helperText=" "
            id="city"
            label={<span style={{}}>City</span>}
            value={shippingData.address.city}
            sx={{ width: "50%" }}
            variant="standard"
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                address: { ...shippingData.address, city: e.target.value },
              })
            }
          />
          <TextField
            helperText=" "
            id="province"
            label={<span style={{}}>Province/State</span>}
            value={shippingData.address.province}
            sx={{ width: "25%" }}
            variant="standard"
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                address: { ...shippingData.address, province: e.target.value },
              })
            }
          />
          <TextField
            helperText=" "
            id="postalcode"
            label={<span style={{}}>Postal Code</span>}
            value={shippingData.address.postal_code}
            sx={{ width: "25%" }}
            variant="standard"
            onChange={(e) =>
              setShippingData({
                ...shippingData,
                address: {
                  ...shippingData.address,
                  postal_code: e.target.value,
                },
              })
            }
          />
        </Box>
      </form>
    </>
  );
}

export default Shipping;
