import React from "react";
// import { useState } from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// imported webpages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Donations from "./pages/donations";

import CheckoutForm from "./pages/checkoutForm";
import Choices from "./pages/Choices";
import Story from "./pages/Story"

const httpLink = createHttpLink({
  uri: '/client/src/App.js',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const App = () => {

  return (
  <ApolloProvider client={client}>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/Choices" element={<Choices />} />
          <Route path="/checkoutForm" element={<CheckoutForm />} />
          <Route path="/Story" element={<Story />} />
        </Routes>
    </div>
    </ApolloProvider>
  );
};

export default App;
