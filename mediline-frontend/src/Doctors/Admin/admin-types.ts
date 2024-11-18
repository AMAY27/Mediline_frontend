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
    appointmentId: number,
    doc_id : number,
    office_id: number,
    user_id : number,
    patient_details : patient_details,
    appointment_date: string,
    time_slot: string,
    is_completed: boolean,
    prescription:[],
    reports:[]
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
    appointmentId: number;
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