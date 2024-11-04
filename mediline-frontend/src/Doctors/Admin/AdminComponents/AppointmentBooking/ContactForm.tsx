// ContactForm.tsx
import React from 'react';
import { ContactFormProps } from '../../admin-types';

const ContactForm: React.FC<ContactFormProps> = ({ contactNumber, setContactNumber, handleContactSubmit, isLoading }) => {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (contactNumber !== undefined) handleContactSubmit(contactNumber);
    };

    return (
        <form onSubmit={onSubmit}>
            <label className='appointment-form-input'>Contact Number:</label>
            <input
                className='p-2 shadow rounded-md w-full my-3'
                placeholder='Enter Contact'
                required
                value={contactNumber ?? ''}
                onChange={(e) => setContactNumber(Number(e.target.value) || undefined)}
                type='number'
            />
            <button 
                type='submit' 
                className='p-2 flex justify-center font-bold rounded-md w-full border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-600'>
                {isLoading ? "Verifying..." : "Submit"}
            </button>
        </form>
    );
};

export default ContactForm;
