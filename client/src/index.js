import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'

// // openAi_API_request-response_handlers

// import { sendRequest, handleResponse } from "../../server/utils/openAi";
// import { openAi } from "../../server/utils/openAi";
// import { storeResponse } from "../../server/utils/mutations";
// import { getResponse } from "../../server/utils/queries";


// Global Theme Settings
import darkScrollbar from '@mui/material/darkScrollbar';
// Custom Dark Theme values
// white - #fff
// light gray - #D3D3D3
// pink - #F2A2E8
// mint green - #3EB489
// green - #00AB4D
// dark purple - #11153A
// vibrant purple color - #a100f2
// electric blue - #7DF9FF
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
      <App
        // openAi={openAi}
        // storeResponse={storeResponse}
        // getResponse={getResponse}
      />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// Send a request to the OpenAI API
// const response = sendRequest(text, conversationId);
// Handle the response from the OpenAI API
// const responseText = handleResponse(response);


reportWebVitals()