import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PlaydateFormAndMap from './PlaydateFormAndMap/PlaydateFormAndMap'
// import PlaydateForm from '../PlaydateForm/PlaydateForm'
// import Map from '../Map/Map'

import fetchCalls from '../fetchCalls'
// import './_Profile.scss'

// it's starting to feel like building this as a modal will make site navigation a lot cleaner - confine page changes to navbar

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
    existingAppointment: '',
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

  updateProfile = () => {
    // fetchCalls.getSingleUser(+this.props.selectedUserId)
    //   .then((response) => this.setState({ selectedUser: response }))
    const { selectedUserId, currentUserId } = this.props
    fetchCalls.getAppointments(+selectedUserId)
      .then((appts) =>
        this.setState({ appointments: appts })
      )
      .then(() => {
        const upcomingPlaydate = this.state.appointments.find(appt =>
          appt.ownersId === currentUserId
        )
        this.setState({ existingAppointment: upcomingPlaydate, status: 'success' })
      })
  }

  render() {
    const { currentUserId, selectedUserId, updateCurrentUser, deleteAppointment } = this.props
    const { owner_name, dog_name, profile_pic, bio } = this.state.selectedUser
    const { appointments, existingAppointment, status, error } = this.state
    // const playdateReminder = appointments.find(appt => {
    //   return appt.ownersId === currentUserId
    // })

    return (
      <>
      {status === 'loading' && <h1 className='message'>Loading</h1>}
      {status === 'error' && <h1 className='message'>{error}</h1>}
      {status === 'success' &&
        <section className='profile-container'>
          <article className='profile'>
            <img className='profile__pic' src={profile_pic} />
            <p>owner's name: {owner_name}</p>
            <p>dog's name: {dog_name}</p>
            <p>bio: {bio}</p>
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
