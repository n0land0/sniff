import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import PlaydateForm from '../PlaydateForm/PlaydateForm'

import userData from '../userData'
import fetchCalls from '../fetchCalls'
import './Profile.css'

// it's starting to feel like building this as a modal will make site navigation a lot cleaner - confine page changes to navbar

class Profile extends Component {
  state = {
    id: 0,
    owner_name: '',
    dog_name: '',
    profile_pic: '',
    bio: '',
    appointments: []
  }

  componentDidMount = () => {
    this.updateProfile()
  }

  updateProfile = () => {
    fetchCalls.getSingleUser(+this.props.selectedUserId)
      .then((response) => this.setState({...response}))
  }

  render() {
    const { currentUserId, selectedUserId, updateCurrentUser } = this.props
    const { owner_name, dog_name, profile_pic, bio, appointments } = this.state
    const playdateReminder = appointments.find(appt => {
      return appt.playmate.id === currentUserId
    })

    return (
      <section className='profile'>
        <img src={profile_pic} />
        <p>Owner's Name: {owner_name}</p>
        <p>Dog's Name: {dog_name}</p>
        <p>Bio: {bio}</p>
        {
          playdateReminder ?
          <p>You have a playdate scheduled on {playdateReminder.date} at {playdateReminder.location}.</p> :
          <PlaydateForm
            currentUserId={currentUserId}
            selectedUserId={selectedUserId}
            updateProfile={this.updateProfile}
            updateCurrentUser={updateCurrentUser}
          />
        }
        <Link to='/findfriends'>
          <button className="find-friends-btn">Find more friends</button>
        </Link>
      </section>
    )
  }
}


export default Profile
