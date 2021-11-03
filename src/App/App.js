import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'
import fetchCalls from '../fetchCalls'

import Nav from '../Nav/Nav'
import Gallery from '../Gallery/Gallery'
import Profile from '../Profile/Profile'
import Dashboard from '../Dashboard/Dashboard'

import userData from '../userData'

class App extends Component {
  state = {
    currentUser: {
      appointments: []
    },
    users: []
  }

  componentDidMount() {
    this.updateCurrentUser()
  }

  updateCurrentUser = () => {
    Promise.all([fetchCalls.getSingleUser(2), fetchCalls.getUsers()])
    .then(([user, allUsers]) => {
      this.setState({ currentUser: {...user}, users: allUsers })
    })
    .then(() => console.log('current user', this.state.currentUser))
  }

// should PlaydateForm be a sibling of Profile?
  // ...if currentUser playdates need to be added to App state
  render() {
    const { currentUser, users } = this.state
    const filteredUsers = users.filter(user => user.id !== currentUser.id)

    return (
      <>
      <Nav />
      <main>
        <Route exact path='/dashboard' render={ () =>
          <Dashboard appointments={currentUser.appointments} users={filteredUsers}/>
        } />
        <Route exact path='/findfriends' render={ () =>
          <Gallery users={filteredUsers}/>
        } />
        <Route path='/profile/:userId' render={ ({ match }) =>
          <Profile
            currentUserId={currentUser.id}
            selectedUserId={+match.params.userId}
            updateCurrentUser={this.updateCurrentUser}
          />
        } />
      </main>
      </>
    )
  }
}

export default App
