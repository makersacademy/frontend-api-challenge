const UserModel = require('../src/models/userModel');

describe('User model', () => {
  it('initially returns an empty user object', () => {
    const model = new UserModel();

    expect(model.getUser()).toEqual({});
  })

  it('sets a user object with user id and handle', () => {
    const model = new UserModel();
    
    model.setUser(1, 'maker');
    expect(model.getUser().id).toBe(1);
    expect(model.getUser().handle).toBe('maker');
  })

  it('initially returns an empty user session', () => {
    const model = new UserModel();

    expect(model.getSession()).toEqual({});
  })

  it('sets a user session with user id and session key', () => {
    const model = new UserModel();

    model.setSession(1, 'a_valid_session_key');
    expect(model.getSession().user_id).toBe(1);
    expect(model.getSession().session_key).toBe('a_valid_session_key');
  })
})