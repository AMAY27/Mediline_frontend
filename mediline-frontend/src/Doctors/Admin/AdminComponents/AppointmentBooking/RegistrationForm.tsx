// RegistrationForm.tsx
import React from 'react';
import FormInput from './FormInput';

const RegistrationForm: React.FC = () => {
    return (
        <form className='space-y-4'>
            <h2 className='text-xl'>User Registration</h2>
            <FormInput label="First Name" placeholder="Enter First Name" required />
            <FormInput label="Last Name" placeholder="Enter Last Name" required />
            <div className="grid grid-cols-2 gap-4">
                <FormInput label="Age" placeholder="Enter Age" required />
                <FormInput label="Weight" placeholder="Kg" />
                <FormInput label="Contact" placeholder="Enter Contact" />
                <FormInput label="Blood Pressure" bloodPressure />
            </div>
            <button 
                className='p-2 flex justify-center font-bold rounded-md w-full border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600'
                type='submit'
            >
                Complete Registration
            </button>
        </form>
    );
};

export default RegistrationForm;
