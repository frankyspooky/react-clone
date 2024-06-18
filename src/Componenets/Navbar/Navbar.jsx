import React, { useEffect } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {

  return (
    <div>
        <nav className='container dark-nav'>
            <a href="" className='logo'> Design<span>Agency</span></a>
            <ul>
                <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li> <Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
                <li> <Link to='portfolio' smooth={true} offset={-260} duration={500}>Portfolio</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-150} duration={500}>Testimonials</Link></li>
                <li><Link to='hero' smooth={true} offset={-260} duration={500}>Login</Link></li>
                <li> <Link to='hero' smooth={true} offset={-260} duration={500} className='btn'>Register</Link></li>
            </ul>

        </nav>
      
    </div>
  )
}

export default Navbar
