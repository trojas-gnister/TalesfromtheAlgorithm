import React from 'react'
import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'

// import { MantineProvider } from '@mantine/core';

function Demo() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
