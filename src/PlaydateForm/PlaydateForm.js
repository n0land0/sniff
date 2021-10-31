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

  render() {
    const { date, location, parks } = this.state
    const parkOptions = parks.map(park => <option value={park} >{park}</option>)

    return (
      <form>
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
          {parkOptions}
        </select>
      </form>
    )
  }
}

export default PlaydateForm
