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
      <h2>Playdates</h2>
      <section className='playdates-container'>
        <button
            id="slideLeft"
            type="button"
            onClick={() =>
              document.querySelector('.playdates-container__playdates').scrollLeft -= 309
            }>˂</button>
        <div className='playdates-container__playdates'>
          {playdates}
        </div>
        <button
          id="slideRight"
          type="button"
          onClick={() =>
            document.querySelector('.playdates-container__playdates').scrollLeft += 309
          }
        >˃</button>
      </section>
    </>
  )
}

export default Dashboard
