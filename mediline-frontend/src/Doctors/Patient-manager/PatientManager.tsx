// Patient manager branch setup for development
import React, { useEffect } from 'react';
import Dochoc from '../Hoc/Dochoc';
import { useDocContext } from '../Global-contexts/DocContext';
import Navbar from '../Components/Navbar/Navbar';


const PatientManager = () => {
    const { clickedNavItem, setClickedNavItem } = useDocContext();
    useEffect(() => {
        console.log(clickedNavItem);
    },[clickedNavItem])
    if(clickedNavItem !== 'patients'){
        return null;
    }
  return (
    <div className='flex'>
      <div className='flex justify-center w-[25%] p-8'>
        <form action="" className='border-2 border-green-600 rounded-md p-4 space-y-2 w-full shadow-md'>
          <label className='text-green-600 text-lg'>Enter Patient Name:</label>
          <input
            className='px-2 py-1  border-2 border-gray-200 rounded-xl w-full'
            placeholder=''
          />
        </form>
      </div>
      {/* <Navbar/> */}
      {/* <h2 className='text-green-600 text-3xl font-bold px-4 py-4'>Patient Manager</h2> */}
    </div>
  )
}

export default Dochoc(PatientManager);