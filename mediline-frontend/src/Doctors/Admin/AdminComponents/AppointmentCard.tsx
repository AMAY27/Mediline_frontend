import React from 'react'
import { AppointmentCardProps } from '../admin-types'

const AppointmentCard: React.FC<AppointmentCardProps> = ({onClick, appointmentId, patient_details}) => {
  return (
    <div className='col-span-1 shadow p-3 rounded-md cursor-pointer' key={appointmentId} onClick={onClick}>
      <h2 className='font-bold text-green-600'>{patient_details.name}</h2>
      {/* <p>{age}</p> */}
    </div>
  )
}

export default AppointmentCard