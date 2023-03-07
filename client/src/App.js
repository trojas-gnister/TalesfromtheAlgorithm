import React from "react";
// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// imported webpages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Donations from "./pages/Donations";
// import { PaymentSuccess } from "./pages/PaymentSuccess";
import CheckoutForm from "./pages/checkoutForm";


const App = ({ openAi, storeResponse, getResponse }) => {
//   const [conversationId, setConversationId] = useState(null);
//   const handleSendRequest = (text) =>
//   {
//     // response to be post-request processing

//     const response = openAi(text, conversationId);
//     setConversationId(response.conversationId);
//     // response as seen by user

//     const responseText = handleResponse(response);
//       setResponseText(responseText);
//       storeResponse(responseText);
//   };
//   const [responseText, setResponseText] = useState(null);
//   const handleGetResponse = () => {
//     const responseText = getResponse();
//     setResponseText(responseText);
  // };
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/donations" element={<Donations />} />
          {/* <Route path="/paymentSuccessful" element={<Completion />} /> */}
          <Route path="/checkoutForm" element={<CheckoutForm />} />
        </Routes>
      {/* <input type="text" onChange={handleSendRequest} />
      <button onClick={handleGetResponse}>Get Response</button>
      {responseText && <p>{responseText}</p>} */}
    </div>
  );
};

export default App;