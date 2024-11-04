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