import React from 'react'
import BaseNav from '../Components/BaseNav/BaseNav'
import Navbar from '../Components/Navbar/Navbar'

const Dochoc = (WrappedComponets: React.FC<any>) => {
  return(props: any) => {
    return(
      <>
        <Navbar/>
        <div className='flex'>
          <BaseNav/>
          <div className='w-full'>
            <WrappedComponets {...props}/>
          </div>
        </div>
      </>
    )
  }
}

export default Dochoc;