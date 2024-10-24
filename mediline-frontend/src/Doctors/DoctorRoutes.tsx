import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './Registeration/Login';
import Dashboard from './Dashboard/Dashboard';
import PatientManager from './Patient-manager/PatientManager';
import { DocContextProvider } from './Global-contexts/DocContext';
import Admin from './Admin/Admin';
const DoctorRoutes = () => {
  return (
    <DocContextProvider>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='patients' element={<PatientManager/>}/>
      </Routes>
    </DocContextProvider>
  )
}

export default DoctorRoutes