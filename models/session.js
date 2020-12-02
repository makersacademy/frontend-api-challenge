export default class Session {
  createSession(session) {
    var signedIn = document.getElementById('signed-in')
    signedIn.innerHTML = `You're logged in. You can now post a peep!`
  }
}
  