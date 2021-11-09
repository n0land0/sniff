import React from 'react'
import { Link } from 'react-router-dom'

// import './_Playdate.scss'

import dayjs from 'dayjs'

const Playdate = ({ id, dogPark, date, ownersId, ownerName, dogName, profilePic, deleteAppointment }) => {
  date = dayjs(date).format('ddd MMM D, YYYY')

  return (
    <article className='playdate' style={{backgroundImage: `url(${profilePic})` }}>
      <div className='playdate__text-overlay'>
        <p>on <span>{date}</span></p>
        <p>at <span>{dogPark}</span></p>
        <p>with
          <Link to={`/profile/${ownersId}`}>
            {" " + ownerName} and {dogName}
          </Link>
        </p>
        <button
          className='playdate__cancel-btn'
          onClick={() => deleteAppointment(id)}
        >cancel</button>
      </div>
    </article>
  )
}

export default Playdate
