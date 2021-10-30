import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'
import Profile from '../Profile/Profile'

import Gallery from '../Gallery/Gallery'

import userData from '../userData'

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    // fetch
    this.setState({ users: userData })
  }

  // findUser = (users, userId) => {
  //   const selectedProfile = this.findUser(users, match.params.id,)
  //
  //   return users.find(user => user.id === userId);
  // }

  render() {
    const { users } = this.state

    return (
      <main>

        <Route path='/findfriends' render={ () =>
          <Gallery users={users}/>
        } />
        <Route path='/profile/:userId' render={ ({ match }) =>
          <Profile id={match.params.userId}/>
        } />
      </main>
    )
  }
}

export default App
