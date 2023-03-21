import "./App.css";
import { Routes, Route } from "react-router-dom";
//  Components  //
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
