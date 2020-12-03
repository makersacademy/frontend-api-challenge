import Session from '../models/session.js';

describe('Session', () => {
  let session;
  let userData;
  let container;

  beforeEach(() => {
    session = new Session()
    userData = {user_id: "1", session_key: "very_secret_key"}
    container = document.createElement("div");
    container.setAttribute('id', 'signed-in')
    document.body.appendChild(container);
  })

  it('Adds users name to html welcome message', () => {
    session.createSession(userData)
    expect(container.innerHTML).toEqual(`You're logged in. You can now post a peep!`)
  })
})