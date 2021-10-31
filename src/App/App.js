import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'

import Gallery from '../Gallery/Gallery'
import Profile from '../Profile/Profile'
import Dashboard from '../Dashboard/Dashboard'

import userData from '../userData'

class App extends Component {
  state = {
    currentUser: {},
    users: []
  }

  componentDidMount() {
    // fetch
    this.setState({ currentUser: userData[1], users: userData })
  }

  addPlaydateForCurrentUser = (newPlaydate) => {
    const { appointments } = this.state.currentUser
    this.setState({ currentUser: {
      ...this.state.currentUser,
      appointments: [...appointments, newPlaydate]
    }})
  }

  // findUser = (users, userId) => {
  //   const selectedProfile = this.findUser(users, match.params.id,)
  //
  //   return users.find(user => user.id === userId);
  // }


// should PlaydateForm be a sibling of Profile?
  // ...if currentUser playdates need to be added to App state
  render() {
    const { currentUser, users } = this.state
    const filteredUsers = users.filter(user => user.id !== currentUser.id)
    return (
      <main>
        <Route path='/dashboard' render={ () =>
          <Dashboard />
        } />
        <Route path='/findfriends' render={ () =>
          <Gallery users={filteredUsers}/>
        } />
        <Route path='/profile/:userId' render={ ({ match }) =>
          <Profile userId={match.params.userId} addPlaydateForCurrentUser={this.addPlaydateForCurrentUser}/>
        } />
      </main>
    )
  }
}

export default App
