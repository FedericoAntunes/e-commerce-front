import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { ToastContainer } from "react-toastify";

//  Components  //
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import Error404 from "./components/Error404";
import Layout from "./components/Layout/Layout";
import Restaurant from "./components/Restaurant";
import Checkout from "./components/Checkout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import FilteredCategory from "./components/FilteredCategory";
import OrderStatus from "./components/OrderStatus";
import OrderHistory from "./components/OrderHistory";
import ScrollToTop from "./components/ScrollToTop";

// Actions
import { previousUrl } from "./redux/slice/previousUrlSlice";

function App() {
  const [actualUrl, setActualUrl] = useState("");

  const handleScroll = useSelector((state) => state.showShoppingCart.scroll);

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    dispatch(previousUrl(actualUrl));
    setActualUrl(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (!handleScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [handleScroll]);

  return (
    <div className={`App bg-gray-200`}>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Restaurant />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/category/:category_slug"
            element={<FilteredCategory />}
          />
          <Route path="/order-history" element={<OrderHistory />} />

          <Route element={<ProtectedRoute redirectPath={"/login"} />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-status" element={<OrderStatus />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
