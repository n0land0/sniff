import React, { Component } from 'react'
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {

  return (
    <header className='header'>
      <article className='header__user-photo-username'>
        <img src='https://i.imgur.com/5gC7saF.jpeg' className='header__user-photo' />
        <h3 className='header__username'>Bruce</h3>
      </article>
      <article className='header__logo-tagline'>
        <div className='header__logo'>
          <h1 className='title'>snïff.</h1>
        </div>
        <h3 className='header__tagline'>wag. fetch. play.</h3>
      </article>
      <Nav />
    </header>
  )
}

export default Header
