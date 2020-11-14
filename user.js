export default class User {
  createUser(user) {
    let welcomeDiv = document.getElementById("welcome")
    welcomeDiv.innerHTML = `Welcome to Chitter, ${user.handle}`
  }
}