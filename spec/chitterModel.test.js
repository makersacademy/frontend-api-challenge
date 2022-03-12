const ChitterModel = require('../lib/chitterModel');

describe('Chitter class', () => {
  let chitterModel;

  beforeEach( () => {
    chitterModel = new ChitterModel();
  });

  it('gets peeps', () => {
    expect(chitterModel.getPeeps()).toEqual([])
  });


  it('adds a peep', () => {
    chitterModel.addPeep('Buy milk');

    expect(chitterModel.getPeeps()).toEqual(['Buy milk']);
  });

  it('creates a list of peeps from the passed data', () => {

    const peepJSONArray = JSON.parse('[{"id": 3,"body": "my first peep :)"},{"id": 2,"body": "my second peep :)"}]')
    
    chitterModel.setPeeps(peepJSONArray);

    expect(chitterModel.getPeeps().length).toEqual(2);
    expect(chitterModel.getPeeps()[0].body).toEqual("my first peep :)");
  });

  it('removes a peep', () => {
    const peepJSONArray = JSON.parse('[{"id": 3,"body": "my first peep :)"},{"id": 2,"body": "my second peep :)"}]')

    chitterModel.setPeeps(peepJSONArray);
    chitterModel.removePeep(3)
    expect(chitterModel.getPeeps().length).toEqual(1);
    expect(chitterModel.getPeeps()[0].id).toEqual(2);
    

  });
})