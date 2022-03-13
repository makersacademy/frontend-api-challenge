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
    it('adds one peep to feed', () => {
      model.addPeep('Hello, world');

      expect(model.getPeeps().length).toBe(1);
      expect(model.getPeeps('Hello, world')).toEqual(['Hello, world']);
    });

    it('adds three peeps to the feed', () => {
      model.addPeep('Hello, world');
      model.addPeep('Its a sunny day!');
      model.addPeep('Plants are great :)')

      expect(model.getPeeps().length).toBe(3);
      expect(model.getPeeps()).toEqual(['Hello, world', 'Its a sunny day!', 'Plants are great :)']);
    });
  });


})