import React from 'react'
import { Route, Switch, Link, Redirect } from 'react-router-dom'

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <main>

        <Route path='/findfriends' render={ () => <Gallery />} />
      </main>
    )
  }
}

export default App
