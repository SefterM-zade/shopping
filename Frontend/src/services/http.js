const { default: Axios } = require('axios')

class Http {
  constructor() {
    this.url = 'http://localhost:7070'
  }

  getInitialData = () => {
    return Axios.get(`${this.url}/init`)
  }

  authenticate = (username, password) => {
    return Axios.post(`${this.url}/authenticate`, {
      username: username,
      password: password,
    })
  }
}

export default new Http()
