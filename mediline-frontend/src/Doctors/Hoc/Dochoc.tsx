import React from 'react'
import BaseNav from '../Components/BaseNav/BaseNav'

const Dochoc = (WrappedComponets: React.FC<any>) => {
  return(props: any) => {
    return(
      <div className='flex'>
        <BaseNav/>
        <div className='w-full'>
          <WrappedComponets {...props}/>
        </div>
      </div>
    )
  }
}

export default Dochoc