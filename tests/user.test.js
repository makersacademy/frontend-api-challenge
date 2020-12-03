import User from '../models/user.js';

describe('User', () => {
  let exampleUser;
  let userData;
  let container;

  beforeEach(() => {
    exampleUser = new User()
    userData = {handle: "newuser", password: "pword"}
    container = document.createElement("div");
    container.setAttribute('id', 'welcome')
    document.body.appendChild(container);
  })

  it('Adds users name to html welcome message', () => {
    exampleUser.createUser(userData)
    expect(container.innerHTML).toEqual("Welcome to Chitter, newuser. Sign in to post a peep!")
  })
})