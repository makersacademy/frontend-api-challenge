const ChitterModel = require('./chitterModel');

describe(ChitterModel,() => {
  it('adds and returns a session key',() => {
    const model = new ChitterModel();
    model.addSessionKey('valid_key');
    expect(model.sessionKey()).toEqual('valid_key');
  })

  it('adds and returns a user id for the session',() => {
    const model = new ChitterModel();
    model.addSessionID(23);
    expect(model.sessionID()).toEqual(23);
  })
})