import React from 'react'
import Card from './Card/Card'

const Gallery = ({ users }) => {
  const userCards = users.map(user => <Card key={user.id} {...user} />)

  return (
    <section className='gallery'>
      {userCards}
    </section>
  )
}

export default Gallery
