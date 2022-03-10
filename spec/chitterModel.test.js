const ChitterModel = require('../lib/chitterModel');

describe('Chitter class', () => {
  let chitterModel;

  beforeEach( () => {
    chitterModel = new ChitterModel();
  });

  it('gets peeps', () => {
    expect(chitterModel.getPeeps()).toEqual([])
  });

  it('creates a list of peeps from the passed data', () => {

    let peepJSONArray = JSON.parse('[{"id": 3,"body": "my first peep :)"},{"id": 2,"body": "my second peep :)"}]')
    
    chitterModel.setPeeps(peepJSONArray);

    expect(chitterModel.getPeeps().length).toEqual(2);
    expect(chitterModel.getPeeps()[0].body).toEqual("my first peep :)");
  });

})