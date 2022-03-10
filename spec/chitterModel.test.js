const ChitterModel = require('../lib/chitterModel');

describe('Chitter class', () => {
  let chitter;

  beforeEach( () => {
    chitter = new ChitterModel();
  });

  it('gets peeps', () => {
    expect(chitter.getPeeps()).toEqual([])
  });

  it('creates a list of peeps from the passed data', () => {

    let peepJSONArray = JSON.parse('[{"id": 3,"body": "my first peep :)"},{"id": 2,"body": "my second peep :)"}]')
    
    chitter.setPeeps(peepJSONArray);

    expect(chitter.getPeeps().length).toEqual(2);
    expect(chitter.getPeeps()[0].body).toEqual("my first peep :)");
  });

})