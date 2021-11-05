import React, { Component } from 'react'
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

  return (
    <nav className='navbar'>
      <NavLink
        exact to='/'
        className='navbar__tab'
        activeClassName='active'
      >
        Home
      </NavLink>
      <NavLink
        exact to='/findfriends'
        className='navbar__tab'
        activeClassName='active'
      >
        Find Friends
      </NavLink>
    </nav>
  )
}

export default Nav
