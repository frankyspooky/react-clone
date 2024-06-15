import React, { useEffect } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  return (
    <div>
        <nav className='container dark-nav'>
            <a href="" className='logo'> Design<span>Agency</span></a>
            <ul>
                <li>Services</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Login</li>
                <li> <button className='btn'>Register</button></li>
            </ul>

        </nav>
      
    </div>
  )
}

export default Navbar
