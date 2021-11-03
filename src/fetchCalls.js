const fetchCalls = {
  getUsers() {
    // return fetch('http://localhost:3001/api/v1/users')
    return fetch('https://sniff-api.herokuapp.com/api/v1/users')
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      // .then(data => data.users)
      .catch(error => {
        console.error(error)
        return error.message
      })
  },

  getSingleUser(userId) {
    // return fetch(`http://localhost:3001/api/v1/users/${userId}`)
    return fetch(`https://sniff-api.herokuapp.com/api/v1/users/${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
  },

  getDetailedAppointments(userId) {
    // return fetch(`http://localhost:3001/api/v1/playdates${userId}`)
    return fetch(`https://sniff-api.herokuapp.com/api/v1/playdates${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
  },

  postAppointment(newPlaydates) {
    // return fetch('http://localhost:3001/api/v1/playdates', {
    return fetch('https://sniff-api.herokuapp.com/api/v1/playdates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlaydates)
    })
    .then(response => {
      this.checkResponse(response)
      console.log(response)
      return response.json()
    })
  },

  checkResponse(response) {
    if (!response.ok) {
      if (response.status === 422 || response.status === 403) {
        throw new Error()
      } else if (response.status === 404) {
        throw new Error()
      } else if (response.status >= 500) {
        throw new Error()
      } else {
        throw new Error()
      }
    }
  }
}

export default fetchCalls
