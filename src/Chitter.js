class Chitter {

  constructor(element, client) {
    this.element = element
    this.client = client
    this.userId
    this.sessionKey
    this.data
  }

  peeps() {
    return this.client.get("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((data) => {
        let text = [`<ul>`]
        let peeps = data.forEach(peep => text.push(
          `
          <li id="${peep.id}">${peep.body}
          <a href="file:///Users/student/Makers/week8/frontend-api-challenge/src/index.html#${peep.id}">
          Like peep</a>
          </li>
          `
        ))
        text.push(`</ul>`)
        this.element.innerHTML = text.join('')
      })
  }

  createNewUser(handle, password) {
    this.client.post("https://chitter-backend-api-v2.herokuapp.com/users", `{"user": {"handle":"${handle}", "password":"${password}"}}`)
  }

  loginUser(handle, password) {
    this.client.post("https://chitter-backend-api-v2.herokuapp.com/sessions", `{"session": {"handle":"${handle}", "password":"${password}"}}`)
      .then((data) => {
        this.userId = data.user_id
        this.sessionKey = data.session_key
      })
  }

  getSinglePeep(id) {
    return this.client.get(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`)
  }

  postPeep(body) {
    this.client.postPeep("https://chitter-backend-api-v2.herokuapp.com/peeps", this.sessionKey, this.userId, body)
    .then((response) => {
      console.log(response)
    })
  }

  deletePeep(id) {
    this.client.authorizedRequest(`https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`, this.sessionKey, 'DELETE')
  }

  likePeep(peepId) {
    this.client.authorizedRequest(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}/likes/${this.userId}`, this.sessionKey, 'PUT')
      .then((response) => {
        console.log(response)
      })
  }

  deleteLike(peepId) {
    this.client.authorizedRequest(`https://chitter-backend-api-v2.herokuapp.com/peeps/${peepId}/likes/${this.userId}`, this.sessionKey, 'DELETE')
  }
}
