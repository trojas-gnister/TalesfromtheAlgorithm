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
// white - #fff
// light gray - #D3D3D3
// pink - #F2A2E8
// mint green - #3EB489
// dark purple - #11153A
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