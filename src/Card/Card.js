import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './Card.css'

const Card = ({ id, ownerName, dogName, profilePic, dogBreed }) => {

  return (
    <Link to={`/profile/${id}`}>
      <article className='profile-card'>
        <img src={profilePic} />
        <h3>{dogName} & {ownerName}</h3>
        <p>{dogBreed}</p>
      </article>
    </Link>
  )
}

export default Card
