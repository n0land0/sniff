import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import './_App.scss'
import fetchCalls from '../fetchCalls'

import Header from '../Header/Header'
import Gallery from '../Gallery/Gallery'
import Profile from '../Profile/Profile'
import Dashboard from '../Dashboard/Dashboard'

class App extends Component {
  state = {
    currentUser: {},
    appointments: [],
    users: [],
    status: 'loading',
    error: ''
  }

  componentDidMount() {
    this.updateCurrentUser()
  }

  updateCurrentUser = async () => {
    const user = await fetchCalls.getSingleUser(2)
    const allUsers = await fetchCalls.getUsers()
    const appointments = await fetchCalls.getAppointments(user.id)
    this.setState({
      currentUser: {...user},
      users: allUsers,
      appointments: appointments.sort((appt1, appt2) =>
        new Date(appt2.date) - new Date(appt1.date)
      ),
      status: 'success'
    })
    // .catch(error =>
    //   this.setState({ error: error.message })
    // )
  }

  deleteAppointment = (appointmentId) => {
    fetchCalls.deleteAppointment(appointmentId)
      .then(() => {
        this.updateCurrentUser()
      })
  }

  render() {
    const { currentUser, appointments, users } = this.state
    const filteredUsers = users.filter(user => user.id !== currentUser.id)

    return (
      <>
        <Header profilePic={currentUser.profile_pic}/>
        <main>
          <Route exact path='/' render={ () =>
            <Dashboard
              appointments={appointments}
              users={filteredUsers}
              deleteAppointment={this.deleteAppointment}
            />
          } />
          <Route exact path='/findfriends' render={ () =>
            <Gallery users={filteredUsers}/>
          } />
          <Route path='/profile/:userId' render={ ({ match }) =>
            <Profile
              currentUserId={currentUser.id}
              selectedUserId={+match.params.userId}
              updateCurrentUser={this.updateCurrentUser}
              deleteAppointment={this.deleteAppointment}
            />
          } />
        </main>
      </>
    )
  }
}

export default App
