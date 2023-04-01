import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Shipping from "./partials/Checkout/Shipping";
import Payment from "./partials/Checkout/Payment";
import Summary from "./partials/Checkout/Summary";
import { useSelector, useDispatch } from "react-redux";
import apiCall from "./api/api";
import { removeAllItems } from "../redux/slice/shoppingListSlice";
import ScrollToTop from "./ScrollToTop";

function Checkout() {
  const steps = ["Shipping Information", "Summary", "Payment"];
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const dispatch = useDispatch();

  const shoppingList = useSelector((state) => state.shoppingList);
  const token = useSelector((state) => state.user.token);

  // Inputs states
  const [shippingData, setShippingData] = useState({
    address: {
      firstname: "",
      address: "",
      lastname: "",
      city: "",
      province: "",
      postal_code: "",
    },
    payment_method: "",
    payment_info: {
      card_number: "",
      name_card: "",
      expiration_date: "",
      cvv: "",
    },
    products: shoppingList,
  });

  const isStepOptional = (step) => {
    return false; //step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      await apiCall("/order", "post", shippingData, {
        Authorization: `Bearer ${token}`,
      });
      dispatch(removeAllItems());
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  let actualStepComponent = "";
  if (activeStep === 0) {
    actualStepComponent = (
      <Shipping shippingData={shippingData} setShippingData={setShippingData} />
    );
  } else if (activeStep === 1) {
    actualStepComponent = <Summary />;
  } else if (activeStep === 2) {
    actualStepComponent = (
      <Payment shippingData={shippingData} setShippingData={setShippingData} />
    );
  }
  return (
    <Box sx={{ maxWidth: "60%" }} className="mt-[84px] mx-auto ">
      <ScrollToTop />
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>{actualStepComponent}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Checkout;
