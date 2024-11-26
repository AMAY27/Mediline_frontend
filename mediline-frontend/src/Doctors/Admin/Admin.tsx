import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { useDocContext } from '../Global-contexts/DocContext';
import Dochoc from '../Hoc/Dochoc';
import {appointments} from '../../../testDataForDoctors/appointmentList';
import AppointmentCard from './AdminComponents/AppointmentCard';
import AppointmentBookingMain from './AdminComponents/AppointmentBooking/AppointmentBookingMain';
import { useNavigate, useParams } from 'react-router-dom';
import { useAdminContext } from './Admin-context/AdminContext';
import { AppointmentDetails } from './admin-types';
import AppointmentSection from './AdminComponents/AppointmentSection/Appointment-section';

const Admin = () => {
    const {clickedNavItem} = useDocContext();
    const {setAppointmentData} = useAdminContext();
    const [appointmentCardClicked, setAppointmentCardClicked] = useState<boolean>(false);
    const { appointmentId } = useParams();

    if(clickedNavItem !== 'admin'){
      return null
    }
    const navigte = useNavigate();
    const handleAppointmentCardClick = (id: string, appointment: AppointmentDetails) => {
      // setAppointmentCardClicked(true);
      localStorage.setItem("appointment_id",id);
      setAppointmentData(appointment);
      navigte(`/doctor/admin/appointments/${id}`);
    }
    const handleBackCLicked = () => {
      setAppointmentCardClicked(false);
    }

    if (clickedNavItem !== 'admin') {
      return null;
    }

  return (
    <>
      {/* <Navbar/> */}
      <>
        {appointmentId ? ( 
          <AppointmentSection handleBack={handleBackCLicked}/> 
        ) :
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
        }
      </>
    </>
  )
}

export default Dochoc(Admin);