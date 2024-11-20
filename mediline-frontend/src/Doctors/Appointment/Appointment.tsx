import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';
import { useAdminContext } from '../Admin/Admin-context/AdminContext';

const Appointment = () => {
    const navigte = useNavigate();
    const { appointmentData } = useAdminContext();
  return (
    <>
      {/* <Navbar/> */}
      <div className='flex items-center m-10 text-2xl'>
        <div onClick={() => navigte('/doctor/admin')} className='cursor-pointer mx-5'>&lt;</div>
        <div>Appointment</div>
        <div>{appointmentData.appointmentId}</div>
        <div>{appointmentData.appointment_date}</div>
        <div>{appointmentData.user_id}</div>
        <div>{appointmentData.patient_details.name}</div>
        <div>{appointmentData.patient_details.age}</div>
        <div>{appointmentData.patient_details.weight}</div>
      </div>
    </>
  )
}

export default Appointment