import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Payment  from './pages/donations'
import  Completion  from './pages/paymentSuccessful'

// imported webpages
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/donations' element={<Payment />} />
          <Route path='/paymentSuccessful' element={<Completion />} />
        </Routes>
    </div>
  )
}

export default App;

