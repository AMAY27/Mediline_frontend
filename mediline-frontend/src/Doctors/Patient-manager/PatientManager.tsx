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
    <div>
      {/* <Navbar/> */}
      <h2 className='text-green-600 text-3xl font-bold px-4 py-4'>Patient Manager</h2>
    </div>
  )
}

export default Dochoc(PatientManager);