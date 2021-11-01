const fetchCalls = {
  getUsers() {
    return fetch('url')
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .then(data => data.users)
      .catch(error => {
        console.error(error)
        return error.message
      })
  },

  getUser(userId) {
    return fetch(`http://localhost:3001/api/v1/users/${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
  },

  getDetailedAppointments(userId) {
    return fetch(`http://localhost:3001/api/v1/playdates${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
  },

  postAppointment(newPlaydate) {
    return fetch('http://localhost:3001/api/v1/playdates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlaydate)
    })
    .then(response => {
      this.checkResponse(response)
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
