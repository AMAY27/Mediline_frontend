import React from 'react'
import { useNavigate } from 'react-router-dom'

const Appointment = () => {
    const navigte = useNavigate();
  return (
    <div className='flex justify-between m-20'>
        <h2 onClick={() => navigte('/doctor/admin')} className='cursor-pointer'>&lt;</h2>
        <h2>Appointment</h2>
    </div>
  )
}

export default Appointment