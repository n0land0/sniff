import React from 'react'
import {  NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className='navbar'>
      <NavLink
        exact to='/'
        className='navbar__tab'
        activeClassName='active'
      >
        home
      </NavLink>
      <NavLink
        exact to='/findfriends'
        className='navbar__tab'
        activeClassName='active'
      >
        find friends
      </NavLink>
    </nav>
  )
}

export default Nav
