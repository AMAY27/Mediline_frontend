// RegistrationForm.tsx
import React from 'react';
import FormInput from './FormInput';
import { RegistrationFormProps } from '../../admin-types';

const RegistrationForm: React.FC<RegistrationFormProps> = ({handleBack}) => {
    return (
        <form className='space-y-4 p-2'>
            {/* <div className="flex justify-between text-2xl pb-2 text-green-600 items-center px-4">
                <h2 className='cursor-pointer' onClick={handleBack}>&lt;</h2>
                <h2>Book New Appointment</h2>
            </div> */}
            <div className='space-y-2 p-2 bg-gray-100 rounded-xl'>
                <h2 className='text-lg text-green-600'>User Registration</h2>
                <div className="grid grid-cols-2 gap-2">
                    <FormInput label="First Name" placeholder="Enter First Name" required />
                    <FormInput label="Last Name" placeholder="Enter Last Name" required />
                </div>
            </div>
            <div className='space-y-2 p-2 bg-gray-100 rounded-xl'>
                <h2 className='text-lg text-lg text-green-600'>Patient Details</h2>
                <div className="grid grid-cols-2 gap-2">
                    <FormInput label="Patient First Name" placeholder="Enter Patient's First Name" required />
                    <FormInput label="Patient Last Name" placeholder="Enter Patient's Last Name" required />
                    <FormInput label="Age" placeholder="Enter Age" required />
                    <FormInput label="Weight" placeholder="Kg" />
                    <FormInput label="Contact" placeholder="Enter Contact" />
                    <FormInput label="Blood Pressure" bloodPressure />
                </div>
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
                    Complete registration with Booking
                </button>
            </div>
        </form>
    );
};

export default RegistrationForm;
