import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'


const darkTheme = createTheme({
  palette: {
      primary: {
        main: '#F2A2E8',
      },
      secondary: {
        main: '#fff',
      },
      background: '#11153A',
      text: {
        primary: '#fff',
        secondary: '#D3D3D3',
      },
},
  typography: {
    fontFamily: [
      'Source Sans Pro'
    ],
  },
});


ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <App
      />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);


reportWebVitals()