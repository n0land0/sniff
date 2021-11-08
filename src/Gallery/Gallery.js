import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Card from '../Card/Card'
import './_Gallery.scss'

const Gallery = ({ users }) => {
  const userCards = users.map(user => <Card key={user.id} {...user} />)

  return (
    <section className='gallery'>
      {userCards}
    </section>
  )
}

export default Gallery
