import React from 'react'

const BaseNav = () => {
  return (
    <div className='flex flex-col items-center bg-green-200 pt-5 w-[5%] h-screen space-y-4 px-4'>
        <div className='bg-green-600 font-bold rounded-full p-2 text-[3rem] font-bold flex items-center'>
            <h2 className='text-green-200'>M</h2>
        </div>
        <div className='text-center text-sm break-words font-bold'>
            <h2>Admin desk</h2>
        </div>
        <div className='text-center text-sm break-words font-bold'>
            <h2>Patient management</h2>
        </div>
        <div className='text-center text-sm break-words font-bold'>
            <h2>Calendar</h2>
        </div>
        <div className='text-center text-sm break-words font-bold'>
            <h2>Mediline Chat</h2>
        </div>
    </div>
  )
}

export default BaseNav