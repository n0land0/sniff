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
