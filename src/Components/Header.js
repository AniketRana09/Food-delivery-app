import React, { useState } from 'react'
import { LOGO_URL } from '../Utils/Constant'

const Header = () => {
  const[btnReact,setBtnReact]=useState("Log in")
  
 
  return (
    <div className='header'>
    <div className='logo-container'>
      <img className="logo" 
      src={LOGO_URL} alt='logo'/>
    </div>
    <div className='nav-items'>
     <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact us</li>
      <li>Cart</li>
      <button className='login-btn'onClick={()=>{
        setBtnReact("Log out")}
      }>{btnReact}</button>
     </ul>
    </div>
  </div>
  )
}

export default Header
