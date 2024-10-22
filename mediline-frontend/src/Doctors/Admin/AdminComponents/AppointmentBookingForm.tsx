/* Appointment Booking form for the admin desk. It allows the admin to directly book instant appointments for patients directly visiting 
 the doctor clinic. */  

import React from 'react'

const AppointmentBookingForm = () => {
  return (
    <div>
        <form action="">
            <div>
                <label>
                    First Name
                </label>
                <input
                    placeholder='Enter First Name'
                />
            </div>
            <div>
                <label>
                    Last Name
                </label>
                <input
                    placeholder='Enter Last Name'
                />
            </div>
            <div>
                <label>
                    Age
                </label>
                <input
                    placeholder='Enter Age'
                />
            </div>
            <div>
                <label>
                    Height
                </label>
                <input
                    placeholder='Enter Height'
                />
            </div>
        </form>
    </div>
  )
}

export default AppointmentBookingForm