import React, { useState } from 'react';
import BookingForm from './BookingForm';
import ContactForm from './ContactForm';
// import FormInput from './FormInput';
import RegistrationForm from './RegistrationForm';


const AppointmentBookingMain = () => {
    const [contactVerified, setContactVerified] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isContactVerificationComplete, setIsContactVerificationComplete] = useState(false);
    const [contactNumber, setContactNumber] = useState<number>();

    const mockContactVerification = (contact: number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(contact === 1234567890);
            }, 1000);
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
        <div>
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