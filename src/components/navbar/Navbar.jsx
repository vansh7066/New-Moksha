import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <div className='title'>
        <h2>UTSAV MOKSHA</h2>
    </div>
    <div className='lists'>
        <ul>
            <li><Link style={{textDecoration:'none'}} to={'/home'}>Home</Link></li>
            <li><Link style={{textDecoration:'none'}} to={'/about'}>About</Link></li>
            <li><Link style={{textDecoration:'none'}} to={'/services'}>Services</Link></li>
            <li><Link style={{textDecoration:'none'}} to={'/gallery'}>Gallery</Link></li>
            <li><Link style={{textDecoration:'none'}} to={'/contact'}>Contact</Link></li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar