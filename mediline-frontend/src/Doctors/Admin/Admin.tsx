import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useDocContext } from '../Global-contexts/DocContext';
import Dochoc from '../Hoc/Dochoc';
import AppointmentBookingForm from './AdminComponents/AppointmentBooking/AppointmentBookingForm';
import {appointments} from '../../../testDataForDoctors/appointmentList';
import AppointmentCard from './AdminComponents/AppointmentCard';
import AppointmentBookingMain from './AdminComponents/AppointmentBooking/AppointmentBookingMain';

const Admin = () => {
    const {clickedNavItem} = useDocContext();
    if(clickedNavItem !== 'admin'){
        return null
    }
  return (
    <>
      <Navbar/>
      <>
        <div className='grid grid-cols-4 gap-4'>
            <div className="col-span-2 p-4">
                <h2 className='text-2xl mb-4'>Today's Appointments</h2>
                <div className="grid grid-cols-2 gap-4">
                  {appointments.map((appointment) => (
                    <AppointmentCard appointmentId={appointment.appointmentId} firstName={appointment.firstName} lastName={appointment.lastName} age={appointment.age} weight={appointment.weight} date={appointment.date} time={appointment.time}/>
                  ))}
                </div>
            </div>
            <div className="col-span-2 p-8">
                <AppointmentBookingMain/>
            </div>
        </div>
      </>
    </>
  )
}

export default Dochoc(Admin);