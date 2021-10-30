import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

import Gallery from '../Gallery/Gallery'

import userData from '../userData'

class App extends React.Component {
  state = {
    users: userData
  }

  // componentDidMount() {
  //   this.setState({ users: userData })
  // }

  render() {
    const { users } = this.state

    return (
      <main>

        <Route path='/findfriends' render={ () =>
          <Gallery users={users}/>
        } />
      </main>
    )
  }
}

export default App
