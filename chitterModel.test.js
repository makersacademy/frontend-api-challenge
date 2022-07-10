const ChitterModel = require('./chitterModel');

describe(ChitterModel,() => {
  it('adds a returns a session key',() => {
    const model = new ChitterModel();
    model.addSessionKey('valid_key');
    expect(model.sessionKey()).toEqual('valid_key');
  })
})