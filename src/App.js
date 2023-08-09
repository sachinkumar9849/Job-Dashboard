import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Landing, Error,Register} from './pages';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path='/' element={<Dashboard />} />
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <ToastContainer position='top-center' /> */}
    </BrowserRouter>
  )
}

export default App