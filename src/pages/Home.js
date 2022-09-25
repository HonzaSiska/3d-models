import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  
  return (
    <div>
        <h1>Models</h1>
        <div >
            <Link to='/product/lampara'>Lampara</Link>
        </div>
        <div>
            <Link to='/product/coyotepestool'>Coyotepe Stool</Link>
        </div>
        <div>
            <Link to='/product/soborg'>Soborg Chair</Link>
        </div>
            
        

    </div>
  )
}

export default Home