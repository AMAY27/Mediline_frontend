import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './Registeration/Login';

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
    </Routes>
  )
}

export default DoctorRoutes