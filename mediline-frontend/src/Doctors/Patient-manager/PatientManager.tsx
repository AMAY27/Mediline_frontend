import React, { useEffect } from 'react';
import Dochoc from '../Hoc/Dochoc';
import { useDocContext } from '../Global-contexts/docContext';

const PatientManager = () => {
    const { clickedNavItem, setClickedNavItem } = useDocContext();
    useEffect(() => {
        console.log(clickedNavItem);
    },[clickedNavItem])
    if(clickedNavItem !== 'patients'){
        return null;
    }
  return (
    <div>PatientManager</div>
  )
}

export default Dochoc(PatientManager);