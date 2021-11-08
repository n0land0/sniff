import parksData from './parksData'

const fetchCalls = {
  getUsers() {
    return fetch('https://sniff-api.herokuapp.com/api/v1/users')
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error)
        return error.message
      })
  },

  getSingleUser(userId) {
    return fetch(`https://sniff-api.herokuapp.com/api/v1/users/${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error)
        return error.message
      })
  },

  getAppointments(userId) {
    return fetch(`https://sniff-api.herokuapp.com/api/v1/appointments/${userId}`)
      .then(response => {
        this.checkResponse(response)
        return response.json()
      })
      .catch(error => {
        console.error(error)
        return error.message
      })
  },

  getParks() {
    return parksData
    // return fetch('https://sniff-api.herokuapp.com/api/v1/parks')
    //   .then(response => {
    //     this.checkResponse(response)
    //     return response.json()
    //   })
    //   .catch(error => {
    //     console.error(error)
    //     return error.message
    //   })
  },

  postAppointment(newPlaydate) {
    return fetch('https://sniff-api.herokuapp.com/api/v1/appointments', {
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
    .catch(error => {
      console.error(error)
      return error.message
    })
  },

  deleteAppointment(appointmentId) {
    return fetch(`https://sniff-api.herokuapp.com/api/v1/appointments/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      this.checkResponse(response)
      return response.json()
    })
    .catch(error => {
      console.error(error)
      return error.message
    })
  },

  checkResponse(response) {
    if (!response.ok) {
      if (response.status === 422 || response.status === 403) {
        throw new Error('Sorry, we can\'t find an account with these credentials. Please try again.')
      } else if (response.status === 404) {
        throw new Error('The page you are looking for doesn\'t exist')
      } else if (response.status >= 500) {
        throw new Error('We\'re having issues on our end. Please try again later.')
      } else {
        throw new Error('Please check your network connection')
      }
    }
  }
}

export default fetchCalls
