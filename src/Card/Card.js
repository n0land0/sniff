import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './Card.css'

const Card = ({ id, ownerName, dogName, profilePic, dogBreed }) => {

// wrap in Link element
  return (

      <article className='profile-card'>
        <img src={profilePic} />
        <h3>{dogName} & {ownerName}</h3>
        <p>{dogBreed}</p>
      </article>

  )
}

export default Card
