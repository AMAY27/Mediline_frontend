import { createContext, useState, ReactNode, useContext } from "react"
import { AppointmentDetails } from "../admin-types"

interface AdminContextProviderProps{
    children: ReactNode,
}

interface AdminContextProps {
    appointmentData : AppointmentDetails,
    setAppointmentData : (appointmentObject : AppointmentDetails) => void,
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined)

export const AdminProvider: React.FC<AdminContextProviderProps> = ({ children }) => {
    const [appointmentData, setAppointmentData] = useState<AppointmentDetails>({
        appointmentId : "",
        doc_id : "",
        office_id: "",
        user_id : "",
        patient_details : {
            name: "",
            age : 0,
            weight:0,
            blood_pressure: {
                systolic: 0,
                diastolic: 0
            },
            contact : 0
        },
        appointment_date: "",
        time_slot: "",
        is_completed: false,
        prescription:[],
        reports:[]
    })
    const contextData: AdminContextProps = {
        appointmentData,
        setAppointmentData,
    }
    return (
        <AdminContext.Provider value={contextData}>{children}</AdminContext.Provider>
    )
}

export const useAdminContext = () => {
    const context = useContext(AdminContext);
    if(!context){
        throw new Error("useAdminContext must be used within an AdminProvider");
    }
    return context;
}