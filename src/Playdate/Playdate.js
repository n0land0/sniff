import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './Playdate.css'

const Playdate = ({ id, date, location, playmate }) => {
  // const { ownerName, dogName, dogBreed } = userToMeet
  const { ownerName, dogName } = playmate

  return (
    <article className='playdate'>
      <p>{date}</p>
      <p>{location}</p>
      <p>{ownerName} and {dogName}</p>
    </article>
  )
}

export default Playdate
