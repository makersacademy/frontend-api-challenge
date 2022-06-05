const ChitterModel = require('./chitterModel')

describe('ChitterModel', () => {
  beforeEach(() => {
    model = new ChitterModel();
  });

  describe('getPeeps', () => {
    it('returns an empty array at first', () => {
      expect(model.getPeeps()).toEqual([]);
    });
  });
});

