import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import BaseNav from '../Components/BaseNav/BaseNav'

const Dashboard = () => {
  return (
    <div className='flex'>
        <BaseNav/>
        <div className='w-full'>
            <Navbar/>
            <div className='font-bold text-green-300 text-xl'>
                Doctor clinic name
            </div>
        </div>
    </div>
  )
}

export default Dashboard