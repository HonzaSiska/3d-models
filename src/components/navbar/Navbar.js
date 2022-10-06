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
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar