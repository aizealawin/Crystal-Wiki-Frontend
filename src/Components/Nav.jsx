import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='header'>
        <nav>
          <div className='home-link'>
            <Link to='/'>K</Link>
          </div>
          <div className='nav-links'>
            <Link to='/articles/world'>World Info</Link>
            <Link to='/articles/deities'>Deities</Link>
            <Link to='/articles/map'>Map</Link>
            <Link to='/login'>Login</Link>
          </div>
        </nav>
    </div>
  )
}

export default Nav