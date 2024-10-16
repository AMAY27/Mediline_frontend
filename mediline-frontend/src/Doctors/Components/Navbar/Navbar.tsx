import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [isMobileMenuClicked, setIsMobileMenuClicked] = useState<Boolean>(false);
    const handleMenuOpen = () => {
        setIsMobileMenuClicked(!isMobileMenuClicked);
    }
    const MobileNav = () => {
        if(!isMobileMenuClicked){
            return null;
        }
        return(
            <div className='mobile-nav'>
                <h2>Mediline Clinic</h2>
                <div className='nav-item'>Home</div>
                <div className='nav-item'>Dashboard</div>
                <div className='nav-item'>Appointments</div>
                <div className='nav-item'>Patient data</div>
            </div>
        )
    }
  return (
    <>
        <MobileNav/>
        <nav className='nav-bar'>
            <h2>Mediline Clinic</h2>
            <div className='nav-items'>
                <div className='md:hidden cursor-pointer mr-7' onClick={handleMenuOpen}>
                    <svg className='h-6 w-6 text-black' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                    </svg>
                </div>
                <div className='nav-item'>Home</div>
                <div className='nav-item'>Dashboard</div>
                <div className='nav-item'>Appointments</div>
                <div className='nav-item'>Patient data</div>
            </div>
        </nav>
    </>
  )
}

export default Navbar