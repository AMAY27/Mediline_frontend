import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './Registeration/Login';
import Dashboard from './Dashboard/Dashboard';

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default DoctorRoutes