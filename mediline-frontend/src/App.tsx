import { useState } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import DoctorRoutes from './Doctors/DoctorRoutes';

function App(){

  return (
    <Router basename='/mediline'>
      <Routes>
        <Route element={<DoctorRoutes/>}/>
      </Routes>
    </Router>
  )
}

export default App;
