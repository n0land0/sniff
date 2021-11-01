import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './Playdate.css'

const Playdate = ({ id, date, location, userToMeet }) => {
  const { ownerName, dogName, dogBreed } = userToMeet

  // cancel button - post both users' appts, trigger app CDU

  return (
    <article className='playdate'>
      <p>{date}</p>
      <p>{location}</p>
      <p>{ownerName} and {dogName} the {dogBreed}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Playdate
