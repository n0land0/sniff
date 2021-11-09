import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PlaydateFormAndMap from './PlaydateFormAndMap/PlaydateFormAndMap'
// import PlaydateForm from '../PlaydateForm/PlaydateForm'
// import Map from '../Map/Map'

import fetchCalls from '../fetchCalls'
// import './_Profile.scss'

class Profile extends Component {
  state = {
    selectedUser: {
      id: '',
      owner_name: '',
      dog_name: '',
      profile_pic: '',
      dog_breed: '',
      bio: '',
    },
    appointments: [],
    existingAppointment: null,
    status: 'loading',
    error: ''
  }

  componentDidMount = () => {
    fetchCalls.getSingleUser(+this.props.selectedUserId)
      .then(user => {
        this.setState({ selectedUser: user })
        this.updateProfile()
      })
      .catch(error =>
        this.setState({ error: error.message })
      )
  }

  componentDidUpdate = () => {
    if (this.props.currentUserId && !this.state.existingAppointment) {
      this.findExistingAppointment()
    }
  }

  updateProfile = () => {
    const { selectedUserId, currentUserId } = this.props
    fetchCalls.getAppointments(+selectedUserId)
      .then((appts) => this.setState({ appointments: appts, status: 'success' }))
      // .then(() => {
      //   this.findExistingAppointment()
      // })
  }

  findExistingAppointment = () => {
    const upcomingPlaydate = this.state.appointments.sort((appt1, appt2) =>
      new Date(appt2.date) - new Date(appt1.date)
    )
      .find(appt =>
      appt.ownersId === this.props.currentUserId
    )
    return upcomingPlaydate
      ? this.setState({ existingAppointment: upcomingPlaydate })
      : null
  }

  render() {
    const { currentUserId, selectedUserId, updateCurrentUser, deleteAppointment } = this.props
    const { owner_name, dog_name, profile_pic, bio } = this.state.selectedUser
    const { appointments, existingAppointment, status, error } = this.state
    // console.log(currentUserId)
    return (
      <>
      {status === 'loading' && <h1 className='message'>Loading</h1>}
      {status === 'error' && <h1 className='message'>{error}</h1>}
      {(currentUserId && status === 'success') &&
        <section className='profile-container'>
          <article className='profile'>
            <img className='profile__pic' src={profile_pic} />
            <p className='profile__text'>owner's name: {owner_name}</p>
            <p className='profile__text'>dog's name: {dog_name}</p>
            <p className='profile__text'>bio: {bio}</p>
            <Link to='/findfriends'>
              <button className="find-friends-btn">find more friends</button>
            </Link>
          </article>
          {
            (existingAppointment && new Date() < new Date(existingAppointment.date))
              ? <>
                <div className='playdate-reminder'>
                  <h2 className='playdate-reminder__message'>You have a playdate scheduled on {existingAppointment.date} at {existingAppointment.dogPark}.</h2>
                  <button
                    className='playdate-reminder__cancel-btn'
                    onClick={() => {
                    deleteAppointment(existingAppointment.id)
                    this.updateProfile()
                    this.findExistingAppointment()
                  }}>cancel</button>
                </div>
                </>
              : <PlaydateFormAndMap
                  currentUserId={currentUserId}
                  selectedUserId={selectedUserId}
                  updateProfile={this.updateProfile}
                  updateCurrentUser={updateCurrentUser}
                />
          }
        </section>
      }
      </>
    )
  }
}


export default Profile
