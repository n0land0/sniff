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
    const selectedProfile = userData.find(user => user.id === +this.props.id)
    this.setState({...selectedProfile})
  }

  render() {
    const { ownerName, dogName, profilePic, bio } = this.state
    return (
      <section className='profile'>
        <img src={profilePic} />
        <p>Owner's Name: {ownerName}</p>
        <p>Dog's Name: {dogName}</p>
        <p>Bio: {bio}</p>
        <PlaydateForm />
      </section>
    )
  }
}

export default Profile
