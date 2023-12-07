import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ShopLayout from "./pages/shop/ShopLayout";
import LoginPage from "./pages/shop/LoginPage";
import RegisterPage from "./pages/shop/RegisterPage";
import OTPVerificationPage from "./pages/shop/OTPVerificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otpverification" element={<OTPVerificationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
