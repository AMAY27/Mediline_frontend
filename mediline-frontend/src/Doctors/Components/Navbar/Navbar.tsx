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
                <div className="mobnav-head">
                    <h2>Mediline Clinic</h2>
                    <h2 onClick={handleMenuOpen}>X</h2>
                </div>
                <div className='mobnav-items'>
                    <div className='mobnav-item'>Home</div>
                    <div className='mobnav-item'>Dashboard</div>
                    <div className='mobnav-item'>Appointments</div>
                    <div className='mobnav-item'>Patient data</div>
                </div>
            </div>
        )
    }
  return (
    <>
        <MobileNav/>
        {!isMobileMenuClicked && <nav className='nav-bar'>
            <h2>Mediline Clinic</h2>
            <>
                <div className='menu-svg' onClick={handleMenuOpen}>
                    <svg className='icon' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
                    </svg>
                </div>
                <div className='nav-items'>
                    <div className='nav-item'>Home</div>
                    <div className='nav-item'>Dashboard</div>
                    <div className='nav-item'>Appointments</div>
                    <div className='nav-item'>Patient data</div>
                </div>
            </>
        </nav>}
    </>
  )
}

export default Navbar