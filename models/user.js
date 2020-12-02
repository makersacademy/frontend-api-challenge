export default class User {
  createUser(user) {
    var welcome = document.getElementById("welcome")
    welcome.innerHTML = `Welcome to Chitter, ${user.handle}. Sign in to post a peep!`
  }
}