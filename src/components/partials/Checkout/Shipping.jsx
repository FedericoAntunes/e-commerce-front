import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Shipping({ shippingData, setShippingData }) {
  return (
    <>
      <form action="">
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: "100%",
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText=" "
        id="demo-helper-text-aligned"
        value={shippingData.address.firstname}
        label={<span style={{color: "#F59E0B"}}>Firstname</span>}
        sx={{ width: "50%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
        '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
        variant="standard"
        onChange={(e) =>
          setShippingData({ ...shippingData, address: {...shippingData.address,firstname: e.target.value }})
        }
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label={<span style={{color: "#F59E0B"}}>Lastname</span>}
        value={shippingData.address.lastname}
        sx={{ width: "50%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
        '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
        variant="standard"
        onChange={(e) =>
          setShippingData({ ...shippingData, address: {...shippingData.address,lastname: e.target.value }})
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
          label={<span style={{color: "#F59E0B"}}>Address</span>}
          value={shippingData.address.address}
          sx={{ width: "100%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
          '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
          onChange={(e) =>
            setShippingData({ ...shippingData, address: {...shippingData.address,address: e.target.value }})
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
          label={<span style={{color: "#F59E0B"}}>City</span>}
          value={shippingData.address.city}
          sx={{ width: "50%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
        '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
          onChange={(e) =>
            setShippingData({ ...shippingData, address: {...shippingData.address,city: e.target.value }})
          }
        />
        <TextField
          helperText=" "
          id="province"
          label={<span style={{color: "#F59E0B"}}>Province/State</span>}
          value={shippingData.address.province}
          sx={{ width: "25%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
          '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
          onChange={(e) =>
            setShippingData({ ...shippingData, address: {...shippingData.address,province: e.target.value }})
          }
        />
        <TextField
          helperText=" "
          id="postalcode"
          label={<span style={{color: "#F59E0B"}}>Postal Code</span>}
          value={shippingData.address.postal_code}
          sx={{ width: "25%" ,'& .MuiInput-underline:before': { borderBottomColor: 'orange' },
          '& .MuiInput-underline:after': { borderBottomColor: 'orange' },  }}
          variant="standard"
          onChange={(e) =>
            setShippingData({ ...shippingData, address: {...shippingData.address, postal_code: e.target.value }})
          }
        />
      </Box>
      </form>
    </>
  );
}

export default Shipping;
