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
    this.setState({ users: userData })
  }

  render() {
    const { users } = this.state

    return (
      <main>

        <Route path='/findfriends' render={ () =>
          <Gallery users={users}/>
        } />
        <Route path='/profile/:userId' render={ ({ match }) =>
          console.log(match.params.id)
        } />
      </main>
    )
  }
}

export default App
