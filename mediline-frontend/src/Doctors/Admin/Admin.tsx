import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useDocContext } from '../Global-contexts/DocContext';
import Dochoc from '../Hoc/Dochoc';
import AppointmentBookingForm from './AdminComponents/AppointmentBookingForm';

const Admin = () => {
    const {clickedNavItem} = useDocContext();
    if(clickedNavItem !== 'admin'){
        return null
    }
  return (
    <>
      <Navbar/>
      <>
        <div className='grid grid-cols-3 gap-4'>
            <div className="col-span-2 p-4">
                <h2 className='text-2xl'>Today's Appointments</h2>
                
            </div>
            <div className="col-span-1 p-4">
                <h2 className='text-2xl pb-2'>Book Appointment</h2>
                <AppointmentBookingForm/>
            </div>
        </div>
      </>
    </>
  )
}

export default Dochoc(Admin);