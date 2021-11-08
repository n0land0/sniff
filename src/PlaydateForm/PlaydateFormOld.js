import React, { Component, useContext } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
// import PlaydateContext from '../PlaydateFormAndMap/PlaydateContextProvider'

import parksData from '../parksData'
import fetchCalls from '../fetchCalls'

class PlaydateForm extends Component {
  state = {
    date: '',
    location: '',
    parks: [],
    selectedParkId: null
  }

  componentDidMount = () => {
    // fetchCalls.getParks()
      // .then(parks =>
        this.setState({ parks: parksData })
      // )
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    this.findPark(event)
  }

  findPark = (event) => {
    const { markers, setMarkers, selected, setSelected } = this.props
    const { parks } = this.state

    const selectedPark = parks.find(parkObj => parkObj.name === event.target.value)
    setSelected(selectedPark)
  }

  sendParkToForm = () => {
    const { selected } = this.props
    this.setState({ location: selected })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { date, location } = this.state
    const { currentUserId, selectedUserId, updateProfile, updateCurrentUser } = this.props
    const usersInvolved = [ currentUserId, selectedUserId ]
    const playdateId = Date.now()
    const playdates = usersInvolved.map(id => {
      return {
        id: playdateId,
        userId: id,
        playmate: usersInvolved.find(userId => userId !== id),
        date, location,
      }
    })

    fetchCalls.postAppointment(playdates)
    .then(() => {
      updateCurrentUser()
      updateProfile()
    })
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ date: '', location: '' })
  }

  render() {
    const { date, location, parks } = this.state
    const parkOptions = parks.map(park => <option value={park.name} >{park.name}</option>)

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='date'
          name='date'
          value={date}
          required
          onChange={this.handleChange}
        />
        <select
          name='location'
          value={location}
          onChange={this.handleChange}
          required
        >
          <option value='' disabled selected hidden>Choose a park</option>
          {parkOptions}
        </select>
        <button>Set Playdate</button>
      </form>
    )
  }
}

export default PlaydateForm
