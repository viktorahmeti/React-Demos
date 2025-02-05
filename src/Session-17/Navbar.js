import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to='/session-17/home'>H</NavLink>
      <NavLink to='/session-17/gallery'>G</NavLink>
      <NavLink to='/session-17/notifications'>N</NavLink>
      <NavLink to='/session-17/account'>A</NavLink>
    </div>
  )
}

export default Navbar