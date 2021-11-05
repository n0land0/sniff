import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Playdate from '../Playdate/Playdate'
import './Dashboard.css'

const Dashboard = ({ appointments, users }) => {
  const playdates = appointments.sort((apptA, apptB) =>
    new Date(apptB.date) - new Date(apptA.date)
  ).map(appt =>
    <Playdate key={appt.id} {...appt}/>
  )

  return (
    <>
      <section>
      </section>
      <section className='playdates-container'>
        <h2>Playdates</h2>
        {playdates}
      </section>
    </>
  )
}

export default Dashboard
