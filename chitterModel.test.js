const ChitterModel = require('./chitterModel');

describe('chitterModel', () => {
  const model = new ChitterModel();

  describe('#getChitters', () => {
    it('returns an empty array with no chitters', () => {
      expect(model.getChitters()).toEqual([]);
    })
  })
})


//  npm run build