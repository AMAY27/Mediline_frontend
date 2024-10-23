import React from 'react'
import { appointmentDetails } from '../admin-types'

const AppointmentCard: React.FC<appointmentDetails> = ({appointmentId, firstName, lastName, age}) => {
  return (
    <div className='col-span-1 shadow p-3 rounded-md cursor-pointer' key={appointmentId}>
      <h2 className='font-bold text-green-600'>{firstName} {lastName}</h2>
      {/* <p>{age}</p> */}
    </div>
  )
}

export default AppointmentCard