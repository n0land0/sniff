import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './Card.css'

const Card = ({ id, owner_name, dog_name, profile_pic, dog_breed }) => {

  return (
    <Link to={`/profile/${id}`}>
      <article className='profile-card'>
        <img src={profile_pic} />
        <h3>{dog_name} & {owner_name}</h3>
        <p>{dog_breed}</p>
      </article>
    </Link>
  )
}

export default Card
