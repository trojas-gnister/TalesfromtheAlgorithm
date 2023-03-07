import React, { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";

// imported webpages
import { Home } from "./Home";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { Payment } from "./donations";
import { Completion } from "./paymentSuccessful";
import { CheckoutForm } from "./checkoutForm";


const App = ({ openAi, storeResponse, getResponse }) => {
  const [conversationId, setConversationId] = useState(null);
  const handleSendRequest = (text) =>
  {
    // response to be post-request processing
    const response = openAi(text, conversationId);
    setConversationId(response.conversationId);
    // response as seen by user
    const responseText = handleResponse(response);
      setResponseText(responseText);
      storeResponse(responseText);
  };
  const [responseText, setResponseText] = useState(null);
  const handleGetResponse = () => {
    const responseText = getResponse();
    setResponseText(responseText);
  };
  return (
    <div className="App">
      <Router>
        a
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/donations" element={<Payment />} />
          <Route path="/paymentSuccessful" element={<Completion />} />
          <Route path="/checkoutForm" element={<CheckoutForm />} />
        </Routes>
      </Router>
      <input type="text" onChange={handleSendRequest} />
      <button onClick={handleGetResponse}>Get Response</button>
      {responseText && <p>{responseText}</p>}
    </div>
  );
};

export default App;