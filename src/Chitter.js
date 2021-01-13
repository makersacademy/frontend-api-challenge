class Chitter {

  constructor(element, client) {
    this.element = element
    this.client = client
    this.userId
    this.sessionKey
  }

  renderHomePage() {
    let text =
      `<form id='sign-up' action="index.html" method="post">
      Sign-up
      <input id="handle" type="text" name="handle">
      <input id="password" type="text" name="password">
      <input type="submit" value="Submit">
      </form>
      <form id='sign-in' action="index.html" method="post">
      Sign-in
      <input type="text" name="username" id='sign-in-handle'>
      <input type="text" name="password" id='sign-in-password'>
      <input type="submit" value="Submit">
      </form>
      <a href="file:///Users/student/Makers/week8/frontend-api-challenge/src/index.html#peeps">View peeps</a>
      `
    this.element.innerHTML = text
  }

  renderSignUp() {
    let text =
      [`<div>Thanks for signing-up! Please log in</div>`,
      `<form id='sign-in' action="index.html" method="post">`,
      `Sign-in`,
      `<input type="text" name="username" id='sign-in-handle'>`,
      `<input type="text" name="password" id='sign-in-password'>`,
      `<input type="submit" value="Submit">`,
    `</form>`]
    this.element.innerHTML = text.join('')
  }

  renderLogIn() {
    let text =
      `<div>you have logged in! post a peep, like a peep or delete a peep</div>
      <form id='post-peep'>
      <input type="text" id ='peep' name="peep">
      <input type="submit" value="Post peep">
      </form>`
    this.element.innerHTML = text
  }

  renderPost() {
    let text = `
    <div>Thanks for posting a peep! You can click on the link below to view the last 50 peeps</div>
    <a href="file:///Users/student/Makers/week8/frontend-api-challenge/src/index.html#peeps">View peeps</a>
    `
    this.element.innerHTML = text
  }

  renderPeeps() {
    this.client.get("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((data) => {
        let text = [`<ul>`]
        let peeps = data.forEach(peep => text.push(`<li>${peep.body}</li>`))
        text.push(`</ul>`)
        this.element.innerHTML = peeps.join('')
      })
  }

  render() {
    this.client.get("https://chitter-backend-api-v2.herokuapp.com/peeps")
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

  showAllPeeps() {
    this.client.get("https://chitter-backend-api-v2.herokuapp.com/peeps")
      .then((data) => {
        let peeps = data.map(peep => peep.body)
        this.element.innerHTML = peeps.join('<br>')
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
