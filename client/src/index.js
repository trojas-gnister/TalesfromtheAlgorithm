import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'

// Global Theme Settings
import darkScrollbar from '@mui/material/darkScrollbar';

// Custom Dark Theme values
const darkTheme = createTheme({
  palette: {
      primary: {
        main: '#F2A2E8',
        blue: '#0FFDD1',
      },
      background: '#11153A',
      text: {
        primary: '#fff',
        secondary: '#fff'
      },
},

  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
      }),
    },
  },
  typography: {
    fontFamily: [
      'PT Serif'
    ]

  },

});

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()