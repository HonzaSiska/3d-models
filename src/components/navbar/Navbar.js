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
            <li><Link>Login</Link></li>
            <li><Link>Register</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar