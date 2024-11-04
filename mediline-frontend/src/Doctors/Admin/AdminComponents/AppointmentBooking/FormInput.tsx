// FormInput.tsx
import React from 'react';

import { FormInputProps } from '../../admin-types';

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, required, bloodPressure }) => {
    return (
        <div>
            <label className='appointment-form-input'>{label}</label>
            {bloodPressure ? (
                <div className="flex items-center">
                    <input className='p-1 shadow rounded-md w-full mt-3' placeholder='Systolic' />
                    <span className='text-2xl'> / </span>
                    <input className='p-1 shadow rounded-md w-full mt-3' placeholder='Diastolic' />
                    <span className='mx-2'>mmHg</span>
                </div>
            ) : (
                <input 
                    className='p-2 shadow rounded-md w-full mt-3' 
                    placeholder={placeholder} 
                    required={required} 
                />
            )}
        </div>
    );
};

export default FormInput;
