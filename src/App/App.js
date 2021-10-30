import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css'

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

  findUser = (userId) => {
    return users.find(user => user.id === userId);
  }

  render() {
    const { users } = this.state

    return (
      <main>

        <Route path='/findfriends' render={ () =>
          <Gallery users={users}/>
        } />
        <Route path='/profile/:userId' render={ ({ match }) => {
          const selectedProfile = this.findUser(match.params.id)
          return <Profile {...selectedProfile}/>
        } }/>
      </main>
    )
  }
}

export default App
