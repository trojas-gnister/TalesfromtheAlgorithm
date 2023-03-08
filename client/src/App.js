import React from "react";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// imported webpages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Donations from "./pages/donations";
// import PaymentSuccess from "./pages/PaymentSuccess";
import CheckoutForm from "./pages/checkoutForm";
import Choices from "./pages/Choices";
import Story from "./pages/Story"


const App = ({ openAi, storeResponse, getResponse }) => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/Choices" element={<Choices />} />
          <Route path="/checkoutForm" element={<CheckoutForm />} />
          <Route path="/Story" element={<Story />} />
          {/* <Route path="/PaymentSuccess" element={<PaymentSuccess />} /> */}
        </Routes>
    </div>
  );
};

export default App;