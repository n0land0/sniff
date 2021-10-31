import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import PlaydateForm from '../PlaydateForm/PlaydateForm'

import userData from '../userData'
import './Profile.css'

class Profile extends Component {
  state = {
    id: 0,
    ownerName: '',
    dogName: '',
    profilePic: '',
    bio: '',
    appointments: []
  }

  componentDidMount = () => {
    // fetch
    const selectedProfile = userData.find(user => user.id === +this.props.userId)
    this.setState({...selectedProfile})
  }

  addPlaydateForSelectedUser = (newPlaydate) => {
    const { appointments } = this.state
    // fetch (POST) new playdate for selected profile & current user
    // fetch (GET) updated appointments for selected profile & current user
    this.setState({ appointments: [...appointments, newPlaydate]})
    this.props.addPlaydateForCurrentUser(newPlaydate)
  }

  render() {
    const { ownerName, dogName, profilePic, bio, appointments } = this.state
    const playdateReminders = appointments.map(appt =>
      <p>You have a playdate with {dogName} and {ownerName} on {appt.date} at {appt.location}.</p>
    )

    return (
      <section className='profile'>
        <img src={profilePic} />
        <p>Owner's Name: {ownerName}</p>
        <p>Dog's Name: {dogName}</p>
        <p>Bio: {bio}</p>
        {playdateReminders}
        <PlaydateForm addPlaydateForSelectedUser={this.addPlaydateForSelectedUser}/>
        <Link to='/findfriends'>
          <button>Find more friends</button>
        </Link>
      </section>
    )
  }
}

export default Profile
