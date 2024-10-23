/* Appointment Booking form for the admin desk. It allows the admin to directly book instant appointments for patients directly visiting 
 the doctor clinic. */ 
 
// Add a step form to ask contact first to confirm if the user already exist in the database or not. If user exists then it should 
// fetch the details and ask to enter the patient details for the new appointment.

// Implement a step form with contact validation from backend.

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
                    required= {true}
                />
            </div>
            <div>
                <label className='appointment-form-input'>
                    Last Name:
                </label>
                <input
                    className='p-2 shadow rounded-md w-full mt-3'
                    placeholder='Enter Last Name'
                    required= {true}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {/* <div className="col-span-1 space-y-4">
                    
                </div> */}
                <div className="col-span-1 space-y-4">
                    <div>
                        <label className='appointment-form-input'>
                            Age:
                        </label>
                        <input
                            className='p-2 shadow rounded-md w-full mt-3'
                            placeholder='Enter Age'
                            required= {true}
                        />
                    </div>
                    <div>
                        <label className='appointment-form-input'>
                            Blood Pressure:
                        </label>
                        <div className="flex items-center">
                            <input
                                className='p-1 shadow rounded-md w-full mt-3'
                                // placeholder='Enter Last Name'
                            />
                            <h2 className='text-2xl'> / </h2>
                            <input
                                className='p-1 shadow rounded-md w-full mt-3'
                                // placeholder='Enter Last Name'
                            />
                            <h2 className='mx-2'>mmHg</h2>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-4">
                    <div>
                        <label className='appointment-form-input'>
                            Weight:
                        </label>
                        <input
                            className='p-2 shadow rounded-md w-full mt-3'
                            placeholder='Kg'
                        />
                    </div>
                    <div>
                        <label className='appointment-form-input'>
                            Contact:
                        </label>
                        <input
                            className='p-2 shadow rounded-md w-full mt-3'
                            placeholder='Enter Contact'
                        />
                    </div>
                </div>
            </div>
            <button 
                className='p-2 flex justify-center font-bold rounded-md w-full border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600'
                type='submit'
            >
                Complete Booking
            </button>
        </form>
    </div>
  )
}

export default AppointmentBookingForm