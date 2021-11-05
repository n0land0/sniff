import React, { Component } from 'react'
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {

  return (
    <header className='header'>
      <aside>
        <img />
      </aside>
      <img />
      <h1 className='title'>snïff</h1>
      <Nav />
    </header>
  )
}

export default Header
