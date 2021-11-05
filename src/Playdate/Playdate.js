import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import './Playdate.css'

import dayjs from 'dayjs'

const Playdate = ({ date, location, playmate }) => {
  const { ownerName, dogName, id } = playmate
  date = dayjs(date).format('ddd MMM D, YYYY')

  // cancel button - post both users' appts, trigger app CDU

  return (
    <article className='playdate' style={{backgroundImage: `url(${playmate.profile_pic})` }}>
      <p>on {date}</p>
      <p>at {location}</p>
      <p>with
        <Link to={`/profile/${id}`}>
          {" " + ownerName} and {dogName}
        </Link>
      </p>
      <button>Cancel</button>
    </article>
  )
}

export default Playdate
