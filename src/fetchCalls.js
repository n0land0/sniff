const fetchCalls = {
  getUsers = () => {
    return fetch('url')
      .then(response => {
        this.checkResponse()
        return response.json()
      })
      .then(data => data.users)
      .catch(error => {
        console.error(error)
        return error.message
      })
  },

  checkResponse = () => {
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
