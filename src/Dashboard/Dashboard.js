import React from 'react'

import Playdate from '../Playdate/Playdate'
// import './_Dashboard.scss'

const Dashboard = ({ appointments, users, deleteAppointment }) => {
  const playdates = appointments.sort((apptA, apptB) =>
    new Date(apptB.date) - new Date(apptA.date)
  ).map(appt =>
    <Playdate key={appt.id} {...appt} deleteAppointment={deleteAppointment}/>
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
