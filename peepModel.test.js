const PeepModel = require('./peepModel');

describe('PeepModel', () => {
  let model;
  beforeEach(() => {
    model = new PeepModel;
  });

  describe('#getPeeps', () => {
    it('returns an empty array on creation', () => {
      expect(model.getPeeps()).toEqual([]);
    });
  })
})