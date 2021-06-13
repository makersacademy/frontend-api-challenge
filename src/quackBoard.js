class QuackBoard {
  getQuacks () {
    return fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
      .then((response) => {
        return response.json()
      })
  }
}
