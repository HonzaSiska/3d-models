import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div id='logo'>
            3D-Models
        </div>
        <ul>
            <li><Link  to='/'>Home</Link></li>
            <li>Login</li>
            <li>Register</li>
        </ul>
    </nav>
  )
}

export default Navbar