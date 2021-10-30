import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

const Card = ({ id, ownerName, dogName, profilePic, dogBreed }) => {

// wrap in Link element
  return (

      <article>
        <img src={profilePic} />
        <h3>{dogName} & {ownerName}</h3>
        <p>{dogBreed}</p>
      </article>

  )
}

export default Card
