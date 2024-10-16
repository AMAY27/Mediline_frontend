import { useState } from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import DoctorRoutes from './Doctors/DoctorRoutes';
import './index.css'
function App(){

  return (
    <Router basename='/mediline'>
      <Routes>
        <Route path='/doctor/*' element={<DoctorRoutes/>}/>
      </Routes>
    </Router>
  )
}

export default App;
