/* Appointment Booking form for the admin desk. It allows the admin to directly book instant appointments for patients directly visiting 
 the doctor clinic. */  

import React from 'react'
import './appointmentBookingForm.css'

const AppointmentBookingForm = () => {
  return (
    <div>
        <form action="" className='space-y-4'>
            <div>
                <label className='appointment-form-input'>
                    First Name:
                </label>
                <input
                    className='p-2 shadow rounded-md w-full mt-3'
                    placeholder='Enter First Name'
                />
            </div>
            <div>
                <label className='appointment-form-input'>
                    Last Name:
                </label>
                <input
                    className='p-2 shadow rounded-md w-full mt-3'
                    placeholder='Enter Last Name'
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* <div className="col-span-1 space-y-4">
                    
                </div> */}
                <div className="col-span-1 space-x-4">
                    <div>
                        <label className='appointment-form-input'>
                            Age:
                        </label>
                        <input
                            className='p-2 shadow rounded-md w-full mt-3'
                            placeholder='Enter Last Name'
                        />
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <label className='appointment-form-input'>
                            Weight:
                        </label>
                        <input
                            className='p-2 shadow rounded-md w-full mt-3'
                            placeholder='Enter Last Name'
                        />
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AppointmentBookingForm