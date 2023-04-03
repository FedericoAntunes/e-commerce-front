import "./App.css";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App bg-gray-200">
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
    </div>
  );
}

export default App;
