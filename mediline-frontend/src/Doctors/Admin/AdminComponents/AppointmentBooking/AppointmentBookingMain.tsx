import React, { useState } from 'react';
import BookingForm from './BookingForm';
import ContactForm from './ContactForm';
// import FormInput from './FormInput';
import RegistrationForm from './RegistrationForm';
import {users} from '../../../../../testDataForDoctors/userList'


const AppointmentBookingMain = () => {
    const [contactVerified, setContactVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isContactVerificationComplete, setIsContactVerificationComplete] = useState(false);
    const [contactNumber, setContactNumber] = useState<number>();

    const mockContactVerification = (contact: number) => {
        return new Promise((resolve) => {
            users.map((user) => {
                setTimeout(() => {
                    const found = users.some((user) => contact === user.contact)
                    resolve(found)
                },1000)
            })
        });
    };
    const handleContactSubmit = async (contact:number) => {
        setIsLoading(true);
        try {
            const contactExists = await mockContactVerification(contact);
            if (contactExists) {
                setIsContactVerificationComplete(true);
                setContactVerified(true); 
            } else {
                setIsContactVerificationComplete(true);
                setContactVerified(false);
                alert("User not found, please register first.");
            }
            if (!contactExists) alert("User not found, please register first.");
        } catch {
            alert("Error connecting to mock verification.");
        } finally {
            setIsLoading(false);
        }
    };
    const handleBack = async() =>{
        setIsContactVerificationComplete(false);
        setContactVerified(false);
    }
    return (
        <div className='border-2 border-gray-300 px-4 py-2 h-full rounded-2xl'>
            <h2 className=' flex justify-center text-2xl text-green-600 items-center'>Book New Appointment</h2>
            {!isContactVerificationComplete ? (
                <ContactForm 
                    contactNumber={contactNumber} 
                    setContactNumber={setContactNumber} 
                    handleContactSubmit={handleContactSubmit} 
                    isLoading={isLoading} 
                />
            ) : contactVerified ? (
                <BookingForm handleBack={handleBack}/>
            ) : (
                <RegistrationForm handleBack={handleBack}/>
            )}
        </div>
    );
}

export default AppointmentBookingMain