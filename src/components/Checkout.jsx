import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Actions
import { removeAllItems } from "../redux/slice/shoppingListSlice";
import { saveLastOrderInfo } from "../redux/slice/lastOrderInfoSlice";

// Components
import Shipping from "./partials/Checkout/Shipping";
import Payment from "./partials/Checkout/Payment";
import Summary from "./partials/Checkout/Summary";
import SpinnerLoader from "./partials/loaders/SpinnerLoader";
import Loader from "./partials/loaders/Loader";
import FinishBtn from "./partials/Checkout/FinishBtn";
import NextBtn from "./partials/Checkout/NextBtn";
import BackBtn from "./partials/Checkout/BackBtn";
import UnavailableProducts from "./partials/UnavailableProducts";

// ApiCall
import apiCall from "./api/api";

const notifySuccess = () =>
  toast.success("Order created successfully.", {
    position: "bottom-right",
  });
const notifyError = () =>
  toast.error("Please fill all the fields.", {
    position: "bottom-right",
  });

function notifyErrorUnavailable(message) {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [loader, setLoader] = useState(false);

  const shoppingList = useSelector((state) => state.shoppingList);
  const token = useSelector((state) => state.user.token);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const Msg = () => (
    <div>
      <img
        className="mx-auto"
        src="https://media.tenor.com/Vyg73kR334sAAAAM/jurassic-park-ah.gif"
        alt="ah-ah-ah"
        style={{ mixBlendMode: "multiply" }}
      />
      Hacking not allowed!
    </div>
  );

  const steps = ["Shipping Information", "Summary", "Payment"];

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

  const calcTotal = () => {
    let total = 0;
    shoppingList.map((item) => {
      return item.in_offer
        ? (total +=
            item.price *
            Number(process.env.REACT_APP_PRODUCT_DISCOUNT) *
            item.quantity)
        : (total += item.price * item.quantity);
    });
    console.log(total);
    const shipping = Number(process.env.REACT_APP_SHIPPING);
    const tax = total * Number(process.env.REACT_APP_TAX);
    const realTotal = tax + shipping + total;
    console.log(realTotal);
    return realTotal;
  };

  const isStepOptional = (step) => {
    return false; //step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      setLoader(true);

      const products = await apiCall("/products", "get");
      const sameProducts = products.data.filter((product) =>
        shoppingList.some((userProduct) => product.id === userProduct.id)
      );
      console.log(sameProducts);
      const unavailableProducts = sameProducts.filter((product) =>
        shoppingList.some((userProduct) => product.stock < userProduct.quantity)
      );
      console.log(unavailableProducts);
      if (unavailableProducts.length > 0) {
        setLoader(false);
        return notifyErrorUnavailable(
          <UnavailableProducts products={unavailableProducts} />
        );
      }

      const response = await apiCall(
        "/orders",
        "post",
        { shippingData, total_price: calcTotal() }, // to see denis change to static number
        {
          Authorization: `Bearer ${token}`,
        }
      );

      if (response.response && response.response.data === "Fill all fields.") {
        setLoader(false);
        return toast.warn("Please, fill all fields.", {
          position: "bottom-right",
        });
      }
      if (response.response && response.response.status === 406) {
        setLoader(false);
        return toast(Msg, {
          position: "bottom-right",
        });
      }

      setTimeout(() => {
        notifySuccess();
        dispatch(removeAllItems());
        dispatch(saveLastOrderInfo(response.data));
        navigate("/order-status");
        setLoader(false);
      }, 4000);
    } else if (activeStep === 0) {
      if (
        shippingData.address.firstname === "" ||
        shippingData.address.lastname === "" ||
        shippingData.address.address === "" ||
        shippingData.address.city === "" ||
        shippingData.address.province === "" ||
        shippingData.address.postal_code === ""
      ) {
        return notifyError();
      }
    } else if (activeStep === 2) {
      if (
        shippingData.payment_info.card_number === "" ||
        shippingData.payment_info.name_card === "" ||
        shippingData.payment_info.expiration_date === "" ||
        shippingData.payment_info.cvv === ""
      ) {
        return notifyError();
      }
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
    <div className="pt-6">
      <Box
        sx={{ maxWidth: "100%" }}
        className="mt-[125px] lg:mt-[150px] p-6 md:px-6 md:py-16 mx-auto border md:mx-24 lg:px-44 bg-white rounded-lg shadow-lg"
      >
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
            <Loader />
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>{actualStepComponent}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <div
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                {activeStep !== 0 ? <BackBtn /> : null}
              </div>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <div onClick={handleNext}>
                {activeStep === steps.length - 1 ? (
                  loader ? (
                    <Loader />
                  ) : (
                    <FinishBtn />
                  )
                ) : (
                  <NextBtn />
                )}
              </div>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}

export default Checkout;
