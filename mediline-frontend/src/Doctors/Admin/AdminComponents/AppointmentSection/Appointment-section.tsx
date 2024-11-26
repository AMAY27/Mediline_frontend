import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Navbar from '../../../Components/Navbar';
import { useAdminContext } from '../../Admin-context/AdminContext';

interface AppointmentSectionProps{
    handleBack: () => void,
}

const AppointmentSection: React.FC<AppointmentSectionProps> = ({handleBack}) => {
    const navigte = useNavigate();
    const { appointmentData } = useAdminContext();
    const [prescriptionType, setPrescriptionType] = useState<string>("");
    const [showMiniDiv, setShowMiniDiv] = useState(false);
    const miniDivRef = useRef<HTMLDivElement | null>(null);


    const handleShowMinidiv = () => {
        setShowMiniDiv(!showMiniDiv);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (miniDivRef.current && !miniDivRef.current.contains(event.target as Node)) {
            setShowMiniDiv(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <>
      {/* <Navbar/> */}
      {/* <div className='flex items-center m-4 text-2xl'>
        <div onClick={handleBack} className='cursor-pointer mx-5'>&lt;</div>
        <div>Appointment</div>
      </div> */}
      <div
        className='shadow-full w-100 px-8 py-2'
      >
        <h2 className='text-xl font-bold text-green-600'>Patient Details</h2>
        {/* <div>{appointmentData.appointmentId}</div> */}
        {/* <div>{appointmentData.appointment_date}</div> */}
        {/* <div>{appointmentData.user_id}</div> */}
        <div className="flex justify-between items-center ">
          <div className="flex space-x-8 m-2">
            <div><span className='font-bold text-green-600'>Name:</span> {appointmentData.patient_details.name}</div>
            <div><span className='font-bold text-green-600'>Age:</span> {appointmentData.patient_details.age}</div>
            <div><span className='font-bold text-green-600'>Weight:</span> {appointmentData.patient_details.weight}</div>
          </div>
          <div className='relative' ref={miniDivRef}>
            <button 
                className='px-2 font-bold text-2xl rounded-md bg-green-600 shadow-full text-white'
                onClick={handleShowMinidiv}
            >
                    +
            </button>
            {showMiniDiv && 
                <div 
                    className='absolute top-full right-0 border-2 border-green-600 rounded-xl bg-white z-10 w-auto shadow-full py-4 rounded-md'
                >
                    <ul>
                        <li 
                            className='cursor-pointer hover:bg-green-100 px-4 py-2'
                            onClick={() => setPrescriptionType("medication")}
                        >
                                Medication
                        </li>
                        <li 
                            className='cursor-pointer hover:bg-green-100 px-4 py-2'
                            onClick={() => setPrescriptionType("diagnostics")}
                        >
                                Diagnostics
                        </li>
                    </ul>
                </div>
            }
          </div>
        </div>
      </div>
      {prescriptionType === "medication" && 
        <div>Medication</div>
      }
      {prescriptionType === "diagnostics" && 
        <div>Diagnostics</div>
      }
    </>
  )
}

export default AppointmentSection