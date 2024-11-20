export interface appointmentDetails{
    appointmentId: number,
    firstName: string,
    lastName: string,
    age: number,
    weight: number,
    date: string,
    time: string,
}

export interface FormInputProps {
    label: string;
    placeholder?: string;
    required?: boolean;
    bloodPressure?: boolean;
}

export interface ContactFormProps {
    contactNumber: number | undefined;
    setContactNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
    handleContactSubmit: (contact: number) => Promise<void>;
    isLoading: boolean;
}

export interface BookinFormProps {
    handleBack: () => void;
}

export interface RegistrationFormProps {
    handleBack: () => void;
}

export interface AppointmentDetails {
    appointmentId: string,
    doc_id : string,
    office_id: string,
    user_id : string,
    patient_details : patient_details,
    appointment_date: string,
    time_slot: string,
    is_completed: boolean,
    prescription: any[],
    reports: any[]
}
export interface patient_details {
    name: string,
    age : number,
    weight:number,
    blood_pressure: blood_pressure
    contact : number
}

export interface blood_pressure{
    systolic: number,
    diastolic: number
}

export interface AppointmentCardProps {
    appointmentId: string;
    patient_details: {
      name: string;
      age: number;
      weight: number;
      blood_pressure: {
        systolic: number;
        diastolic: number;
      };
      contact: number;
    };
    onClick: () => void;
}