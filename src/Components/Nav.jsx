import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({authenticated, user, handleLogOut}) => {

  let authenticatedOptions
  console.log(user)
  if (user){
    authenticatedOptions = (
        <Link onClick={handleLogOut} to='/'>
          Sign Out
        </Link>
    )
  }

  const publicOptions = (
    <Link to='/signin'>Login</Link>
  )

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
            {authenticated && user ? authenticatedOptions : publicOptions}
            {/* <Link to='/signin'>Login</Link> */}
          </div>
        </nav>
    </div>
  )
}

export default Nav