import React from 'react';
import { FaDesktop, FaRegCalendar } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { CiChat1 } from "react-icons/ci";



const BaseNav = () => {
  return (
    <div className='flex flex-col items-center bg-green-800 pt-5 w-[7%] h-screen space-y-4 px-4'>
        <div className='bg-green-600 font-bold rounded-full px-2 text-[2rem] font-bold flex items-center mb-4'>
            <h2 className='text-green-200'>M</h2>
        </div>
        <div className='flex flex-col items-center text-center text-sm break-words text-white'>
            <div className='text-3xl'>
                <SlScreenDesktop/>
            </div>
            <h2>Admin</h2>
        </div>
        <div className='flex flex-col items-center text-center text-sm break-words text-white'>
            <div className='text-3xl'>
                <MdManageAccounts/>
            </div>
            <h2>Patients</h2>
            {/* <h2 className='text-ellipsis overflow-hidden ...'>management</h2> */}
        </div>
        <div className='flex flex-col items-center text-center text-sm break-words text-white'>
            <div className='text-3xl'>
                <IoCalendarClearOutline/>
            </div>
            <h2>Calendar</h2>
        </div>
        <div className='flex flex-col items-center text-center text-sm break-words text-white'>
            <div className='text-3xl'>
                <CiChat1/>
            </div>
            <h2>MediChat</h2>
        </div>
    </div>
  )
}

export default BaseNav