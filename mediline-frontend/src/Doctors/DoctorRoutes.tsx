import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './Registeration/Login';
import Dashboard from './Dashboard/Dashboard';
import PatientManager from './Patient-manager/PatientManager';
import Appointment from './Appointment/Appointment';
import { DocContextProvider } from './Global-contexts/DocContext';
import Admin from './Admin/Admin';
import { AdminProvider } from './Admin/Admin-context/AdminContext';



const DoctorRoutes = () => {
  return (
    <DocContextProvider>
      <AdminProvider>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='patients' element={<PatientManager/>}/>
          <Route path='appointment' element={<Appointment/>}/>
        </Routes>
      </AdminProvider>
    </DocContextProvider>
  )
}

export default DoctorRoutes