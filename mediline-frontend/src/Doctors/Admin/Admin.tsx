import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useDocContext } from '../Global-contexts/DocContext';
import Dochoc from '../Hoc/Dochoc';
import {appointments} from '../../../testDataForDoctors/appointmentList';
import AppointmentCard from './AdminComponents/AppointmentCard';
import AppointmentBookingMain from './AdminComponents/AppointmentBooking/AppointmentBookingMain';
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from './Admin-context/AdminContext';
import { AppointmentDetails } from './admin-types';

const Admin = () => {
    const {clickedNavItem} = useDocContext();
    const {setAppointmentData} = useAdminContext();
    if(clickedNavItem !== 'admin'){
        return null
    }
    const navigte = useNavigate();
    const handleAppointmentCardClick = (id: string, appointment: AppointmentDetails) => {
      navigte('/doctor/appointment');
      localStorage.setItem("appointment_id",id);
      setAppointmentData(appointment);
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
                    <AppointmentCard 
                      onClick={() => handleAppointmentCardClick(appointment.appointmentId, appointment)} 
                      appointmentId={appointment.appointmentId} 
                      patient_details={appointment.patient_details} 
                    />
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