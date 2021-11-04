import React, { Component } from 'react'
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

  return (
    <nav>
      <NavLink exact to='/' activeClassName='active'>
        Home
      </NavLink>
      <NavLink exact to='/findfriends' activeClassName='active'>
        Find Friends
      </NavLink>
    </nav>
  )
}

export default Nav
