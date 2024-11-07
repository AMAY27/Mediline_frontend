// RegistrationForm.tsx
import React from 'react';
import FormInput from './FormInput';

const RegistrationForm: React.FC = () => {
    return (
        <form className='space-y-4'>
            <div className='space-y-2 bg-green-100 p-2'>
                <h2 className='text-lg'>User Registration</h2>
                <div className="grid grid-cols-2 gap-2">
                    <FormInput label="First Name" placeholder="Enter First Name" required />
                    <FormInput label="Last Name" placeholder="Enter Last Name" required />
                </div>
            </div>
            <div className='space-y-2 bg-green-100 p-2'>
                <h2 className='text-lg'>Patient Details</h2>
                <div className="grid grid-cols-2 gap-2">
                    <FormInput label="Patient First Name" placeholder="Enter Patient's First Name" required />
                    <FormInput label="Patient Last Name" placeholder="Enter Patient's Last Name" required />
                    <FormInput label="Age" placeholder="Enter Age" required />
                    <FormInput label="Weight" placeholder="Kg" />
                    <FormInput label="Contact" placeholder="Enter Contact" />
                    <FormInput label="Blood Pressure" bloodPressure />
                </div>
            </div>
            <button 
                className='p-2 flex justify-center font-bold rounded-md w-full border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600'
                type='submit'
            >
                Complete Registration with booking
            </button>
        </form>
    );
};

export default RegistrationForm;
