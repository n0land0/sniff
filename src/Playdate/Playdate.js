import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './Playdate.css'

const Playdate = ({ id, date, location, playmate }) => {
  const { ownerName, dogName } = playmate

  // cancel button - post both users' appts, trigger app CDU

  return (
    <article className='playdate'>
      <p>{date}</p>
      <p>{location}</p>
      <p>{ownerName} and {dogName}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Playdate
