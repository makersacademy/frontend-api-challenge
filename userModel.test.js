const UserModel = require('./userModel');

describe('UserModel', () => {

  beforeEach(() => {
    user = new UserModel();
  });

  it('gets user id', () => {
    user.setUserId(1);
    expect(user.getUserId()).toBe(1);
  });

  it('gets user handle', () => {
    user.setHandle('john');
    expect(user.getHandle()).toBe('john');
  });

  it('gets session key', () => {
    user.setSessionKey('2e43k');
    expect(user.getSessionKey()).toBe('2e43k');
  });

});