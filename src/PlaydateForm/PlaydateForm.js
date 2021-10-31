import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import parksData from '../parksData'

class PlaydateForm extends Component {
  state = {
    date: '',
    location: '',
    parks: []
  }

  componentDidMount = () => {
    // fetch
    this.setState({ parks: parksData })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { date, location } = this.state
    const newPlaydate = {
      id: Date.now(),
      date, location
    }
    console.log(newPlaydate)
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