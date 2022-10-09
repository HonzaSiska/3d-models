import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'




const Navbar = () => {
  const {user} = useAuthContext()
  const {logout} = useLogout()
  return (
    <nav>
        <div id='logo'>
            3D-Models
        </div>
        <ul>
            <li><Link  to='/'>Home</Link></li>
            {!user && <li><Link to='/login'>Login</Link></li>}
            {user && <li><Link to='/register'>Register</Link></li>}
            {user &&<li onClick={logout}><Link to='/register'>Logout</Link></li>}
            {user && <li style={{fontStyle:'italic'}}>{user.displayName}</li>}
        </ul>
    </nav>
  )
}

export default Navbar