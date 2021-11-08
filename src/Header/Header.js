import React from 'react'
// import './_Header.scss'
import Nav from './Nav/Nav'

const Header = ({ profilePic }) => {

  return (
    <header className='header'>
      <article className='header__user-photo-username'>
        <img src={profilePic} className='header__user-photo' alt='user photo' />
        <h3 className='header__username'>Bruce</h3>
      </article>
      <article className='header__logo-tagline'>
        <div className='header__logo'>
          <h1 className='title'>snïff.</h1>
        </div>
        <h3 className='header__tagline'>(wag. fetch. play.)</h3>
      </article>
      <Nav />
    </header>
  )
}

export default Header
