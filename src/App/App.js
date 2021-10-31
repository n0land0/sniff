import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'
import Profile from '../Profile/Profile'

import Gallery from '../Gallery/Gallery'

import userData from '../userData'

class App extends React.Component {
  state = {
    currentUser: {},
    users: []
  }

  componentDidMount() {
    // fetch
    this.setState({ currentUser: userData[1], users: userData })
  }

  // addPlaydateForCurrentUser = (newPlaydate) => {
  //   const { appointments } = this.state.currentUser
  //   this.setState({ currentUser: {
  //     ...currentUser,
  //     appointments: [...appointments, newPlaydate]
  //   }})
  // }

  // findUser = (users, userId) => {
  //   const selectedProfile = this.findUser(users, match.params.id,)
  //
  //   return users.find(user => user.id === userId);
  // }

  render() {
    const { currentUser, users } = this.state
    const filteredUsers = users.filter(user => user.id !== currentUser.id)
    return (
      <main>

        <Route path='/findfriends' render={ () =>
          <Gallery users={filteredUsers}/>
        } />
        <Route path='/profile/:userId' render={ ({ match }) =>
          <Profile id={match.params.userId}/>
        } />
      </main>
    )
  }
}

export default App
