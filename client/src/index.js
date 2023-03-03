import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './components/Theme/';
import React from 'react'
import reportWebVitals from './reportWebVitals'
import App from './App'
import './index.css'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
