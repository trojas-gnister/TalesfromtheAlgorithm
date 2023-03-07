import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
        </Routes>
    </div>
  )
}

export default App;

