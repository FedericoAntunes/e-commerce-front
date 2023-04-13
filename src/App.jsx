import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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

function App() {
  const handleScroll = useSelector((state) => state.showShoppingCart.scroll);

  useEffect(() => {
    console.log(handleScroll);
    if (!handleScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    console.log(document.body.style);
  }, [handleScroll]);

  return (
    <div className={`App bg-gray-200 ${"overflow-y-hidden"}`}>
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
