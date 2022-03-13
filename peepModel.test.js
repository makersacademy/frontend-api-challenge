/**
 * @jest-environment jsdom
 */

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
  });

  describe('#addPeep', () => {
    it('adds one peep to array', () => {
      model.addPeep('Hello, world');

      expect(model.getPeeps('Hello, world')).toEqual(['Hello, world']);
    });
  })
})