import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';

const Appointment = () => {
    const navigte = useNavigate();
  return (
    <>
      {/* <Navbar/> */}
      <div className='flex items-center m-10 text-2xl'>
        <div onClick={() => navigte('/doctor/admin')} className='cursor-pointer mx-5'>&lt;</div>
        <div>Appointment</div>
      </div>
    </>
  )
}

export default Appointment