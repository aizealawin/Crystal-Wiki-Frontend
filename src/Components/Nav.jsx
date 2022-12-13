import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/articles/'>World Info</Link>
      <Link to='/articles'>Deities</Link>
      <Link to='/articles'>Map</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

export default Nav