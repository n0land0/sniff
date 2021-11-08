import React from 'react'
import { Link } from 'react-router-dom'

// import './_Playdate.scss'

import dayjs from 'dayjs'

const Playdate = ({ id, dogPark, date, ownersId, ownerName, dogName, profilePic, deleteAppointment }) => {
  // const { ownerName, dogName, id } = playmate
  date = dayjs(date).format('ddd MMM D, YYYY')

  // cancel button - post both users' appts, trigger app CDU

  return (
    <article className='playdate' style={{backgroundImage: `url(${profilePic})` }}>
      <p>on {date}</p>
      <p>at {dogPark}</p>
      <p>with
        <Link to={`/profile/${ownersId}`}>
          {" " + ownerName} and {dogName}
        </Link>
      </p>
      <button onClick={() => deleteAppointment(id)}>Cancel</button>
    </article>
  )
}

export default Playdate
