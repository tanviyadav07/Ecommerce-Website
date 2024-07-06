import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navfslogo.png'
import navProfile from '../../assets/navDP.png'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}
