import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Playdate from '../Playdate/Playdate'
import './Dashboard.css'

const Dashboard = ({ appointments, users }) => {
  const playdates = appointments.sort((apptA, apptB) =>
    new Date(apptB.date) - new Date(apptA.date)
  ).map(appt =>
  //   appt.userToMeet = appt.usersInvolved.filter(userId =>
  //     users.some(user => user.id === userId)
  //   ).map(userId =>
  //     users.find(user => user.id === userId)
  //   )[0]
    <Playdate key={appt.id} {...appt}/>
  )

  // fetch user when App mounts, pass in appts, iterate and return Playdate components

  return (
    <>
      <section>
      </section>
      <section>
      {playdates}
      </section>
    </>
  )
}

export default Dashboard
