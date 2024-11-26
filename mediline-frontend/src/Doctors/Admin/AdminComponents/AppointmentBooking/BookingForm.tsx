// BookingForm.tsx
import React from 'react';
import FormInput from './FormInput';
import { BookinFormProps } from '../../admin-types';

const BookingForm: React.FC<BookinFormProps> = ({handleBack}) => {
    return (
        <form className='space-y-4 p-2'>
            {/* <div className="flex justify-between text-2xl pb-2 text-green-600 items-center px-4">
                <h2 className='cursor-pointer' onClick={handleBack}>&lt;</h2>
                <h2>Book New Appointment</h2>
            </div> */}
            {/* <h2 className='text-xl'>Appointment Booking</h2> */}
            <FormInput label="First Name" placeholder="Enter First Name" required />
            <FormInput label="Last Name" placeholder="Enter Last Name" required />
            <div className="grid grid-cols-2 gap-4">
                <FormInput label="Age" placeholder="Enter Age" required />
                <FormInput label="Weight" placeholder="Kg" />
                <FormInput label="Contact" placeholder="Enter Contact" />
                <FormInput label="Blood Pressure" bloodPressure />
            </div>
            <div className="flex space-x-2">
                <button 
                    className='p-2 flex justify-center font-bold rounded-md w-full bg-gray-100 hover:bg-green-600 hover:text-white text-green-600'
                    onClick={handleBack}
                >
                    Cancel
                </button>
                <button 
                    className='p-2 flex justify-center font-bold rounded-md w-full border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600'
                    type='submit'
                >
                    Complete Booking
                </button>
            </div>
        </form>
    );
};

export default BookingForm;
