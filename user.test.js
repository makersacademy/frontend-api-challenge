import User from './user.js';

describe('User', () => {
  let exampleUser;
  let userData;
  beforeEach(() => {
    exampleUser = new User()
    userData = {handle: "newuser", password: "pword"}
  })

  it('Adds users name to html welcome message', () => {
    exampleUser.createUser(userData)
    var welcomediv = document.getElementById("welcome")
    expect(welcomediv.innerHTML).toEqual("Welcome to Chitter, newuser")
  })
})