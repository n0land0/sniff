import React, { useContext } from 'react'
import { PlaydateContext } from '../PlaydateContextProvider'

import fetchCalls from '../../../fetchCalls'


const PlaydateForm = ({ currentUserId, selectedUserId, updateProfile, updateCurrentUser }) => {
  const { date, setDate, setSelected, location, setLocation, parks } = useContext(PlaydateContext)

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'date') { setDate(value) }
    if (name === 'location') {
      setLocation(value)
      findPark(event)
    }
  }

  const findPark = (event) => {
    const selectedPark = parks.find(parkObj => parkObj.name === event.target.value)
    setSelected(selectedPark)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const playdate = {
      ownerIds: [currentUserId, selectedUserId],
      dogPark: location,
      date: date,
    }

    fetchCalls.postAppointment(playdate)
    .then(() => {
      updateCurrentUser()
      updateProfile()
    })
    clearInputs()
  }

  const clearInputs = () => {
    setDate('')
    setSelected(null)
    setLocation('')
  }

  const parkOptions = parks.map(park => <option value={park.name} >{park.name}</option>)

  return (
    <form className='playdate-form' onSubmit={handleSubmit}>
      <input
        className='playdate-form__date'
        type='date'
        name='date'
        value={date}
        required
        onChange={handleChange}
      />
      <select
        className='playdate-form__dropdown'
        name='location'
        value={location}
        onChange={handleChange}
        required
      >
        <option value='' disabled selected hidden>choose a park</option>
        {parkOptions}
      </select>
      <button className='playdate-form__set-playdate-btn'>set playdate</button>
    </form>
  )
}

export default PlaydateForm
