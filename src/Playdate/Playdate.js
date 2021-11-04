import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './Playdate.css'

const Playdate = ({ id, date, location, playmate }) => {
  const { ownerName, dogName } = playmate

  // cancel button - post both users' appts, trigger app CDU

  return (
    <article className='playdate'>
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>With {ownerName} and {dogName}</p>
      <button>Cancel</button>
    </article>
  )
}

export default Playdate
