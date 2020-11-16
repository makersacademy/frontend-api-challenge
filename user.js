export default class User {
  createUser(user) {
    var welcome = document.getElementById("welcome")
    if(welcome){
      welcome.innerHTML = `Welcome to Chitter, ${user.handle}`
    } else {
      var newWelcome = document.createElement('div')
      newWelcome.setAttribute("id", "welcome")
      newWelcome.innerHTML = `Welcome to Chitter, ${user.handle}`
      console.log(user)
      document.body.appendChild(newWelcome)
    }
  }
}