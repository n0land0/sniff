import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import parksData from '../parksData'
import fetchCalls from '../fetchCalls'

class PlaydateForm extends Component {
  state = {
    date: '',
    location: '',
    parks: []
  }

  componentDidMount = () => {
    this.setState({ parks: parksData })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { date, location } = this.state
    const { currentUserId, selectedUserId, addPlaydateForSelectedUser, updateProfile } = this.props
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
    // const newPlaydate = {
    //   id: Date.now(),
    //   date, location, usersInvolved
    // }

    fetchCalls.postAppointment(playdates)
    updateProfile()
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ date: '', location: '' })
  }

  render() {
    const { date, location, parks } = this.state
    const parkOptions = parks.map(park => <option value={park} >{park}</option>)

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
