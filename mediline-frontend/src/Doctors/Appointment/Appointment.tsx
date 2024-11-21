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
      <div className='flex items-center m-4 text-2xl'>
        <div onClick={() => navigte('/doctor/admin')} className='cursor-pointer mx-5'>&lt;</div>
        <div>Appointment</div>
      </div>
      <div
        className='bg-green-100 border-2 border-green-500 w-100 px-8 py-2'
      >
        <h2 className='text-xl font-bold text-green-500'>Patient Details</h2>
        {/* <div>{appointmentData.appointmentId}</div> */}
        {/* <div>{appointmentData.appointment_date}</div> */}
        {/* <div>{appointmentData.user_id}</div> */}
        <div className="flex justify-between items-center ">
          <div className="flex space-x-8 m-2">
            <div><span className='font-bold text-green-500'>Name:</span> {appointmentData.patient_details.name}</div>
            <div><span className='font-bold text-green-500'>Age:</span> {appointmentData.patient_details.age}</div>
            <div><span className='font-bold text-green-500'>Weight:</span> {appointmentData.patient_details.weight}</div>
          </div>
          <div>
            <button className='px-2 font-bold text-2xl rounded-md bg-green-500 shadow-full text-white'>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointment