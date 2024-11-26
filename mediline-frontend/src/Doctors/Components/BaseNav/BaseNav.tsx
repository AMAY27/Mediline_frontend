import React, { useState } from 'react';
import { FaDesktop, FaRegCalendar } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { CiChat1 } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useDocContext } from '../../Global-contexts/DocContext';



const BaseNav = () => {
    //const [clickedNavItem, setClickedNavItem] = useState<String>("admin");
    const navigate = useNavigate()
    const { clickedNavItem, setClickedNavItem } = useDocContext();
    const handleNavItemsClick = (item:string) => {
        setClickedNavItem(item);
        navigate(`/doctor/${item}`);
    }
  return (
    <div className='flex flex-col items-center bg-green-900 w-[7%] h-screen'>
        {/* <div className='bg-green-600 font-bold rounded-full px-2 text-[2rem] font-bold flex items-center mb-4'>
            <h2 className='text-green-200'>M</h2>
        </div> */}
        <div 
            onClick={() => handleNavItemsClick("admin")}
            className={`flex flex-col items-center text-center text-sm break-words w-full py-2 cursor-pointer text-white mb-4 hover:bg-green-600 ${clickedNavItem === "admin" ? 'bg-green-600' : 'bg-transparent'}`}
        >
            <div className='text-3xl'>
                <SlScreenDesktop/>
            </div>
            <h2>Admin</h2>
        </div>
        <div 
            onClick={() => handleNavItemsClick("patients")}
            className={`flex flex-col items-center text-center text-sm break-words w-full py-2 cursor-pointer mb-4 text-white hover:bg-green-600 ${clickedNavItem === "patients" ? 'bg-green-600' : 'bg-transparent'}`}
        >
            <div className='text-3xl'>
                <MdManageAccounts/>
            </div>
            <h2>Patients</h2>
            {/* <h2 className='text-ellipsis overflow-hidden ...'>management</h2> */}
        </div>
        <div 
            onClick={() => handleNavItemsClick("calendar")}
            className={`flex flex-col items-center text-center text-sm break-words w-full py-2 cursor-pointer mb-4 text-white hover:bg-green-600 ${clickedNavItem === "calendar" ? 'bg-green-600' : 'bg-transparent'}`}
        
        >
            <div className='text-3xl'>
                <IoCalendarClearOutline/>
            </div>
            <h2>Calendar</h2>
        </div>
        <div 
            onClick={() => handleNavItemsClick("chat")}
            className={`flex flex-col items-center text-center text-sm break-words w-full py-2 cursor-pointer mb-4 text-white hover:bg-green-600 ${clickedNavItem === "chat" ? 'bg-green-600' : 'bg-transparent'}`}
        >
            <div className='text-3xl'>
                <CiChat1/>
            </div>
            <h2>MediChat</h2>
        </div>
    </div>
  )
}

export default BaseNav